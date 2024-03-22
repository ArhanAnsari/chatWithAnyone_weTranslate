"use client"
import { MessageSquarePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

function CreateChatButton() {
    const router  = useRouter();

    const createNewChat = async() => {
        // all  the logic here...

        router.push('/chat/new');
    }
    return (
        <button onClick={createNewChat} className='flex items-center justify-center space-x-1'>
            <MessageSquarePlusIcon className="text-black dark:text-white"/>
            <span className="text-black dark:text-white">Invite</span>
        </button>
    )
}

export default CreateChatButton;