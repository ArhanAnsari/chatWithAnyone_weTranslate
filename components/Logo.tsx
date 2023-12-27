import Link from 'next/link'
import LogoImage from "@/images/logo/black.svg"
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';


function Logo() {
  return ( 
    <Link href="/" prefetch={false} className='overflow-hidden'>
      <div className='flex items-center w-72 h-14'>
          <AspectRatio 
              ratio={16/9}
              className="flex items-center justify-center"
          >
            <Image 
              priority
              src={LogoImage}
              alt="My Chat Logo"
              className='rounded-full dark:filter dark:invert'
            />
          </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo;