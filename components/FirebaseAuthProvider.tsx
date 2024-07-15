'use client'

import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { auth } from "@/firebase";

// This function is used to sync the firebase auth with the next-auth session
async function syncFirebaseAuth(session: Session){
    // If the session has a firebase token, sign in with it
    if(session && session.firebaseToken){
        try {
            await signInWithCustomToken(auth, session.firebaseToken);
        }
        catch(error) {
            console.error("Error signing in with custom token: ",error);
        
        }
    } else {
        auth.signOut();
    }
}

// This component is used to sync the firebase auth with the next-auth session
function FirebaseAuthProvider({
    children
}: {
    children: React.ReactNode
}) {
    const { data: session } = useSession();

    useEffect(() => {
        if(!session) return;

         syncFirebaseAuth(session);

    }, [session])

    return <>{children}</>
}

export default FirebaseAuthProvider;