import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddTask() {
  return (
    <div className="*:not-first:mt-2 max-w-lg w-full">
      <div className="flex gap-2 w-full ">
        <Input className="flex-1" placeholder="Add Task" type="text" />
        <Button variant="outline">Send</Button>
      </div>
    </div>
  );
}
