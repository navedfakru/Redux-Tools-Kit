import { StyleSheet, Text, View } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { getUserList } from './redux/action';
import { useEffect } from 'react';

const UserList = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer);

  useEffect(()=> {
    dispatch(getUserList())
  }, [])

  console.log("In Commponent data: ", userList)

  return (
    <View style={styles.container}>
      <Text>User List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


export default UserList