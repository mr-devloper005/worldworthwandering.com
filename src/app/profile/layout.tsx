import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

export default function ProfileLayout({ children }: { children: ReactNode }) {
  void children
  redirect('/')
}
