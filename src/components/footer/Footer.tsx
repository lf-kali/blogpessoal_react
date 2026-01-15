import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <footer className="flex justify-center bg-indigo-900 text-white">
                <section className="container flex flex-col items-center py-4">
                    <p className="text-x1 font-bold">
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <div className="flex gap-2">
                        <a href="https://linkedin.com/in/kalifrancadev" target="_blank">
                            <LinkedinLogoIcon size={48} weight="bold"/>
                        </a>
                        <a href="#" target="_blank">
                            <InstagramLogoIcon size={48} weight="bold"/>
                        </a>
                        <a href="#" target="_blank">
                            <FacebookLogoIcon size={48} weight="bold"/>
                        </a>
                        
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;