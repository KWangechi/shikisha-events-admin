export interface Organization {
  id: string
  name: string
  slug: string
  created_at?: Date
  updated_at?: Date
}

export interface Event {
  id: number
  title: string
  description?: string
  venue: string
  date: Date
  price: number
  max_attendees: number
  organization_id?: number
  organization?: Organization
  created_at?: Date
  updated_at?: Date
}

export interface Attendee {
  id: string
  name: string
  phone: string
  event?: Event
  created_at?: Date
  updated_at?: Date
}
