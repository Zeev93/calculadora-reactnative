import { Text, View } from "react-native";
import { styles } from '../theme/appTheme';
import { BotonCalc } from "../components/BotonCalc";
import { useCalculadora } from "../hooks/useCalculadora";


const CalculadoraScreen = () => {

    const { 
        number, lastNumber,
        positiveNegative, 
        cleanCalc, calcular, buildNumber,
        btnDelete, btnDividir, btnMultiplicar, btnRestar, btnSumar
    }  = useCalculadora()


    return ( 
        <View style={styles.calculadoraContainer}>
            {
                lastNumber !== '0' && (
                    <Text style={ styles.smallResult }> {lastNumber} </Text>
                )
            }
            
            <Text 
                style={ styles.result }
                numberOfLines={1}
                adjustsFontSizeToFit
            > { number } </Text>

            <View style={styles.row}>
                <BotonCalc text={'C'} color={'gray'} action={cleanCalc} /> 
                <BotonCalc text={'+/-'} color={'gray'} action={ positiveNegative }/> 
                <BotonCalc text={'del'} color={'gray'} action={ btnDelete }/> 
                <BotonCalc text={'/'} color={'orange'} action={ btnDividir } />
            </View>
            <View style={styles.row}>
                <BotonCalc text={'7'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'8'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'9'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'X'} color={'orange'} action={ btnMultiplicar } />
            </View>
            <View style={styles.row}>
                <BotonCalc text={'4'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'5'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'6'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'-'} color={'orange'} action={ btnRestar } />
            </View>
            <View style={styles.row}>
                <BotonCalc text={'1'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'2'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'3'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'+'} color={'orange'} action={ btnSumar } />
            </View>
            <View style={styles.row}>
                <BotonCalc text={'0'} color={'default'} action={ buildNumber } anchor />
                <BotonCalc text={'.'} color={'default'} action={ buildNumber } /> 
                <BotonCalc text={'='} color={'orange'} action={ calcular } />
            </View>
        </View>
     );
}
 
export default CalculadoraScreen;