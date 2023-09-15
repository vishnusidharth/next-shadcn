import { Sun } from "lucide-react"

export default function Footer() {
    return(
        <div className="w-full hidden md:flex items-center justify-center gap-x-12 gap-y-4 fixed bottom-0 z-[100] p-5 shadow bg-white">
            <span>
                © 2023 . All rights reserved.
            </span>
            <span>
                Accessibility Statement
            </span>
            <Sun/>
        </div>
    )
}