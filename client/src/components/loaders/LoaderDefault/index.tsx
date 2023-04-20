import * as S from "./styles"


const LoaderDefault = ({ color }: { color: "dark" | "light" })=>{
  return (
    <S.LoaderDefault color={color}>
      <div className="loader">

      </div>
    </S.LoaderDefault>
  )
}

export default LoaderDefault