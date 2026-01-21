import ListaPostagens from "../../components/postagem/listapostagem/listapostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <main className="bg-indigo-900 flex justify-center">
        <section className="container grid grid-cols-2 text-white">
          <article className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde</h2>
            <p className="text-x1">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <ModalPostagem />
            </div>
          </article>

          <figure className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt=""
              className="w-2/3"
            />
          </figure>
        </section>
      </main>

      
      <ListaPostagens/>
    </>

  );
}

export default Home;
