import { Activity, useActionState, useEffect, useState } from "react"
import { subscribeAction } from "shared/lib"
import styles from './SubscribeWidget.module.css'

export const SubscribeWidget = () => {
  const [subscribeStep, setSubscribeStep] = useState<1 | 2>(1)
  const [email, setEmail] = useState("")
  const [state, formAction, isPending] = useActionState(subscribeAction, {
  error: undefined,
  success: false,
})

useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  if (state.success && subscribeStep === 1) setSubscribeStep(2)
  }, [state.success, subscribeStep])

return (
  <>
  <Activity mode={subscribeStep === 1 ? 'visible' : 'hidden'}>
      <div className={styles.wrapper}>
        <h2 className={styles.subscribeHeader}>Шаг 1. Подписка на рассылку</h2>
        <p className={styles.subscribeText}>Введите ваш email</p>

        <form action={formAction}>
          <div className={styles.emailItem}>
            <label htmlFor="email" className={styles.emailLabel}>Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              disabled={isPending}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              required
            />
          </div>

          {state.error && <div className={styles.emailInputError}>{state.error}</div>}

          <button
            type="submit"
            disabled={isPending}
            className={styles.submitButton}
          >
            {isPending ? "Отправка..." : "Продолжить →"}
          </button>
        </form>
      </div>
  </Activity>

  <Activity mode={subscribeStep === 2 ? 'visible' : 'hidden'}>
    <div className={styles.wrapper}>
      <h2 className={styles.subscribeHeader}>Шаг 2. Готово!</h2>

      {isPending ? (
        <p className={styles.subscribeText}>Завершаем подписку...</p>
      ) : state.success ? (
        <div className={styles.subscribeSuccessWrapper}>
          <h3>Спасибо за подписку!</h3>
          <p>На почту <strong>{email}</strong> отправлено письмо с подтверждением.</p>
          <p>Проверьте, пожалуйста, папку «Входящие» и «Спам».</p>
        </div>
      ) : (
        <div className={styles.errorText}>
          Что-то пошло не так. Попробуйте ещё раз.
        </div>
      )}
    </div>
  </Activity>
  </>
)
}