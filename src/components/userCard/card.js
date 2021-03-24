import React from "react";
import logo from '../../img/bender.jpg'
export const MyCard = ({name,age,quote}) =>{
    return (
        <div className="card">
            <h2>{name}</h2>
            {/*<img>{props.img}</img>*/}
            <img className='bender' src={logo} alt='logo'/>
            <h2>{age}</h2>
            <h3>{quote}</h3>
        </div>
    )
}

