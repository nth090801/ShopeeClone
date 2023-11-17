import { User } from './user.type'
import { ResponseApi } from './utils.type'

export type AuthResponse = ResponseApi<{
  access_Token: string
  expires: number
  user: User
}>
