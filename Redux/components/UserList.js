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

  let userListData = JSON.stringify(userList);

  return (
    <View style={styles.container}>
      {
        userList.length ?
        userList.map((item) => (<Text>{item.firstName}</Text>))
        :null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


export default UserList