import { ModeToggle } from "@/components/theme-toggle";
import AddTask from "./components/AddTask";
import { TodoList } from "./components/TodoList";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { LogoutButton } from "./auth/_components/logout-button";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  return (
    <main className="h-screen flex flex-col items-center ">
      <nav className="flex py-12 items-center justify-between gap-4 w-full px-8  ">
        <h2 className="text-4xl">Tutodo</h2>
        <h3 className="text-3xl"> Hello {data.user.email}</h3>

        <div className="flex items-center gap-4">
          <LogoutButton />
          <ModeToggle />
          <div className="bg-blue-500 rounded-full size-9"> </div>
        </div>
      </nav>
      <section className="h-full  w-full max-w-lg flex-1 flex flex-col items-center  gap-4">
        <AddTask />
        <TodoList />
      </section>
    </main>
  );
}
