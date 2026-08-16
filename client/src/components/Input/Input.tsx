import { Props } from "./Input.props"

const Input = ({ placeholder }: Props) => {
  return(
    <>
      <input className='border border-[1px #000] rounded-[5px] mb-[15px] p-[10px]' type="text" placeholder={placeholder} />
    </>
  )
}

export default Input