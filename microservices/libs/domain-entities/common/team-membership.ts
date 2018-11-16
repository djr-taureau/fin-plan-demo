import { TrackedBaseEntity, MembershipType } from "./";
import { SystemRole } from '../entities'

export abstract class TeamMembership<T> extends TrackedBaseEntity {
  abstract member: T;
  abstract membershipType: MembershipType;
  abstract claims?: SystemRole[];
}