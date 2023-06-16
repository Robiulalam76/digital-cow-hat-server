/* eslint-disable consistent-type-definitions */
import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is Required',
    }),
    password: z.string().optional(),
  }),
})

export default createZodSchema
