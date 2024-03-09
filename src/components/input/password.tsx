import { Input, Button, InputProps } from '@rneui/base';
import { Theme } from '@rneui/themed';
import Dimensions from '@src/theme/Dimensions';
import Icon from "react-native-vector-icons/Ionicons"
import {useState} from "react"
interface IPaswordInput {
    label:string,
    onBlur:()=>void,
    onChange:()=>void,
    placeholder:string,
    errorMsg:string
}

export default function PaswordInput({
    label,
    onBlur,
    onChange,
    placeholder,
    errorMsg
}:IPaswordInput)  {
    const [isVisable,setIsVisable] = useState(false)


  return (
    <Input
    label={label}
    rightIcon={isVisable ? <Icon name='eye-outline' size={20 * Dimensions.RESPONSIVE_WIDTH} onPress={()=>setIsVisable(false)}/> : <Icon name='eye-off-outline' size={20 * Dimensions.RESPONSIVE_WIDTH} onPress={()=>setIsVisable(true)}/> }
    secureTextEntry={isVisable? false : true}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
    errorMessage={errorMsg}
    
    />
   
  )
}