import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <DashboardLayout>
                <Outlet />
            </DashboardLayout>

            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}
