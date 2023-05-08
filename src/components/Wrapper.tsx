import React from 'react'
import style from '../styles/wrapper.module.css'
import Card from './cards/Card'
import { heros } from '../heros/heros'

const Wrapper = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.cards}>
        {heros.map((hero) => (
            <Card {...hero}/>
        ))}
      </div>
    </section>
  )
}

export default Wrapper
