import { Cases } from "@/components/sections/cases";
import { Companies } from "@/components/sections/companies";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Journey } from "@/components/sections/journey";
import { Metrics } from "@/components/sections/metrics";
import { Process } from "@/components/sections/process";
import { Stack } from "@/components/sections/stack";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Impact />
      <Metrics />
      <Cases />
      <Process />
      <Journey />
      <Stack />
      <Testimonials />
      <Contact />
    </main>
  );
}
