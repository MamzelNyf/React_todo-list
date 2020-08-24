import React from 'react';
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';



function App() {
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
          <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally."/>
          <Joke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            
            <Joke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />
            
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />


        </div>
      </div>
  )
}

export default App
