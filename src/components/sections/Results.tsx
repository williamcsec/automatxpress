"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Results() {
    const caseStudies = [
        {
            metric: "60% Sales Increase",
            client: "XYZ Mobiles, Mumbai",
            before: "Lost ₹80K-1L monthly due to unanswared messages.",
            after: "100% inquiries answered, additional ₹1.2L monthly revenue.",
            color: "from-blue-500 to-indigo-500",
        },
        {
            metric: "25 Hours Saved/Wk",
            client: "ABC Electronics, Jaipur",
            before: "Owner spent 4 hours/day on WhatsApp, missing 30%.",
            after: "2 minutes/day managing system, zero missed inquiries.",
            color: "from-cyan-400 to-blue-500",
        },
        {
            metric: "₹2.5L Extra Revenue",
            client: "PQR Laptops, Bangalore",
            before: "Struggling to track and follow up with leads.",
            after: "Automated follow-ups led to massive growth in 3 months.",
            color: "from-indigo-400 to-purple-500",
        }
    ]

    return (
        <section id="results" className="relative w-full py-24 bg-slate-950 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Real Results From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Real Businesses</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Don't just take our word for it. See how SMBs across India are scaling their operations with AutomatXpress.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={study.client}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="flex-1 group relative rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 hover:bg-slate-800/50 transition-colors"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10">
                                <div className={`text-2xl font-black bg-gradient-to-r ${study.color} text-transparent bg-clip-text`}>
                                    {study.metric}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                {study.client}
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Before</p>
                                    <p className="text-sm text-slate-400 leading-relaxed">{study.before}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-green-950/20 border border-green-900/30">
                                    <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">After</p>
                                    <p className="text-sm text-slate-300 leading-relaxed">{study.after}</p>
                                </div>
                            </div>

                            <Link
                                href="/case-studies"
                                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group-hover:underline underline-offset-4"
                            >
                                View full case study <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
