import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8">Todo App</h1>
      <TodoList />
    </div>
  );
}
