
import { getServerSession } from "next-auth";
import Logo from "./Logo";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import { DarkModeToggle } from "./DarkModeToggle";
import UserButton from "./UserButton";


async function Header() {
  const session = await getServerSession(authOptions);
  console.log("session: ", session);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
        <nav 
            className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto"
        >
            <Logo />
            <div className='flex-1 flex items-center justify-end space-x-4'>
              {/* LanguageSelect */}

              {session ? (
                <>
                  <Link 
                    href={'/chat'} 
                    className="flex justify-center items-center space-x-1"
                    prefetch={false}
                  >
                    <MessageSquareIcon className="text-black dark:text-white"/>
                    <span className="text-black dark:text-white">Chat</span>
                  </Link>
                  <CreateChatButton />
                </>
              ) : (
                <Link href='/pricing'>Upgrade Here</Link>
              )}
              <DarkModeToggle />
              <UserButton session={session}/>
            </div>

        </nav>
        {/* Upgrade Banner */}
    </header>
  )
}

export default Header;