import {
  StyleSheet,
  View,
  ScrollView,
  Button,
} from "react-native";
import Header from "./Header";
import Product from "./Product";
import { useNavigation } from "@react-navigation/native";

const ProductWrapper = () => {
  const navigation = useNavigation();
  const products = [
    {
      name: "Samsung Mobile",
      color: "white",
      price: 30000,
      image:
        "https://m.media-amazon.com/images/G/01/appcore/beats/AMZ_FamilyStripe_iPad_9_Gen._CB558419462_.png",
    },
    {
      name: "Apple Mobile",
      color: "black",
      price: 130000,
      image:
        "https://m.media-amazon.com/images/G/01/appcore/beats/AMZ_FamilyStripe_iPad_9_Gen._CB558419462_.png",
    },
    {
      name: "Nokia Mobile",
      color: "green",
      price: 20000,
      image:
        "https://m.media-amazon.com/images/G/01/appcore/beats/AMZ_FamilyStripe_iPad_9_Gen._CB558419462_.png",
    },
  ];

  return (
    <View style={styles.container}>
      <Button title="Go to User List" onPress={()=> navigation.navigate("User")} />
      <Header />
      <ScrollView>
        {products.map((item) => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductWrapper;
