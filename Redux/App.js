import { Provider } from "react-redux";
import store from "./components/redux/store";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/ProductWrapper";
import UserList from "./components/UserList";

const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProductWrapper} />
          <Stack.Screen name="User" component={UserList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;