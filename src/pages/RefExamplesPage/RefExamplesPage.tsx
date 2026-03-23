import { Box } from "@mui/material"
import { ClickTimer, FocusTracker, PreviousInput } from "features/refExamples"

export const RefExamplesPage = () => {
  return (
    <Box>
      <ClickTimer />
      <PreviousInput />
      <FocusTracker />
    </Box>
  )
}