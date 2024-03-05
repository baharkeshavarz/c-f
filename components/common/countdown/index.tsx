import { useState, useEffect } from "react"
import { Button, Typography } from "@mui/material"

interface CountDownProps {
  t: any;
  amount?: number,
  actionFunc: any;
}

const CountDown = ({ t, amount= 120, actionFunc } : CountDownProps) => {
  const [time, setTime] = useState("")
  const sendAgainCode = () => {
    Promise.resolve()
      .then(() => {
        actionFunc()
      })
      .then(() => {
        timer(amount)
      })
  }

  const timer = (remaining: number) => {
    let m = Math.floor(remaining / 60)
    let s = remaining % 60
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    setTime(`${m} : ${s}`)
    remaining -= 1

    if (remaining >= 0) {
      setTimeout(() => {
        timer(remaining)
      }, 1000)
      return
    } else setTime("")
  }

  useEffect(() => {
    timer(amount)
  }, [])

  return (
    <>
      {time ? (
        <Typography fontWeight={400}>
          {time}
        </Typography>
      ) : (
        <Button sx={{ py: 1, fontWeight: 600 }} disableRipple color="secondary" variant="text" size="small" onClick={sendAgainCode}>
            {t.general.sendAgain}
        </Button>
      )}
    </>
  )
}

export default CountDown
