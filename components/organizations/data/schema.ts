import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const organizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
