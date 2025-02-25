import { createFileRoute } from "@tanstack/react-router";
import { TitleLayout } from "../layouts/TitleLayout";

export const Route = createFileRoute("/settings")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <TitleLayout title="Paramètres" />
        </div>
    );
}
