import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-10">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Secure RBAC System</h1>
          <p className="text-lg text-gray-600">
            Next.js 14 • Server Actions • HttpOnly Cookies • Middleware
          </p>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/login" 
            className="rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Go to Login
          </Link>

          <Link 
            href="/dashboard" 
            className="rounded-lg border border-gray-300 px-8 py-3 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Try Dashboard (Protected)
          </Link>
        </div>

        <div className="mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-2xl text-left">
          <h3 className="font-bold mb-2">How to test this app:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Step 1:</strong> Go to Login.</li>
            <li><strong>Step 2:</strong> Sign in as <strong>User</strong> (You will be denied access to secrets).</li>
            <li><strong>Step 3:</strong> Logout and sign in as <strong>Admin</strong> (You will see the secrets).</li>
            <li><strong>Note:</strong> Try accessing <code>/dashboard</code> without logging in to test the Middleware.</li>
          </ul>
        </div>

      </div>
    </main>
  );
}