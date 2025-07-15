import { redirect } from 'next/navigation'

export default function RegisterRedirect() {
  // Redirect to the localized register page
  redirect('/en/register')
}