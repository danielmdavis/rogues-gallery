import Link from 'next/link'
import './../page.module.css'

interface PropertyProps {
  street?: string,
  city?: string,
  zip?: string
}

export default function Property(props: PropertyProps) {
  return (
    <div style={{ border: '4px solid lime', width: '400px', margin: '10px', padding: '6px', backgroundColor: 'lightskyblue', fontFamily: 'helvetica' }}>
      <h1 style={{ color: 'darkBlue', textDecoration: 'none' }}>{props.street}, {props.city}</h1>
    </div>
  )
}
