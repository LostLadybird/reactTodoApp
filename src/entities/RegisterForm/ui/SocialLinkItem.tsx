import type { FC } from "react"
import type { FieldError, UseFormRegister } from "react-hook-form"
import type { TFormValues } from "../model"
import styles from '../RegisterForm.module.css'

interface ISocialLinkItemItemProps {
  SocialLinkError: FieldError | undefined
  index: number
  showRemoveButton: boolean
  register: UseFormRegister<TFormValues>
  onRemoveSocialLinkItem: () => void
}

export const SocialLinkItem: FC<ISocialLinkItemItemProps> = ({ SocialLinkError, index, showRemoveButton, register, onRemoveSocialLinkItem }) => {
    return (
    <div className={styles.formItem}>
      <input type='url' className={SocialLinkError ? styles.formInputError : styles.formInput} {...register((`socialLinks.${index}.value` as const))} />
      {SocialLinkError && (
        <span className={styles.errorText}>{SocialLinkError.message}</span>
      )}
      {showRemoveButton && (
          <button
            type="button"
            onClick={onRemoveSocialLinkItem}
            className={styles.removeButton}
          >
            Удалить
          </button>
        )}
    </div>
  )
}