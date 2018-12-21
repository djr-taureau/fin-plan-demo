import { getCustomRepository } from 'typeorm';
import { TemplatesRepository } from '../repositories';
import { hydrateTemplate } from '../function-utilities'

//Services
import { ContentService } from './content.service';

//Types Interfaces
import {ApplicationContext, SystemContentType} from './common';

const contentService = new ContentService();

export class TemplatesService {
	private repo = getCustomRepository(TemplatesRepository);

    // async getTemplates(params) {
    //     return await this.repo.query(params);
    // }

    
    /**
     * Uses ContentService to getTemplates from blob storage and hydrates with data
     * 
     * @param applicationContext 
     * @param entityContext 
     * @param template virtual path + filename.ext in blob storage
     */
    private async getTemplate(
        applicationContext:ApplicationContext,
        template:string,
        templateData?: object
    ) {
       const rawTemplate = await contentService.getContent(
            applicationContext, 
            template, 
            SystemContentType.Template
        );

        if(templateData) {
            return hydrateTemplate(rawTemplate.content, templateData);
        } else {
            return rawTemplate.content;
        }
        
    }


    /**
     * 
     * @param template virtual path + filename.ext in blob storage
     */
    async getSystemTemplate(template:string, templateData?:object) {
        return await this.getTemplate(
            ApplicationContext.System,
            template,
            templateData
        )
    }

}