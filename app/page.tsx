'use client'
const _ = require('lodash')
import { useState, useLayoutEffect } from 'react'
import { useAppContext } from './state'

import styles from './page.module.css'
import Landlord from './landlordComponent'

export default function Home() {

  let [search, setSearch] = useState('')
  let [landlords, setGet] = useState({})
  let globalState = useAppContext()
  
  const initialChars = 4
  
  const getAll = () => {
    fetch('http://localhost:5000/?' + new URLSearchParams({ name: search }))
    .then(req => req.json())
    .then(res => {
      setGet(res)
    })
  }

  if (search.length >= initialChars && _.isEqual(landlords, {})) { getAll() } // all = n-char initial param string
  
  const setContext = (name: string) => { globalState.landlord = landlords[name] }

  const searchMatcher = (name: string) => {
    const searchArr = search.split(' ')
    for (const term of searchArr) {
      if (!name.includes(term)) { return false }
    }
    return true
  }
  
  let lordArray: object[] = []
  Object.entries(landlords)?.forEach((item: object) => {
    const name = item[0]
    // console.log(name)
    // console.log(searchMatcher(name))
    if (searchMatcher(name)) {
      lordArray.push(
        <div onClick={ () => setContext(name) }>
          <Landlord 
          key={name} 
          name={name} 
          properties={landlords[name]} />
        </div>
      )
    }
  })
  let show = search.length >= initialChars ? 'show' : 'hide'
    
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
