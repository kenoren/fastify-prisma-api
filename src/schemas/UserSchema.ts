import {z} from "zod";

export const UserSchema = z.object({
    login: z.string().min(5),
    firstname: z.string(),
    lastname: z.string(),
    email: z.email(),
})

export const UserAuthSchema = z.object({
    login: z.string().min(5),
    password: z.string().min(8),
})

// export const UserChangePasswordSchema = z.object({
//     login: z.string().min(5),
//     password: z.string().min(8),
//     passwordConfirm: z.string().min(8),
// })

