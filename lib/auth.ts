'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Role } from '@/types';

export async function login(role: Role) {
  const cookieStore = await cookies();

  cookieStore.set('session_role', role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, 
    path: '/',
  });

  redirect('/dashboard');
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('session_role');
  redirect('/login');
}