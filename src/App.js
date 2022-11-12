import './App.css';
import {useState} from "react";
import Card from './components/Card';

//array of card objects
const cardObjects =[
  {
    name: "Card1",
    'src': '/images/Bird.png'
  },
  {
    name: "Card2",
    'src': '/images/Cat.png'
  },
  {
    name: "Card3",
    'src': '/images/Flamingo.png'
  },
  {
    name: "Card4",
    'src':'/images/Hamster.png'
  },
  {
    name: "Card ",
    'src': '/images/Owl.png'
  }
];

function App() {
  const [cards, setCards]=useState([])
  
  const [choiceOne, setChoiceOne]= useState(null) //first card choice they make //when user clicks first card, updates Choiceone to be that card
  const [choiceTwo, setChoiceTwo]= useState(null) //second card choice they make //when user clicks second card, updates Choicetwo to be that card


  //function will take the card objects, duplicate them,  and put them all in the new array
  const shuffleCards = ()=> {
    const shuffledCards=[...cardObjects, ...cardObjects]
      .sort(() => Math.random() - 0.5)
      .map((cardobj)=>({ ...cardobj, id: Math.random()})) //adds id property for every shuffle

      setCards(shuffledCards)
  }


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="container">
        {cards.map(card=>(
          <Card key= {card.id} 
               card={card}>
          </Card>
        ))}
      </div>
     
    </div>
  );
}

export default App;
