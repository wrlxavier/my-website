import Header from "./components/Header";
import Button from "./components/Button";

import ProfilePicture from './assets/profile-picture-300x300.png';

function App() {
  return (
    <>

      <Header></Header>
      <section className="bg-primary-color py-14 h-[calc(100vh-96px)] flex items-center justify-center">

        <img 
          className="rounded-full mx-16"
          src={ProfilePicture} 
          alt="Foto de perfil"
        />

        <div className="flex-col colu items-start justify-center max-w-[618px]">

          <h2 className="font-open-sans text-primary-text-color font-semibold text-4xl uppercase mb-4">
            Acredito no poder da tecnologia e em seu <br /> potencial transformador
          </h2>
          <h3 className="mb-8 text-secondary-text-color font-open-sans text-2xl">
          Conheça um pouco sobre meu trabalho e interesses acadêmicos. Para mais informações, entre em contato.
          </h3>
          <Button url={""} text={"Entrar em contato"}></Button>

        </div>

      </section>
      <section className="h-screen bg-primary-color">

      </section>

    </>
  )
}

export default App
