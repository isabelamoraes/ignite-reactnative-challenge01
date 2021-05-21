import React, { useState } from 'react';
import { View, Alert, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

import styles from '../styles/styles';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState(styles.theme1)

  function handleAddTask(newTaskTitle: string) {
    //Add new task if it's not empty
    if (newTaskTitle != "") {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, data]);
    } else {
      Alert.alert("Task não informada 😔", "Por favor, digite uma tarefa para adicionar")
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //Mark task as done if exists
    let newTask = [...tasks];

    tasks.map((task, index) => {
      console.log("map")
      if (task.id == id) {
        newTask[index].done = !task.done;
      }
    });

    setTasks(newTask)
  }

  function handleRemoveTask(id: number) {
    //Remove task from state
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  }

  function handleChangeTheme(): void {
    switch (theme) {
      case styles.theme1:
        setTheme(styles.theme2)
        break;
      case styles.theme2:
        setTheme(styles.theme3)
        break;
      case styles.theme3:
        setTheme(styles.theme4)
        break;
      case styles.theme4:
        setTheme(styles.theme5)
        break;
      case styles.theme5:
        setTheme(styles.theme6)
        break;
      case styles.theme6:
        setTheme(styles.theme1)
        break;
      default:
        break;
    }
  }

  return (
    <View style={theme.home}>
      <Header theme={theme.header}/>

      <TodoInput addTask={handleAddTask} theme={theme.todoInput} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        changeTheme={handleChangeTheme}
        theme={theme.task}
      />
    </View>
  )
}