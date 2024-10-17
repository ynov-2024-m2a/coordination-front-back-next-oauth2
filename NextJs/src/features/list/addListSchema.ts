import { z } from "zod";

export const AddListSchema = z.object({
  title: z.string(),
});

export type AddList = z.infer<typeof AddListSchema>;
