import { Box, Button, Input, Typography } from "@mui/material"
import { useRef, type FocusEvent } from "react"

export const FocusTracker = () => {
  const firstInputRef = useRef<HTMLInputElement>(null)
  const secondInputRef = useRef<HTMLInputElement>(null)
  const clickCounterRef = useRef<number>(0)

  const onClick = () => {
    firstInputRef.current?.focus()
  }

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      clickCounterRef.current += 1
      console.log('clickCounterRef: ', clickCounterRef.current)
    }
  }

  return (
    <Box sx={{ m: 2 }}>
      <Typography sx={{ m: 1 }} variant="h6" component="div">Click Timer</Typography>
      <Input sx={{ mr: 1 }} inputRef={firstInputRef} onFocusCapture={onFocus} />
      <Input sx={{ mr: 1 }} inputRef={secondInputRef} onFocusCapture={onFocus} />
      <Button onClick={onClick}>Сфокусировать на первом</Button>
    </Box>
  )
}