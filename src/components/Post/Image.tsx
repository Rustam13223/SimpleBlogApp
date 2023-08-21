import { useState } from "react"

interface ImageProps {
  src: string
}

function Image({ src }: ImageProps) {
  const [isImg, setIsImg] = useState(true)

  if (isImg) {
    return <img src={src} onError={() => setIsImg(false)}/>
  } 

  return <></>
  
}

export default Image