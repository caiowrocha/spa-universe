import { elements } from "./elements.js";

const { pageBackground } = elements;

export default function ({
    pageBackground,
}) {

    function homeBackground() {
        pageBackground.classList.add('home');
        pageBackground.classList.remove('universe');
        pageBackground.classList.remove('exploration');
    };

    function universeBackground() {
        pageBackground.classList.add('universe');
        pageBackground.classList.remove('exploration');
        pageBackground.classList.remove('home');
    };

    function explorationBackground() {
        pageBackground.classList.add('exploration');
        pageBackground.classList.remove('home');
        pageBackground.classList.remove('universe');
    };

    return {
        explorationBackground,
        universeBackground,
        homeBackground,
    };
};