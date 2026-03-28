import type z from "zod"
import type { authValidationSchema } from "./validationSchema"

export type TAuthFormValues = z.infer<typeof authValidationSchema>