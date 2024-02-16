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
  

function UserButton({ session }: { session: Session | null}) {
    // Subscription listener...

    if(!session){
      return (
        <Button variant={"outline"} onClick={() => signIn()}>
          Sign In
        </Button>
      )
    }
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
            <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton;