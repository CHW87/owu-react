import {links,user} from "./constants";
import React from "react";
import icon from "../../img/bender_icon.png"
// import './header.scss'
import '../../App.css'
import {UserInfo} from "../user_info/user_info";

export const Header=()=>{
    return(
       <div className="my-header">
              <img src={icon} className="my-header-icon" alt='icon'/>
                <a href={links[0].url}>{links[0].name}</a>
                <a href={links[1].url}>{links[1].name}</a>
                <a href={links[2].url}>{links[2].name}</a>
       <UserInfo user={user}/>
       </div>
    )
}
