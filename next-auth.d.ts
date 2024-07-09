import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    // extending the default session
    interface Session {
        firebaseToken?: string;
        user: {
            id?: string;

        }   & DefaultSession['user']
    }

}