// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
// import { storage } from "../../firebase/configs"
// import { useState } from "react"



// const uploadImage = (fileImage: File, pathRef: string)=>{
//   const createImageName = `${fileImage.name}-${(Math.random() * 36).toString(36).substring(2, 36)}`
//   const storageRef = ref(storage, `${pathRef}/${createImageName}`)

//   const uploadTask = uploadBytesResumable(storageRef, fileImage)

//   return new Promise((resolve, reject)=> {
//     uploadTask.on("state_changed", 
//       ()=>{}, 
//       (error)=> reject(error), 
//       async ()=>{
//         try{
//           const urlImage = await getDownloadURL(uploadTask.snapshot.ref)
//           resolve(urlImage)
//         }catch(error){  
//           reject(error)
//         }
//       }
//   )
//   })
// }

// export default uploadImage