import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc/appRouter";

export const trpc = createTRPCReact<AppRouter>();
