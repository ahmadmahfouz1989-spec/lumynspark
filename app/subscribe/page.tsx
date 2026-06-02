import Link from 'next/link'

export const metadata = {
  title: 'Subscribe — Spark AI Tutor',
  description: 'Get unlimited access to Spark for your whole family. $12.99/month, cancel anytime.',
}

const FEATURES = [
  'Unlimited children in your household',
  'Unlimited tutoring sessions',
  'Textbook scanning with Claude Vision',
  'Homework tracking & due dates',
  'Parent summaries & progress reports',
  'Child memory & learning profile',
  'English & French',
  'Web + iOS + Android',
  'Cancel anytime — no contracts',
]

const STEPS = [
  { n: '1', title: 'Create your account', body: 'Click the button below. You\'ll register as a parent with your email.' },
  { n: '2', title: 'Complete payment via Stripe', body: 'After registration you\'ll land directly on the checkout page. Secure payment, cancel anytime.' },
  { n: '3', title: 'Open the mobile app', body: 'Log in with the same email — your subscription is active immediately.' },
]

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6">
        <nav className="flex items-center gap-8 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3 shadow-xl shadow-black/20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center text-xs font-black text-white shadow-lg shadow-[#6366f1]/30">L</div>
            <span className="font-black text-white text-sm tracking-tight">lumyn<span className="text-[#f59e0b]">spark</span></span>
          </a>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-36 pb-24">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="text-xs font-bold text-[#f59e0b] tracking-wide">7-day free trial — no credit card required</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4">
            One plan,<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #6366f1, #a78bfa, #c4b5fd)' }}>
              whole family
            </span>
          </h1>
          <p className="text-white/40 text-lg max-w-lg mx-auto">
            Every child in your home, covered. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Plan card */}
          <div className="relative rounded-3xl border border-white/[0.08] p-8 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f1729 0%, #0d1117 100%)' }}>
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />

            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/40 text-xl font-bold">$</span>
                    <span className="text-6xl font-black text-white tracking-tighter">12</span>
                    <span className="text-3xl font-black text-white">.99</span>
                  </div>
                  <p className="text-white/30 text-sm font-medium">per month</p>
                </div>
                <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/25 rounded-2xl px-4 py-2 text-right">
                  <p className="text-[#f59e0b] text-xs font-black">7-DAY</p>
                  <p className="text-[#f59e0b] text-xs font-black">FREE TRIAL</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6" />

              <div className="space-y-3 mb-8">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#a5b4fc] text-[10px] font-black">✓</span>
                    </div>
                    <span className="text-white/60 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <span className="block w-full text-center bg-[#6366f1]/15 text-[#a5b4fc] font-black py-4 rounded-2xl border border-[#6366f1]/25 mb-3">
                Coming soon
              </span>
              <p className="text-center text-xs text-white/20">Secure payment by Stripe · Cancel anytime</p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs text-[#a5b4fc] font-bold uppercase tracking-widest mb-4">How it works</p>
              <h2 className="text-2xl font-black text-white mb-6">Subscribe in 3 steps</h2>
            </div>

            {STEPS.map((step) => (
              <div key={step.n} className="flex gap-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-[#6366f1]/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-sm font-black text-white flex-shrink-0 shadow-lg shadow-[#6366f1]/25">
                  {step.n}
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{step.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#6366f1]/5 border border-[#6366f1]/15 rounded-2xl p-5 mt-2">
              <p className="text-[#a5b4fc] text-xs font-semibold mb-1">Subscribed but need to manage?</p>
              <p className="text-white/40 text-sm">Billing portal coming soon</p>
            </div>

            <div className="text-white/20 text-xs space-y-1 pt-2">
              <p>✦ Cancel anytime from the billing portal</p>
              <p>✦ Payments securely processed by Stripe</p>
              <p>✦ Questions? <a href="mailto:ahmadmahfouz1989@gmail.com" className="hover:text-white/40 transition-colors underline">ahmadmahfouz1989@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-6 text-xs text-white/20 font-medium">
          <a href="/" className="hover:text-white/40 transition-colors">Home</a>
          <a href="/privacy" className="hover:text-white/40 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white/40 transition-colors">Terms of Service</a>
          <span>© 2026 Lumyn Spark</span>
        </div>
      </footer>
    </main>
  )
}
