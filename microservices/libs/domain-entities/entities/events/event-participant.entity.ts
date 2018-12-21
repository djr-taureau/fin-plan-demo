import { ParticipationStatus } from "./participation-status";

export type Participant = {
  guid?: string;
  name: string;
  email: string;
};

export class EventParticipant {
  participationId: Participant;
}

export class EventParticipation {
  participationId: Participant
  participationStatus: ParticipationStatus;
}


/**
 * 
 * "participants": [
    {
      "participationId": {
        "guid": "d56b433e-f36b-1410-856c-0044de457928"
      }
    },
    {
      "participationId": {
        "name": "John",
        "email": "john@example.com"
      }
    },
    {
      "participationId": {
        "email": "jen@example.com"
      }
    }
  ],
 * 
 * 
 */