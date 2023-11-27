import { View, Text, Image ,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton,RectButton } from './Button';
const NFTCard = (props) => {
const navigation= useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Image
                source={props.data.image}
                resizeMode="cover"
                style={styles.cardImage}/>
            <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View>
        <Text>{props.data.name}</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
    },
    card:{
        width:"100%",
        height:250
    },
    cardImage:{
        width:"100%",
        height:"100%",
        resizeMode:'cover',
        borderTopLeftRadius:SIZES.font,
        borderTopRightRadius:SIZES.font,
    }

});

export default NFTCard;