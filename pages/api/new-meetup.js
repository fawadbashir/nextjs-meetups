import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    const { title, image, address, description } = data
    const client = await MongoClient.connect(
      'mongodb+srv://taskapp:zGkQpmbAB7JB7j0l@cluster0.yhom9.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)
    console.log(result)
    client.close()

    res.status(201).json({ result: req.body })
  }
}

export default handler
