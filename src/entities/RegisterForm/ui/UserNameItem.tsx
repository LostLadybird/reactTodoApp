import type { FC } from 'react'
import styles from '../RegisterForm.module.css'
import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { TFormValues } from '../model'

interface IUserNameItemProps {
  userNameError: FieldError | undefined
  register: UseFormRegister<TFormValues>
}

export const UserNameItem: FC<IUserNameItemProps> = ({ userNameError, register }) => {
  return (
    <div className={styles.formItem}>
      <span className={styles.formLabel}>Имя пользователя</span>
      <input type='text' className={userNameError ? styles.formInputError : styles.formInput} {...register('userName')} />
      {userNameError && (
        <span className={styles.errorText}>{userNameError.message}</span>
      )}
    </div>
  )
}