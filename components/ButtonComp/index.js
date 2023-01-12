import {Text, TouchableOpacity} from "react-native";
import {button} from "../../style";

const ButtonComp = ({text, value, buttonStyle, textStyle, onClick}) => {
    return (
        <TouchableOpacity style={[buttonStyle, button.style]} onPress={() => onClick(value)}>
            <Text style={[textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComp;