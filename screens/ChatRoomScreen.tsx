import React from 'react'
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FlatList } from 'react-native-gesture-handler';
import ChatMessage from '../components/ChatMessage'

import chatRoomData  from '../data/Chats';


const ChatRoomScreen = () => {

    const route = useRoute();

    console.log(route.params)

    return (
        <FlatList
            data={chatRoomData.messages}
            renderItem={({item}) => <ChatMessage message={item}/>
            }            
        />
    );
}

export default ChatRoomScreen;