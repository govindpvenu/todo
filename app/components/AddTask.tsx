import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AddTask() {
    return (
        <div className="w-full max-w-lg *:not-first:mt-2">
            <div className="flex w-full gap-2">
                <Input className="flex-1" placeholder="Add Task" type="text" />
                <Button variant="default">Send</Button>
            </div>
        </div>
    );
}
