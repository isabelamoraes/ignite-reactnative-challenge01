import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  theme: {
    inputContainer: {
    },
    input: {
    },
    inputIOSShadow: {
    },
    inputAndroidShadow: {
    },
    addButton: {
    },
    colorPlaceholder: string
  }
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    //Call addTask and clean input value 
    addTask(task)
    setTask('')
  }

  return (
    <View style={[theme.inputContainer, Platform.OS === 'ios' ? theme.inputIOSShadow : theme.inputAndroidShadow]}>
      <TextInput
        style={theme.input}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        placeholderTextColor={theme.colorPlaceholder}
        //Use value, onChangeText and onSubmitEditing props
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={theme.addButton}
        //onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}
