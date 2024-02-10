"use client";

import { Layout } from "lucide-react";
import { Home } from "lucide-react";
import { Compass } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {   
        icon: Home,
        label: "Dashboard",
        href: "/",
    },
    {   
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
]

export const SidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key = {route.href}
                    icon = {route.icon}
                    label = {route.label}
                    href = {route.href}
                />
            ))}
        </div>
    )
}