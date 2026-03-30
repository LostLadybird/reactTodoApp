import { Box, Typography } from "@mui/material"
import { SignInForm } from "features/signInForm"

export const LoginPage = () => {
  return (
    <Box>
      <Typography>Log in</Typography>
      <SignInForm />
    </Box>
  )
}