import { z } from "zod";
import { publicProcedure, router } from "../index";

export const userRouter = router({
  // Query to get all users
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  // Mutation to create a new user
  create: publicProcedure
    .input(z.object({ email: z.string().email(), name: z.string().optional() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.user.create({ data: input });
    }),
});
