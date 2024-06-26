import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLocationDot, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useCart} from "viewModels/CarContext.tsx";
import {useTable} from "viewModels/TableContext.tsx";

// @ts-ignore
const Location = ({setSidebarVisible, navigation}) => {
    // @ts-ignore
    const { cart } = useCart();
    // @ts-ignore
    const { selectedTable, setSelectedTable } = useTable();


    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            height: 44,
            width: '100%',
            paddingHorizontal: 20,
        }}>
            <Pressable
                onPress={() => {
                    navigation.navigate('Home')
                    setSelectedTable(null)
                }}
                style={{
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
            }}>
                <FontAwesomeIcon style={{
                    color: '#a1af9e',
                    margin: 10,
                }} icon={faLocationDot}/>
                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 16,
                        lineHeight: 22,
                        color: '#a1af9e',
                    }}
                >
                    { selectedTable ? selectedTable.name : 'La casa de la abuela'}
                </Text>
            </Pressable>
            <Pressable style={{position: 'relative'}} onPress={() => setSidebarVisible(true)}>
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    size={20}
                    color='#a1af9e'
                />
                {
                    cart?.length ? (
                        <View style={{
                            position: 'absolute',
                            top: -6,
                            right: -10,
                            borderRadius: 100,
                            backgroundColor: '#1F985E',
                            width: 12,
                            height: 12,
                            zIndex: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{ color: 'white', fontSize: 8, fontWeight: '600'}}>{cart?.length}</Text>
                        </View>
                    ) : ''
                }
            </Pressable>
        </View>
    );
};

export default Location;