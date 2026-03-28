import z from "zod"

export const authValidationSchema = z.object({
  email: z
    .string()
    .min(1, 'Email обязателен')
    .refine((value) => value.includes('@'), {
      message: 'Email должен содержать символ @',
    }),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
})