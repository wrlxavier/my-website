interface ButtonInterface {
    url: string,
    text: string,
}

const Button = (props: ButtonInterface) => {
    return (
        <a href={props.url} className="rounded-xl">
            <div className="h-14 bg-gradient-to-r from-green-color to-blue-color  w-fit px-6 rounded-xl font-open-sans text-lg font-semibold text-primary-text-color flex items-center justify-center">
                {props.text}
            </div>
        </a>
    )
}

export default Button;