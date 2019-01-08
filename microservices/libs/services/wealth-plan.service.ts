import { append, reduce, filter } from 'ramda';
import { ApplicationContext, SystemContentType, BlobMetadata } from "./common";
import { ValueType } from '../domain-entities/common'
import { errorResponse } from '../function-utilities/format-responses';

//Services
import { ContentService } from "./content.service";
import { EventGridService } from './event-grid.service';

export interface WealthPlanVariable {
  name: "string",
  valueType: ValueType
}

export interface WealthPlanSection {
  name: string,
  description: string,
  referenceId: string,
  position?: number,
  variables?: Array<WealthPlanVariable>,
  children?: Array<WealthPlanSection>
}

export interface WealthPlan {
  metadata: BlobMetadata,
  content: Array<WealthPlanSection>
}

export class WealthPlanService {
  private contentService = new ContentService;
  private eventGridService = new EventGridService();

  private async getWealthPlanTemplate(applicationContext:ApplicationContext, templateName:string, entityGuid?:string) {
    return await this.contentService.getContent(
      applicationContext,
      `wealth-plans/${templateName}`,
      SystemContentType.Template,
      entityGuid
    );
  }

  private async getWealthPlan(applicationContext:ApplicationContext, templateName:string, entityGuid?:string) {
    return await this.contentService.getContent(
      applicationContext,
      templateName,
      SystemContentType.WealthPlans,
      entityGuid
    );
  }

  private async saveWealthPlan(applicationContext:ApplicationContext, templateName:string, content:WealthPlan, entityGuid?:string) {
    return await this.contentService.saveContent(
      applicationContext,
      templateName,
      SystemContentType.WealthPlans,
      content,
      {
        "content-type": "application/json"
      },
      entityGuid
    )
  }

  //Return Array of All System WealthPlans not Processed
  async listSystemWealthPlans() {
    const rawWealthPlans = await this.contentService.listContent(
      ApplicationContext.System,
      SystemContentType.WealthPlans,
    );

    return rawWealthPlans;
  }

  /**
   * 
   * @param entityGuid 
   * @param fromSystemTemplate defaults to Lifeworks (Simple)
   */
  async createFirmClientWealthPlan(entityGuid:string, name?: string, fromSystemTemplate?:string) {
    const defaultSystemTemplate:string = "Lifeworks (Simple).json";
    const defaultCopyName:string = "Lifeworks (Simple) Copy.json";

    const copyFrom = await this.getWealthPlanTemplate(
      ApplicationContext.System,
      (fromSystemTemplate !== undefined && fromSystemTemplate !== '') ? fromSystemTemplate : defaultSystemTemplate,
      SystemContentType.Template
    );

    let copyName;
    if(name !== undefined && name !== '') {
      copyName = name;
    } else if(fromSystemTemplate !== undefined && fromSystemTemplate !== '') {
      copyName = fromSystemTemplate;
    } else {
      copyName = defaultCopyName;
    }

    return await this.saveWealthPlan(
      ApplicationContext.FirmClient,
      copyName,
      copyFrom.content,
      entityGuid
    );
  }

  
  /**
   * 
   * @param entityGuid guid of firmClient
   * @param wealthPlanName name of the plan to add sections to
   * @param sections array of WealthPlanSection
   */
  async addWealthPlanSections(entityGuid:string, wealthPlanName:string, sections:Array<WealthPlanSection>) {

    const currentWealthPlan = await this.getWealthPlan(
      ApplicationContext.FirmClient,
      wealthPlanName,
      entityGuid
    );

    const updatedWealthPlanSections = reduce(
      (acc, item) => {
        const currentWealthPlan = acc;
        currentWealthPlan.content = append(item, currentWealthPlan.content);
        return currentWealthPlan;
      },
      currentWealthPlan as any,
      sections as any
    );

    return await this.saveWealthPlan(
      ApplicationContext.FirmClient,
      wealthPlanName,
      updatedWealthPlanSections,
      entityGuid
    );

  }

  async removeWealthPlanSections(entityGuid:string, wealthPlanName:string, sections:Array<string>) {
    const currentWealthPlan = await this.getWealthPlan(
      ApplicationContext.FirmClient,
      wealthPlanName,
      entityGuid
    );

    const updatedWealthPlanSections = reduce(
      (acc, item) => {
        const currentWealthPlan = acc;
        currentWealthPlan.content = filter(n => n['name'] !== item, currentWealthPlan.content);
        return currentWealthPlan;
      },
      currentWealthPlan,
      sections
    );
    
    return await this.saveWealthPlan(
      ApplicationContext.FirmClient,
      wealthPlanName,
      updatedWealthPlanSections,
      entityGuid
    );
  } 


  //EventGrid Trigger
  async WealthPlanEmitEvent() {

  }



}