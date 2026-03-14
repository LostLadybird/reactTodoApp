import { RegisterForm } from "features/RegisterForm"
import { SubscribeWidget } from "widgets/SubscribeWidget"
import styles from './RegisterPage.module.css'

export const RegisterPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <aside className={styles.sidebar}>
        <SubscribeWidget />
      </aside>

      <main className={styles.mainContent}>
        <RegisterForm />
      </main>
    </div>
  )
}