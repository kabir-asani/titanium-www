import { z } from "zod";

export const latest10PostsSchema = z
  .object({
    id: z.string(),
    text: z.string(),
  })
  .array();
