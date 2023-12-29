import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import toDoService from "../service/toDoService";
import CardList from "../component/CardList";
import {useNavigation} from "@react-navigation/native";
import styled from "styled-components/native";
import {Button} from "@rneui/themed";


const Container = styled.View`
    padding: 5px;
    border-radius: 13px;
    background-color: white;
    transform: translate(0px, -80px);
    z-index: 10000;
    align-items: center;
`;

const NoteSreen = () => {

    const [todos, setTodos] = useState([]);

    const navigation = useNavigation();

    const newNote = {
        title: 'New Note',
        content: 'New Content',
        status: 'DOING',
    };

    const getAllToDoList = () => {
        toDoService
            .getToDoList()
            .then((response) => {
                console.log(response.data)
                setTodos(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const noData = () => {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Text style={styles.text}>No Data</Text>
            </View>
        );
    }

    useEffect(() => {
        getAllToDoList();
    }, []);

    useEffect(() => {
            return navigation.addListener('focus', () => {
                getAllToDoList();
            });
        }
        , [navigation]);

    return (
        <View style={styles.container}>
            <View style={{
                height: '90%',
                marginBottom: 85,
            }}>
                {todos.length > 0 ? <CardList fetch={getAllToDoList} data={todos}/> : noData()}
            </View>
            <Container>
                <Button
                    onPress={() => navigation.navigate('Detail Note', {data: newNote})}
                    title="Add Note"
                    containerStyle={{
                        width: '60%',
                        height: 40,
                        borderRadius: 5,
                    }}
                    buttonStyle={{
                        backgroundColor: '#517fa4',
                    }}
                />
            </Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 30,
        color: '#517fa4',
        padding: 10
    }
});

export default NoteSreen;