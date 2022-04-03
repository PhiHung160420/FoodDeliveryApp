import React, {useEffect, useState} from 'react';
import { AddCardComponent } from '../../components';

const AddCardScreen = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    let Card = route.params;
    setSelectedCard(Card);
  }, []);

  return (
    <AddCardComponent 
      selectedCard={selectedCard}
      cardNumber={cardNumber}
      cardHolderName={cardHolderName}
      expiryDate={expiryDate}
      cvv={cvv}
      isRemember={isRemember}
      setCardNumber={setCardNumber}
      setCardHolderName={setCardHolderName}
      setExpiryDate={setExpiryDate}
      setCvv={setCvv}
      setIsRemember={setIsRemember}
    />
  )
};

export default AddCardScreen;
