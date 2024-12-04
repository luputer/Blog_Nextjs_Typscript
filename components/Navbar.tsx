import React from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './Theme-Toogle'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    return (
        <nav className='h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10'>
            <div className='font-bold text-xl md:text-lg'>
                PerogrammingWithLuputer
            </div>
            <ul className='hidden md:flex  w-full justify-end  items-center space-x-4 '>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/blog"}>Contact</Link></li>
                <li className='buttons px-4 space-x-2'>
                    <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Login</Link>
                    <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Sign Up</Link>
                </li>
                <li>

                </li>
            </ul>
            <div className='flex gap-2 items-center'>
                <ModeToggle />
                <Sheet>
                    <SheetTrigger> <HamburgerMenuIcon className='size-7 md:hidden' /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </nav>
    )
}

export default Navbar
