import Link from 'next/link'
import './page.module.css'

interface LandlordProps {
  name?: string
  properties?: object[]
}

export default function Landlord(props: LandlordProps) {


  return (
    <Link href={`/${props.name}`}>
      <div className='landlord'>
        <h1>{props.name}</h1> 
        <span>({props.properties.length})</span>
      </div>
    </Link>
  )
}
