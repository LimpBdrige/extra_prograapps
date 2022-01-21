import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import CondicionesAtmosferiacasApi from '../api/Api';
import { CondicionAtmos } from '../interfaces/interfaces';
import AtomCard from '../components/AtomCard';

export const mainScreen = () => {
    const [data, setData] = useState<[CondicionAtmos] | null>(null);

    const getData = async () =>{
        const { data } = await CondicionesAtmosferiacasApi.get<[CondicionAtmos]>(
            '/condiciones-atmosfericas'
        );
        
        const { results } = data
        setData(results)
    }

    useEffect(()=>{
        getData();
    }, []);

    const renderCondiciones = data?.map((Condicion, index)=>{
        return <AtomCard key={`Card-${index}`} Condicion={Condicion}/>
    })

    return (
        <View>
            <View style={styles.Container}>
                <Text style={styles.headerText}>Condiciones Atmosfericas México</Text>
            </View>
            <View>
                <ScrollView>{renderCondiciones}</ScrollView>
            </View>
        </View>
        );
};

const styles = StyleSheet.create({
    Container:{
        height: 60,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#DD8725',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 22,
        color: '#ffffff',
        margin: 2,
    }
})