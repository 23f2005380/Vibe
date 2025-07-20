"use client"

import { Button } from "@/components/ui/button";
import { useTRPC} from "@/trpc/client";
import { useMutation} from "@tanstack/react-query";

const Page =  () => {
  const trpc  = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({}))
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Button onClick = {() => invoke.mutate({text : "John"})}>
        Invboke
        </Button>
    </div>
  )
    

}

export default Page;