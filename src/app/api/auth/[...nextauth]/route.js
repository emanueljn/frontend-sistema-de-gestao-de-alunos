import { error } from 'console';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { setCookie } from 'nookies';

// Função para renovar o access token
async function refreshAccessToken(token) {
  try {
    const response = await fetch("https://sjweb.com.br/token/refresh/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: token.refreshToken })
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    // Retorna o novo access token e a nova data de expiração
    return {
      ...token,
      accessToken: refreshedTokens.access,
      accessTokenExpires: Date.now() + 15 * 60 * 1000, // Expires in 15 minutes
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

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
            // Armazena o token de acesso no cookie
            setCookie(null, 'token', user.access, {
              maxAge: 30 * 24 * 60 * 60, // 30 dias
              path: '/',
              sameSite: 'Lax'
            });

            return { ...user, token: user.access, refreshToken: user.refresh };
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
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl + '/dashboard';
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.access = user.access;
        token.refreshToken = user.refreshToken; 
      }
      
      // Checa se o access token expirou
      const accessTokenExpiration = token.accessTokenExpires || Date.now() + 15 * 60 * 1000; // 15 minutos
      if (Date.now() < accessTokenExpiration) {
        return token;
      }

      // Se expirou, renova o access token usando o refresh token
      const refreshedToken = await refreshAccessToken(token);
      return refreshedToken;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.token = token.access;
      session.user.refreshToken = token.refreshToken; 
      return session;
    }
  },
});

export { POST as GET };
