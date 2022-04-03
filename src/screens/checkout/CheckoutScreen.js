import React, {useEffect, useState} from 'react';
import { CheckoutComponent } from '../../components';

const CheckoutScreen = ({route}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let selectedCard = route.params;
    setSelectedCard(selectedCard);
  }, []);

  return (
    <CheckoutComponent selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
  );
};

export default CheckoutScreen;
