interface HeaderLinkInterface {
    url: string;
    text: string;
}

const HeaderLink = (props: HeaderLinkInterface) => {
    return (
        <a href={props.url} className="inline-block m-5">
            <h3 className="text-white font-open-sans text-lg font-bold uppercase">
                {props.text}
            </h3>
        </a>
    )
}

export default HeaderLink;