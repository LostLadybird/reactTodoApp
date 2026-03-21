import { useEffect, useRef } from "react"
import { Box, Button, Typography } from '@mui/material'

interface IClickData {
 startTime: number | null;
 clickCount: number;
}

export const ClickTimer = () => {
  const ref = useRef<IClickData>({
    startTime: null,
    clickCount: 0,
  })

  const onClick = () => {
    const currentTime = Date.now()

    if (ref.current.startTime !== null) {
      console.log('time difference: ', currentTime - ref.current.startTime)
      console.log('click count: ', ref.current.clickCount)
    }
    ref.current.clickCount += 1
  }

  useEffect(() => {
    ref.current.startTime = Date.now()
  }, [])

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" component="div">Click Timer</Typography>
      <Button
        variant="contained" 
        sx={{ mt: 1 }}
        onClick={onClick}
      >
      Click me
      </Button>
    </Box>
  )
}