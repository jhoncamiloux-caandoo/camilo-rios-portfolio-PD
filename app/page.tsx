import { Cases } from "@/components/sections/cases";
import { Companies } from "@/components/sections/companies";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Impact />
      <Cases />
      <Process />
      <Contact />
    </main>
  );
}
