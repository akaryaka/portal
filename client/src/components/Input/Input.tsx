import { Props } from "./Input.props"

const Input = ({ placeholder }: Props) => {
  return(
    <>
      <input className='border-b-[1px] mb-[15px] p-[10px] focus:outline-none' type="text" placeholder={placeholder} />
    </>
  )
}

export default Input