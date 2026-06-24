"use client";

import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

export function AuthProvider({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export function useAuth() {
  const { data: session, status } = useSession();
  
  return {
    user: session?.user || null,
    isClient: true,
    login: async (email, password) => {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      });
      return result;
    },
    logout: () => signOut({ callbackUrl: '/' })
  };
}
