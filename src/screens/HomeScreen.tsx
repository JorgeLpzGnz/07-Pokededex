import React from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const { simplePokemonList, loadPokemons } = usePokemonPaginated()

    return (
        <>

            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View style={{alignItems: 'center'}}>
                <FlatList
                    data={ simplePokemonList }
                    keyExtractor={( pokemon ) => pokemon.id }
                    numColumns={ 2 }

                    // header 
                    ListHeaderComponent={ (
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10,
                        }}>
                            Pokedex
                        </Text> 
                    )}
                    renderItem={({ item }) => (<PokemonCard pokemon={ item }/>)}

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
            </View>



            
        </>
    )
}
