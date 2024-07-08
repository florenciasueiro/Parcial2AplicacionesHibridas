import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username must not be empty'
    }),
    email: z.string({
        required_error: 'Email must not be empty'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(8,{
        message: 'Password must be at least 8 characters'
    })
})


export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email must not be empty'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(8,{
        message: 'Password must be at least 8 characters'
    })
})