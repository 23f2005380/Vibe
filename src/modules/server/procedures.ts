import { inngest } from "@/inngest/client"
import prisma from "@/lib/db"
import { baseProcedure } from "@/trpc/init"
import { createTRPCRouter } from "@/trpc/init"

import {z} from "zod"

export const messageRouter = createTRPCRouter({
    create: baseProcedure
        .input(
            z.object({
                value: z.string().min(1, "Text is required"),
            })
        )
        .mutation(async ({ input }: { input: { value: string } }) => {
            const createMessage = await prisma.message.create({
                data: {
                    content: input.value,
                    type: "RESULT",
                    role: "USER",
                },
            });
            await inngest.send({
                name: "test/hello.world",
                data: {
                    email: input.value,
                },
            });
            return createMessage;
        }),
});