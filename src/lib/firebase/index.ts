import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { config } from 'config'

export function firebaseInit() {
  if (!config.firebase.projectId) return
  if (typeof window === 'undefined') return

  const app = !!getApps().length
    ? getApp()
    : initializeApp({
        ...config.firebase,
      })

  getAnalytics(app)
}
