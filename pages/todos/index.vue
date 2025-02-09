<template>
  <div>
    <div class="container">
      <h1 class="main-title">Задачи</h1>
      <Todos :todos="todos" />

      <Sheet>
        <SheetTrigger as-child>
          <Button>Добавить задачу</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle class="text-center">Добавление задачи</SheetTitle>
          </SheetHeader>
          <form @submit.prevent="addTodo(todoTitle)">
            <div
              class="flex flex-col items-center gap-4 my-5 w-96 mx-auto border p-5 rounded-lg"
            >
              <label for="name" class="text-right">Название задачи</label>
              <input
                id="name"
                v-model="todoTitle"
                name="todo"
                placeholder="Введите задачу"
                class="py-2 px-4 rounded-lg w-full border"
              />
            </div>
            <SheetFooter class="!justify-center">
              <SheetClose as-child>
                <Button type="submit">Сохранить</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>
<script setup>
const todoTitle = ref('');

const { addTodo, fetchTodos } = useTodo();
const { data: todos } = useAsyncData('todos', fetchTodos);
</script>
