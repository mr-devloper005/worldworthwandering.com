import Link from 'next/link'
import { Building2, Clock3, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'
import { ContactLeadForm } from "@/components/shared/contact-lead-form";

function getTone(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'editorial' || kind === 'directory' || kind === 'visual' || kind === 'curation') {
    return {
      shell:
        'bg-[radial-gradient(ellipse_90%_60%_at_0%_-10%,rgba(83,203,243,0.14),transparent_50%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(255,222,66,0.1),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] text-[#111FA2]',
      panel: 'border border-[rgba(84,120,255,0.22)] bg-[rgba(255,255,255,0.92)]',
      soft: 'border border-[rgba(84,120,255,0.16)] bg-[rgba(248,250,255,0.9)]',
      muted: 'text-[#111FA2]/65',
      action: 'bg-[#111FA2] text-white hover:bg-[#5478FF]',
    }
  }
  return getTone('editorial')
}

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone(productKind)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
          { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Editorial submissions', body: 'Pitch essays, columns, and long-form ideas that fit the publication.' },
            { icon: Mail, title: 'Newsletter partnerships', body: 'Coordinate sponsorships, collaborations, and issue-level campaigns.' },
            { icon: Sparkles, title: 'Contributor support', body: 'Get help with voice, formatting, and publication workflow questions.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss gallery launches, creator features, and visual campaigns.' },
              { icon: Sparkles, title: 'Licensing and use', body: 'Reach out about usage rights, commercial requests, and visual partnerships.' },
              { icon: Mail, title: 'Media kits', body: 'Request creator decks, editorial support, or visual feature placement.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Suggest resources, boards, and links that deserve a place in the library.' },
              { icon: Mail, title: 'Resource partnerships', body: 'Coordinate curation projects, reference pages, and link programs.' },
              { icon: Sparkles, title: 'Curator support', body: 'Need help organizing shelves, collections, or profile-connected boards?' },
            ]

  const contactMethods = [
    {
      title: 'General support',
      value: 'hello@worldworthwandering.com',
      href: 'mailto:hello@worldworthwandering.com',
      icon: Mail,
    },
    {
      title: 'Partnerships',
      value: 'partners@worldworthwandering.com',
      href: 'mailto:partners@worldworthwandering.com',
      icon: Sparkles,
    },
    {
      title: 'Response window',
      value: 'Mon-Fri, within 24-48 hours',
      href: '/help',
      icon: Clock3,
    },
  ]

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className={`rounded-[2rem] border border-current/10 p-7 lg:p-10 ${tone.panel}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Contact {SITE_CONFIG.name}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Tell us what you are building, publishing, or fixing. We will route it to the right team.
          </h1>
          <p className={`mt-5 max-w-3xl text-sm leading-8 ${tone.muted}`}>
            We use a focused intake process so your message reaches the right lane quickly. Share clear context and links, and we will respond with concrete next steps.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-current/15 px-5 py-2.5 text-sm font-semibold hover:bg-black/5">
              Learn about us
            </Link>
            <Link href="/help" className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${tone.action}`}>
              Visit help center
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="space-y-4">
            {lanes.map((lane) => (
              <article key={lane.title} className={`rounded-[1.6rem] p-5 ${tone.soft}`}>
                <lane.icon className="h-5 w-5" />
                <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
              </article>
            ))}

            <div className={`grid gap-3 rounded-[1.6rem] p-5 ${tone.soft}`}>
              {contactMethods.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-3 rounded-xl border border-current/10 bg-transparent p-3 transition-colors hover:bg-black/5"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">{item.title}</p>
                    <p className="mt-1 text-sm">{item.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={`rounded-[1.8rem] p-7 ${tone.panel}`}>
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <p className={`mt-2 text-sm ${tone.muted}`}>The more detail you include, the faster we can help.</p>
            <ContactLeadForm />
          </div>
        </section>

        <section className={`mt-8 rounded-[1.8rem] p-6 ${tone.soft}`}>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-current/10 p-4">
              <MapPin className="h-4 w-4" />
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] opacity-75">Editorial desk</h3>
              <p className={`mt-2 text-sm ${tone.muted}`}>Remote-first with regional contributors across multiple travel corridors.</p>
            </article>
            <article className="rounded-xl border border-current/10 p-4">
              <Phone className="h-4 w-4" />
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] opacity-75">Escalations</h3>
              <p className={`mt-2 text-sm ${tone.muted}`}>Urgent publishing issues can be flagged with "urgent" in your subject line.</p>
            </article>
            <article className="rounded-xl border border-current/10 p-4">
              <Mail className="h-4 w-4" />
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] opacity-75">Submission prep</h3>
              <p className={`mt-2 text-sm ${tone.muted}`}>Include draft links, target audience, and your desired publish window.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
