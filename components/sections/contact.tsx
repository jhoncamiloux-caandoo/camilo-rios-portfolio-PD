import { ButtonLink } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function Contact() {
  return (
    <section id="contato" className="bg-dark py-28 text-light">
      <div className="container">
        <FadeIn className="grid grid-cols-1 gap-gutter rounded-md border border-white/10 bg-white/[0.03] p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-8">
            <p className="mb-6 text-caption uppercase tracking-[0.22em] text-white/44">
              Contato
            </p>
            <h2 className="font-display text-[48px] font-semibold leading-[1.08] md:text-h2">
              Vamos desenhar o proximo salto do produto.
            </h2>
          </div>
          <div className="flex items-end md:col-span-4 md:justify-end">
            <ButtonLink href="mailto:jhoncamiloux@gmail.com">
              Iniciar conversa
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
