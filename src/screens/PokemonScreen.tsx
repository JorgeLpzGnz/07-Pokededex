import React from 'react'
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';

// @param RootStackParams es el tipo de props que son
// @param 'PokemonScreen' la pantalla en la que me encuentro

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ( { navigation, route }: Props) => {

    const { simplePokemon } = route.params

    
    return (
        <View>
            <Text>{ simplePokemon.name }</Text>
        </View>
    )
    
}
