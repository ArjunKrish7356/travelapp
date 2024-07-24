import Camp from "@/components/Camp"
import Features from "@/components/Features"
import GetApp from "@/components/GetApp"
import Guide from "@/components/Guide"
import Hero from "@/components/Hero"
import Image from "next/image"
import Link from "next/link"

function page() {
  return (
    <div className="">
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </div>
  )
}

export default page