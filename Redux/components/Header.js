import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux'

const Header = () => {
  const cartData = useSelector((state) => state.reducer)
  const [cartItems, setCartItems] = useState(0)
  // console.log(cartData.length)
  useEffect(()=> {
    setCartItems(cartData.length)
  }, [cartData])

  return (
    <View style={[styles.container, {padding: 20, backgroundColor: 'orange'}]}>
      <Text style={{fontSize: 34, alignSelf: 'flex-end', fontWeight: 'bold', color: 'white'}}>{cartItems}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


export default Header