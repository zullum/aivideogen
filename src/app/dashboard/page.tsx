import { redirect } from 'next/navigation'

export default function DashboardRedirect() {
  // Redirect to the localized dashboard page
  redirect('/en/dashboard')
}