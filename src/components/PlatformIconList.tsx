import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import{MdPhoneIphone} from "react-icons/md";
import{SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs"
import { Platform } from '../Hooks/useGames'
import {  HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from "react-icons";

interface Props{
    platforms :Platform[]
}
const PlatformIconList = ({platforms}:Props) => {
  const IconMap:{[key:string]: IconType} = {
    pc:FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web:BsGlobe

  }
  return (
   <>
   <HStack>
    {platforms.map((platform) =>(
     <Icon as={IconMap[platform.slug] }/>
     ))}
     </HStack>
   </>
  )
}

export default PlatformIconList