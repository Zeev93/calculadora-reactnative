import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#1d1d1f',
    },
    calculadoraContainer:{
        paddingHorizontal: 10,
        flex: 1,
        justifyContent: 'flex-end'

    },
    result: {
        color: '#fafafa',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 5
    },
    smallResult: {
        color: 'rgba(250,250,250, .3)',
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    bgGray: {
        backgroundColor: '#9B9B9B'
    },
    bgOrange: {
        backgroundColor: '#FF9427'
    },
    bgDefault: {
        backgroundColor: '#2D2D2D'
    },

    textWhite: {
        color: '#fafafa',
    },

    textGray: {
        color: '#1d1d1f'
    },

    button: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    singleButton: {
        width: 80,
    },
    doubleButton: {
        width: 180,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '400'
    },
    
})