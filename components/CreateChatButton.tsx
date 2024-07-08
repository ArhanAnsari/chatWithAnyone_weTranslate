"use client"
import { MessageSquarePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

function CreateChatButton() {
    const router  = useRouter();

    const createNewChat = async() => {
        // all  the logic here...

        router.push('/chat/new');
    }
    return (
        <Button onClick={createNewChat} size={'icon'} variant={'ghost'}>
            <MessageSquarePlusIcon className="text-black dark:text-white"/>
            <span className="text-black dark:text-white">Invite</span>
        </Button>
    )
}

export default CreateChatButton;