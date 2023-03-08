import Link from 'next/link'
import './page.module.css'

interface ButtonProps {
  name?: string
  effect?: string
}

export default function Landlord(props: LandlordProps) {

  return (
    <Link href={``}>
      <div className='button'>
        <div>{props.name}</div>
      </div>
    </Link>
  )
}
