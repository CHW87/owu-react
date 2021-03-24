import {links,user} from "./constants";
import React from "react";
import Icon from "../../img/bender_icon.png"
// import './header.scss'
import '../../App.css'
import {UserInfo} from "../user_info/user_info";

export const Header=(props)=>{
    return(
       <div className="my-header">
              <img src={Icon} className="my-header-icon" />
                <a href={links[0]}>{links[0].name}</a>
                <a href={links[1]}>{links[1].name}</a>
                <a href={links[2]}>{links[2].name}</a>
           
       <UserInfo user={user}/>
       </div>
    )
}
