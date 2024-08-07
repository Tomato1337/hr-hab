import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AvitoCallbackPage } from '@/pages/callbacks/avito'
import { HomePage } from '@/pages/home'
import { LoginPage } from '@/pages/login'
import { PeoplePage } from '@/pages/people'
import { PeoplesPage } from '@/pages/peoples'
import { RegisterPage } from '@/pages/register'
import { SettingsPage } from '@/pages/settings'
import { Layout, LayoutAuth } from '@/widgets/layouts'
import { AuthCheck } from '@/entities/authCheck'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthCheck>
                <Layout />
            </AuthCheck>
        ),
        children: [
            { path: '', element: <HomePage /> },
            { path: 'peoples', element: <PeoplesPage /> },
            { path: 'peoples/:id', element: <PeoplePage /> },
            { path: 'settings', element: <SettingsPage /> },
        ],
    },
    {
        path: '/auth',
        element: <LayoutAuth />,
        children: [
            { path: '', element: <Navigate to='/auth/login' /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
        ],
    },
    {
        path: '/callback/avito',
        element: <AvitoCallbackPage />,
    },
])
