import React, {useState} from 'react';
import {data} from 'constants';
import { MyCartComponent } from '../../components';

const MyCartScreen = ({navigation}) => {
  const [mycartList, setMyCartList] = useState(data.myCart);

  const updateQuantityHandler = (newQty, id) => {
    const newMyCartList = mycartList.map(el =>
      el.id === id ? {...el, qty: newQty} : el,
    );
    setMyCartList(newMyCartList);
  };

  const removeMycartList = id => {
    let newMyCartList = [...mycartList];
    let index = newMyCartList.findIndex(cl => cl.id === id);
    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
  };

  return (
    <MyCartComponent 
      mycartList={mycartList}
      updateQuantityHandler={updateQuantityHandler}
      removeMycartList={removeMycartList}
    />
  )
};

export default MyCartScreen;
