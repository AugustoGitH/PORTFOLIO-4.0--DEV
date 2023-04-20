import { useState } from "react";
import * as S from "../styles";

import ImagesViewScreen from "../../../../../../../../components/ImagesViewScreen";

type PropsImagesCover = {
  cover: string;
  images?: string[];
};


type TVierScreen = {
    show: boolean,
    mainImage: string
}

const ImagesCover = ({ cover, images }: PropsImagesCover) => {
    if (images && images.length > 4)
      throw new Error("O limite de imagens por projeto foi quebrado!");
  
    const [viewScreen, setViewScreen] = useState<TVierScreen>({
        show: false,
        mainImage: cover
    });

  
    const handleOpenViewScreen = (mainImage: string) => {
        setViewScreen(prevViewS=> ({
            show: true,
            mainImage
        }))
    };
  
    const createImagesProject = () => {
      if (!images) return [<li />, <li />, <li />, <li />];
      const imagesList = [];
      for (let i = 0; i < 4; i++) {
        imagesList.push(
          images[i] ? (
            <li key={i} onClick={() => handleOpenViewScreen(images[i])}>
              <img src={images[i]} alt={`image secundary ${i}`}/>
            </li>
          ) : (
            <li key={i} className="image-empty">
              <i className="bx bxs-image-alt" />
            </li>
          )
        );
      }
      return imagesList;
    };
  
    return (
      <S.ImagesCover>
        <ImagesViewScreen 
            viewScreen={ viewScreen } 
            images={[ cover, ...( images || []) ]} 
            onClose={ ()=> setViewScreen(prevViewS=> ({ ...prevViewS, show: false  }))}
        />
        <div className="cover" onClick={()=> handleOpenViewScreen(cover)}>
          <img src={cover} alt={`image ${cover[cover.length - 1]}`} />
        </div>
        <ul className="images-project">{createImagesProject()}</ul>
      </S.ImagesCover>
    );
  };


export default ImagesCover