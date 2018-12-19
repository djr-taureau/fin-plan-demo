import { getCustomRepository } from "typeorm";
import { FirmClientRepository, FirmRepository } from "../repositories";

export class FirmService {
  private firmClientRepo = getCustomRepository(FirmClientRepository);
  private firmRepo = getCustomRepository(FirmRepository)

  async getFirmClient(params) {
    return await this.firmClientRepo.getFirmClient(params.guid, {excludeFirmClientMembers: true});
  }

  /**
   * Pass in object with firmClientGuid to get client-account data and client-members data
   * 
   * @param params object: must contain a guid property for the firmClient
   */
  async getFirmClientMembers(params) {
    return await this.firmClientRepo.getFirmClient(params.guid);
  }

  /**
   * Get the Staff from a firm guid
   * 
   * @param params object: must contain a guid property for the firm
   */
  async getFirmStaff(params) {
    return await this.firmRepo.getFirm(params.guid, { 
      excludeFirmBillingAccount: true,
      excludeFirmClients: true
    });
  }
}