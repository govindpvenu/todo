import AddTask from './components/AddTask';
import { TodoList } from './components/TodoList';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { Header } from '@/components/header';

export default async function Home() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect('/auth/login');
    }
    return (
        <main className="flex h-screen flex-col">
            <Header />
            <section className="mt-2 flex h-full w-full flex-1 flex-col items-center justify-center gap-4 p-6 md:p-10">
                <main className="mt-10 flex h-full w-full max-w-lg flex-col items-center gap-4">
                    <AddTask />
                    <TodoList />
                </main>
            </section>
        </main>
    );
}
