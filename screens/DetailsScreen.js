import {StyleSheet, View} from "react-native";
import NoteSreen from "./NoteSreen";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }
});

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <NoteSreen/>
        </View>
    );
}


export default DetailsScreen;