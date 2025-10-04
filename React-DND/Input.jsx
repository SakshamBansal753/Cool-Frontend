import React, { useState } from 'react'

const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    if (!input.trim()) return
    onSubmit(input)
    setInput("")
  }

  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  )
}

export default Input
