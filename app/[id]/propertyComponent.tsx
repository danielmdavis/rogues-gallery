import Link from 'next/link'
import { useState } from 'react'
import './../page.module.css'
import Violation from './violationComponent'

interface PropertyProps {
  street: string,
  city: string,
  zip: string
}

export default function Property(props: PropertyProps) {

  let [violations, setViolations] = useState([])

  const getViolations = (streetAddress: string, city: string) => {
    const address = streetAddress + ' ' + city
    fetch('https://data.boston.gov/api/3/action/datastore_search?resource_id=800a2663-1d6a-46e7-9356-bedb70f5332c&q=' + address)
    .then(req => req.json())
    .then(res => {
        const records = res.result.records
        if (violations.length === 0) {
          setViolations(records)
        }
    })
  }

  getViolations(props.street, props.city)
  console.log(violations)
  let violation
  if (violations.length > 0) {
    violation = <Violation description={violations[0].description} date={violations[0].status_dttm} status={violations[0].status} />
  }
  return (
    <div className='property'>
      <h1>{props.street}, {props.city}</h1>
      {violation}
    </div>
  )
}
