import React, {useState} from 'react';
import { FoodDetailComponent } from '../../components';

const FoodDetailScreen = ({navigation, route}) => {
  const foodItem = route?.params;
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <FoodDetailComponent 
      foodItem={foodItem} 
      selectedSize={selectedSize}
      quantity={quantity}
      setQuantity={setQuantity}
      setSelectedSize={setSelectedSize}
    />
  );
};

export default FoodDetailScreen;
