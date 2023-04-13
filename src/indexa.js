import React from 'react'
import ReactDOM from 'react-dom'
import ES6LetConst from "./playground/ES6-let-const.js";
// import './index.css'

// const nav  = document.getElementById('nav')
let body = document.getElementById('body')


// let user = {
//     name: '',
//     age: 20,
//     location: 'Berlin',
//     hobbies: ['Art ', 'Music', 'Sports']
// };
// function getLocation(location) {
//     if (location) {
//         return <p className='msg'>Location: {location} </p>
//     }

//     else {

//     }
// }

// let bodycontent = <div id='welcomemsg'>
//     <p>Name :{user.name ? user.name : 'anonymous'}</p>
//     <p>Age : {user.age < 18 || user.age === 18 ? '' : user.age}</p>
//     {/* <p>Hobbies : {user.hobbies}</p>
//      */}
//     {user.hobbies && <p>Hobbies : {user.hobbies}</p>}
//     <p>{user.hobbies.length > 0 ? 'You have hobbies' : 'You dont have hobbies'}</p>
//     {getLocation(user.location)}

// </div>




// ReactDOM.render(navcontent, nav)
ReactDOM.render(<ES6LetConst />, body) 