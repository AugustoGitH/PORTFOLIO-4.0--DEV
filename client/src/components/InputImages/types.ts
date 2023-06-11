


export type TImageSelected = {
  preview: string,
  fileImage: File | null 
}

export type TPropsInputImage = {
  onChange: (image: TImageSelected)=> void,
  label: string,
  onDelete?: (image: TImageSelected)=> void,
  value?: TImageSelected
}


export type TImagesSelected = {
  cover: TImageSelected,
  imageSec01: TImageSelected,
  imageSec02: TImageSelected,
  imageSec03: TImageSelected,
  imageSec04: TImageSelected,
}

export type TChangeInputImages = {
  cover: string | null ,
  images: string[] | null 
}

export type TPropsInputImages = {
  onChange: (images: TChangeInputImages)=> void,
  reset?: boolean
}
