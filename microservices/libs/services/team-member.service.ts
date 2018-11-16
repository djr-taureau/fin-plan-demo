import { getCustomRepository } from 'typeorm';
import { reduce, merge, append, is } from "ramda";
import { insertExtensions } from "../function-utilities"
import { 
  TeamMemberRepository,
  SystemRoleRepository,
  FirmStaffRepository } from '../repositories';

const formTeam = (acc, item) => {
  const member = {
    guid: item.member.guid,
    displayName: item.member.user.displayName,
    firmTitle: item.member.firmTitle
  }

  const contactInfo = insertExtensions({}, item.member.user.profile.attributes, { convertValueType: false });

  const values = merge(member, contactInfo);
  
  return append(values, acc);

}

export class TeamMemberService {

  private teamMemberRepo = getCustomRepository(TeamMemberRepository);
  private firmStaffRepo = getCustomRepository(FirmStaffRepository);
  private systemRolesRepo = getCustomRepository(SystemRoleRepository);

  async addTeamMember(params) {
    const firmStaff = await this.firmStaffRepo.getById(params.memberGuid);
    return await this.teamMemberRepo.create(firmStaff, params);
  }
  
  async getEntityTeamMembers(params) {
    const clientTeam = await this.teamMemberRepo.get(params);
    return reduce(formTeam, [], clientTeam);
  }

  async removeTeamMember(params) {
    return await this.teamMemberRepo.delete(params);
  }

  async addTeamMemberRoles(member: string, roles: Array<string> | string) {
    let roleIds;
    if(is(Array, roles)) {
      roleIds = roles;
    } else {
      roleIds = [`${roles}`];
    }

    const theRoles = await this.systemRolesRepo.getByIds(roleIds);

    return await this.teamMemberRepo.updateRoles(member, theRoles);
  }

  async removeTeamMemberRoles(member: string, roles: Array<string> | string) {
    let roleIds;
    if(is(Array, roles)) {
      roleIds = roles;
    } else {
      roleIds = [`${roles}`];
    }

    const theRoles = await this.systemRolesRepo.getByIds(roleIds);

    return await this.teamMemberRepo.removeRoles(member, theRoles);
  }

}
