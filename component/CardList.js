import {RefreshControl, ScrollView, View} from "react-native";
import styled from "styled-components/native";
import CardCustom from "./CardCustom";
import {useCallback, useState} from "react";

const CardContainer = styled.View`
    flex-direction: row;
    padding: 10px;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;


const CardList = ({data, fetch}) => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetch();
        setRefreshing(false);
    }, [fetch]);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
        >
            <CardContainer>
                {data.map((item) => (
                    <View key={item.id}>
                        <CardCustom id={item.id} title={item.title} content={item.content}/>
                    </View>
                ))}
            </CardContainer>
        </ScrollView>
    );
}

export default CardList;