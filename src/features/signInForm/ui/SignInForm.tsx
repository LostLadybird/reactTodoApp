import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, TextField } from "@mui/material"
import { authValidationSchema, INITIAL_AUTH_VALUES, usePostLoginUserMutation, type IPostLoginApiArg, type TAuthFormValues } from "entities/authorization"
import { Controller, FormProvider, useForm, type SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { useAuth } from "shared/lib/useAuth"

export const SignInForm = () => {
  const [postUser] = usePostLoginUserMutation()

  const navigate = useNavigate()
  const { login } = useAuth()

  const form = useForm<TAuthFormValues>({
    defaultValues: INITIAL_AUTH_VALUES,
    mode: 'onChange',
    resolver: zodResolver(authValidationSchema),
  })

  const { handleSubmit, formState: { errors, isSubmitting, isValid }, control } = form

  const onSubmit: SubmitHandler<TAuthFormValues> = async (data: IPostLoginApiArg) => {
    try {
      const result = await postUser(data).unwrap()

      if (result) {
        login({ token: result?.accessToken, email: result?.user?.email })

        navigate('/profile')
      }
    } catch (error) {
      toast.error(`Ошибка: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  return (
    <FormProvider {...form}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              label="Email"
              sx={{ mb: 2 }}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
              label="Пароль"
              sx={{ mb: 2 }}
            />
          )}
        />
        <Button loading={isSubmitting} disabled={isSubmitting && !isValid} type="submit" variant="contained">Войти</Button>
      </Box>
    </FormProvider>
  )
}