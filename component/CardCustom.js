import {Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {useNavigation} from "@react-navigation/native";

const CardCustoms = styled.View`
    padding: 10px;
    margin: 5px;
    border-radius: 13px;
    border-width: 1px;
    background-color: #F6F6F6;
    border-color: snow;
    width: 185px;
`;

const TitleCustom = styled.Text`
    font-size: 20px;
    color: #517fa4;
    padding: 10px;
`;

const ContentCustom = styled.Text`
    font-size: 15px;
    color: #517fa4;
    padding: 10px;
`;

const CardCustom = ({id, title, content}) => {

    const navigation = useNavigation();

    const data = {
        id: id,
        title: title,
        content: content,
    }

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Detail Note', {data: data})}
        >
            <CardCustoms>
                <TitleCustom>{title}</TitleCustom>
                <ContentCustom>{content}</ContentCustom>
            </CardCustoms>
        </TouchableOpacity>
    );
}

export default CardCustom;