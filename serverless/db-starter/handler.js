const AWS = require('aws-sdk')
const table = process.env.TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-2'
})


const create = async data => {
  const params = {
    TableName: table,
    Item: {
      PK: data.id,
      name: data.name
    }
  }

  await dynamoDb.put(params).promise()
  return data

}

module.exports.hello = async event => {
  await create({
    id: '1234',
    name: 'Dark Coffee'
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: 'seomtihngf'
      }
    )
  }
}
