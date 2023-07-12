import { Router } from "./router.js";

import { elements } from "./elements.js";

import backgroundHandle from "./background.js";

import Events from "./events.js";

const {
    pageBackground,
} = elements;

const background = backgroundHandle({
    pageBackground,
})

const events = Events({
    background
});

const router = new Router();

router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');
router.add(404, '/pages/404.html');

router.handle();


window.onpopstate = router.handle();

window.route = () => router.route();
