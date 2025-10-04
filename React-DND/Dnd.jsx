import React, { useState } from 'react'
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Column from './Column.jsx'
import Input from './Input.jsx'

const Dnd = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add Tasks to Home page" },
    { id: 2, title: "Add Tasks to login page" },
    { id: 3, title: "Learn page" }
  ])

  const addTasks = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }])
  }

  const getTaskPos = (id) => {
    return tasks.findIndex(task => task.id === id)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id === over.id) return

    setTasks((tasks) => {
      const oldIndex = getTaskPos(active.id)
      const newIndex = getTaskPos(over.id)
      return arrayMove(tasks, oldIndex, newIndex)
    })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="w-screen h-screen flex flex-col items-center font-bold gap-5 mt-5 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">My Tasks</h1>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addTasks} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  )
}

export default Dnd
