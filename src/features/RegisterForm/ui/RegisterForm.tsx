import { FormProvider, useFieldArray, useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

import styles from './RegisterForm.module.css'
import { formHandler } from 'shared/lib'
import { type TFormValues, ConfirmPasswordItem, EmailItem, INITIAL_VALUES, PasswordItem, SocialLinkItem, UserNameItem, validationSchema } from 'entities/RegisterForm'

export const RegisterForm = () => {
  const form = useForm<TFormValues>({
        defaultValues: INITIAL_VALUES,
        mode: 'onChange',
        resolver: zodResolver(validationSchema),
    })

    const { handleSubmit, formState: { errors, isSubmitting }, register, control } = form

    const { fields, append, remove } = useFieldArray<TFormValues, 'socialLinks'>({ control, name: 'socialLinks' })

    const onSubmit: SubmitHandler<TFormValues> = async (data) => {
      try {
        await formHandler(data)
        toast.success('Форма отправлена')
      } catch (error) {
        toast.error(`Ошибка: ${error instanceof Error ? error.message : String(error)}`)
      }
    }

  return (
    <FormProvider {...form}>
    <div className={styles.wrapper}>

      <h3 className={styles.title}>Регистрация пользователя</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <UserNameItem userNameError={errors.userName} register={register} />
        <EmailItem emailError={errors.email} register={register} />
        <PasswordItem passwordError={errors.password} register={register} />
        <ConfirmPasswordItem confirmPasswordError={errors.confirmPassword} register={register} />

        <div className={styles.socialLinksSection}>
          <span className={styles.formLabel}>Ссылка на соцсеть</span>
          {fields.map((field, index) => (
              <SocialLinkItem
                key={field.id}
                index={index}
                SocialLinkError={errors.socialLinks?.[index]?.value}
                register={register}
                onRemoveSocialLinkItem={() => remove(index)}
                showRemoveButton={fields.length > 1}
              />
            ))}
          <button
              type="button"
              onClick={() => append({ value: '' })}
              className={styles.addButton}
            >
              + Добавить ссылку
            </button>
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit" disabled={isSubmitting}>Отправить</button>
        </div>
      </form>
    </div>
  </FormProvider>
  )
}