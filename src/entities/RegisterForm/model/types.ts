import type z from "zod"
import type { validationSchema } from "./validationSchema"

export type TFormValues = z.infer<typeof validationSchema>