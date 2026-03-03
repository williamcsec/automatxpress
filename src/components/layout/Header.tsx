import Link from 'next/link'
import { Button } from "@/components/ui/Button"

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-600 dark:text-blue-500">
                        Automat<span className="text-slate-900 dark:text-white">Xpress</span>
                    </Link>
                </div>

                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                        About
                    </Link>
                    <Link href="/#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                        Services
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                        Pricing
                    </Link>
                    <Link href="/case-studies" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                        Case Studies
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="default" className="hidden sm:flex">
                        Book Demo
                    </Button>
                    {/* Mobile menu button could go here */}
                </div>
            </div>
        </header>
    )
}
