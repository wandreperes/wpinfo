'use client'

import { useCopyToClipboard } from '@uidotdev/usehooks'
import { Check, Copy } from 'lucide-react'

import Image from 'next/image'

export function CopyButton() {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const hasCopiedText = Boolean(copiedText)
  return (
    <div
      onClick={() => copyToClipboard('11974417380')}
      className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer'
    >
      <h2 className='mb-3 text-2xl font-semibold'>
        Contato
        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'></span>
      </h2>
      <p className='m-0 max-w-[30ch] text-sm opacity-50 flex gap-2 '>
        <Image src='/whatsapp.png' alt='WhatsApp' height={20} width={20} style={{ width: 'auto' }} /> (11) 9
        7441-7380
        {hasCopiedText ? <Check /> : <Copy />}
      </p>
    </div>
  )
}
