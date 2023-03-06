'use client'
import { useState, useLayoutEffect } from 'react'
import { useAppContext } from './state'

import styles from './page.module.css'
import Landlord from './landlordComponent'

export default function Home() {

  let [search, setSearch] = useState('')
  let [landlords, setGet] = useState({})
  let globalState = useAppContext()

  // useLayoutEffect(() => {  }, [])
  
  const getAll = () => {
    fetch('http://localhost:5000/?' + new URLSearchParams({ name: search }))
    .then(req => req.json())
    .then(res => {
      setGet(res)
    })
  }

  if (search.length > 2 && landlords.length === undefined) {
    getAll()
  }

  const setContext = (name: string) => { globalState.landlord = landlords[name] }
  
  let lordArray: object[] = []
  Object.entries(landlords)?.forEach((item: object) => {
    const name = Object.keys(item[1])[0]
    if (name.includes(search)) {
      lordArray.push(
        <div onClick={() => setContext(name) }>
          <Landlord 
          key={name} 
          name={name} 
          properties={landlords[name]} />
        </div>
      )
    }
  })
  let show = search.length > 1 ? 'show' : 'hide'
    
  return (
    <main className={styles.main}>
      <input
        className='searchbox'
        type='text'
        value={search}
        onChange={(e) => { setSearch(e.target.value.toUpperCase()) }} />
      <div className={show}>{lordArray?.length} matches out of {Object.keys(landlords).length} landlords</div>
      {lordArray}
    </main>
  )
}
