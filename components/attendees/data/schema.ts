import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const attendeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  status: z.string(),
})

export type Attendee = z.infer<typeof attendeeSchema>
