const products = []

const home = (req, res) => {
    try {
        res.render('home.ejs')
    } catch (err) {
        console.log(`errorHome : ${err}`)
        res.sendStatus(404)
    }
}

const routeProducts = (req, res, next) => {
    res.render('main.ejs', { products })
}

const postProducts = (req, res, next) => {
    productos.push(req.body)
    res.redirect('/')
    res.status(201).render
}

const allProducts = (req, res, next) => {
    try {
        return res.send(products);
    } catch (error) {
        res
        .status(error.statusCode ? error.statusCode : 404)
        .json({ error: error.message });
    }
}

module.exports = {home, routeProducts, allProducts, postProducts, }