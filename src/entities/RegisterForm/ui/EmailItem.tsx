import type { FC } from 'react'
import type { TFormValues } from '../model'
import styles from '../RegisterForm.module.css'
import type { FieldError, UseFormRegister } from 'react-hook-form'

interface IEmailItemProps {
  emailError: FieldError | undefined
  register: UseFormRegister<TFormValues>
}

export const EmailItem: FC<IEmailItemProps> = ({ emailError, register }) => {
  return (
    <div className={styles.formItem}>
      <span className={styles.formLabel}>Email</span>
      <input type='email' className={emailError ? styles.formInputError : styles.formInput} {...register('email')} />
      {emailError && (
        <span className={styles.errorText}>{emailError.message}</span>
      )}
    </div>
  )
}