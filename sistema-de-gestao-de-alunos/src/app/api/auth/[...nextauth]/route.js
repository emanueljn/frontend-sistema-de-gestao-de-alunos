import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { setCookie } from 'nookies';

export const POST = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        console.log({
            email: credentials?.email,
            password: credentials?.password
        });

        try {
          const res = await fetch('http://127.0.0.1:8000/token/', {
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
            // Armazena o token de acesso no cookie
            setCookie(null, 'token', user.access, {
              maxAge: 30 * 24 * 60 * 60, // 30 dias
              path: '/',
              sameSite: 'Lax'
            });

            return { ...user, token: user.access }; // Retorna o token de acesso
          } else {
            return null;
          }
        } catch (error) {
          console.error('Erro na autenticação', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + '/dashboard'; // Redireciona para o dashboard como fallback
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
  }
});

export { POST as GET };
