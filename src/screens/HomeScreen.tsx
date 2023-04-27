import React from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const { simplePokemonList, loadPokemons } = usePokemonPaginated()

    return (
        <>

            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <FlatList
                data={ simplePokemonList }
                keyExtractor={( pokemon ) => pokemon.id }
                renderItem={({ item }) => <Text>{ item.name }</Text>}

                // infine scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.4 }

                ListFooterComponent={ (
                    <ActivityIndicator 
                        style={{ height: 100}}
                        size={ 20 }
                        color="grey"
                    />
                )}
            />


            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20
            }}>Pokedex</Text> */}
        </>
    )
}
