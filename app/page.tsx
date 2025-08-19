"use client";

import { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (inputText.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: inputText,
        completed: false
      }]);
      setInputText('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Tarefas</h1>
        
        <div className="flex mb-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Adicionar nova tarefa..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Adicionar
          </button>
        </div>

        <div className="space-y-2">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 text-blue-600"
              />
              <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            Nenhuma tarefa ainda. Adicione uma acima!
          </p>
        )}
      </div>
    </div>
  );
}