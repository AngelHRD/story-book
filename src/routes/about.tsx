import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TitleLayout } from "../layouts/TitleLayout";

export const Route = createFileRoute("/about")({
    component: AboutComponent,
});

function AboutComponent() {
    return (
        <div>
            <TitleLayout title="A propos" />
        </div>
    );
}
