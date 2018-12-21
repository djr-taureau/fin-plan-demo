import { union, toPairs, filter, match, uniq, reduce } from "ramda";
import { filterTreePair } from "../function-utilities/object"
import { EntityContext, EntityScope } from '../domain-entities/common';
import { errorResponse } from "../function-utilities/format-responses";

//Services
import {
  BillingAccountsService
} from '../services/billing-accounts.service'
import {
  FirmService
} from '../services/firm.service'
import {
  TeamMemberService
} from '../services/team-member.service'

export class AudienceService  {
  private billingAccountsService = new BillingAccountsService();
  private firmService = new FirmService();
  private teamMemberService = new TeamMemberService();

  /**
   *  
   * @param entityContext
   * @returns Array<string> of guids in audience 
   */
  async getAudience(entityContext:EntityContext) {
    const entityScope:EntityScope = entityContext.scope;
    const entity:string = entityContext.entity;
    try {

      switch(entityScope) {
        case EntityScope.Account:
          const billingAccountsAudience = await this.billingAccountsService.getBillingAccount( //2
            {
              guid: entity
            }
          )
          return filterTreePair('owner', 'guid', billingAccountsAudience);
        
        case EntityScope.Client:
          
          //Query Teammembers attacheted to firmClient
          const clientTeam = await this.teamMemberService.getEntityTeamMembersFull({ //3
            entityGuid: entity
          });

          const teamClientAudience = filterTreePair('user', 'guid', clientTeam);


          //Query the client account from the firm client and return account owner and client members
          const client = await this.firmService.getFirmClientMembers(
            { 
              guid: entity
            }
          );

          const clientAccountAudience = filterTreePair('owner', 'guid', client);
          const clientMembersAudience = filterTreePair('user', 'guid', client);
          
          //Combine the two arrays and return
          const clientAudience = union(union(clientAccountAudience, clientMembersAudience), teamClientAudience);

          return clientAudience;

        case EntityScope.Firm:

        //Query firm with Firm staff
          const firm = await this.firmService.getFirmStaff({
            guid: entity
          });

          return filterTreePair('user', 'guid', firm);

        case EntityScope.Team:

          //Query Teammembers attacheted to entity
          const team = await this.teamMemberService.getEntityTeamMembersFull({ //3
            entityGuid: entity
          });
          
          return filterTreePair('user', 'guid', team);

        case EntityScope.User:
        default:
          return [
            `${entity}`
          ];
      }

    } catch(e) {
      return errorResponse(e);
    }
  }
}