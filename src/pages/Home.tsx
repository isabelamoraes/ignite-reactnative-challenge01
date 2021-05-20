import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //Add new task if it's not empty
    if (newTaskTitle != "") {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, data]);
    }else{
      Alert.alert("Task não informada 😔", "Por favor, digite uma tarefa para adicionar")
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //Mark task as done if exists
    let newTask = [...tasks];

    tasks.map((task, index) => {
      console.log("map")
      if(task.id == id){
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

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}