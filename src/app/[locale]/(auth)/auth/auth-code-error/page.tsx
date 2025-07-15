import Link from 'next/link'

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Authentication Error</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            There was an issue confirming your email address
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>This could happen if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The confirmation link has expired</li>
              <li>The link has already been used</li>
              <li>There was a temporary issue with our servers</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Try signing in again or request a new confirmation email.
            </p>
            
            <div className="flex gap-2 pt-4">
              <Link
                href="/login"
                className="flex-1 rounded-md bg-purple-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-purple-700"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}