import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function PricingPage() {
    return (
        <main className="min-h-screen pt-24 bg-[#0a0f18]">
            <div className="text-center pt-16 pb-8 px-4">
                <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-400 uppercase mb-4">
                    Investment
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                    Pricing that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">scales</span> with you.
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Our ROI is simple: if the system doesn't save you at least 3x its monthly cost in recovered sales and time, we'll re-engineer it for free.
                </p>
            </div>

            <Pricing />
            <FAQ />
            <FinalCTA />
        </main>
    )
}
