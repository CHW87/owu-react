import React, {useState, useEffect} from "react";
import './App.css';

//-------------------UNCONTROLED INPUTS---------------//

// function App() {
//     const firstName = React.useRef()
//     const lastName = React.useRef()
//     const email = React.useRef()
//     const age = React.useRef()
//     const password = React.useRef()
//     const form = React.useRef()
//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log(e);
//         console.log({firstName})
//         // firstName.current.value = ''
//         // firstName.current.focus()
//         // firstName.current.style.background = 'red'
//
//         // const {
//         // target: [
//         //     {value: firstName},
//         //     {value: lastName},
//         //     {value: email},
//         //     {value: age},
//         //     {value: password}
//         // ]
//
//         //         target: {
//         //             elements: {
//         //                 firstName,
//         //                 lastName,
//         //                 email,
//         //                 age,
//         //                 password
//         //             }
//         //         }
//         //     } = e;
//         //     console.log({firstName, lastName, email, age, password})
//        
//         alert(JSON.stringify(
//             {
//                 firstName: firstName.current.value,
//                 lastName: lastName.current.value,
//                 email: email.current.value,
//                 age: age.current.value,
//                 password: password.current.value
//             }, null, 2))
//        
//         //reset for clear form//
//         form.current.reset()
//        
//         //reset for clear inputs//
//         // firstName.current.value = '';
//         // lastName.current.value = '';
//         // email.current.value = '';
//         // age.current.value = '';
//         // password.current.value = '';
//     }
//
//
//     return (
//         <form 
//             ref = {form}
//             onSubmit={onSubmit}>
//             <div className="App">
//                 <h1>this is input</h1>
//                 <br/>
//                 <br/>
//                 <input ref={firstName} type="text" name='firstName' placeholder="enter your firstname"/>
//                 <br/>
//                 <br/>
//                 <input ref={lastName} type="text" name='lastName' placeholder="enter your lastname"/>
//                 <br/>
//                 <br/>
//                 <input ref={email} type="email" name='email' placeholder="enter your email"/>
//                 <br/>
//                 <br/>
//                 <input ref={age} type="number" name='age' placeholder="enter your age"/>
//                 <br/>
//                 <br/>
//                 <input ref={password} type="password" name='password' placeholder="enter your pasword"/>
//                 <br/>
//                 <br/>
//                 <button type='submit'>Submit</button>
//             </div>
//         </form>
//     );
// }
//
//export default App;

//-------------------CONTROLED INPUTS------------------//

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const AVAILABLE_RESOURCES = [
    'posts',
    'comments',
    'albums',
    'photos',
    'todos',
    'users',
]

function App() {
    const [endpointFields, setEndpointFields] = useState({
        endPoint: '',
        id: ''
    })
    const {endpoint, id} = endpointFields;
    // const [endPoint, setEndpoint] = useState('')
    // const [id, setId] = useState('')
    const [errorMassage, setErrorMassage] = useState('')


    const [items, setItems] = useState([])
    const [singleItem, setSingleItem] = useState(null)

    const validateEndpoint = () => {
        let isOk = true;
        if (!endpoint) {
            setErrorMassage('first input is required!!!')
            return false;
        } else if (!AVAILABLE_RESOURCES.includes(endpoint.trim().toLowerCase())) {
            setErrorMassage('value is not valid,try to use smth from this list : posts, comments, albums, photos, todos, users')
            return false;
        }
        return true
    }
    const validateId = () => {
        let isOk = true;

        const idToNum = Number(id)

        if (!idToNum && id !== '' && idToNum !== 0) {
            setErrorMassage('value of second input is not valid,pls use numeric value')
            return false;
        } else if ((idToNum < 1 || idToNum > 100) && id !== '') {
            setErrorMassage('value of second input is out of range,pls use 1-100')
            return false;
        }
        ;
        return true;
    }
    
    const resetError = () => setErrorMassage('') 


    const onSubmit = () => {
        const isEndpointValid = validateEndpoint();
        const isIdOk = validateId();
        if (isIdOk && isEndpointValid) {
            fetchData();
            resetError();
        }
    }

    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/${endpoint.trim().toLowerCase()}/${id.trim()}`)
        const json = await response.json()

        if (id) {
            setSingleItem(json)
            setItems([])
            return
        }
        setSingleItem(null)
        setItems(json)
    }
    const onFieldUpdate = ({target: {name, value}}) => setEndpointFields({...endpointFields, [name]: value})


    return (
        <div className="App">
            <input value={endpoint} onChange={onFieldUpdate} name='endpoint' type="text"
                   placeholder="E.g.posts,comments, todos,etc"/>
            <br/>
            <br/>
            <input value={id} onChange={onFieldUpdate} name='id' type="text" placeholder="resourse id,e.g. 1,2,3"/>
            <br/>
            <br/>

            <button onClick={onSubmit}>fetch data</button>
            <hr/>
            <h1 style={{color: 'red'}}>{errorMassage}</h1>

            <div style={{width: '400px', textAlign: 'left', padding: '20px', whiteSpace: 'pre-wrap'}}>
                {singleItem &&
                JSON.stringify(singleItem, null, 2)}


            </div>
            <hr/>
            <div>
                {items.map(el => (<div>{el.id}-{el.title}-{el.name}</div>))}
            </div>
        </div>
    );
}

export default App;
