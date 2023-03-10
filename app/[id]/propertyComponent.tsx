import Link from 'next/link'
import './../page.module.css'
import Violation from './violationComponent'

interface PropertyProps {
  street: string,
  city: string,
  zip: string,
  violations?: object
}

export default function Property(props: PropertyProps) {

  let violation
  if (props.violations) { 
    violation = <Violation description={props.violations[0].description} date={props.violations[0].status_dttm} /> 
  } 
  return (
    <div className='property'>
      <h1>{props.street}, {props.city}</h1>
      {violation}
    </div>
  )
}
