module.exports = {
    Query: {
        product: (_, data) => {
            // can do anything here, like hit database
            return {
                id: data.id,
                name: 'Dark Coffee',
                price: 200
            }
        }
    },

    Mutation: {
        addProduct: (_, data) => {
            // can do anything here, like hit database
            return {
                id: data.input.id,
                name: data.input.name,
                price: data.input.price
            }
        }
    }
}