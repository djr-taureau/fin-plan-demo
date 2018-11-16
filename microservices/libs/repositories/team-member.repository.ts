import { AbstractRepository, EntityRepository, FindManyOptions, FindOneOptions } from 'typeorm';
import { difference } from "ramda";
import { 
  TeamMember,
  FirmStaff,
  SystemRole } from "../domain-entities";
import { CommonDeleteQueryOptions, GetTeamMemberQueryOptions, CreateTeamMemberQueryOptions, UpdateTeamMemberQueryOptions, basicError } from "./common";

@EntityRepository(TeamMember)
export class TeamMemberRepository extends AbstractRepository<TeamMember> {

  async create(firmStaff: FirmStaff, options: CreateTeamMemberQueryOptions, systemRoles?: Array<SystemRole>) {
    try {
      const teamMember = new TeamMember();
      teamMember.member = firmStaff;
      teamMember.entityGuid = options.entityGuid;
      teamMember.membershipType = options.membershipType;

      if(systemRoles) {
        teamMember.claims = systemRoles;
      }

      return await this.repository.save(teamMember);


    } catch(err) {
      basicError(err);
    }
  }

  async delete(options: CommonDeleteQueryOptions) {
    try {
      return this.repository.delete(options);
    } catch(err) {
      basicError(err);
    }
    
  }

  async update(teamMemberGuid: string, options: UpdateTeamMemberQueryOptions) {
    try {
      return this.repository.update(teamMemberGuid, options);
    } catch(err) {
      basicError(err);
    }
  }

  async updateRoles(teamMemberGuid: string, roles: Array<SystemRole>) {
    try {
      const teamMember = await this.repository.findOne(teamMemberGuid);
      teamMember.claims = roles;
      return this.repository.save(teamMember);
    } catch(err) {
      basicError(err);
    }
  }

  async removeRoles(teamMemberGuid: string, roles: Array<SystemRole>) {
    const query: FindOneOptions = {
      where: {
        guid: teamMemberGuid
      },
      relations: ['claims']
    }
    try {
      const teamMember = await this.repository.findOne(query);
      const newRoles = difference(teamMember.claims, roles);
      teamMember.claims = newRoles;
      return this.repository.save(teamMember);
    } catch(err) {
      basicError(err);
    }
  }

  async get(options: GetTeamMemberQueryOptions) {
    const query: FindManyOptions = {
      where: {
        entityGuid: options.entityGuid
      },
      relations: ['member', 'member.user', 'member.user.profile', 'member.user.profile.attributes']
    }
    try {
      return await this.repository.find(query);
    } catch(err) {
      basicError(err);
    }
  }
}