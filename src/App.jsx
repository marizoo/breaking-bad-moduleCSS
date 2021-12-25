import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CharacterGrid from './components/characters/CharacterGrid'
import Header from './components/UI/Header'
import Search from './components/UI/Search'
import styles from './App.module.css'

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect( () => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])

  const getQuery = (q) => {
    setQuery(q)
  }

  return (
    <div className={styles.container}>
      <Header />
      <Search onGetQuery={getQuery} />
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  )
}

export default App
