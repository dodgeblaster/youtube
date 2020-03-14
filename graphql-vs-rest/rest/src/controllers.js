module.exports = {
    getProduct: (req, res) => {
        // can do anything here, like hit database
        res.json({
            id: req.params.id,
            name: 'Dark Coffee',
            price: 200
        })
    },


    addProduct: (req, res) => {
        // needs validation...
        // can do anything here, like hit database
        res.json({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        })
    }
}