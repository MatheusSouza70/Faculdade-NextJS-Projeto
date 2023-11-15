import DarkMask from "./components/darkMask";

export function MainImage() {
  return (
    <div
      className={
        "bg-[url('assets/mainImage.jpg')] bg-cover bg-no-repeat w-full h-[calc(100vh-52px)] object-contain"
      }
    >
      <DarkMask>
        <div className="flex items-center ml-auto h-full w-1/3">
          <p className="text-white text-xl">
            A Universidade Brasileira Livre é um projeto inspirado na Open
            Source Society University (OSSU). É uma comunidade sem fins
            lucrativos de apoio de estudantes de todos os níveis que ajudam uns
            aos outros e compartilham suas experiências e conhecimentos em torno
            de diferentes currículos de código aberto. O objetivo deste projeto
            é disponibilizar educação de alta qualidade para todos,
            independentemente de sua condição socioeconômica.
          </p>
        </div>
      </DarkMask>
    </div>
  );
}
