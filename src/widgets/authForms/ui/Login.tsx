import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '@/shared/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

const formSchema = z.object({
    email: z.string().email('Введите корректный email'),
    password: z.string().min(6, {
        message: 'Пароль должен содержать минимум 6 символов',
    }),
})

export const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: '',
            email: '',
        },
        mode: 'onChange',
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <div className='bg-background flex flex-col justify-center items-center p-8'>
            <div className='max-w-md w-full space-y-8'>
                <div>
                    <h2 className='text-3xl font-bold text-center'>
                        Авторизируйтесь
                    </h2>
                    <p className='mt-2 text-center text-muted-foreground'>
                        Или{' '}
                        <Link
                            to='/auth/register'
                            className='font-medium text-primary hover:underline'>
                            создайте новый аккаунт
                        </Link>
                    </p>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-6'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Email:</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id='email'
                                                name='email'
                                                type='email'
                                                autoComplete='email'
                                                required
                                                className='mt-1 block w-full'
                                                placeholder='name@example.com'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />
                        <FormField
                            name='password'
                            control={form.control}
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Пароль:</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id='password'
                                                name='password'
                                                type='password'
                                                autoComplete='current-password'
                                                required
                                                className='mt-1 block w-full'
                                                placeholder='Введите свой пароль'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />
                        <Button
                            type='submit'
                            className='w-full transition-all duration-300 hover:scale-[102%]'>
                            Авторизоваться
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}