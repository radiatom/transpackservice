import { CSSProperties } from 'react'
import toast from 'react-hot-toast'

interface IToast {
  (msg: string, type: 'success' | 'error' | 'custom'): void
}

const style: CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  backdropFilter: 'blur(20px)',
  fontFamily: 'inherit, sans-serif',
  fontSize: '1.6rem',
  color: 'rgba(255,255,255,0.95)',
  wordWrap: 'break-word',
  lineHeight: '1.5',
}

// react toast
const ReactToast = () => {
  const customToast: IToast = (msg, type) => {
    toast[type](msg, {
      position: 'top-center',
      duration: 3500,
      style,
    })
  }

  // return
  return { customToast }
}

export const { customToast } = ReactToast()
