"use client"

import { motion } from "framer-motion"
import { ArrowRight, CalendarCheck } from "lucide-react"

export function FinalCTA() {
    return (
        <section className="relative w-full py-24 bg-blue-600 dark:bg-blue-900 overflow-hidden">
            {/* Decorative background patterns */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-400/30 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-16 shadow-2xl"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8">
                        <CalendarCheck className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Stop losing money tonight.
                    </h2>

                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Book your free discovery call now. We'll show you exactly how our AI can handle your customers 24/7.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-95">
                            <span>Book Your Free Demo</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-sm text-blue-200 mt-4 sm:mt-0 sm:ml-4">
                            No commitment. No credit card required.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
