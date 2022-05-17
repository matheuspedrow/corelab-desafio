import connect from 'next-connect'

import mongooseMidleware from './mongoose'

export default function creteHandler() {
  return connect().use(mongooseMidleware)
}