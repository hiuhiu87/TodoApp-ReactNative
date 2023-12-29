import {View} from "react-native";
import styled from "styled-components/native";
import toDoService from "../service/toDoService";
import {useEffect, useState} from "react";

const TitleInput = styled.TextInput`
    font-size: 25px;
    color: #517fa4;
    padding: 10px;
`;

const ContentInput = styled.TextInput`
    font-size: 20px;
    color: #517fa4;
    padding: 10px;
`;


const DetailTodo = ({route, navigation}) => {

    const {data} = route.params;

    const [timeoutId, setTimeoutId] = useState(null);

    const handleUpdate = (id, title, content) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const idTimeout = setTimeout(() => {

            const data = {
                id: id,
                title: title,
                content: content,
                status: "DONE",
            }

            if (data.id) {
                toDoService
                    .updateToDoList(data)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                const dataAdd = {
                    title: title,
                    content: content,
                    status: "DOING",
                };
                toDoService
                    .addToDoList(dataAdd)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

        }, 1000);
        setTimeoutId(idTimeout);
    }

    return (
        <View>
            <TitleInput
                defaultValue={data.title}
                onChangeText={(text) => handleUpdate(data.id, text, data.content)}
            />
            <ContentInput
                defaultValue={data.content}
                multiline={true}
                onChangeText={(text) => handleUpdate(data.id, data.title, text)}
            />
        </View>
    );
}


export default DetailTodo;