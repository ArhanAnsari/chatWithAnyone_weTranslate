"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./loadingSpinner";
import { StarIcon } from "@radix-ui/react-icons";
  
// Need session ~ accept session as a prop
// Accept as null in case session is not availableå
function UserButton({ session }: { session: Session | null}) {
    const subscription = useSubscriptionStore((state) => state.subscription)

      if(!session){
        return (
          <Button variant={"outline"} onClick={() => signIn()}>
            Sign In
          </Button>
        )
      };

    return session && (
      <DropdownMenu>
          <DropdownMenuTrigger>
              <UserAvatar 
                name={session.user?.name}
                image={session.user?.image}
              />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
              <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {subscription === undefined && (
                <DropdownMenuItem>
                  <LoadingSpinner />
                </DropdownMenuItem>
              )}
              {subscription?.role === 'pro' && (
                <>
                  <DropdownMenuLabel
                    className="text-sm flex items-center  space-x-1 text-[#E935CA] animate-pulse"
                  >
                    <StarIcon fill='#E935CA' />
                    <p>PRO</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Manage</DropdownMenuItem>
                </>
              )}
              <DropdownMenuItem 
                className="cursor-pointer" 
                onClick={() => signOut()}
              >
                Sign Out
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
    )
}

export default UserButton;