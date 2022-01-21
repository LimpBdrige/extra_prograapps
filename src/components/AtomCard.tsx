import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const AtomCard = (props) => {
    const { Condicion } = props;
    const { name, state, stateabbr, cityid, skydescriptionlong, tempc, relativehumidity, winddirectioncardinal, windspeedkm, latitude } = Condicion

    return (
        <View style={styles.AtmoCard}>
            <View style={styles.AtmoCardHeader}>
                <View>
                    <Text style={styles.Cities}>{name}/{state}</Text>
                    <Text style={styles.CityAbbr}>{stateabbr}</Text>
                </View>
                <View>
                    <Text style={styles.CityId}>#{cityid}</Text>
                </View>
            </View>
            <View style={styles.AtmoCardBody}>
                <View style={styles.AtomCardDsc}>
                    <Text style={styles.DescTitle}>Descripción:</Text>
                    <Text style={styles.DescText}>{skydescriptionlong}</Text>
                </View>
                <View style={styles.AtomCardData}>
                    <Text style={styles.AtomCardDataText}>Temperatura: {tempc}°C</Text>
                    <Text style={styles.AtomCardDataText}>Humedad: {relativehumidity}</Text>
                    <Text style={styles.AtomCardDataText}>Dirección del Viento: {winddirectioncardinal}</Text>
                    <Text style={styles.AtomCardDataText}>Velocidad del Viento: {windspeedkm}</Text>
                    <Text style={styles.AtomCardDataText}>Latitud: {latitude}</Text>
                </View>
            </View>
        </View>
    );
};

export default AtomCard;

const styles = StyleSheet.create({
    AtmoCard:{
        margin: 5,
        borderWidth: 2,
        borderBottomRightRadius: 20,
    },
    AtmoCardHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingBottom: 1,
        borderBottomWidth: 2,
        backgroundColor: '#186CA2'
    },
    AtmoCardBody:{
        padding: 7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    AtomCardDsc:{
        width: '55%',
    },
    AtomCardData:{
        width: '44%',
    },
    Cities:{
        fontSize: 18,
        color: '#fff'
    },
    CityAbbr:{
        fontSize: 15,
        color: '#000'
    },
    CityId:{
        fontWeight: 'bold',
        fontSize: 14
    },
    DescTitle:{
        fontWeight: 'bold',
        fontSize: 18
    },
    DescText:{
        fontSize: 16,
        textAlign: 'justify'
    },
    AtomCardDataText:{
        fontSize: 14,
    }
})