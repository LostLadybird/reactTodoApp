import { Box, Input, Typography } from "@mui/material"
import { useEffect, useRef, useState, type ChangeEvent } from "react"

export const PreviousInput = () => {
  const [currentValue, setCurrentValue] = useState<string>('')
  const ref = useRef<string | null>(null)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setCurrentValue(event.target.value)

  useEffect(() => {
    ref.current = currentValue
  }, [currentValue])

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" component="div">Previous Input</Typography>
      <Input onChange={onChange} />
      <Typography variant="h6" component="div">Предыдущее значение: {ref.current}</Typography>
    </Box>
  )
}