export const subscribeAction = async (
  _prevState: { error?: string; success?: boolean },
  formData: FormData
): Promise<{ error?: string; success?: boolean }> => {
const email = formData.get("email")?.toString().trim()

  if (!email) {
    return { error: "Email обязателен" }
  }

  if (!email.includes("@")) {
    return { error: "Некорректный email" }
  }

  await new Promise((resolve) => setTimeout(resolve, 1500))

  return { success: true, error: undefined }
}