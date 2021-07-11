import axios from 'axios';
import React,{useState,useRef, Fragment} from 'react';
import Card from './Card';
import Navbar from '../design/Navbar';


const apiUrl = 'http://api.tvmaze.com/search/shows';


const Show = () => {
    const [cards, setCards] = useState([]);
     const formInput = useRef('')

  async function handleSubmit(e) {
      e.preventDefault();

      const search = formInput.current.value;
      const config = { params: { q: search } }
      const { data: cards } = await axios.get(apiUrl, config)
      if (!cards) return;
      setCards(cards)
      console.log(cards); 
      formInput.current.value = '';
    }

     

    return (
        <>
            <Navbar handleSubmit={handleSubmit}
            formInput={formInput} />
    
            <div className="container">
            <div  className="row">
           
                     <h1 className='text-center mt-2'>TV SHOW</h1>
                    {cards.map((card) => (
                      <Fragment key={card.id} >
                      <Card card={card}/>
                      </Fragment>
                ))}
                </div>
                </div> 
              
                
        </>

    );
}

export default Show;
