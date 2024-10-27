'use client'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

export default function MDXContent({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return <Component />
}