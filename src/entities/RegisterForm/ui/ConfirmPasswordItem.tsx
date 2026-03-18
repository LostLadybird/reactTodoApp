import type { FC } from 'react'
import type { TFormValues } from '../model'
import styles from '../RegisterForm.module.css'
import type { FieldError, UseFormRegister } from 'react-hook-form'

interface IConfirmPasswordItemProps {
  confirmPasswordError: FieldError | undefined
  register: UseFormRegister<TFormValues>
}

export const ConfirmPasswordItem: FC<IConfirmPasswordItemProps> = ({ confirmPasswordError, register }) => {
  return (
    <div className={styles.formItem}>
      <span className={styles.formLabel}>Подтвердить пароль</span>
      <input type='password' className={confirmPasswordError ? styles.formInputError : styles.formInput} {...register('confirmPassword')} />
      {confirmPasswordError && (
        <span className={styles.errorText}>{confirmPasswordError.message}</span>
      )}
    </div>
  )
}