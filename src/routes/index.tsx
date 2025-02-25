import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TitleLayout } from "../layouts/TitleLayout";

export const Route = createFileRoute("/")({
    component: HomeComponent,
});

function HomeComponent() {
    return (
        <div>
            <TitleLayout title="Dashboard" />
        </div>
    );
}
