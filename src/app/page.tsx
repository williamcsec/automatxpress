"use client";

import { useRouter } from 'next/navigation';
import Spline from '@splinetool/react-spline';
import { Button } from "@/components/ui/Button";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Results } from "@/components/sections/Results";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  const router = useRouter();

  const handleSplineClick = (e: any) => {
    // Spline component fires interactions with the target object
    if (e?.target?.name) {
      const name = e.target.name.toLowerCase();
      // Broadly catch anything that sounds like an actionable button or just raw clicks on the waitlist
      if (name.includes('waitlist') || name.includes('button') || name.includes('shape') || name.includes('group')) {
        router.push('/contact');
      }
    } else {
      // Fallback for general scene clicks if target name isn't reliably exported
      router.push('/contact');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0a0f1c] dark:bg-[#030614]">
      {/* Hero Section */}
      <section className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden bg-[#0a0f1c] dark:bg-[#030614]">

        {/* Background 3D Spline */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-90">
          <Spline scene="/scene.splinecode" onSplineMouseDown={handleSplineClick} className="w-full h-full" />
        </div>

        {/* Top Badge (Shifted Upwards over the Spline logo) */}
        <div className="absolute top-[8%] md:top-[12%] left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <div className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-[#0a0f18]/60 text-blue-300 text-sm md:text-base font-semibold backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            AI-Powered Business Automation
          </div>
        </div>

        {/* Bottom Actions & Trust Indicators */}
        <div className="absolute bottom-[10%] w-full z-20 pointer-events-none flex flex-col items-center gap-6">

          {/* See How It Works Button (Styled similar to glowing waitlist button) */}
          <div className="pointer-events-auto">
            <Button
              size="lg"
              variant="outline"
              className="text-base rounded-2xl border-blue-500/40 text-blue-200 hover:bg-blue-600/10 hover:text-white hover:border-blue-400 bg-[#0a0f18]/50 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] px-8 py-6 transition-all duration-300"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-slate-400 flex-wrap pointer-events-auto px-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Used by 50+ businesses
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              ₹2Cr+ in sales processed
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Setup in 2 weeks
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      {/* Background matches Hero to erase any harsh separation borders */}
      <section id="problem" className="w-full py-32 bg-[#0a0f1c] dark:bg-[#030614] relative z-10">
        {/* Subtle top gradient blending into the problem section */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a0f1c] dark:to-[#030614] pointer-events-none -translate-y-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Your Business is Bleeding Money Every Day
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              You are losing ₹50K-1L monthly from messages you never see.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Missed Messages = Lost Sales</h3>
              <p className="text-slate-600 dark:text-slate-400">
                30-40% of customer inquiries come after business hours. You're losing ₹50K-1L monthly from messages you never see.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Slow Responses = Lost Customers</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Customers who don't get responses within 5 minutes go to your competitor. You're busy serving customers, can't reply to WhatsApp.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Manual Work = Wasted Time</h3>
              <p className="text-slate-600 dark:text-slate-400">
                You spend 3-4 hours daily answering the same questions: 'Price?', 'Available?', 'Delivery?'. Time you could spend growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="w-full py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Meet Your 24/7 AI Sales Assistant
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              All automated. Zero manual work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 3D App Integration from Spline */}
            <div className="relative h-[500px] w-full bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 z-10">
                <span className="animate-pulse">Loading AI Interface...</span>
              </div>
              <div className="absolute inset-0 z-20">
                <Spline scene="/scene (1).splinecode" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Never Miss a Sale</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Respond to customers 24/7, even when you're sleeping. Our AI handles inquiries, sends product details, and generates payment links automatically.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Save 20 Hours/Week</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Stop answering the same questions repeatedly. Your AI assistant handles routine inquiries while you focus on growing your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Increase Sales by 40-60%</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Convert more inquiries into sales with instant responses, automated follow-ups, and intelligent recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Services />
      <Results />
      <Pricing />
      <FAQ />
      <FinalCTA />

    </main>
  );
}
