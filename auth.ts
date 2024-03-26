import { FirestoreAdapter } from '@auth/firebase-adapter';
import { NextAuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from './firebase-admin';


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    // callbacks: {
    //     // appending user id to the user
    //     jwt: async({ user, token }) => {
    //         if (user) {
    //             token.sub = user.id;
    //         }
    //         return token;
    //     }
    // },
    session: {
        strategy: 'jwt',
    },
    // adapter: FirestoreAdapter(adminDb),
} satisfies NextAuthOptions;

