import PicapauImage from "@/app/assets/picapauImage.jpg";
import PicapauImage2 from "@/app/assets/icone-github-grise.png";
import SubSection from "@/shared/components/molecules/subSection";
import Section from "@/shared/components/templates/section";
import DescriptionSubSection from "./components/descriptionSubSection";

export default function Contacts() {
  return (
    <Section id="contacts">
      <SubSection
        description={
          <DescriptionSubSection
            description="Discord"
            link="https://discord.gg/ulivre-866378348368625704"
          />
        }
        image={PicapauImage}
        title="Comunidade no Discord"
      />
      <SubSection
        description={
          <DescriptionSubSection
            description="Github"
            link="https://github.com/Universidade-Livre"
          />
        }
        image={PicapauImage2}
        title="Repositório e Códigos"
        reverse
      />
    </Section>
  );
}
