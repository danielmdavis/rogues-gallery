import Link from 'next/link'
import './page.module.css'

interface ButtonProps {
  name?: string
  effect?: string
}

export default function Landlord(props: LandlordProps) {

  return (
      <button className='button'>
        <div>{props.name}</div>
      </button>
  )
}
