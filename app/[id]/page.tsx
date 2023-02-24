import { useState } from 'react'

import styles from './../page.module.css'
import Landlord from './../landlordComponent'

import output from './../output.json'

export default function LandlordView(context: object) {
const name = context.params.id.replace(/%20/g, ' ')
let landlord = output[name]
console.log(landlord)

  return (
    <main className={styles.main}>
      <Landlord name={name} />
    </main>
  )
}
