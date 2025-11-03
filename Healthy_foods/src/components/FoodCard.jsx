import React from 'react'
import styles from '../styles/FoodCard.module.css'
const FoodCard = (props) => {
    return (
        <div className="card m-4"  style={{ width: "18rem" }}>
            <img src= {props.imgUrl} class="card-img-top" alt="..." style={{width: "100%", height :  "250px"}}/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className= {`btn btn-primary ${styles.btnCenter} `}>Buy</a>
            </div>
        </div>
    )
}

export default FoodCard