import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <header className="bg-primary-color fixed w-screen">
            <div className="h-24 flex items-center justify-between p-4 max-w-screen-xl mx-auto ">
                <h1 className="font-open-sans text-2xl text-primary-text-color font-semibold uppercase">Warley Xavier</h1>
                <nav>
                    <ul className="w-fit hidden md:flex">
                        <li>
                            <HeaderLink url="" text="Sobre"></HeaderLink>
                        </li>
                        <li>
                            <HeaderLink url="" text="Stack"></HeaderLink>
                        </li>
                        <li>
                            <HeaderLink url="" text="Projetos Pessoais"></HeaderLink>
                        </li>
                        <li>
                            <HeaderLink url="" text="Contato"></HeaderLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;