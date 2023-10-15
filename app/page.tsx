import Image from 'next/image'
import Mascot from './llama.png'
import {Conversation} from '@/components/Conversation'


export default function Home() {
  return (
  <div className="centered">
    <Image
    src={Mascot}
    alt="Cool Llama"
    style={{ width: '30%', height: '30%', margin: "auto"}}
    ></Image>
    <p><span role="img" aria-label="stars">✨</span> Fiat Lux <span role="img" aria-label="stars">✨</span></p>
    <Conversation />    
  </div>
  )
}
