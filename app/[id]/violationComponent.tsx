import Link from 'next/link'
import './../page.module.css'

interface PropertyProps {
  street?: string,
  city?: string,
  zip?: string
}

export default function Property(props: PropertyProps) {
  return (
    <div className='property'>
      <h1>{props.street}, {props.city}</h1>
    </div>
  )
}
