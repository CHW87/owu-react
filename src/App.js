import React from "react";
import './App.css';
import {Header} from "./components/header/header";
import {MyCard} from "./components/userCard/card";
import {Block} from "./components/content/content";
import './components/content/mainContent.css'
function App({test}) {
    console.log(test);
    return (
        <div className="App">
            {test}
            <Header/>

            <div className='MainContent'>
                <MyCard name="Bender" age='29' quote="We’re making beer. I’m the brewery!"/>
                <Block>HELLO WORLD</Block>
            </div>
        </div>
    )
}

export default App
