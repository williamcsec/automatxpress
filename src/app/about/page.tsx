"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Zap, ShieldCheck } from "lucide-react"

export default function AboutPage() {
    const values = [
        {
            icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
            title: "AI First Approach",
            desc: "We don't believe in manual workarounds. If it can be automated intelligently, it should be."
        },
        {
            icon: <Zap className="w-8 h-8 text-cyan-500" />,
            title: "Speed to Value",
            desc: "We deploy operational systems in days, not months. You start seeing ROI in week one."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
            title: "Reliability obsession",
            desc: "Your business runs on our infrastructure. We design for 99.99% uptime and zero data loss."
        }
    ]

    return (
        <main className="min-h-screen pt-24 pb-24 bg-slate-50 dark:bg-[#0a0f18]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

                {/* Header */}
                <div className="text-center mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-8 relative z-10">
                        We Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Future of Work</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed relative z-10">
                        AutomatXpress was founded with a single mission: to free small and medium business owners from the tyranny of repetitive manual tasks. We believe your time should be spent on strategy and growth, not answering the same WhatsApp message for the 100th time.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                        {/* Placeholder for real team photo */}
                        <div className="flex items-center justify-center h-full text-slate-400 font-medium">Team Photo Placeholder</div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">The Origin Story</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            We started out helping a single local retailer who was losing thousands every month simply because he couldn't reply to customer inquiries fast enough. He was working 16 hour days and still falling behind.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            We built him a custom AI assistant that handled 80% of his inbound traffic. The result? His stress plummeted, and his revenue doubled in three months. That's when we knew we had to bring this technology to everyone.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-colors"
                        >
                            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl inline-block mb-6 shadow-sm">
                                {v.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{v.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
