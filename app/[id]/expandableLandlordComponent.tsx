import Link from 'next/link'
import './../page.module.css'
import Property from './propertyComponent'

interface LandlordProps {
  name?: string
  properties?: object[]
}

export default function Landlord(props: LandlordProps) {


  return (
    <Link href={`/${props.name}`}>
      <div className='landlord'>
        <h1>{props.name}</h1>
        {props.properties}
      </div>
    </Link>
  )
}
