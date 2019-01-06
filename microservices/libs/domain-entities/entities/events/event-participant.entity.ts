import { ParticipationStatus } from "./participation-status";

export class Participant {
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
        "name": "Jeff",
        "email": "jeff@example.com"
      }
    },
    {
      "participationId": {
        "guid": "d56b433e-f36b-1410-856c-0044de457928"
        "name": "John",
        "email": "john@example.com"
      }
    },
    {
      "participationId": {
        "name": "Jen",
        "email": "jen@example.com"
      }
    }
  ],
 *
 *
 */
