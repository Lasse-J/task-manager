'use client'

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'

export default function Home() {
  const { theme } = useTheme()
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')

  // Loading tasks from local storage when the app initializes
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to local storage whenever the task list changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (taskName.trim() && dueDate) {
      setTasks([...tasks,
        { id: Date.now(),
          name: taskName,
          date: dueDate,
          completed: false,
          archived: false
        }
      ])
      setTaskName('')
      setDueDate('')
    }
  }

  const markAsCompleted = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, archived:true } : task
    ))
  }

  const panelStyles = theme === 'dark'
    ? 'bg-black/85 text-white'
    : 'bg-white/95 text-black'

  const inputStyles = theme === 'dark'
    ? 'bg-gray-800 text-white'
    : 'bg-white text-black'

	return (
    <div className="bg-black bg-wallpaper-steampunk bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className={`panel flex flex-col gap-6 p-12 rounded-xl w-3/4 sm:max-w-fit mx-auto sm:text-xl ${panelStyles}`}>
          
          <h1 className="sm:text-4xl text-xl font-bold">Task Manager</h1>
          
          <div className="input-section">
            <input 
              type="text"
              name="todo-input"
              className={`todo-input mx-3 rounded ${inputStyles}`}
              placeholder="Task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="date"
              className={`due-date-input mx-3 rounded ${inputStyles}`}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <Button className="create-button mx-5" onClick={addTask}>Add</Button>
          </div>

          <div className="todo-items">
            <h2 className="sm:text-2xl text-l font-semibold mb-2">Your Tasks</h2>
            {tasks
              .filter((task) => !task.completed)
              .map((task) => (
                <div 
                  key={task.id}
                  className="task-item flex justify-between text-left items-center p-2 mb-2"
                >
                  <div>
                    <p className="font-semibold">{task.name}</p>
                    <p className="text-sm text-gray-400">Due: {task.date}</p>
                  </div>
                  <Button
                    className="complete-button text-sm"
                    onClick={() => markAsCompleted(task.id)}
                  >
                    Mark as Done
                  </Button>
                </div>
              ))
            }
          </div>

          <div className="completed-items">
            {tasks
              .filter((task) => task.completed && !task.archived)
              .map((task) => (
                <div
                  key={task.id}
                  className="completed-task-item flex justify-between text-left items-center p-2 mb-2"
                >
                  <div>
                    <p className="font-semibold line-through">{task.name}</p>
                    <p className="text-sm text-gray-400">Due: {task.date}</p>
                  </div>
                  <Button
                    className="delete-button text-sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete task
                  </Button>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </div>
	)
}