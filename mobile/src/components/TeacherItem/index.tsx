import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './styles';


function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png' }} 
                />
                
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Sidney Miranda</Text>         
                    <Text style={styles.subject}>React Native</Text>         
                </View> 
            </View>

            <Text style={styles.bio}>
                    Entusiasta das melhores tecnologias no desenvolvimento de sistemas web e mobile.
                    {'\n'}{'\n'}
                    Apainoxado por músicas eletrônicas, astronomia, games, praias e outras coisas.
            </Text>  

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora{ '   ' }
                    <Text style={styles.priceValue}>R$ 80, 00</Text>              
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                            <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    );
}

export default TeacherItem;