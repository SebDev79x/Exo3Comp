import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.rover,{flex:.75}]}
        source={require('./assets/spirit.jpg')}>
      </Image>
      <Text style = {[styles.text,{flex:.25}]}>  Le Rover Opportunity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
 
  },
  rover: {
   width: '75%',
   border : '3px solid black',
   borderRadius: '15px'
  },
  text : {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'column',
    color : 'red',
    fontSize : '20px'
  }
});