import {StatusBar} from 'expo-status-bar';
import {Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ButtonComp from "./components/ButtonComp";
import {layout, text, button, styles} from "./style"
import React, {useState} from "react";

export default function App() {
    const [resultNumber, setResultNumber] = React.useState(0);

    const [prevNumber, setPrevNumber] = React.useState(0);
    const [operator, setOperator] = React.useState('');

    const [display, setDisplay] = React.useState('');

    const handleNumber = (newNumber) => {
        setDisplay(display + newNumber);
        if (resultNumber === 0) {
            setResultNumber(newNumber)
        } else {
            setResultNumber(resultNumber + newNumber)
        }
    }

    const calculate = (prevNumb, resultNumb, operator) => {
        switch (operator) {
            case "+":
                setResultNumber(prevNumb + resultNumb)
                break;
            case "-":
                setResultNumber(prevNumb - resultNumb)
                break;
            case "*":
                setResultNumber(prevNumb * resultNumb)
                break;
            case "/":
                setResultNumber(prevNumb / resultNumb)
                break;
        }
    }

    const handleOperation = (operation) => {
        switch (operation) {
            case 'clear':
                setResultNumber(0)
                setDisplay('')
                setResultNumber(0)
                break
            case 'c':
                setDisplay(display.substring(0, display.length - 1))
                setResultNumber(resultNumber.substring(0, display.length - 1))
                break
            case '+':
                setDisplay(display + 'x')
                setPrevNumber(resultNumber)
                setResultNumber(0);
                setOperator('+')
                break
            case '-':
                setDisplay(display + '-')
                setPrevNumber(resultNumber)
                setResultNumber(0);
                setOperator('-')
                break
            case 'x':
                setDisplay(display + '*')
                setPrevNumber(resultNumber)
                setResultNumber(0);
                setOperator('*')
                break
            case '/':
                setDisplay(display + '/')
                setPrevNumber(resultNumber)
                setResultNumber(0);
                setOperator('/')
                break
            case '=':
                calculate(Number(prevNumber), Number(resultNumber), operator)
                break
            default:
                break

        }

    }

    return (
        <SafeAreaView style={[styles.container, layout.spaceBetween]}>
            <View style={[layout.row, layout.horizontalEnd]}>
                <View style={layout.column}>
                    <Text style={text.result}>{resultNumber}</Text>
                    <View style={[layout.row, layout.horizontalEnd]}>
                        <Text>{display}</Text>
                    </View>
                </View>
            </View>

            <View style={[layout.column]}>
                <View style={[layout.row]}>
                    <ButtonComp buttonStyle={[button.clear, layout.flex1]}
                                textStyle={[text.buttonSize, text.white]} text="AC" value="clear"
                                onClick={handleOperation}/>
                    <ButtonComp buttonStyle={[button.style, button.operation]} textStyle={[text.buttonSize, text.white]}
                                value="/" text="/" onClick={handleOperation}/>
                </View>

                <View style={layout.row}>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="7" text="7" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="8" text="8" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="9" text="9" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.operation, layout.flex1]}
                                textStyle={[text.buttonSize, text.white]} value="x" text="x" onClick={handleOperation}/>
                </View>

                <View style={layout.row}>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="4" text="4" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="5" text="5" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="6" text="6" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.operation, layout.flex1]}
                                textStyle={[text.buttonSize, text.white]} value="-" text="-" onClick={handleOperation}/>
                </View>

                <View style={layout.row}>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="1" text="1" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="2" text="2" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="3" text="3" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.operation, layout.flex1]}
                                textStyle={[text.buttonSize, text.white]} value="+" text="+" onClick={handleOperation}/>
                </View>

                <View style={layout.row}>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="0"
                                text="0" onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="."
                                text="." onClick={handleNumber}/>
                    <ButtonComp buttonStyle={[button.style, button.number, layout.flex1]} textStyle={[text.buttonSize]}
                                value="c"
                                text="C" onClick={handleOperation}/>
                    <ButtonComp buttonStyle={[button.operation, layout.flex1]}
                                textStyle={[text.buttonSize, text.white]} value="=" text="=" onClick={handleOperation}/>
                </View>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}
