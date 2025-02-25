import { createFileRoute } from "@tanstack/react-router";
import { TitleLayout } from "../layouts/TitleLayout";

export const Route = createFileRoute("/contacts")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <TitleLayout title="Contacts" />
        </div>
    );
}
