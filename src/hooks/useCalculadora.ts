import { useRef, useState } from "react";


enum Operators {
    sumar, restar, multiplicar, dividir
}



export const useCalculadora = () => {
    
    const [lastNumber, setLastNumber] = useState<string>('0')
    const [number, setNumber] = useState<string>('100')
    
    const lastOperation = useRef<Operators>()

    const cleanCalc = () => {
        setNumber('0')
        setLastNumber('0')
    }

    const buildNumber = ( textNumber: string ) => {
        
        // No aceptar doble punto
        if(number.includes('.') && textNumber === '.') return

        if(number.startsWith('0') || number.startsWith('-0')){

            // Punto Decimal
            if( textNumber === '.') {
                setNumber(number + textNumber)

                // Evaluar si es otro cero y hay un punto
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)

                // Evaluar si es diferente de cero y no tiene punto
            } else if ( textNumber !== '0' && !number.includes('.')){
                setNumber(textNumber)

                // Evitar el 0000.0
            } else if ( textNumber === '0' && !number.includes('.')){
                setNumber(number)
            }else{
                setNumber(number + textNumber)
            }

        }else{
            setNumber( number + textNumber)
        }



    }

    const positiveNegative = () => {
        if(number.includes('-')) {
            setNumber( number.replace('-', ''))
        }else{
            setNumber( '-' + number)
        }
    }

    const btnDelete = () => {
        let negative = ''
        let tempNumber = number

        if( number.includes('-')){
            negative = '-'
            tempNumber = number.substring(1)
        }

        if(tempNumber.length > 1) {
            setNumber( negative + tempNumber.slice(0, -1))
        }else{
            setNumber('0')
        }
    }


    const changeLastNumber = () => {
        if( number.endsWith('.')) {
            setLastNumber(number.slice(0, -1))
        }else{
            setLastNumber(number)
        }
        setNumber('0')
    }

    const btnDividir = () => {
        changeLastNumber()
        lastOperation.current = Operators.dividir
    }
    const btnMultiplicar = () => {
        changeLastNumber()
        lastOperation.current = Operators.multiplicar
    }
    const btnRestar = () => {
        changeLastNumber()
        lastOperation.current = Operators.restar
    }
    const btnSumar = () => {
        changeLastNumber()
        lastOperation.current = Operators.sumar
    }


    const calcular = () => {

        const num1 = Number( number )
        const num2 = Number ( lastNumber )

        switch (lastOperation.current) {
            case Operators.sumar:
                setNumber( `${num1 + num2}` )
            break;

            case Operators.restar:
                setNumber( `${num2 - num1}` )
            break;

            case Operators.multiplicar:
                setNumber( `${num1 * num2}` )
            break;
                
            case Operators.dividir:

                if(num2 === 0) return 
                setNumber( `${num2 / num1}` )
                
            break;
                
            }
                
        setLastNumber('0')
    }

    return {
        lastNumber, 
        number, 
        cleanCalc, 
        positiveNegative, 
        buildNumber,
        calcular,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar
    }
}