
import * as S from "./styles"
import { useEffect, useState } from "react"

type TVierScreen = {
    show: boolean,
    mainImage: string
}
type PropsImagesViewScreen = {
    viewScreen: TVierScreen,
    onClose: ()=> void,
    images: string[]
}



const ImagesViewScreen = ({ viewScreen, onClose, images }: PropsImagesViewScreen)=>{
    const [ focusImage, setFocusImage ] = useState(viewScreen.mainImage)
    const [ notFocused, setNotFocused ] = useState<string[] | []>(images.filter(img=> img !== viewScreen.mainImage))

    useEffect(()=>{
        setFocusImage(viewScreen.mainImage)
        setNotFocused(images.filter(img=> img !== viewScreen.mainImage))

        window.document.body.classList[viewScreen.show ? "add" : "remove"]
    }, [viewScreen])

    const handleFocusImage = (image: string)=>{
        setNotFocused([...images.filter(img=> img !== image && img !== focusImage ), focusImage])
        setFocusImage(image)
    }

    return viewScreen.show && viewScreen.mainImage ? (
        <S.ImagesViewScreen>
            <div className="card">
                <button className="button-close" onClick={onClose}><i className='bx bx-x' ></i></button>
                <ul className="view-display-statistics"></ul>
                <div className="image-cover">
                    <img src={focusImage}/>
                </div>
                {
                    notFocused.length > 0 && (
                        <ul className="images-list">
                        {
                            notFocused.map((img, index)=>(
                                <li key={index} onClick={()=> handleFocusImage(img)}>
                                    <img src={img}/>
                                </li>
                            ))
                        }
                </ul>
                    )
                }
            </div>
        </S.ImagesViewScreen>
    ) : <></>
}


export default ImagesViewScreen