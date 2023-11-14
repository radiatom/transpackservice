import { ImageResponse } from 'next/server'
import { IcoLogo } from '@/constants/icons'

export const size = {
  width: 20,
  height: 20,
}

export const contentType = 'image/png'

const icon = () => {
  return new ImageResponse(<IcoLogo />, size)
}

export default icon
