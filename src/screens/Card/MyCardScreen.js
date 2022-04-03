import React, {useState} from 'react';
import { MyCardComponent } from '../../components';

const MyCardScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <MyCardComponent selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
  );
};


export default MyCardScreen;
