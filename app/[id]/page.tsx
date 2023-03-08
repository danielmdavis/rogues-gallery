'use client'
const _ = require('lodash')
import { useState } from 'react'
import styles from './../page.module.css'
import { useAppContext } from './../state'
import LandlordBox from './expandableLandlordComponent'
import Property from './propertyComponent'
import Button from '../buttonComponent'

export default function LandlordView(context: object) {

  let globalState = useAppContext()
  let [landlord, setLandlord] = useState([])
  const name = context.params.id.replace(/%20/g, ' ')

  const getLandlord = (str: string) => {
    fetch('http://localhost:5000/?' + new URLSearchParams({ name: str }))
    .then(req => req.json())
    .then(res => { 
      setLandlord(res[name])
    })
  }

  if (!_.isEqual(globalState.landlord, {}) && _.isEqual(landlord, [])) { 
    setLandlord(globalState.landlord )
  } else if (_.isEqual(landlord, [])) {
    getLandlord(name)
  }

  let properties: object[] = []
  landlord.forEach((item: object) => {
    properties.push(
      <Property
      street={item.MAIL_ADDRESS}
      city={item.MAIL_CITY_STATE}
      zip={item.MAIL_ZIP}
      key={item.FIELD1} />
    )
  })
  return (
    <main className={styles.main}>
      <LandlordBox name={name} properties={properties} />
      <div className='button-box'>
        <Button name='COPY' />
        <Button name='PDF' />
      </div>
    </main>
  )
}
