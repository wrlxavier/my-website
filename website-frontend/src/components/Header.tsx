import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <header className="h-24 flex items-center justify-between mx-auto max-w-screen-xl">
            <h1 className="font-open-sans text-2xl text-white font-bold uppercase">Warley Xavier</h1>
            <nav>
                <ul className="flex w-fit">
                    <li>
                        <HeaderLink url="" text="sobre"></HeaderLink>
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
        </header>
    )
}

export default Header;