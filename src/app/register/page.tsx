import Link from 'next/link'
import { FileText, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'editorial' || kind === 'directory' || kind === 'visual' || kind === 'curation') {
    return {
      shell: 'bg-[radial-gradient(ellipse_90%_60%_at_0%_-10%,rgba(83,203,243,0.14),transparent_50%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(255,222,66,0.1),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] text-[#111FA2]',
      panel: 'border border-[rgba(84,120,255,0.22)] bg-[rgba(255,255,255,0.92)]',
      side: 'border border-[rgba(84,120,255,0.16)] bg-[rgba(248,250,255,0.9)]',
      muted: 'text-[#111FA2]/65',
      action: 'bg-[#111FA2] text-white hover:bg-[#5478FF]',
      icon: FileText,
      title: 'Start your contributor workspace',
      body: 'Create a profile for essays, issue drafts, editorial review, and publication scheduling.',
    }
  }
  return getRegisterConfig('editorial')
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Different onboarding per product family', 'No repeated one-size-fits-all shell', 'Profile, publishing, and discovery aligned'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Full name" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Password" type="password" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="What are you creating or publishing?" />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action}`}>Create account</button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
