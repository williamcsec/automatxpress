"use client"

import { motion } from "framer-motion"
import { MessageCircle, PackageSearch, CreditCard, Network, Bot, Workflow } from "lucide-react"

export function Services() {
    const services = [
        {
            title: "WhatsApp AI Bot",
            desc: "24/7 customer engagement, instant responses to product inquiries, and an automated reservation system that works while you sleep.",
            icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
            color: "from-blue-500/20 to-blue-600/5",
        },
        {
            title: "Smart Inventory",
            desc: "Real-time stock updates, automatic sold-out notifications, and waitlist management directly synced with your store.",
            icon: <PackageSearch className="w-8 h-8 text-cyan-400" />,
            color: "from-cyan-500/20 to-cyan-600/5",
        },
        {
            title: "Payment Automation",
            desc: "UPI & card payment links uniquely generated per order, automatic order confirmation, and payment tracking.",
            icon: <CreditCard className="w-8 h-8 text-indigo-400" />,
            color: "from-indigo-500/20 to-indigo-600/5",
        },
        {
            title: "CRM Integration",
            desc: "Track every lead, conversation, and sale in one unified dashboard. Know exactly who your best customers are.",
            icon: <Network className="w-8 h-8 text-purple-400" />,
            color: "from-purple-500/20 to-purple-600/5",
        },
        {
            title: "Custom AI Agents",
            desc: "Specialized bots trained directly on your business data to answer specific, complex inquiries accurately.",
            icon: <Bot className="w-8 h-8 text-emerald-400" />,
            color: "from-emerald-500/20 to-emerald-600/5",
        },
        {
            title: "Workflow Optimization",
            desc: "Eliminates repetitive manual tasks by connecting your tools, freeing you up to focus on scaling operations.",
            icon: <Workflow className="w-8 h-8 text-sky-400" />,
            color: "from-sky-500/20 to-sky-600/5",
        },
    ]

    return (
        <section id="services" className="relative w-full py-24 bg-[#0a0f18] dark:bg-[#0a0f18] overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Complete Automation System - <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Built & Managed For You</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        All technical work is done by us. You simply run your business and watch the sales roll in.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 group overflow-hidden`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
