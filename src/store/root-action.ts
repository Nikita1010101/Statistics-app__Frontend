import * as authActions from '@/store/auth/auth.action'
import { authSlice } from './auth/auth.slice'

export const rootActions = {
  ...authActions,
  ...authSlice.actions
}