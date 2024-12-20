import { error } from 'console';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const POST = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const res = await fetch('https://sjweb.com.br/token/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          });

          const user = await res.json();
          
          if (res.ok && user?.access) {
            return { ...user, token: user.access };
          } else {
            throw new Error(user?.detail);
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl + '/dashboard';
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.access = user.access; 
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.token = token.access; 
      return session;
    }
  },
});

export { POST as GET };
