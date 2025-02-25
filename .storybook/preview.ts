import type { Preview } from "@storybook/react";
import "../src/index.css"; // NE PAS OUBLIEZ DE L'IMPORTER POUR ACTIVER LES CLASS

const preview: Preview = {
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
