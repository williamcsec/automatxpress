import Link from 'next/link'
import { Button } from "@/components/ui/Button"

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    <div className="flex flex-col">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-600 dark:text-blue-500 mb-4 inline-block">
                            Automat<span className="text-slate-900 dark:text-white">Xpress</span>
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs">
                            AI-Powered Business Automation. Helping SMBs compete with enterprise efficiency.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">WhatsApp Automation</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Payment Integration</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Inventory Management</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Multi-Channel Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">About Us</Link></li>
                            <li><Link href="/pricing" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Pricing</Link></li>
                            <li><Link href="/case-studies" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Case Studies</Link></li>
                            <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-slate-500 dark:text-slate-400">contact@automatxpress.com</li>
                            <li className="text-sm text-slate-500 dark:text-slate-400">+91-XXXXXXXXXX</li>
                            <li className="text-sm text-slate-500 dark:text-slate-400">Jaipur, Rajasthan, India</li>
                            <li className="pt-2">
                                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.573-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" /></svg>
                                    WhatsApp Support
                                </Button>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-sm text-slate-500 mb-4 md:mb-0">
                        © 2024 AutomatXpress. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                        Built with <span className="text-red-500">❤️</span> for Indian businesses
                    </p>
                </div>
            </div>
        </footer>
    )
}
