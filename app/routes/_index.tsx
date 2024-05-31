import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="px-2 flex flex-col gap-2 w-[100px]">
      <Button>Click me</Button>
      <Button variant={'secondary'}>Click me</Button>
      <Button variant={'outline'}>Click me</Button>
    </div>
  );
}
