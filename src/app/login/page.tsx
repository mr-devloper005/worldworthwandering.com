 'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FileText, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { useAuth } from '@/lib/auth-context'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

function getLoginConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'editorial' || kind === 'directory' || kind === 'visual' || kind === 'curation') {
    return {
      shell: 'bg-[radial-gradient(ellipse_90%_60%_at_0%_-10%,rgba(83,203,243,0.14),transparent_50%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(255,222,66,0.1),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] text-[#111FA2]',
      panel: 'border border-[rgba(84,120,255,0.22)] bg-[rgba(255,255,255,0.92)]',
      side: 'border border-[rgba(84,120,255,0.16)] bg-[rgba(248,250,255,0.9)]',
      muted: 'text-[#111FA2]/65',
      action: 'bg-[#111FA2] text-white hover:bg-[#5478FF]',
      icon: FileText,
      title: 'Sign in to your publication workspace',
      body: 'Draft, review, and publish long-form work with the calmer reading system intact.',
    }
  }
  return getLoginConfig('editorial')
}

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  const router = useRouter()
  const { login, isAuthenticated, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getLoginConfig(productKind)
  const Icon = config.icon

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/')
    }
  }, [isAuthenticated, router])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.')
      return
    }

    try {
      await login(email.trim(), password)
      router.replace('/')
    } catch {
      setError('Unable to sign in. Please try again.')
    }
  }

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Cleaner product-specific workflows', 'Palette and layout matched to the site family', 'Fewer repeated admin patterns'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Welcome back</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
                placeholder="Email address"
                autoComplete="email"
              />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
                placeholder="Password"
                type="password"
                autoComplete="current-password"
              />
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action} disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
