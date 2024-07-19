import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 34, padding: 20, textAlign: 'right', fontWeight: 'bold', backgroundColor: 'orange', color: 'white'}}>0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


export default Header