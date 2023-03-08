'use client'
const _ = require('lodash')
import { useState } from 'react'
import styles from './../page.module.css'
import { useAppContext } from './../state'
import LandlordBox from './expandableLandlordComponent'
import Property from './propertyComponent'
import Button from '../buttonComponent'
import { blob } from 'stream/consumers'

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

  // checks whether global state has provided the data, else gets it from api call
  if (!_.isEqual(globalState.landlord, {}) && _.isEqual(landlord, [])) {
    setLandlord(globalState.landlord )
  } else if (_.isEqual(landlord, [])) {
    getLandlord(name)
  }

  const blobConstructor = () => {
    let string = `${name}\r\n\r\n`
    landlord.forEach((item: object) => {
      string += `${item.MAIL_ADDRESS}\r\n`
      string += `${item.MAIL_CITY_STATE} ${item.MAIL_ZIP.slice(0, -1)}\r\n\r\n`
    })
    return string
  }
  const exportLandlord = () => {
    const file = new Blob([blobConstructor()], { type: 'text/plain', endings: 'native' })
    const link = document.createElement('a')
    link.download = `${name}.txt`
    link.href = URL.createObjectURL(file)
    link.click()
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
        <div><Button name='copy' /></div>
        <div onClick={exportLandlord}><Button name='save' /></div>
      </div>
    </main>
  )
}
