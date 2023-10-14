import Image from 'next/image'
import Mascot from './llama.png'
import {Conversation} from '@/components/Conversation'

export default function Home() {
  return (
  <div class="centered">
    <Image
    src={Mascot}
    alt="Cool Llama"
    style={{ width: '30%', height: '30%', margin: "auto"}}
    ></Image>
    <p>Talk to me nice <span role="img" aria-label="winky">😉</span></p>
    <Conversation />
  </div>
  
  )
}
