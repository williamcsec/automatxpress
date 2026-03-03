"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Pricing() {
    const tiers = [
        {
            name: "Starter",
            price: "₹25,000",
            description: "Perfect for single location small shops.",
            features: [
                "Up to 500 conversations/day",
                "WhatsApp automation",
                "Basic AI responses",
                "Payment integration",
                "Weekly reports",
                "Email support"
            ],
            popular: false,
        },
        {
            name: "Growth",
            price: "₹40,000",
            description: "Perfect for multi-location or growing businesses.",
            features: [
                "Up to 1,000 conversations/day",
                "Multi-channel (WhatsApp + Instagram)",
                "Advanced AI with recommendations",
                "Inventory management",
                "Real-time dashboard",
                "Priority support"
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "₹60,000",
            description: "For established businesses with high volume.",
            features: [
                "Unlimited conversations",
                "All channels (WhatsApp, Insta, FB, Web)",
                "Custom integrations",
                "Dedicated account manager",
                "24/7 phone support",
                "Advanced analytics"
            ],
            popular: false,
        }
    ]

    return (
        <section id="pricing" className="relative w-full py-24 bg-[#0a0f18] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Transparent Pricing - <span className="text-cyan-400">No Hidden Costs</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Pay for what you need. AI automation that pays for itself.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 ${tier.popular
                                    ? "bg-slate-900/80 border-2 border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] md:-translate-y-4"
                                    : "bg-slate-900/40 border border-white/10 hover:border-white/20"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
                                <p className="text-slate-400 text-sm h-10">{tier.description}</p>
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                                    <span className="text-slate-400 text-sm">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 shrink-0 ${tier.popular ? "text-cyan-400" : "text-blue-400"}`} />
                                        <span className="text-slate-300 text-sm leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full py-6 text-base font-semibold transition-all ${tier.popular
                                        ? "bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-lg shadow-cyan-500/25"
                                        : "bg-white/10 hover:bg-white/20 text-white"
                                    }`}
                            >
                                Start Free Trial
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> First month FREE trial - No payment upfront</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Cancel anytime - No contracts</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Setup included - No additional fees</div>
                </div>
            </div>
        </section>
    )
}
