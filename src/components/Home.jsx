import imgMancha from '../assets/mancha.png'
import imgFlower from '../assets/flower.png'
import { FcGoogle } from "react-icons/fc";

export function Home() {

    return(
        
        <>
        <img src={imgMancha} alt="mancha" className='img-left-sup'/>
        <img src={imgFlower} alt="flower" className='img-rigth-sup'/>
        <h1 className='title-home'>Anotando</h1>
        <h2 className='desc-home'> Crea </h2>
        <h2 className='desc-home'> notas </h2>
        <h2 className='desc-home' > fácil </h2>
        <h2 className='desc-home' > y </h2>
        <h2 className='desc-home' > rápido </h2>
        <button type='submit' className='btn-google'> <FcGoogle/> Inicia sesión con Google </button>
        </>
    )
    
}