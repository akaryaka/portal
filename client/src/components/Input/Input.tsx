import { Props } from "./Input.props"
import cn from "classnames"


const Input = ({ placeholder, className, ...props }: Props) => {
  return(
    <>
      <input 
        className={cn('border-b-[1px] p-[10px] focus:outline-none', className, {...props})}  
        type="text" 
        placeholder={placeholder} 
      />
    </>
  )
}

export default Input