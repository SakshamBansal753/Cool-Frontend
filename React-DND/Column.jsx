import React from 'react'
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Task from './Task.jsx'

const Column = ({ tasks }) => {
  return (
    <div className="bg-gray-100 p-5 w-full max-w-md flex flex-col gap-3 rounded-xl shadow">
      <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))}
      </SortableContext>
    </div>
  )
}

export default Column
