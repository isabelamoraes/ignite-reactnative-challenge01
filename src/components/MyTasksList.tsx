import React from 'react';
import { FlatList, TouchableOpacity, View, Text, Image, FlatListProps } from 'react-native';

import paint from '../assets/icons/Paint.png';

interface FlatListHeaderProps {
  theme:{ header: {} };
  changeTheme: () => void;
}

function FlatListHeaderComponent({theme, changeTheme}: FlatListHeaderProps) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={theme.header}>Minhas tasks</Text>
      <TouchableOpacity activeOpacity={.7} onPress={changeTheme}>
        <Image source={paint} style={{width:25, height:25, marginTop:5,marginRight:10}}/>
      </TouchableOpacity>  
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  changeTheme: () => void;
  theme: {
    header: {},
    taskButton: {},
    taskMarker: {},
    taskText: {},
    taskButtonDone: {},
    taskMarkerDone: {},
    taskTextDone: {}
  }
}

export function MyTasksList({ tasks, onLongPress, onPress, changeTheme, theme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //Use onPress, onLongPress and style props
            style={item.done == true ? theme.taskButtonDone : theme.taskButton}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View
              testID={`marker-${index}`}
              //Use style prop 
              style={item.done == true ? theme.taskMarkerDone : theme.taskMarker}
            />
            <Text
              //Use style prop
              style={item.done == true ? theme.taskTextDone : theme.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} changeTheme={changeTheme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}