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
            <Header>

            </Header>
            <div className='MainContent'>
                <MyCard firstname="Bender" lastname= "Rodriguez" avatar='https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png' age='25' quote="We’re making beer. I’m the brewery!"/>
                <Block>test</Block>
            </div>
            <div className='MainContent'>
                <MyCard firstname="Turanga" lastname= "Leela" avatar="https://upload.wikimedia.org/wikipedia/en/d/d4/Turanga_Leela.png"age='32' quote="We’re making beer. I’m the brewery!"/>
                <Block>test</Block>
            </div>
            <div className='MainContent'>
                <MyCard firstname="Philip" lastname= "Fry" avatar="https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png" age='25' quote="I'm walking on sunshine, woah oh oooh"/>
                <Block>test</Block>
            </div>
        </div>
    )
}

export default App
