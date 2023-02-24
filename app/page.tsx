'use client'
import { useState } from 'react'
import fs from 'fs'


import styles from './page.module.css'
import { parseLandlords, foo } from './dataUtilities'
import Landlord from './landlordComponent'


import output from './output.json'

export default function Home() {

let [search, setSearch] = useState('')

const landlords: object = output
let lordArray: object[] = []

lordArray = Object.entries(landlords).map((item: object) => {
   if (search.length > 1 && item[0].includes(search)) {
    return(
      <Landlord name={item[0]} properties={landlords[item[0]]} />
      )
  }
})
    
console.log('oe')
  return (
    <main className={styles.main}>
      <input
        style={{ border: 'solid 4px magenta' }}
        type='text'
        value={search}
        onChange={(e) => {setSearch(e.target.value)}} />
      <div>{lordArray?.length} matches</div>
      {lordArray}
    </main>
  )
}
