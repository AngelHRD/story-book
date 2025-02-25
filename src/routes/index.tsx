import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TitleLayout } from "../layouts/TitleLayout";
import { StatCard } from "../components/StatCard/StatCard";

export const Route = createFileRoute("/")({
    component: HomeComponent,
});

function HomeComponent() {
    return (
        <div className="container px-4">
            <div className="mb-6">
                <TitleLayout title="Dashboard" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex justify-center">
                    <StatCard
                        title="Chiffre d'affaires"
                        amount={121870.1}
                        currency="EUR"
                        percentage={10}
                        type="increase"
                        description="Comparé au mois dernier"
                    />
                </div>

                <div className="flex justify-center">
                    <StatCard
                        amount={132}
                        description="Comparé au mois dernier"
                        percentage={8.9}
                        title="Nouveaux clients"
                        type="decrease"
                    />
                </div>

                <div className="flex justify-center">
                    <StatCard
                        amount={3.252}
                        description="Par rapport à la moyenne"
                        percentage={0}
                        title="Taux de conversion"
                        type="neutral"
                    />
                </div>

                <div className="flex justify-center">
                    <StatCard
                        amount={1.458795}
                        description="Ce mois-ci"
                        percentage={24.3}
                        title="Visiteurs uniques"
                        type="increase"
                    />
                </div>
            </div>
        </div>
    );
}
