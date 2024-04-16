'use client'
import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider(
    {
    children
    } : 
    {
    children: React.ReactNode   
    }
) {
    const { data: session } = useSession();

    const setSubscription = useSubscriptionStore((state) => state.setSubscription);
    useEffect(() => {
        if(!session?.user.id) return;

        return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
            if(snapshot.empty){
                console.log("Attention: User has No Subscription!");
                // set subscription to null after the check is made in the provider
                setSubscription(null);
                return;
            } else {
                console.log("User has a Subscription!");
                // access the data and have type safety from converter
                setSubscription(snapshot.docs[0].data())
            }
        }, (error) => {
            console.error("Error fetching subscription: ", error);
        
        })
    },  [session, setSubscription]);

    return <>{children}</>
    
}

export default SubscriptionProvider;