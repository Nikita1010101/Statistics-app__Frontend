import * as authActions from '@/store/user/auth.action'
import { authSlice } from './user/auth.slice'

export const rootActions = {
  ...authActions,
  ...authSlice.actions
}