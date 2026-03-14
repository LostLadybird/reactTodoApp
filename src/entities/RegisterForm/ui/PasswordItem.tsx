import type { FC } from 'react'
import type { TFormValues } from '../model'
import styles from '../RegisterForm.module.css'
import type { FieldError, UseFormRegister } from 'react-hook-form'

interface IPasswordItemProps {
  passwordError: FieldError | undefined
  register: UseFormRegister<TFormValues>
}

export const PasswordItem: FC<IPasswordItemProps> = ({ passwordError, register }) => {
  return (
    <div className={styles.formItem}>
      <span className={styles.formLabel}>Пароль</span>
      <input type='password' className={passwordError ? styles.formInputError : styles.formInput} {...register('password')} />
      {passwordError && (
        <span className={styles.errorText}>{passwordError.message}</span>
      )}
    </div>
  )
}