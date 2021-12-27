import { lazy } from "react";

export const routes = [
    {
        path: '/',
        component: lazy( () => import( '../views/home/form/Home' ) ),

    },
    {
        path: '/contact',
        component: lazy( () => import( '../views/contact/form/ContactForm' ) )
    }
]