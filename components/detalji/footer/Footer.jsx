import { View, Text, TouchableOpacity} from "react-native";
import styles from "./footer.style";


const Footer = ({ kosar }) => {
  return (
    <View style={styles.container}>
      

      <TouchableOpacity
        style={styles.kosaricaBotun}
        onPress={ console.log("Dodaj u košaru")}
      >
        <Text style={styles.kosaricaText}>Dodaj u košaricu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;