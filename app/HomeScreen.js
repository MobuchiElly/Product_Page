import { 
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ImageBackground
} from 'react-native';


function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.menuBar}>Home Page</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    menuBar: {
      width: '100%',
      height: '50',

    }

})

export default HomeScreen;

