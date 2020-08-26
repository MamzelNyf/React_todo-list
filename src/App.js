import React from 'react';
import Todo from './components/Todo'

// import SetState from './components/SetState'
// import Loading from './components/LoadingConditional'
// import Login from './components/Login'
// import Message from './components/Messages'
import FetchApi from './components/FetchApi'




function App () {
    return (
      <div>
        <Todo />
        {/* <SetState /> */}  
        {/* <Loading /> */}  
        {/* <Login /> */}
        {/* <Message /> */}
        <FetchApi />
      </div>
    )
  }

export default App
