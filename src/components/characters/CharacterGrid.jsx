import React from 'react'
import Spinner from '../UI/Spinner'
import CharacterItem from './CharacterItem'
import styles from '../../App.module.css'

const CharacterGrid = ({items, isLoading}) => {
    return (
        <div>
            {isLoading && <Spinner />}
            {!isLoading && (
                <section className={styles.cards}>
                    {items.map( item => (
                        <CharacterItem item={item} key={item.char_id}/>
                    ) )}
                </section>
            ) }
        </div>
        
    )
}

export default CharacterGrid
