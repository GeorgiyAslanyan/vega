import Image from 'next/image'
import Scene from '@/components/3d/Scene'
import Hero from '@/components/Hero'
import Unique from '@/components/Unique'
import Who from '@/components/Who'
import Tokenomics from '@/components/Tokenomics'

export default function Home() {
  return (
    <main className="flex bg-[#010213] min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen w-full relative">
        <Scene />
        <Hero />
      </div>
      <Unique />
      <Who />
      <Tokenomics />
    </main>
  )
}
