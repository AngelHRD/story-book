import type { Preview } from "@storybook/react";
import "../src/index.css"; // NE PAS OUBLIEZ DE L'IMPORTER POUR ACTIVER LES CLASS
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
    decorators: [
        // ICI IL Y A UNE GESTION DE THEME
        withThemeByDataAttribute({
            themes: {
                light: "light",
                dark: "dark",
            },

            defaultTheme: "light",
            attributeName: "data-theme",
        }),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
