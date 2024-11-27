'use client'

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'

export default function Home() {
  const { theme } = useTheme()
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [isDark, setIsDark] = useState(true)

  // Set dark mode when first loaded
  useEffect(() => {
    if (theme) {
      setIsDark(theme === 'dark')
    }
  }, [theme])

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
          deleted: false,
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
      task.id === taskId ? { ...task, deleted: true } : task
    ))
  }

  const archiveTask = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, archived:true } : task
    ))
  }

  const panelStyles = isDark
    ? 'bg-black/85 text-white'
    : 'bg-white/95 text-black'

  const inputStyles = theme === 'dark'
    ? 'bg-gray-800 text-white'
    : 'bg-white text-black'

	return (
    <div className="bg-black bg-wallpaper-steampunk bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className={`panel flex flex-col gap-1 sm:gap-6 p-1 sm:p-12 rounded-xl max-w-fit mx-auto text-base sm:text-lg ${panelStyles}`}>
          
          <h1 className="sm:text-4xl text-xl font-bold">Task Manager</h1>
          
          <div className="input-section">
            <input 
              type="text"
              name="todo-input"
              className={`todo-input mx-1 sm:mx-3 max-w-fit rounded ${inputStyles}`}
              placeholder="Task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="date"
              className={`due-date-input mx-1 sm:mx-3 rounded ${inputStyles}`}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <Button className="create-button my-1 sm:my-0 mx-5" onClick={addTask}>Add</Button>
          </div>

          <div className="todo-items">
            <h2 className="sm:text-2xl text-lg font-semibold mb-2">Your Tasks</h2>
            {tasks
              .filter((task) => !task.completed && !task.deleted && !task.archived)
              .map((task) => (
                <div 
                  key={task.id}
                  className="task-item flex text-left justify-between items-center p-1 mb-2"
                >
                  <div>
                    <p className="text-sm sm:text-base font-semibold">{task.name}</p>
                    <p className="text-sm text-gray-400">Due: {task.date}</p>
                  </div>
                  <div>
                    <Button
                      className="complete-button text-sm mx-2"
                      onClick={() => markAsCompleted(task.id)}
                    >
                      Done
                    </Button>
                    <Button
                      className="delete-button text-sm"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="completed-items">
            {tasks
              .filter((task) => task.completed && !task.deleted && !task.archived)
              .map((task) => (
                <div
                  key={task.id}
                  className="completed-task-item flex justify-between text-left items-center p-1 mb-2"
                >
                  <div>
                    <p className="font-semibold line-through">{task.name}</p>
                    <p className="text-sm text-gray-400">Due: {task.date}</p>
                  </div>
                  <Button
                    className="archive-button text-sm"
                    onClick={() => archiveTask(task.id)}
                  >
                    Archive
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