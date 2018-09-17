import { Entity, OneToOne, ManyToOne, JoinColumn, Column } from 'typeorm';
import { TrackedBaseEntity } from '../../common';
import { ClientAccount } from '../clients';
import { FirmClientStatus } from './firm-client-status';
import { Firm } from './firm.entity';

@Entity('firm-clients')
export class FirmClient extends TrackedBaseEntity {

	@ManyToOne(type => Firm)
	firm: Firm;

	@ManyToOne(type => ClientAccount)
	client: ClientAccount;

	@Column() status: FirmClientStatus;
}
