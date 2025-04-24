import { CurrentUserAvatar } from "@/components/current-user-avatar";
import { CircleCheckBig } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/app/auth/_components/logout-button";

export function Header() {
  return (
    <nav className=" shadow-[0px_4px_6px_0px_rgba(0,0,0,0.17)] flex py-2 items-center justify-between gap-4 w-full sm:px-8 px-4  ">
      <div className="bg-primary rounded-sm px-4 py-2 flex justify-center items-center gap-2 sm:gap-4">
        <CircleCheckBig
          size={28} // Reduced for smaller screens
          className="text-background"
          absoluteStrokeWidth
          strokeWidth={4}
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-background font-extrabold font-mono">
          TuTodo
        </h2>
      </div>

      {/* <h3 className="text-3xl"> Hello {data.user.email}</h3> */}

      <div className="flex items-center gap-4">
        <LogoutButton />
        <ModeToggle />
        <CurrentUserAvatar />
      </div>
    </nav>
  );
}
