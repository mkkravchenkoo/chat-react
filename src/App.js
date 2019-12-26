import React, {useEffect} from 'react';
import LoginForm from "./components";

const App = () => {

    useEffect(() => {

        fetch('https://radiant-taiga-91549.herokuapp.com/users')
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((e) => console.log(e))

    },[]);

  return (
    <div className="App">
      <LoginForm/>
    </div>
  );
}

export default App;
