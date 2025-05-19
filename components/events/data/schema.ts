import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const orgEventSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  status: z.string(),
  organizationId: z.string().optional(),
  organization: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
  }).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type OrgEvent = z.infer<typeof orgEventSchema>
