import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    
    interface Session {
        firebaseToken?: string;
        user: {
            id?: string;

        }   & DefaultSession['user']
    }

}

// declare module "@auth/core/types" {
//     interface Session {
//       error?: "RefreshAccessTokenError"
//     }
//   }
  
//   declare module "@auth/core/jwt" {
//     interface JWT {
//       access_token: string
//       expires_at: number
//       refresh_token: string
//       error?: "RefreshAccessTokenError"
//     }
//   }