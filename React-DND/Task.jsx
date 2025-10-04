import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Task = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm border border-gray-200 cursor-grab active:cursor-grabbing"
    >
      <input type="checkbox" className="w-4 h-4 text-blue-500 rounded" />
      <span>{title}</span>
    </div>
  )
}

export default Task
