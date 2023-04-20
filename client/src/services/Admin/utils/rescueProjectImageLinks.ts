// import { TProjectImagesCreationProcess, TProjectImagesSendByClient } from "../../../types/Project";
// import uploadImage from "../uploadImageFS";

// const rescueProjectImageLinks = async (imagesSelected: TProjectImagesCreationProcess): Promise<TProjectImagesSendByClient | null> =>{
//   try{
//     if(!imagesSelected.cover) throw new Error("Não sendo enviado o 'cover' do projeto para a função 'rescueProjectImageLinks'")

//     const coverUrl = await uploadImage(imagesSelected.cover, "images/project") as string

//     const imagesSecUrl = await Promise.all(
//       imagesSelected.images?.map(async img=>(
//         await uploadImage(img, "images/project")
//       ))
//     ) as string[]

//     return {
//       cover: coverUrl,
//       images: imagesSecUrl
//     }
//   }catch(error){
//     console.log(error)
//     return null
//   }
// }

// export default rescueProjectImageLinks