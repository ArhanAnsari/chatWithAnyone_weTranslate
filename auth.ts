import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { adminAuth, adminDb } from './firebase-admin';

// 'select_account' ~ force user to select account

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: 'select_account'
                }
            }
        }),
    ],
    callbacks: {
        // access to session on client side
        session: async({ session, token }) => {
            if(session?.user){
                if(token?.sub){
                    session.user.id = token.sub;

                    const firebaseToken = await adminAuth.createCustomToken(token.sub);
                    session.firebaseToken = firebaseToken;
                }
            }
            return session;
        },  
        // appending user id to the user
        jwt: async({ user, token }) => {
            if (user) {
                token.sub = user.id;
            }
            return token;
        }
    },
    session: {
        strategy: 'jwt',
    },
    adapter: FirestoreAdapter(adminDb) as any,

} satisfies NextAuthOptions;




