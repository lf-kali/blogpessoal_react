function Home() {
    return (
        <>
        <main style={{
            fontFamily: 'Helvetica, sans-serif',
        }}>
            <section style={{
                backgroundColor: "#312e81",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
            }}>
                <article style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                }}>
                    <h1
                    style={{
                        fontSize: '5vw'
                    }}>Seja Bem Vinde</h1>
                    <p>Expresse aqui seus pensamentos e opiniões</p>
                    <button style={{
                        border: '0.2rem solid #fff',
                        padding:'0.7rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        background: 'none',
                        color: '#fff',
                        
                    }}>Nova Postagem</button>
                </article>
            
                <figure>
                    <img src="https://i.imgur.com/fyfri1v.png" alt="" width={'100%'}/>
                </figure>
            </section>
        </main>
        </>
    )
}

export default Home
