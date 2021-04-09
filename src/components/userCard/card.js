import React from "react";
// import Logo from '../../img/bender.jpg'
export const MyCard = (props) =>{
    return (
        <div className="card">
            <h2>{props.firstname}_{props.lastname}</h2>
            {/*<h2>{props.lastname}</h2>*/}
            {/*<img>{props.img}</img>*/}
            <img className='img' src={props.avatar} alt='Bender'/>
            <h2>{props.age}</h2>
            <h3>{props.quote}</h3>
        </div>
    )
}

