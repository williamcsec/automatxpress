import { Results } from "@/components/sections/Results"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen pt-24 bg-slate-950">
            <div className="text-center pt-16 pb-8 px-4">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                    Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Studies</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Deep dives into how we've helped businesses transform their operations and multiply their revenue.
                </p>
            </div>

            <Results />

            <div className="max-w-7xl mx-auto px-4 py-24 text-center">
                <p className="text-slate-400">More detailed case studies coming soon. Want to be our next success story?</p>
            </div>

            <FinalCTA />
        </main>
    )
}
