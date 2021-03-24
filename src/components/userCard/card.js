import React from "react";
import Logo from '../../img/bender.jpg'
export const MyCard = (props) =>{
    return (
        <div className="card">
            <h2>{props.name}</h2>
            {/*<img>{props.img}</img>*/}
            <img className='bender' src={Logo}/>
            <h2>{props.age}</h2>
            <h3>{props.quote}</h3>
        </div>
    )
}

