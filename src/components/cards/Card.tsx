import React from 'react'
import style from '../../styles/card.module.css'
import { IHeros } from '../../heros/heros'

const Card: React.FC<IHeros> = ({image, description, name, power, intellect}) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
      <div className={style.characteristics}>
        <div className={style.characteristic_section}>
            <p className={style.characteristic_name}>Name:</p>
            <span className={style.characteristic_value}>{name}</span>
        </div>
        <div className={style.characteristic_section}>
            <p className={style.characteristic_name}>Power:</p>
            <span className={style.characteristic_value}>{power}</span>
        </div>
        <div className={style.characteristic_section}>
            <p className={style.characteristic_name}>Intellect:</p>
            <span className={style.characteristic_value}>{intellect}</span>
        </div>
      </div>
       <div className={style.card_footer}>
       <p className={style.description_title}>Description</p>
        <span className={style.description}>{description.length > 197 ? `${description.substring(0, 197)}...` : description}</span>
        <button className={style.choose_btn}>Выбрать</button>
       </div>
    </div>
  )
}

export default Card
