import { z } from "zod";

export const ListDto = z.object({
  id: z.string(),
  title: z.string(),
});

export type ListDto = z.infer<typeof ListDto>;
