import { EventCategory } from "../../domain-entities";

export interface EventParticapant {
  firstName: string,
  lastName: string,
  email: string
}

export interface EventData {
  startTime: Date,
  duration: number, //seconds
  title: string,
  description?: string,
  location?: string,
  url?: string,
  category?: EventCategory,
  organizer: EventParticapant
  attendees?: Array<EventParticapant>
}