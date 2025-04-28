import { CircleCheckBig } from 'lucide-react';
import { ModeToggle } from '@/components/theme-toggle';
import { LogoutButton } from '@/app/auth/_components/logout-button';
import Profile from './profile';

export function Header() {
    return (
        <nav className="flex w-full items-center justify-between gap-4 px-4 py-2 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.17)] sm:px-8">
            <div className="bg-primary flex items-center justify-center gap-2 rounded-sm px-4 py-2 sm:gap-4">
                <CircleCheckBig
                    size={28} // Reduced for smaller screens
                    className="text-background"
                    absoluteStrokeWidth
                    strokeWidth={4}
                />
                <h2 className="text-background font-mono text-2xl font-extrabold sm:text-3xl md:text-4xl">
                    TuTodo
                </h2>
            </div>

            {/* <h3 className="text-3xl"> Hello {data.user.email}</h3> */}

            <div className="flex items-center gap-4">
                <LogoutButton />
                <ModeToggle />
                <Profile />
            </div>
        </nav>
    );
}
