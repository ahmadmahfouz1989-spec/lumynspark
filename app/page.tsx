import Link from 'next/link'

/* ─── Navbar ─────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6">
      <nav className="flex items-center gap-8 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3 shadow-xl shadow-black/20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 mr-2">
          <div className="w-7 h-7 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center text-xs font-black text-white shadow-lg shadow-[#6366f1]/30">L</div>
          <span className="font-black text-white text-sm tracking-tight">lumyn<span className="text-[#f59e0b]">spark</span></span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {[['#product', 'Products'], ['#features', 'Features'], ['#pricing', 'Pricing']].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-white/50 hover:text-white transition-colors font-medium">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-2">
          <span className="text-sm bg-[#6366f1]/15 text-[#a5b4fc] font-bold px-4 py-2 rounded-xl border border-[#6366f1]/25">
            Coming soon
          </span>
        </div>
      </nav>
    </header>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-glow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
      <div className="absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-glow" />
            <span className="text-xs font-semibold text-[#a5b4fc] tracking-wide">The AI product studio</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(48px,8vw,96px)] font-black tracking-tighter leading-[0.95] text-white mb-8">
          We take AI and build<br />
          <span className="inline-block text-transparent bg-clip-text animate-gradient-x"
            style={{ backgroundImage: 'linear-gradient(90deg, #6366f1, #a78bfa, #c4b5fd, #6366f1)' }}>
            what actually matters
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
          Lumyn Spark takes the world's most capable AI models and wraps them into focused products
          that solve real problems for real people — not demos that impress once, but tools that work every day.
        </p>

        <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-3 mb-12">
          <span className="text-white/30 text-sm font-semibold line-through">Raw AI capability.</span>
          <span className="text-white/15">→</span>
          <span className="text-[#a5b4fc] text-sm font-bold">Products people actually use.</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#product"
            className="flex items-center gap-2 text-white/50 hover:text-white font-semibold px-7 py-4 rounded-2xl text-base transition-colors border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]">
            See our first product ↓
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-white/[0.06]">
          {[
            { value: 'AI', label: 'At the core' },
            { value: 'Real', label: 'Problems we solve' },
            { value: 'People', label: 'Who we build for' },
            { value: 'More', label: 'Products coming' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-xs text-white/30 font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Marquee ────────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  '✦ AI wrapped for real value', '✦ Products, not demos', '✦ Built for real problems', '✦ Safe by design',
  '✦ Powered by Claude', '✦ Human-centered', '✦ Thoughtful & transparent', '✦ Cancel anytime',
  '✦ Spark — our first product', '✦ More coming soon',
]

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] py-4 bg-white/[0.01]">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="text-sm text-white/25 font-semibold tracking-wide flex-shrink-0">{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Chat Mockup ────────────────────────────────────────────────── */
function ChatMockup() {
  const messages = [
    { role: 'spark', text: "Hi! 👋 Let's tackle fractions. If you cut a pizza into 4 equal slices and eat 1, what fraction is that?" },
    { role: 'child', text: '1 out of 4?' },
    { role: 'spark', text: "Exactly! We write that as 1/4. Now — if your friend eats 2 slices, what fraction is that?" },
    { role: 'child', text: '2/4!' },
    { role: 'spark', text: "Perfect! 🎉 Can you think of a simpler way to write 2/4? Hint: both numbers share a common factor..." },
  ]
  return (
    <div className="relative w-full">
      {/* Window chrome */}
      <div className="bg-[#0d1117] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/50">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-4">
            <div className="bg-white/[0.04] rounded-md px-3 py-1 text-center">
              <span className="text-xs text-white/25 font-mono">spark.lumynspark.com</span>
            </div>
          </div>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]"
          style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #1a1a2e 100%)' }}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-base shadow-lg shadow-[#6366f1]/30">✨</div>
          <div>
            <p className="text-white font-black text-sm">Spark</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <p className="text-white/40 text-xs font-medium">Tutoring Léa · Fractions</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3" style={{ minHeight: '280px', background: '#080d14' }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'child' ? 'justify-end' : 'justify-start'} animate-fadeup`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed font-medium ${
                m.role === 'spark'
                  ? 'bg-[#1e293b] text-white/80 rounded-tl-sm border border-white/[0.06]'
                  : 'text-white rounded-tr-sm'
              }`}
                style={m.role === 'child' ? { background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' } : {}}>
                {m.text}
              </div>
            </div>
          ))}
          {/* Typing indicator */}
          <div className="flex justify-start">
            <div className="bg-[#1e293b] border border-white/[0.06] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
              {[0, 150, 300].map((delay) => (
                <div key={delay} className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: `${delay}ms` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.01]">
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-2.5">
            <span className="text-white/20 text-xs flex-1 font-medium">Type your answer...</span>
            <div className="w-7 h-7 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center text-xs text-white font-black shadow-lg shadow-[#6366f1]/30">→</div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-[#f59e0b] text-black text-xs font-black px-3 py-1.5 rounded-xl shadow-lg shadow-[#f59e0b]/30 animate-float">
        Guides, never tells ✓
      </div>
    </div>
  )
}

/* ─── Bento Grid ─────────────────────────────────────────────────── */
function BentoGrid() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-[#a5b4fc] font-bold uppercase tracking-widest mb-3">Spark — our first product</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Everything a child needs to<br />actually understand</h2>
        </div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[100px]">

          {/* Chat mockup — tall, left */}
          <div className="col-span-12 md:col-span-7 row-span-6 gradient-border p-6 overflow-hidden">
            <p className="text-xs font-bold text-[#a5b4fc] uppercase tracking-widest mb-1">Core experience</p>
            <h3 className="text-xl font-black text-white mb-5">Real Socratic tutoring</h3>
            <ChatMockup />
          </div>

          {/* Guides not tells */}
          <div className="col-span-12 md:col-span-5 row-span-3 gradient-border p-6 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute bottom-0 right-0 text-[80px] leading-none opacity-10 select-none pointer-events-none">💡</div>
            <div>
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-black text-white mb-2">Hints, not answers</h3>
              <p className="text-sm text-white/40 leading-relaxed">Spark asks questions and nudges children toward the answer. They build real understanding, not dependency on a tool.</p>
            </div>
          </div>

          {/* Bilingual */}
          <div className="col-span-12 md:col-span-5 row-span-3 gradient-border p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 flex gap-2 opacity-20 select-none pointer-events-none text-5xl">🇬🇧🇫🇷</div>
            <div>
              <div className="flex gap-2 mb-3">
                <span className="bg-[#6366f1]/20 text-[#a5b4fc] text-xs font-bold px-2 py-1 rounded-lg">EN</span>
                <span className="bg-[#f59e0b]/20 text-[#f59e0b] text-xs font-bold px-2 py-1 rounded-lg">FR</span>
              </div>
              <h3 className="text-lg font-black text-white mb-2">Fully bilingual</h3>
              <p className="text-sm text-white/40 leading-relaxed">The entire app — every word, every interaction — in English and French. Switch languages in one tap.</p>
            </div>
          </div>

          {/* Textbook scan */}
          <div className="col-span-12 md:col-span-5 row-span-3 gradient-border p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.07] flex items-center justify-center text-[80px] select-none pointer-events-none">📚</div>
            <h3 className="text-lg font-black text-white mb-2">📚 Scan any textbook</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-4">Photograph book pages. Spark reads them with Claude Vision and builds lessons from the actual content your child is studying.</p>
            <div className="flex gap-1.5 flex-wrap">
              {['Math', 'History', 'Science', 'Geography', 'Reading'].map((s) => (
                <span key={s} className="text-xs bg-white/[0.05] border border-white/[0.08] text-white/50 px-2.5 py-1 rounded-lg font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* Child memory */}
          <div className="col-span-12 md:col-span-4 row-span-3 gradient-border p-6 relative overflow-hidden">
            <h3 className="text-lg font-black text-white mb-2">🧠 Remembers your child</h3>
            <p className="text-sm text-white/40 leading-relaxed">Spark builds a profile over time — hobbies, learning pace, common mistakes — making every session feel personal.</p>
            <div className="mt-4 space-y-2">
              {['"Loves dinosaurs"', '"Struggles with fractions"', '"Fast at reading"'].map((note) => (
                <div key={note} className="flex items-center gap-2 text-xs text-white/30 bg-white/[0.03] rounded-lg px-3 py-1.5 border border-white/[0.05]">
                  <span className="text-[#6366f1]">✦</span> {note}
                </div>
              ))}
            </div>
          </div>

          {/* Homework tracker */}
          <div className="col-span-12 md:col-span-3 row-span-3 gradient-border p-6 relative overflow-hidden">
            <h3 className="text-lg font-black text-white mb-2">📋 Homework tracker</h3>
            <p className="text-sm text-white/40 leading-relaxed">Snap homework pages. Spark extracts tasks and due dates automatically — no manual entry.</p>
          </div>

          {/* Mastery */}
          <div className="col-span-12 md:col-span-5 row-span-3 gradient-border p-6 relative overflow-hidden">
            <h3 className="text-lg font-black text-white mb-2">📊 Mastery tracking</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-5">Every session updates a skill map. See exactly where your child excels and where they need practice.</p>
            <div className="space-y-2">
              {[
                { skill: 'Fractions', score: 3, max: 4 },
                { skill: 'Multiplication', score: 4, max: 4 },
                { skill: 'Word problems', score: 1, max: 4 },
              ].map(({ skill, score, max }) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-white/50 font-medium">{skill}</span>
                    <span className="text-xs text-white/30">{score}/{max}</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all"
                      style={{
                        width: `${(score / max) * 100}%`,
                        background: score === max ? 'linear-gradient(90deg, #6366f1, #22c55e)' : 'linear-gradient(90deg, #6366f1, #a78bfa)',
                      }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safe AI */}
          <div className="col-span-12 md:col-span-4 row-span-3 gradient-border gradient-border-amber p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[80px] leading-none opacity-[0.06] select-none pointer-events-none">🛡️</div>
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-black text-white mb-2">Safe by design</h3>
            <p className="text-sm text-white/40 leading-relaxed">Powered by Claude — Anthropic's AI, built with safety as a core value. Content filtering on every message.</p>
            <div className="mt-4 inline-flex items-center gap-1.5 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-lg px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-xs text-[#f59e0b] font-semibold">Powered by Anthropic Claude</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Product intro ──────────────────────────────────────────────── */
function ProductIntro() {
  return (
    <section id="product" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.08]"
          style={{ background: 'linear-gradient(135deg, #0f1729 0%, #0d1117 50%, #0f1729 100%)' }}>
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />

          <div className="relative grid md:grid-cols-2 gap-12 items-center p-10 md:p-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full px-3 py-1.5 mb-6">
                <span className="text-[#a5b4fc] text-xs font-bold">✦ Our first product</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
                Meet <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #a78bfa)' }}>Spark</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-8 text-base">
                A personal AI tutor for children ages 7–14. Instead of giving answers, Spark asks the right questions —
                helping children discover solutions themselves. Built on Claude by Anthropic, the safest AI available.
              </p>
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center justify-center gap-2 bg-[#6366f1]/15 text-[#a5b4fc] font-bold py-4 rounded-2xl border border-[#6366f1]/25">
                  Coming soon
                </span>
              </div>
            </div>

            {/* Platform badges */}
            <div className="flex flex-col gap-4">
              {[
                { icon: '🌐', platform: 'Web app', desc: 'Works in any browser, no install needed' },
                { icon: '📱', platform: 'iOS & Android', desc: 'Native mobile app for learning on the go' },
                { icon: '👨‍👩‍👧', platform: 'Parent dashboard', desc: 'Full visibility into progress and sessions' },
              ].map((p) => (
                <div key={p.platform} className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-[#6366f1]/30 transition-colors">
                  <div className="text-2xl">{p.icon}</div>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">{p.platform}</p>
                    <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="ml-auto text-white/20 text-sm">→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Company section ────────────────────────────────────────────── */
function Company() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-[#f59e0b] font-bold uppercase tracking-widest mb-4">Who we are</p>
            <h2 className="text-4xl font-black text-white tracking-tight mb-6">We wrap AI.<br />We deliver value.</h2>
            <p className="text-white/40 leading-relaxed text-base mb-6">
              Lumyn Spark takes the world's most capable AI models and wraps them into focused products
              that solve real problems — not impressive demos, not science projects. Products people actually use.
            </p>
            <p className="text-white/40 leading-relaxed text-base">
              Every product starts with a real human need. We pick the right AI, build around it thoughtfully,
              and put people in control. Spark is our first product. More are coming.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: '🎯', title: 'Purpose-built', body: 'Every feature solves a real problem. Nothing exists just because the technology makes it possible.' },
              { icon: '🔍', title: 'Transparent', body: 'We\'re honest about what AI can and can\'t do. No magic, no black boxes.' },
              { icon: '🤝', title: 'Human-centered', body: 'AI amplifies human capability. Our products keep people in control, always.' },
            ].map((p) => (
              <div key={p.title} className="flex gap-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.1] transition-colors">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{p.title}</p>
                  <p className="text-white/35 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ────────────────────────────────────────────────────── */
function Pricing() {
  const features = [
    'Unlimited children in your household',
    'Unlimited tutoring sessions',
    'Textbook scanning with Claude Vision',
    'Homework tracking & due dates',
    'Parent summaries & progress reports',
    'Child memory & mistake journal',
    'English & French',
    'Web + iOS + Android',
    'Cancel anytime — no contracts',
  ]

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-xs text-[#a5b4fc] font-bold uppercase tracking-widest mb-3">Pricing</p>
        <h2 className="text-4xl font-black text-white tracking-tight mb-3">One plan, whole family</h2>
        <p className="text-white/40 mb-12">Every child in your home, covered.</p>

        <div className="relative gradient-border p-8 text-left">
          {/* Top glow */}
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
              {features.map((f) => (
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
            <p className="text-center text-xs text-white/20">Secure payment by Stripe · No credit card for trial</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#6366f1]/20 text-center py-20 px-8"
          style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #0f0c29 100%)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)' }} />

          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-5">
              AI built right.<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #6366f1, #a78bfa, #c4b5fd)' }}>
                More products coming.
              </span>
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
              Spark is just the beginning. We're building a portfolio of AI products that solve real problems for real people.
            </p>
            <span className="inline-flex items-center gap-2 bg-white/10 text-[#a5b4fc] font-black px-8 py-4 rounded-2xl text-base border border-white/10">
              More coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center text-xs font-black text-white">L</div>
            <span className="font-black text-white tracking-tight">lumyn<span className="text-[#f59e0b]">spark</span></span>
          </div>

          <div className="flex items-center gap-8 text-sm text-white/25 font-medium">
            <a href="#product" className="hover:text-white/60 transition-colors">Products</a>
            <a href="#features" className="hover:text-white/60 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white/60 transition-colors">Pricing</a>
            <a href="mailto:hello@lumynspark.com" className="hover:text-white/60 transition-colors">hello@lumynspark.com</a>
          </div>

          <p className="text-white/15 text-sm">© 2026 Lumyn Spark</p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <p className="text-center text-white/10 text-xs mt-6 font-medium">
          Built with ♥ using Next.js, Tailwind CSS, and Anthropic Claude
        </p>
      </div>
    </footer>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductIntro />
        <BentoGrid />
        <Company />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
