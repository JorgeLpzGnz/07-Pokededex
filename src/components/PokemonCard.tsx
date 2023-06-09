import React, { useEffect, useRef, useState } from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterface';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/core';

const windowWith = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [ bgColor, setBgColor] = useState('grey')

    const isMounted = useRef(true)

    const navigator = useNavigation<any>()

    useEffect( () => {

        ImageColors.getColors( pokemon.picture, { fallback: 'grey'} )
            .then( colors => {

                if ( !isMounted.current ) return
                    
                ( colors.platform === 'ios' )
                    ? setBgColor( colors.primary || 'grey' )
                    : setBgColor( colors.dominant || 'grey' )

            })
        
        // si el componente esta desmontado evita settear el color
        return () => { isMounted.current = false }

    }, [])
    
    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress={() => 
                navigator.navigate(
                    'PokemonScreen', 
                    { 
                        simplePokemon: pokemon,
                        color: bgColor,
                    }
                ) 
            }
        >
            <View style={{ 
                ...styles.cardContainer,
                width: windowWith * 0.4,
                backgroundColor: bgColor,
            }}>
                {/* Nombre del pokemon y ID */}
                <View>
                    <Text style={ styles.name }>
                        {pokemon.name}
                        { '\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={ require('../assets/pokebola-blanca.png')}
                        style={ styles.pokebola }
                    />
                </View>


                <FadeInImage
                    uri={ pokemon.picture }
                    style={ styles.pokemonImage }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        // backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7.49,
        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: -0,
        overflow: 'hidden',
        opacity: 0.5,
    }
});
