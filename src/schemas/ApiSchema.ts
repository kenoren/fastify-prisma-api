import {z} from "zod";
import {id} from "zod/locales";

const idRequest = z.object({
    id: z.coerce.number(),
})

export const ApiSchema = {
    idRequest,
}
