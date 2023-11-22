import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreenn = () => {
    const [activeTab, setActiveTab] = useState('Games Played');

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const data = [
        {
            title: 'First Stripe Earned',
            subtitle: 'Top 10% of highest spending players in a month',
            iconPath: '/Users/ayushpriyadarshi/Desktop/Viamagus/ViamagusApp/assets/icon copy.jpg',
        },
        {
            title: 'Born Winner',
            subtitle: 'Top 10% of highest spending players in a month',
            iconPath: '/Users/ayushpriyadarshi/Desktop/Viamagus/ViamagusApp/assets/icon.jpg',
        },
        {
            title: 'Trader of the Month',
            subtitle: 'Won 7 under-over games in a row',
            iconPath: '/Users/ayushpriyadarshi/Desktop/Viamagus/ViamagusApp/assets/icon copy.jpg',
        },
        {
            title: 'Rising Star',
            subtitle: 'Top 10% of highest spending players in a month',
            iconPath: '/Users/ayushpriyadarshi/Desktop/Viamagus/ViamagusApp/assets/icon.jpg',
        },
        {
            title: 'Jackpot',
            subtitle: 'Top 10% of highest spending players in a month',
            iconPath: '/Users/ayushpriyadarshi/Desktop/Viamagus/ViamagusApp/assets/icon copy.jpg',
        },
        {
            title: 'Impossible',
            subtitle: 'Top 10% of highest spending players in a month',
            iconPath: '/Users/ayushpriyadarshi/Desktop/Viamagus/ViamagusApp/assets/icon.jpg',
        },
        {
            title: 'First Stripe Earned',
            subtitle: 'Top 10% of highest spending players in a month',
            iconPath: '/Users/ayushpriyadarshi/Desktop/Viamagus/ViamagusApp/assets/icon.jpg',
        },
    ];

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, padding: 20, borderWidth: 1, borderRadius: 10, width: 350, top: 15, backgroundColor:"white", borderColor:"white" }}>
            <Image
                source={require('../assets/icon.jpg')}
                style={{ width: 50, height: 50, left: -10 }}
                resizeMode="contain"
            />

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16, padding: 5, }}>{item.title}</Text>
                <Text style={{ color: 'grey', left: 5 }}>{item.subtitle}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView >
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => (
                    <>
                    <View style={{backgroundColor:"white", width:400, height: 470}}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", top: 10 , backgroundColor:"white"}}>
                            <Image
                                source={require('../assets/dhhus.png')}
                                style={{ width: 40, height: 40, marginBottom: 20, left: 10 }}
                                resizeMode="contain"
                            />

                            <Text style={{ fontWeight: '400', fontSize: 20, color: 'grey', top: 5 }}>Profile</Text>

                            <Image
                                source={require('../assets/msg.jpg')}
                                style={{ width: 40, height: 40, marginTop: 0, left: -5}}
                                resizeMode="contain"
                            />
                        </View>

                        <View style={{ width: 343, height: 215, top:30, backgroundColor:"white" }}>
                            <Image
                                source={require('../assets/IMG_3491.jpg')}
                                style={{ width: 76, height: 75, top: -20, left: 165 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: 14, fontWeight: "500", left: 160, color: "#333333", top: -20 }}>
                                Jina Simons
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 500, color: "#727682", left: 170, top: -10 }}> 6000 Pts</Text>
                            <Text style={{ fontSize: 14, fontWeight: 500, color: "#727682", left: 30, top: 0 }}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here! </Text>
                        </View>

                        <View style={{ width: 79, height: 20, flexDirection: "row", left: 160, top: 0 }}>
                            <MaterialCommunityIcons name="logout" size={24} color="#727682" style={{}} />
                            <Text style={{ fontSize: 14, fontWeight: "500", color: "#727682" }}>
                                Logout
                            </Text>
                        </View>
                        <Image
                                source={require('../assets/IMG_3492.jpg')}
                                style={{ width: 26.87, height: 31, top:30, left:190 }}
                                resizeMode="contain"
                            />
                        

                        <View
                            style={{ width: 360, height: 103, marginTop: 15, borderWidth: 1, borderRadius: 5, borderColor:"#eeeaf3", left:20}}
                            resizeMode="contain"
                        >
                            <View style={{ width: 255, height: 63, left: 45, top: 15 }}>
                                <View style={{ width: 102, height: 63, }}>

                                    <Text style={{ color: "#727682", fontWeight:"600" }}>Under or Over</Text>

                                    <Ionicons name="md-arrow-up-circle" size={26} color="#48c547" style={{top:5}} />
                                    <Text style={{ fontSize: 24, fontWeight: 700, left: 40, top: -22 }}>81% </Text>
                                </View>
                                <View style={{ width: 102, height: 63, left: 151,  top:-65 }}>

                                    <Text style={{ color: "#727682", fontWeight:"600" }}>Top 5</Text>

                                    <Ionicons name="md-arrow-down-circle" size={26} color="#f73232" style={{top:5}} />




                                      
                                        
                                    
                                    <Text style={{ fontSize: 24, fontWeight: 700, left: 40, top: -22 }}>-51% </Text>
                                </View>
                            </View>

                        </View>
                        </View>



                        <View style={{ top: 5,   backgroundColor:"white",}}>
                            <View style={{left:130}}>
                            <Pressable onPress={() => switchTab('Games Played')} style={styles.tabG}>
                                <Text style={[styles.tabText, { color: activeTab === 'Games Played' ? 'purple' : 'grey' }]}>Games Played</Text>
                            </Pressable>
                            <Pressable onPress={() => switchTab('Badges')} style={styles.tabB}>
                                <Text style={[styles.tabText, { color: activeTab === 'Badges' ? 'purple' : 'grey' }]}>Badges</Text>
                            </Pressable>

                            <View style={[styles.highlightLine, { left: activeTab === 'Games Played' ? -130 : 80 }]} />
                            </View>
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};

export default HomeScreenn;

const styles = StyleSheet.create({
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabG: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        left: -120,
        top: 20
    },
    tabB: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        left: 120,
        top:-17
    },
    tabText: {
        fontSize: 18,
        fontWeight: "500"
    },
    highlightLine: {
        height: 2,
        width: 187.5,
        backgroundColor: 'purple',
        position: 'absolute',
        bottom: 0,
    },
});


