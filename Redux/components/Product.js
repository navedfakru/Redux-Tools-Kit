import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux';

const Product = ({item}) => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <View style={{padding: 20}}>
    <Text style={{ fontSize: 20 }}>{item.name}</Text>
    <Text style={{ fontSize: 20 }}>{item.price}</Text>
    <Text style={{ fontSize: 20 }}>{item.color}</Text>
    <Image
      style={{ width: 200, height: 200 }}
      source={{ uri: item.image }}
    />
    <Button title="Add to Card" onPress={() => handleAddToCart(item)} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


export default Product