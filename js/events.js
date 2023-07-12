import { elements } from "./elements.js";

const {
    btnExplore,
    btnUniverse,
    btnLearnMore,
    btnHome,
} = elements;

export default function ({
    background,
}) {

    btnExplore.addEventListener('click', () => {
        background.explorationBackground();
    });

    btnUniverse.addEventListener('click', () => {
        background.universeBackground();
    });

    btnHome.addEventListener('click', () => {
        background.homeBackground();
    });
}
