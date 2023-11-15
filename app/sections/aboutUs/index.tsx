import Example from "@/app/assets/toninhoExemple.jpeg";
import Section from "@/shared/components/templates/section";
import SubSection from "../../../shared/components/molecules/subSection";

export default function AboutUs() {
  return (
    <Section id="aboutUs">
      <SubSection
        image={Example}
        title="Recursos para o Sucesso"
        description={
          <p className="py-5">
            Explore nossos recursos de estudo cuidadosamente organizados, desde
            materiais didáticos até vídeos educativos. Nossos canais e fóruns de
            discussão proporcionam um espaço para trocar ideias, fazer perguntas
            e colaborar em projetos. A UBL é mais do que uma fonte de
            conhecimento; é uma fonte de inspiração e apoio para seus membros.
          </p>
        }
      />
      <SubSection
        image={Example}
        title="Eventos e Oportunidades"
        description={
          <p className="py-5">
            Participe de eventos de estudo em grupo, palestras online e
            workshops conduzidos por especialistas em suas áreas. Na UBL,
            acreditamos que o aprendizado vai além das páginas de um livro, e é
            por isso que oferecemos oportunidades práticas para aprimorar suas
            habilidades.
          </p>
        }
        reverse
      />
      <SubSection
        image={Example}
        title="Cursos Gratuitos e Oportunidades Profissionais"
        description={
          <p className="py-5">
            Na UBL, acreditamos que o acesso à educação de qualidade é
            fundamental para o crescimento pessoal e profissional. É por isso
            que oferecemos uma variedade de cursos gratuitos, projetados para
            capacitar nossos membros com habilidades práticas e conhecimentos
            relevantes. Nossos cursos abrangem diversas áreas, desde tecnologia
            até humanidades, proporcionando uma ampla gama de oportunidades para
            o desenvolvimento de competências.
          </p>
        }
      />
    </Section>
  );
}
