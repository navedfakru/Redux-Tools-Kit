import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { addToCart, removeToCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Product = ({item}) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }
  const handleRemoveToCart = (item) => {
    dispatch(removeToCart(item))
  }

  useEffect(()=> {
    if(cartItems && cartItems.length){
      cartItems.forEach((element) => {
        if(element.name === item.name){
          setIsAdded(true)
        }
      })
    }
  }, [cartItems])

  return (
    <View style={{padding: 20}}>
    <Text style={{ fontSize: 20 }}>{item.name}</Text>
    <Text style={{ fontSize: 20 }}>{item.price}</Text>
    <Text style={{ fontSize: 20 }}>{item.color}</Text>
    <Image
      style={{ width: 200, height: 200 }}
      source={{ uri: item.image }}
    />
    {
      isAdded ? 
      <Button title="Remove to Card" onPress={() => handleRemoveToCart(item)} /> 
      :
      <Button title="Add to Card" onPress={() => handleAddToCart(item)} /> 
    }
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


export default Product