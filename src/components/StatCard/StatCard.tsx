import clsx from "clsx";

type StatCardProps = {
    title: string;
    amount: number;
    currency?: string;
    percentage: number;
    type: "increase" | "decrease" | "neutral";
    description: string;
};

function formatAmount(value: number, currency?: string) {
    if (currency) return new Intl.NumberFormat("fr-FR", { style: "currency", currency: currency }).format(value);
    return new Intl.NumberFormat("fr-FR").format(value);
}

/**
 * Composant StatCard
 *
 * Ce composant permet d'afficher une statistique avec un titre, un montant,
 * un pourcentage de variation et une description.
 *
 * ## Usage
 * ```tsx
 * <StatCard
 *   title="Chiffre d'affaires"
 *   amount={121870.1}
 *   currency="EUR"
 *   pourcentage={10}
 *   type="increase"
 *   description="Comparé au mois dernier"
 * />
 * ```
 *
 * ## Props
 * - `title` : Le titre de la statistique.
 * - `amount` : Le montant de la statistique.
 * - `currency` : La devise (optionnelle) pour formater le montant.
 * - `pourcentage` : Le pourcentage de variation.
 * - `type` : Le type de variation. Valeurs possibles : "increase", "decrease", "neutral".
 * - `description` : Une description additionnelle pour la statistique.
 */
export function StatCard({
    title,
    amount = 0,
    percentage = 0,
    type = "neutral",
    description,
    currency,
}: StatCardProps) {
    const formattedAmount = formatAmount(amount, currency);

    return (
        <div className="w-64 rounded-md bg-white p-4 shadow-md text-black">
            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <span
                    className={clsx(
                        "px-2 py-1 text-xs font-semibold rounded-full flex items-center gap-1",
                        type === "increase" && "bg-green-100 text-green-500",
                        type === "decrease" && "bg-red-100 text-red-500",
                        type === "neutral" && "bg-gray-100 text-gray-500"
                    )}
                >
                    {type === "increase" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                            />
                        </svg>
                    )}

                    {type === "decrease" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                            />
                        </svg>
                    )}

                    {percentage + "%"}
                </span>
            </div>

            <p className="text-2xl font-bold mb-1">{formattedAmount}</p>

            <p className="text-xs text-gray-400">{description}</p>
        </div>
    );
}
