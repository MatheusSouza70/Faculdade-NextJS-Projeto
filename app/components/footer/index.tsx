import Container from "@/shared/components/molecules/container";
import ListShortcuts from "./component/listShortcuts";

export default function Footer() {
  return (
    <footer className="bg-black">
      <Container isSection className="flex justify-around">
        <ListShortcuts
          options={[
            { name: "Home", link: "#entryMessage" },
            { name: "Sobre Nós", link: "#aboutUs" },
            { name: "Contatos", link: "#contacts" },
          ]}
          title="Seções"
        />
      </Container>
      <div className="text-center">
        &copy; Site construído para fins acadêmicos.
      </div>
    </footer>
  );
}
