import Link from 'next/link'
import { ArrowRight, Compass, HeartHandshake, MapPinned, NotebookText, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const principles = [
  {
    title: 'Write with context',
    body: 'We prioritize practical details, local nuance, and honest reporting over checklist-style travel content.',
    icon: NotebookText,
  },
  {
    title: 'Design for calm reading',
    body: 'Typography, spacing, and visual rhythm are optimized for long-form reading and slower browsing.',
    icon: Compass,
  },
  {
    title: 'Build with trust',
    body: 'Profiles, references, and structured surfaces make it easier to evaluate content and contributors.',
    icon: HeartHandshake,
  },
]

const milestones = [
  { title: 'First field notes published', body: 'A small set of route notes and neighborhood essays shaped the editorial style.' },
  { title: 'Travel + utility merged', body: 'Stories, listings, and searchable resources were unified into one publishing experience.' },
  { title: 'Contributor growth', body: 'Writers and photographers across regions began using one shared platform and workflow.' },
  { title: 'Refined reading product', body: 'We continue polishing quality, speed, and clarity for every page and every device.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_90%_60%_at_0%_-10%,rgba(83,203,243,0.14),transparent_50%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(255,222,66,0.1),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] text-[#111FA2]">
      <NavbarShell />

      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 rounded-[2rem] border border-[rgba(84,120,255,0.22)] bg-[rgba(255,255,255,0.92)] p-7 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5478FF]">About {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Travel stories for readers who care about place, pace, and perspective.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#111FA2]/65">
              {SITE_CONFIG.name} is built for meaningful travel publishing: thoughtful stories, useful references, and image-led reporting in one calmer editorial product.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/articles" className="inline-flex items-center gap-2 rounded-full bg-[#111FA2] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5478FF]">
                Read stories
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[rgba(84,120,255,0.28)] bg-white px-5 py-2.5 text-sm font-semibold text-[#111FA2] hover:bg-[rgba(83,203,243,0.12)]">
                Contact us
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[rgba(84,120,255,0.18)] bg-[rgba(248,250,255,0.85)] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5478FF]">Core focus</div>
              <p className="mt-3 text-sm leading-7 text-[#111FA2]/65">Slow travel writing, grounded visuals, and useful local knowledge in one destination.</p>
            </div>
            <div className="rounded-2xl border border-[rgba(84,120,255,0.18)] bg-[rgba(248,250,255,0.85)] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5478FF]">Editorial style</div>
              <p className="mt-3 text-sm leading-7 text-[#111FA2]/65">Clear language, strong structure, and practical details without inflated hype.</p>
            </div>
            <div className="rounded-2xl border border-[rgba(84,120,255,0.18)] bg-[rgba(248,250,255,0.85)] p-5 sm:col-span-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5478FF]">
                <MapPinned className="h-4 w-4" />
                Why readers return
              </div>
              <p className="mt-3 text-sm leading-7 text-[#111FA2]/65">
                Because pages are fast, content is trustworthy, and every section is designed to help people explore without friction.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-[1.6rem] border border-[rgba(84,120,255,0.18)] bg-[rgba(255,255,255,0.92)] p-6">
              <item.icon className="h-5 w-5 text-[#5478FF]" />
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#111FA2]/65">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(84,120,255,0.22)] bg-[rgba(255,255,255,0.92)] p-7 lg:p-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#5478FF]">
            <Sparkles className="h-4 w-4" />
            Journey so far
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {milestones.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[rgba(84,120,255,0.16)] bg-[rgba(248,250,255,0.88)] p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#111FA2]/65">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
