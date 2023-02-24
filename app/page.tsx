import styles from './page.module.css'
import { parseLandlords, foo } from './dataUtilities'
import Landlord from './landlordComponent'

import fs from 'fs'


import data from './BostonResidentialParcels2015_2016_Example.json'
import output from './output.json'


export default function Home() {

const landlords: object = output

const lordArray: object[] = Object.entries(landlords).map((item: object) => {
  return(
    <Landlord name={item[0]} properties={landlords[item[0]]} />
  )
})

  return (
    <main className={styles.main}>
      {lordArray}
    </main>
  )
}
