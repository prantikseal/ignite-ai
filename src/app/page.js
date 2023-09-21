import Image from 'next/image'
import HeroSection from './components/HeroSection'
import InputSection from './components/InputSection'
import OpenAI from 'openai';

export default async function Home() {

  return (
    <>
      <HeroSection />
      <InputSection />
    </>
  )
}
