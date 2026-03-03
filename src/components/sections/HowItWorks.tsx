"use client"

import { motion } from "framer-motion"
import { Search, Settings, TrendingUp, ArrowRight } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Discovery",
            desc: "We dive deep into your current workflows to identify high-impact automation opportunities that save hours, not just minutes.",
            icon: <Search className="w-7 h-7" />,
        },
        {
            num: "02",
            title: "Integration",
            desc: "Our engineers seamlessly integrate custom AI agents into your existing tech stack, ensuring smooth data flow and reliability.",
            icon: <Settings className="w-7 h-7" />,
        },
        {
            num: "03",
            title: "Scale",
            desc: "Watch your efficiency skyrocket. We monitor, optimize, and expand your automated systems as your business grows.",
            icon: <TrendingUp className="w-7 h-7" />,
        },
    ]

    return (
        <section id="how-it-works" className="relative w-full py-24 bg-slate-50 dark:bg-[#101622] overflow-hidden">
            {/* Subtle background glow/gradient */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center gap-4 mb-20">
                    <span className="inline-flex items-center rounded-full bg-blue-600/10 border border-blue-600/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase">
                        How It Works
                    </span>
                    <h2 className="text-slate-900 dark:text-white tracking-tight text-3xl md:text-5xl font-black leading-tight max-w-[720px]">
                        Our 3-Step Process to <span className="text-blue-600 dark:text-blue-500">Automation</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-[600px]">
                        We streamline your operations with custom AI solutions designed to scale your business without the growing pains.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-blue-600/20 to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="group relative flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-[#252e42] bg-white dark:bg-[#151c2b] p-8 transition-all duration-300 hover:border-blue-600/40 hover:bg-slate-50 dark:hover:bg-[#1c2436] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.15)] z-10"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-600/20 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <span className="text-5xl font-black text-slate-200 dark:text-slate-800/80 group-hover:text-blue-600/10 transition-colors duration-300">
                                    {step.num}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Section inside How it works */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full relative overflow-hidden rounded-3xl border border-slate-200 dark:border-[#252e42] bg-white dark:bg-[#151c2b] px-6 py-12 md:px-16 md:py-20 text-center shadow-sm"
                >
                    {/* Abstract BG shape */}
                    <div className="absolute -top-[50%] -right-[10%] w-[300px] h-[300px] bg-blue-600/10 dark:bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-[50%] -left-[10%] w-[300px] h-[300px] bg-cyan-600/10 dark:bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
                            Ready to automate your workflow?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
                            Book a free discovery call today. Let's find out exactly how much time and money AutomatXpress can save you.
                        </p>
                        <div className="pt-4">
                            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 active:scale-95">
                                <span>Book Free Demo</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
