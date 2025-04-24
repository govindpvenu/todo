import AddTask from "./components/AddTask";
import { TodoList } from "./components/TodoList";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  return (
    // <section className="h-full mt-12  w-full max-w-lg flex-1 flex flex-col items-center  gap-4">
    <main className="mt-10 h-full  w-full max-w-lg  flex flex-col items-center  gap-4">
      <AddTask />
      <TodoList />
    </main>
    // </section>
  );
}
