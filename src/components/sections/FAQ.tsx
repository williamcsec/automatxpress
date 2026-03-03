"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQ() {
    const faqs = [
        {
            question: "Do I need technical knowledge to use AutomatXpress?",
            answer: "Not at all. We handle 100% of the technical setup, integration, and prompt engineering. You just tell us how your business works, and we build the system to reflect it.",
        },
        {
            question: "Will the AI sound robotic to my customers?",
            answer: "No. Our AI models are highly advanced and customized to match your brand's unique voice and tone. They understand context, regional slang, and converse naturally, just like your best sales rep.",
        },
        {
            question: "Can it integrate with my current billing/inventory system?",
            answer: "Yes, we build custom API integrations to connect with your existing CRM, Shopify store, WooCommerce, or custom databases to ensure seamless data flow.",
        },
        {
            question: "What happens if the AI encounters a question it can't answer?",
            answer: "The system features a seamless 'Human Handoff' capability. If the AI detects a complex or sensitive query, it immediately notifies you or your team while letting the customer know a human is taking over.",
        },
        {
            question: "How long does it take to deploy?",
            answer: "A standard deployment typically takes 7-14 days from our kickoff call to going live, depending on the complexity of your custom requirements.",
        }
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="w-full py-24 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Everything you need to know about scaling your business with AI.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden text-left"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${openIndex === idx ? "rotate-180 text-blue-500" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
