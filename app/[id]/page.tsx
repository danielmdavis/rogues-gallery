import { useState } from 'react'

import styles from './../page.module.css'
import Landlord from './../landlordComponent'
import Property from './propertyComponent'

import output from './../output.json'

export default function LandlordView(context: object) {
const name = context.params.id.replace(/%20/g, ' ')
let landlord = output[name][0]

const properties = landlord.map((item) => {
  return(
    <Property
    street={item.MAIL_ADDRESS}
    city={item.MAIL_CITY_STATE}
    zip={item.MAIL_ZIP} />
  )
})


  return (
    <main className={styles.main}>
      <Landlord name={name} />
      {properties}
    </main>
  )
}
