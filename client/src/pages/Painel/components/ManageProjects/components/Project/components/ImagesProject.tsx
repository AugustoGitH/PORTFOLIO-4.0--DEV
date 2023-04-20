
import * as S from "../styles"



type TPropsImagesProject = {
  cover: string,
  images: string[]
}

const ImagesProject = ({ cover, images }: TPropsImagesProject)=>{

  const createImagesProject = () => {
    if (!images) return [<li />, <li />, <li />, <li />];
    const imagesList = [];
    for (let i = 0; i < 4; i++) {
      imagesList.push(
        images[i] ? (
          <li key={i}>
            <img src={images[i]} />
          </li>
        ) : (
          <li key={i}>
            <i className="bx bxs-image-alt" />
          </li>
        )
      );
    }
    return imagesList;
  };

  return (
    <S.ImagesProject>
      <div className="cover">
        <img src={cover} alt={`image-cover`}/>
      </div>
      <ul className="images-sec">
        {
          createImagesProject()
        }
      </ul>
    </S.ImagesProject>
  )
}

export default ImagesProject