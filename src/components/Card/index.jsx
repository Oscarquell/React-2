import React from "react";
import style from './style.module.css'

const Card = ({id, title, body}) => {
    return (
        <div className={style.block}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default Card;