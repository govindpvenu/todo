import { ModeToggle } from "@/components/theme-toggle";
import AddTask from "./components/AddTask";
import { TodoList } from "./components/TodoList";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { LogoutButton } from "./auth/_components/logout-button";
import { CurrentUserAvatar } from "@/components/current-user-avatar";
import { CircleCheckBig } from "lucide-react";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  return (
    <main className="h-screen flex flex-col items-center ">
      <nav className=" flex py-6 items-center justify-between gap-4 w-full px-8  ">
        <div className="bg-primary rounded-sm px-4 py-2 flex justify-center items-center gap-2">
          <CircleCheckBig
            size={36}
            className="bg-primary text-background "
            // color="white"
            absoluteStrokeWidth
            strokeWidth={5}
          />
          <h2 className="text-4xl text-background font-extrabold font-mono">
            TuTodo
          </h2>
        </div>
        <h3 className="text-3xl"> Hello {data.user.email}</h3>

        <div className="flex items-center gap-4">
          <LogoutButton />
          <ModeToggle />
          <CurrentUserAvatar />
        </div>
      </nav>
      <section className="h-full mt-3  w-full max-w-lg flex-1 flex flex-col items-center  gap-4">
        <AddTask />
        <TodoList />
      </section>
    </main>
  );
}
