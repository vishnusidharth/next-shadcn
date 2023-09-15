"use client"
import Link from "next/link"
import { Map, User, UserPlus, PlusSquare, Home, X, Menu, LogOut, Sun } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react"

export default function HeaderNav({ autheticated = false, ...props }) {
    const [isNavigationOpen, setNavState] = useState(false);
    const [isAuthenticated, setAuthState] = useState(autheticated);

    return (
        <nav className="flex w-full h-screen md:h-fit fixed z-[100] top-0 left-0 max-w-full flex-col md:flex-row justify-start items-start md:items-center md:shadow-sm overflow-x-hidden overflow-y-auto bg-white">
            {/* <NavigationMenu className="w-full h-screen md:h-fit max-w-full flex-col md:flex-row justify-start items-start md:items-center"> */}
            <header className="font-medium flex justify-center px-4 py-4 relative w-full md:w-fit shadow-sm md:shadow-none">
                <Link href="/docs" legacyBehavior passHref>
                    Logo
                </Link>
                {
                    isNavigationOpen ?
                        <X onClick={() => setNavState(!isNavigationOpen)} className="absolute md:hidden left-4 hover:cursor-pointer" /> :
                        <Menu onClick={() => setNavState(!isNavigationOpen)} className="absolute md:hidden left-4 hover:cursor-pointer" />
                }
            </header>
            <div className={"flex flex-col md:flex-row items-start md:items-center absolute md:static top-[56px] w-full md:w-fit ml-0 md:ml-auto transition-all " + (isNavigationOpen ? "left-0" : "left-full")}>

                <NavigationMenu className="w-full md:w-fit max-w-full md:max-w-max justify-start border-b-2 md:hidden">
                    <NavigationMenuList className={"w-full md:w-fit flex-col md:flex-row items-start md:items-center"}>
                        <NavigationMenuItem className="w-full md:w-fit ml-1 my-2 md:my-2">
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <Home />
                                    <span className="ml-2">Home</span>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu className="w-full md:w-fit max-w-full md:max-w-max justify-start border-b-2 md:border-none">
                    {/* <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Logo
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList> */}

                    <NavigationMenuList className="w-full md:w-fit flex-col md:flex-row items-start md:items-center">
                        {/* {
                            autheticated ? 
                                <> */}
                        <NavigationMenuItem className="w-full md:w-fit ml-1 my-2 md:my-2">
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <Map />
                                    <span className="ml-2">Map</span>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full md:w-fit my-2 md:my-2">
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <PlusSquare />
                                    <span className="ml-2">Add Job</span>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        {/* </>
                            :
                            <></>
                        } */}
                        <NavigationMenuItem className="w-full md:w-fit my-2 md:my-2 hidden md:block">
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <User />
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
                <div className="nav-footer w-full ml-1 md:hidden">
                    <div className={"border-b-2 p-4 " + (isAuthenticated ? "hidden" : "")}>
                        <div onClick={() => setAuthState(true)} className="flex py-4">
                            <User />
                            <span className="ml-2">
                                Login
                            </span>
                        </div>
                        <div className="flex py-4">
                            <UserPlus />
                            <span className="ml-2">
                                Sign Up
                            </span>
                        </div>
                    </div>
                    <div className="border-b-2 p-4">
                        Accessibility Statement
                    </div>
                    <div className="border-b-2">
                        <div className="p-4">Color Mode: </div>
                        <RadioGroup className="pt-0 mb-5 px-4 ml-4" defaultValue="light">
                            <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="light" id="light" />
                                <Label htmlFor="light">Light</Label>
                            </div>
                            <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="dark" id="dark" />
                                <Label htmlFor="dark">Dark</Label>
                            </div>
                            <div className="flex items-center space-x-2 py-1">
                                <RadioGroupItem value="system" id="system" />
                                <Label htmlFor="system">System</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div onClick={() => setAuthState(false)} className={"flex p-4 border-b-2 " + (!isAuthenticated ? "hidden" : "")}>
                        <LogOut />
                        <span className="ml-2">
                            Logout
                        </span>
                    </div>
                    <div className="p-4 mt-auto">
                            © 2023 . All rights reserved.
                    </div>
                </div>
            </div>
        </nav>
    )
}