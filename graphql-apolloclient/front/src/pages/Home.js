import React from 'react'

// 1. Import Apollo hook and gql
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'


// 2. Define Query
const GET_PRODUCTS = gql`
  query {
    producdt(id: "1234") {
      id
      name
      price
    }
  }
`

export default () => {
    // 3. Execute Query
    const { loading, error, data } = useQuery(GET_PRODUCTS)

    if (loading) {
        return (
            <div className="App">
                <p>Loading</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="App">
                <p>There was an error</p>
            </div>
        )
    }

    return (
        <div className="App">
            <p>{data.product.name}</p>
            <p>{data.product.price}</p>
        </div>
    )
}