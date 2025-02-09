import type { Todo } from '~/types';

export const useTodo = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);

  const fetchTodos = async () => {
    const fetchedTodos = await $fetch<Todo[]>('http://localhost:4000/todos');

    todos.value = fetchedTodos;

    return fetchedTodos;
  };

  const addTodo = async (title: string) => {
    await $fetch('http://localhost:4000/todos', {
      body: JSON.stringify({ title: title, checked: false }),
      method: 'POST',
    });
  };

  const updateStatus = async (id: string, isChecked: boolean) => {
    const response = await $fetch(`http://localhost:4000/todos/${id}`, {
      method: 'PATCH',
      body: {
        checked: !isChecked,
      },
    });
    return response;
  };

  return {
    todos,
    fetchTodos,
    addTodo,
    updateStatus,
  };
});
