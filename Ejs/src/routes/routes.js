const { Router } = require("express");
const router = Router();
const { home, routeProducts, allProducts, postProducts } = require("../controllers/routesControllers")

router.get('/', home);

router.get("/products", allProducts);

router.post("/", postProducts);

module.exports = router;