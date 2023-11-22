import { StyleSheet, Text, View, Image, Pressable, } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'
import RBSheet from "react-native-raw-bottom-sheet"
import NumberPlease from "react-native-number-please"
import { Picker } from '@react-native-picker/picker';




const ScreenOne = ({navigation}) => {
    const Numbers = Array.from({ length: 20 }, (_, index) => ({ label: `${index + 1}`, value: index + 1 }));


    const refRBSheet = useRef();
   

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [predictionType, setPredictionType] = useState(''); 

  const openUnderPrediction = () => {
    setPredictionType('under');
    refRBSheet.current.open();
  };

  const openOverPrediction = () => {
    setPredictionType('over');
    refRBSheet.current.open();
  };

    return (
        <SafeAreaView >
             <Text style={{ color: "#333333", fontSize: 16, fontWeight: "600", top:25, left:25 }}>Today’s Games</Text>
            <View style={{ width: 360, height: 389, top: 51, left: 25, borderWidth: 1, borderColor: "#f6f3fa", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, borderRadius: 10 }}>
                <View style={{ width: 360, height: 104, left: 0, borderWidth: 1, backgroundColor: "#6231ad", borderColor: "#6231ad" }}>
                    <View style={{ width: 107, height: 15, top: 19, left: 15 }}>
                        <Text style={{ color: "#d2baf5", fontSize: 12, fontWeight: "600", }}>UNDER OR OVER</Text>
                        <View style={{ width: 13, height: 13, top: -14, left: 105 }}>
                            <Feather name="info" size={13} color="#d2baf5" />
                        </View>
                    </View>
                    <View style={{ width: 148, height: 17, top: 2, left: 178, opacity: "75%", flexDirection: "row" }}>
                        <Text style={{ color: "#b296dc" }}>Starting in </Text>
                        <AntDesign name="clockcircle" size={17} color="#b296dc" style={{ left: 4 }} />
                        <Text style={{ color: "#b296dc", left: 10 }}>03:23:12</Text>

                    </View>
                    <View style={{ width: 250, height: 38, top: 15, left: 15 }}>
                        <Text style={{ color: "#d2baf5", fontSize: 14, fontWeight: "700" }}>Bitcoin price will be under</Text>
                        <Text style={{ color: "#ffffff", fontSize: 14, fontWeight: "700" }}>$24,524 at 7 a ET on 22nd Jan’21</Text>
                    </View>
                    <View style={{ width: 81.66, height: 75, top: -15, left: 258 }}>

                        <Image
                            source={require('../assets/bit.png')}
                            style={{}}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                <View style={{ width: 311, height: 40, top: 10, left: 32 }}>
                    <View style={{ width: 77, height: 42 }}>
                        <View style={{ width: 77, height: 15 }}>
                            <Text style={{ fontSize: 12, fontWeight: "500", height: 14.63, color: "#b5c0c8" }}> PRIZE POOL</Text>
                            <Text style={{ fontWeight: "600", fontSize: 14, height: 19.12, top: 10, left: 5 }}>$12,000</Text>

                        </View>
                        <View style={{ width: 77, height: 15, left: 100, top: -15 }}>
                            <Text style={{ fontSize: 12, fontWeight: "500", height: 14.63, color: "#b5c0c8" }}> UNDER</Text>
                            <Text style={{ fontWeight: "600", fontSize: 14, height: 19.12, top: 10, left: 5 }}>3.25x</Text>

                        </View>
                        <Pressable >
                            <View style={{ width: 77, height: 15, left: 180, top: -30 }}>
                                <Text style={{ fontSize: 12, fontWeight: "500", height: 14.63, color: "#b5c0c8" }}> OVER</Text>
                                <Text style={{ fontWeight: "600", fontSize: 14, height: 19.12, top: 10, left: 5 }}>1.25x</Text>

                            </View>
                        </Pressable>
                        <View style={{ width: 77, height: 15, left: 250, top: -45 }}>
                            <Text style={{ fontSize: 12, fontWeight: "500", height: 14.63, color: "#b5c0c8" }}> Entry Fees</Text>
                            <Text style={{ fontWeight: "600", fontSize: 14, height: 19.12, top: 10, left: 5 }}>5  <FontAwesome name="circle" size={18} color="gold" /></Text>

                        </View>
                    </View>

                </View>
                <Text style={{ top: 37, fontSize: 14, color: "#727682", left: 35 }}>What’s your prediction?</Text>
             
                <Pressable style={{ backgroundColor: "#452c55", width: 147, height: 40, borderRadius: 45, top: 55, left: 32, flexDirection: "row" }} onPress={openUnderPrediction}>
                    <Entypo name="arrow-down" size={18} color="white" style={{ top: 10, left: 30 }} />
                    <Text style={{ fontSize: 16, color: "white", left: 35, top: 8, fontWeight: "600" }} >Under</Text>
                    
                </Pressable>
                
             
                
                    <Pressable style={{ backgroundColor: "#6231ad", width: 147, height: 40, borderRadius: 45, top: 15, left: 200, flexDirection: "row" }}onPress={openOverPrediction}>
                        <Entypo name="arrow-up" size={18} color="white" style={{ top: 10, left: 35 }} />
                        <Text style={{ fontSize: 16, color: "white", left: 40, top: 8, fontWeight: "600" }} >Over</Text>
                    </Pressable>
                
                <View style={{ width: 360, height: 110, backgroundColor: "#f6f3fa", top: 30, }}>
                    <View style={{ width: 311, height: 69.01, top: 10, left: 20, flexDirection: "row" }}>
                        <View style={{ width: 311, height: 20, top: 10, flexDirection: "row" }}>
                            <Ionicons name="person" size={17} color="#727682" />
                            <Text style={{ color: "#727682", fontSize: 14, fontWeight: "600" }}>  335 Players</Text>
                        </View>
                        <View style={{ width: 311, height: 20, top: 10, flexDirection: "row", left: -100 }}>
                            <FontAwesome name="area-chart" size={17} color="#727682" />
                            <Text style={{ color: "#727682", fontSize: 14, fontWeight: "600" }}>  View chart</Text>
                        </View>
                    </View>
                    <Progress.Bar progress={0.7} width={300} height={8} color='#fe4190' borderColor='#fe4190' unfilledColor='#2dabad' style={{ left: 30, top: -10 }} />
                    <View style={{ width: 331, height: 15, left: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: "#b5c0c8" }}>
                            232 predicted under
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: "#b5c0c8" }}>
                            123 predicted over
                        </Text>

                    </View>
                    
                </View>

            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        
                        
                    },
                    draggableIcon: {
                        backgroundColor: "#b5c0c8",
                        width: 50,
                        height:4
                        
                    },
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    
                }}
                height={450}
            >
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#333333', top:20, left:20}}>
            Your Prediction is {predictionType === 'over' ? 'over' : 'under'}
          </Text>

                <View style={{ width: 360, height: 254, top: 50, left: 20 }}>
                    <Text style={{ color: "#727682" }}>Entery Tickets</Text>
                    <Picker
                        ref={pickerRef}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        {Numbers.map((numberItem, index) => (
                            <Picker.Item key={index} label={numberItem.label} value={numberItem.value} />
                        ))}
                    </Picker>
                    <View style={{ width: 360, height: 36, flexDirection:"row", justifyContent:"space-between" }}>
                        <View style={{ width: 74, height: 36 }}>
                            <Text style={{ color: "#b5c0c8", fontWeight: "500", fontSize: 12 }}>You can win</Text>
                            <Text style={{ color: "#03a67f", fontWeight: "600", fontSize: 14 }}>$2000</Text>
                        </View>
                        <View style={{ width: 68, height: 17, flexDirection:"row" }}>
                            <Text style={{ color: "#727682", fontWeight: "500", fontSize: 12, right:5 }}>Total</Text>
                            <FontAwesome name="circle" size={15} color="gold" />
                            <Text style={{ fontWeight: "600", fontSize: 14, height: 19.12, left: 5, top:-2 }}>5 </Text>
                        </View>


                    </View>
                    <Pressable style={{ backgroundColor: "#6231ad", width: 360, height: 40, borderRadius: 33, top:10, flexDirection: "row", justifyContent:"center"}} onPress={() =>{refRBSheet.current.close(); navigation.navigate('AppNavigator') }}>
                        
                        <Text style={{ fontSize: 16, color: "white",top:10, fontWeight: "600" }}>Submit my prediction</Text>
                    </Pressable>
                </View>



            </RBSheet>

        </SafeAreaView>
    )
}

export default ScreenOne

const styles = StyleSheet.create({})