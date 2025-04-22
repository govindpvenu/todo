import { ModeToggle } from "@/components/theme-toggle";
import AddTask from "./components/AddTask";
import { TodoList } from "./components/TodoList";
export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center ">
      <nav className="flex py-8 items-center justify-between gap-4 w-full px-8  ">
        <ModeToggle />
        <h1 className="text-4xl">Todo List</h1>

        <div className="bg-blue-500 rounded-full size-9"> </div>
      </nav>
      <section className="h-full mt-20 w-full max-w-lg flex-1 flex flex-col items-center  gap-4">
        <AddTask />
        <TodoList />
      </section>
    </main>
  );
}
