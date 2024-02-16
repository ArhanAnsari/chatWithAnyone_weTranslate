"use client"
import { Button } from './ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

function CreateChatButton() {
    const router  = useRouter();

    const createNewChat = async() => {
        // all  the logic here...

        router.push('/chat/new');
    }
    return (
        <Button onClick={createNewChat} variant={'ghost'}>
            <MessageSquarePlusIcon />
        </Button>
    )
}

export default CreateChatButton;