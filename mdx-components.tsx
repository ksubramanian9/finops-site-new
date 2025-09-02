'use client'
import * as React from 'react'

export function useMDXComponents(components: any) {
  return {
    h2: (props: any) => <h2 className="mt-10 mb-4 text-2xl font-semibold" {...props} />,
    h3: (props: any) => <h3 className="mt-8 mb-3 text-xl font-semibold" {...props} />,
    p: (props: any) => <p className="my-4 leading-7" {...props} />,
    ul: (props: any) => <ul className="my-4 list-disc pl-6" {...props} />,
    ol: (props: any) => <ol className="my-4 list-decimal pl-6" {...props} />,
    code: (props: any) => <code className="rounded bg-black/10 px-1 py-0.5" {...props} />,
    ...components,
  }
}
