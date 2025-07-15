import { redirect } from 'next/navigation'

export default function LoginRedirect() {
  // Redirect to the localized login page
  redirect('/en/login')
}