'use client'

import dynamic from 'next/dynamic'

const Personalization = dynamic(() => import('./Personalization'), {
	ssr: false,
})

export default Personalization
