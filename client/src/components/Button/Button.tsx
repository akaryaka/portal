import { Props } from "./Button.props"

const Button = ({children} :Props) => {
  return(
    <>
      <button className="cursor-pointer p-[5px] border border-[1px solid] hover:bg-[#253d48] hover:text-[white]" type="submit">{children}</button>
    </>
  )
}

export default Button