import z from "zod"

export const validationSchema = z.object({
  userName: z.string().min(1, 'Имя обязательно'),
  email: z
    .string()
    .min(1, 'Email обязателен')
    .refine((value) => value.includes('@'), {
      message: 'Email должен содержать символ @',
    }),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
  confirmPassword: z.string().min(1, 'Подтвердите пароль'),
  socialLinks: z
  .array(z.object({ value: z.url({ message: 'Некорректный URL' }).or(z.literal('')) })).optional(),
})
  .refine((data) => data.password === data.confirmPassword, {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
  })