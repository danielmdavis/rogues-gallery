'use client'
import styles from './../page.module.css'
import { useAppContext } from './../state'
import Landlord from './expandableLandlordComponent'
import Property from './propertyComponent'

export default function LandlordView(context: object) {

  let globalState = useAppContext()
  let landlord: object[] = globalState.landlord

  // const name = context.params.id.replace(/%20/g, ' ')
  // let landlord = output[name]
  let properties = []
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
      <Landlord name={landlord[0]['OWNER_NM']} properties={properties} />
      
    </main>
  )
}
