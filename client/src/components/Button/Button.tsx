import { Props } from "./Button.props"
import cn from 'classnames'

const Button = ({children, className, ...props} :Props) => {
  return(
    <>
      <button 
        className={cn("cursor-pointer p-[5px] border border-[1px solid] hover:bg-[#253d48] hover:text-[white]", className, {...props})  }
        type="submit"
      >
        {children}
      </button>
    </>
  )
}

export default Button