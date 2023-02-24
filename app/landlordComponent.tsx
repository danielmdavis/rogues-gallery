import Link from 'next/link'
import './page.module.css'


interface LandlordProps {
  name?: string
  properties?: object[]
}

export default function Landlord(props: LandlordProps) {


  return (
    <Link href={`/${props.name}`}>
      <div style={{ border: '4px solid lime', width: '400px', margin: '10px', padding: '6px', backgroundColor: 'lightskyblue', fontFamily: 'helvetica' }}>
        <h1 style={{ color: 'darkBlue', textDecoration: 'none' }}>{props.name}</h1>
      </div>
    </Link>
  )
}
