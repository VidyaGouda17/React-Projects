import { useState } from 'react';
import './App.css';
import { TodoConTextProvider } from './contexts';
import { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/todoItem';

function App() {
	const [todos, setTodos] = useState();

	const addTodo = (todo) => {
		setTodos((oldTodos) =>
			oldTodos?.length > 0
				? [{ id: new Date(), ...todo }, ...oldTodos]
				: [{ id: new Date(), ...todo }]
		);
	};

	const updateTodo = (id, todo) => {
		console.log(todo);
		setTodos((prevTodos) => {
			prevTodos?.map((prevTodo) => (prevTodo?.id === id ? todo : prevTodo));
		});
	};

	const deleteTodo = (id) => {
		setTodos((prevTodos) => {
			prevTodos.filter((prevTodo) => prevTodo.id !== id);
		});
	};

	const toggleTodo = (id) => {
		setTodos((prevTodos) => {
			prevTodos?.map((prevTodo) =>
				prevTodo?.id === id
					? (prevTodo.complete = {
							...prevTodo,
							completed: !prevTodo.completed,
					  })
					: prevTodo
			);
		});
	};

	useEffect(() => {
		let todosArray = [];
		if (JSON.parse(localStorage?.getItem('todos'))) {
			todosArray = JSON.parse(localStorage?.getItem('todos'));
			todosArray && todosArray?.length > 0 && setTodos(todosArray);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoConTextProvider
			value={{ todos, addTodo, toggleTodo, deleteTodo, updateTodo }}>
			<div className='bg-[#172842] min-h-screen py-8'>
				<div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
					<h1 className='text-2xl font-bold text-center mb-8 mt-2'>
						<TodoForm />
					</h1>
					<div className='mb-4'>{/* Todo form goes here */}</div>
					<div className='flex flex-wrap gap-y-3'>
						{todos &&
							todos?.length > 0 &&
							todos.map((todo) => (
								<div key={todo?.id} className='w-full'>
									<TodoItem todo={todo} />
								</div>
							))}
					</div>
				</div>
			</div>
		</TodoConTextProvider>
	);
}

export default App;
