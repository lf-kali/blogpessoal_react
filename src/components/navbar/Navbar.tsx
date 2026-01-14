function Navbar() {
    return (
        <>
            <header className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <nav className="container flex justify-between text-lg mx-8">
                    Blog Pessoal

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