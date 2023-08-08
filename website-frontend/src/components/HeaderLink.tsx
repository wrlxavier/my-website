interface HeaderLinkInterface {
    url: string;
    text: string;
}

const HeaderLink = (props: HeaderLinkInterface) => {
    return (
        <a href={props.url} className="inline-block m-5">
            <h3 className="text-primary-text-color font-open-sans text-lg font-semibold hover:text-blue-color transition ease-in-out duration-300">
                {props.text}
            </h3>
        </a>
    )
}

export default HeaderLink;