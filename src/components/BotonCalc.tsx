import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string
    color?: 'gray' | 'default' | 'orange'
    anchor?: boolean
    action: ( numeroTexto: string ) => void;
}

export const BotonCalc = ({text, color = 'default', anchor = false, action}:Props) => {

    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={[
                styles.button,            
                ( color === 'gray' ) ? styles.bgGray : ( color === 'orange' )
                ? styles.bgOrange : styles.bgDefault,
                anchor? styles.doubleButton : styles.singleButton
            ]}>
                <Text style={[
                    styles.buttonText,
                    (color === 'gray') ? styles.textGray : styles.textWhite
                ]}> {text} </Text>
            </View>
        </TouchableOpacity>
        
    )
}
