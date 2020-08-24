import React from 'react';
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './jokesData'



function App() {
  // jokesData.map(joke => {
  //   return( <Joke question={joke.question} punchLine={joke.punchLine}
  //   ) 
  // })

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

  // Array of components, loop through jokeData to display each key values in a component 
  // Error = Each child in a list should have a unique "key" prop: add a key with a unique value in the component
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
  return (
      <div>
        <div className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        <div className="contacts">
          <ContactCard 
            contact={{name:"Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200", phone:"(212) 555-1234", email:"mr.whiskaz@catnap.meow" }}
          />
          <ContactCard 
          contact={{name:"Fluffykins" , imgUrl:"http://placekitten.com/400/200", phone:"(212) 555-2345", email:"fluff@me.com"}}
            /* name="Fluffykins" 
            imgUrl="http://placekitten.com/400/200" 
            phone="(212) 555-2345" 
            email="fluff@me.com" */
          />
          <ContactCard 
            contact={{name:"Destroyer", imgUrl:"http://placekitten.com/400/300", phone:"(212) 555-3456", email:"ofworlds@yahoo.com"}}
          />
          <ContactCard 
            contact={{name:"Felix", imgUrl:"http://placekitten.com/200/100", phone:"(212) 555-4567", email:"thecat@hotmail.com"}}
          />
        </div>
        <div className="joke">
          <h3>Jokes</h3>
          <Joke punchLine="It’s hard to explain."/>
          <Joke 
                question="Knock Knock?" 
                punchLine="Who's there?"
            />
          {jokeComponents}

        </div>
      </div>
  )
}

export default App
