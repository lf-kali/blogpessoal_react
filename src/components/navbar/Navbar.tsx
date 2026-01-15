import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <header className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <nav className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2x1 font-bold">Blog Pessoal</Link>

                    <div className="flex gap-4">
                        Postagens
                        Temas
                        Cadastrar Tema
                        Perfil
                        Sair
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar