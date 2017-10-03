import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'underscore';

class App extends Component {

  


  render() {

    function getTime() {
      axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res);
      })
      return new Date();
    }

    const memoizedFn = _.memoize(getTime);


    

    

      // const slogan = _.pluck(data, 'slogan').map(e => <h3>{e}</h3>)

//       const list1 = [1,2,3,4]
//       const list2 = [2,3,5,6,7]
//       const list3 = [1,6,5,8,9,10]
//       const numsList = _.intersection(list1, list2, list3).map(e => <h1>{e}</h1>)
//       // to pull out values that are the same look below with intersection
//       const intersection = _.intersection(list1, list3)
// const martha = {
//       "id": 20,
//       "first_name": "Martha",
//       "last_name": "Carreyette",
//       "slogan": "1",
      // "email": "mcarreyettej@ft.com"
    // }
    // _.mapObject(martha, (val, key) => {
      
    // })

    return (
      <div className="App">
        <button onClick={ () => console.log( memoizedFn() ) } >GET TIME</button>
        <button onClick={ () => console.log( getTime() ) } >NOT MEMOIZED</button>
      </div>
    );
  }
}

export default App;
