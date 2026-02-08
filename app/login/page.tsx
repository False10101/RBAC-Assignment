import { login } from '@/lib/auth';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">System Login</h1>
      <form className="flex gap-4">
        <button formAction={async () => { 'use server'; await login('ADMIN'); }} 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition">
          Login as Admin
        </button>
        
        <button formAction={async () => { 'use server'; await login('USER'); }} 
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded font-medium transition">
          Login as User
        </button>
      </form>
      <p className="text-sm text-gray-500">Note: 'User' cannot see the API secret.</p>
    </div>
  );
}