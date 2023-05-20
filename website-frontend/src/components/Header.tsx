import profileImage from '../assets/perfil.png'

export default function Header(){
    return(
        <header className="h-screen p-10 w-full bg-_black flex justify-center items-center">


            <img src={profileImage} alt="Minha imagem de perfil" 
                className='rounded-full h-64 border-4 border-green-500'
            />

            <div>
                <div className='bg-_black2  p-10 mx-8 rounded-2xl font-FiraCode text-2xl'>
                    <h1 className="text-_white ">Warley Fernades Xavier da Silva</h1>
                    <p className='text-green-500 '>
                        Cientista de dados
                    </p>
                </div>
            </div>
            


        </header>
    )
}