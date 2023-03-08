'use client'
const _ = require('lodash')
import { useState, useLayoutEffect } from 'react'
import { useAppContext } from './state'

import styles from './page.module.css'
import Landlord from './landlordComponent'
import Button from './buttonComponent'

export default function Home() {

  let [search, setSearch] = useState('')
  let [landlords, setGet] = useState({})
  let globalState = useAppContext()
  
  const initialChars = 3
  
  const getAllMatches = () => {
    fetch('http://localhost:5000/?' + new URLSearchParams({ name: search }))
    .then(req => req.json())
    .then(res => {
      setGet(res)
    })
  }

  if (search.length >= initialChars && _.isEqual(landlords, {})) { getAllMatches() } // blocks rerunning
  if (search.length < initialChars && !_.isEqual(landlords, {})) { setGet({}) } // resets conditions to unblock rerunning
  
  const setContext = (name: string) => { globalState.landlord = landlords[name] }

  const searchMatcher = (name: string) => { // simple fuzzy matching
    const searchArr = search.split(' ')
    for (const term of searchArr) {
      if (!name.includes(term)) { return false }
    }
    return true
  }
  
  let lordArray: object[] = []
  Object.entries(landlords)?.forEach((item: object) => {
    const name = item[0]
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
  const show = search.length >= initialChars ? 'show' : 'hide'
  const antishow = search.length >= initialChars ? 'hide': 'show'
  const boxFill = search.length > 0 ? 'searchbox-full' : 'searchbox-empty'
    
  return (
    <main className={styles.main}>
      <input
        className={boxFill}
        type='text'
        value={search}
        onChange={(e) => { setSearch(e.target.value.toUpperCase()) }} />
        <div className={antishow}>Search a landlord</div>
      <div className={show}>{lordArray?.length} matches out of 40382 landlords</div>
      {lordArray}
    </main>
  )
}
