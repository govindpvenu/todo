'use client';

import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export function LogoutButton() {
    const router = useRouter();

    const logout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push('/auth/login');
    };

    return (
        <Button
            onClick={logout}
            variant="outline"
            className="cursor-pointer rounded-full transition-transform duration-500 hover:scale-105"
            size="icon"
        >
            <LogOut />
            <span className="sr-only">Logout</span>
        </Button>
    );
}
