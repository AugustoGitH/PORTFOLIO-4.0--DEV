import * as S from "./styles"
import { useState, useEffect } from "react"
import { TImageSelected, TImagesSelected, TPropsInputImage, TPropsInputImages } from "./types"
import { modelNewImagesSelected } from "./models"



const InputImage = ({ onChange, label, onDelete, value }: TPropsInputImage) => {
  const idLabel = Math.random().toString(16).substring(2, 16)
  const [imageSelected, setImageSelected] = useState<TImageSelected>({
    preview: value?.preview || "",
    fileImage: value?.fileImage || null
  })


  function handleImageSelect(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;


    const reader = new FileReader();
    reader.onload = (e: any) => {
      const newImageSelected = {
        preview: e.target.result,
        fileImage: file
      }
      setImageSelected(newImageSelected);
      onChange(newImageSelected)

    };
    reader.readAsDataURL(file);
  }


  useEffect(() => {
    if (value) {
      setImageSelected(value)
    }
  }, [value])

  const handleDeleteImage = () => {
    if (onDelete) onDelete(imageSelected)
    setTimeout(() => {
      setImageSelected({
        fileImage: null,
        preview: ""
      })
      onChange({
        fileImage: null,
        preview: ""
      })
    }, 100)
  }

  return (
    <S.InputImage>
      <label htmlFor={idLabel}>
        <i className='bx bxs-image image-icon'></i>
        <span>{label}</span>
        {imageSelected.preview && (<img src={imageSelected.preview} alt={idLabel} />)}

        <ul className="buttons-edit">
          {
            imageSelected.preview && (
              <button className="delete-image" onClick={handleDeleteImage}>
                <i className='bx bxs-trash-alt' />
              </button>
            )
          }
        </ul>

      </label>
      <input id={idLabel} type="file" onChange={handleImageSelect} />
    </S.InputImage>
  )
}




const InputImages = ({ onChange, reset }: TPropsInputImages) => {

  const [showSelectImages, setShowSelectImages] = useState(false)
  const [imagesSelected, setImagesSelected] = useState<TImagesSelected>(modelNewImagesSelected)

  useEffect(() => {
    document.body.classList[showSelectImages ? "add" : "remove"]("overflowY-none")
  }, [showSelectImages])

  useEffect(() => {
    handleChangeInputImage(imagesSelected)
  }, [imagesSelected])

  useEffect(() => {
    if (reset) {
      setImagesSelected(modelNewImagesSelected)
    }
  }, [reset])


  const handleAddImage = (key: string, value: TImageSelected) => {
    setImagesSelected(prevImages => ({ ...prevImages, [key]: value }))
  }

  const handleChangeInputImage = (imagesSelectParm: TImagesSelected) => {

    const transformImagesSecInArray = (): string[] | null => {
      const imagesSec = Object.values(
        Object.assign({}, imagesSelectParm, { cover: undefined })
      ).filter(Boolean) as TImageSelected[]
      return imagesSec.filter(imgS => imgS.fileImage && imgS.preview).map(imgS => imgS.preview) as string[]
    }

    onChange({
      cover: imagesSelectParm.cover.preview,
      images: transformImagesSecInArray()
    })
  }

  const imageShowCase = Object.entries(imagesSelected).map(([, { preview }]) => preview)

  return (
    <S.InputImageContainer>
      <button
        className="button-show-selected-images"
        onClick={() => setShowSelectImages(true)}>
        <i className='bx bxs-image-add' />Escolha as imagens para o projeto
      </button>
      <ul className="image-showcase">
        {
          imageShowCase.map((image, index) => (
            <li key={`img-show-case-${index}`} onClick={() => setShowSelectImages(true)}>
              {
                image ? <img src={image} alt={`img-show-case-${index}`} /> : <i className='bx bxs-image'></i>
              }
            </li>
          ))
        }
      </ul>
      {
        showSelectImages && (
          <div className="popup-selected-images">
            <div className="card">
              <button onClick={() => setShowSelectImages(false)} className="button-close-popup">
                <i className='bx bx-x' />
              </button>

              <ul className="list-input-images">
                <InputImage
                  label="Adicione a imagem da capa"
                  value={imagesSelected["cover"]}
                  onChange={img => handleAddImage("cover", img)}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected["imageSec01"]}
                  onChange={img => handleAddImage("imageSec01", img)}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected["imageSec02"]}
                  onChange={img => handleAddImage("imageSec02", img)}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected["imageSec03"]}
                  onChange={img => handleAddImage("imageSec03", img)}
                />
                <InputImage
                  label="Adicionar imagem"
                  value={imagesSelected["imageSec04"]}
                  onChange={img => handleAddImage("imageSec04", img)}
                />
              </ul>
            </div>
          </div>
        )
      }
    </S.InputImageContainer>
  )
}


export default InputImages