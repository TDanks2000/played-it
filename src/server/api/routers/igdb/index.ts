import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import igdb from "@/server/utils/api/igdb";
import { z } from "zod";

export const igdbRouter = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { query } = input;
      const res = await igdb.search(query);

      return res;
    }),
  info: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;
      const res = await igdb.info(id);

      return res;
    }),
  top_rated: publicProcedure.query(async () => {
    const res = await igdb.topRated();

    return res;
  }),
  new_releases: publicProcedure.query(async () => {
    const res = await igdb.newReleases();

    return res;
  }),
  most_anticipated: publicProcedure.query(async () => {
    const res = await igdb.mostAnticipated();

    return res;
  }),
});
