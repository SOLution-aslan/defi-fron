import { View, Text, StyleSheet } from "react-native";
export default function MyPageItem({item}) {
    return (
        <View style={styles.container}>
          <Text style={styles.type}>{item.type}</Text>
          <View style={styles.board}>
            <Text style={styles.boardText}>Your Earned</Text>
            <View style={styles.styleLine}/>
            <View style={styles.stylegridView}>
                <Text style={styles.reward1}>수령 가능</Text>
                <Text style={styles.reward2}>{item.earn}</Text>
            </View>
            <View style={styles.stylegridView}>
            <Text style={styles.reward1}>누적 보상 </Text>
                <Text style={styles.reward2}>{item.profit}</Text>
            </View>
            

          </View>
        </View>
      );
    
}


const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      borderColor: "white",
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      color: "white",
      backgroundColor: "rgba(50,50,50,1)",
    },
    styleLine:{
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom:10,
        marginLeft:10,
        marginRight:10
    },  
    type: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign:"center"
    },
    board:{
        backgroundColor: "black",
        borderWidth:1
    },
    boardText:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        marginBottom:10,
        marginLeft:10,
        marginTop:10
    },
    stylegridView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10
    }, 
    reward1: {
      color: "white",
      marginLeft:10,
      fontSize: 15,
    },
    reward2: {
        color: "white",
        marginRight:10,
        fontSize: 15,
    },
  });