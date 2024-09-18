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
      className='mt-4 p-4 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer'
    >
      <h2 className='mb-2 text-2xl font-semibold'>Contato</h2>
      <div className='text-sm opacity-50 flex gap-4 justify-center'>
        <Image className='w-6 h-6' src='/whatsapp.png' alt='WhatsApp' height={20} width={20} priority />
        <p>(11) 9 7441-7380</p>
        {hasCopiedText ? <Check /> : <Copy />}
      </div>
    </div>
  )
}
