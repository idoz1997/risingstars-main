import React, {useState, useEffect,useContext} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


export default function ProfilePageArtist() {


  const [fetchData,setFetchData]=useState({})

  const HandleFetchData = async ()=>{
    
  }



  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleBar}>
                <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
            </View>

            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={require("./assets/Golden_star.svg.png")} style={styles.image} resizeMode="center"></Image>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Julie</Text>
                <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Artist</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                    <Text style={[styles.text, styles.subText]}>Phone</Text>
                </View>
                <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                    <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                    <Text style={[styles.text, styles.subText]}>Kind</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                    <Text style={[styles.text, styles.subText]}>Email</Text>
                </View>
            </View>

            <View style={{ marginTop: 32 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.mediaImageContainer}>
                        <Image source={require("./assets/Golden_star.svg.png")} style={styles.image} resizeMode="cover"></Image>
                    </View>
                    <View style={styles.mediaImageContainer}>
                        <Image source={require("./assets/Golden_star.svg.png")} style={styles.image} resizeMode="cover"></Image>
                    </View>
                    <View style={styles.mediaImageContainer}>
                        <Image source={require("./assets/Golden_star.svg.png")} style={styles.image} resizeMode="cover"></Image>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFF"
  },
  text: {
      fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 20,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
  },
  active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 28,
      left: 10,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10
  },
  add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
  mediaImageContainer: {
      width: 180,
      height: 200,
      borderRadius: 12,
      overflow: "hidden",
      marginHorizontal: 10
  },
  mediaCount: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: "50%",
      marginTop: -50,
      marginLeft: 30,
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.38)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      shadowOpacity: 1
  },
  recent: {
      marginLeft: 78,
      marginTop: 32,
      marginBottom: 6,
      fontSize: 10
  },
  recentItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16
  },
  activityIndicator: {
      backgroundColor: "#CABFAB",
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 3,
      marginRight: 20
  }
});
