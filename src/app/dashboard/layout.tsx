import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  void children
  redirect('/')
}
