import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db("printbnb");
    console.log(res);
    const printers = await db.collection('printers').find({userId: req.query.userId}).toArray();
    client.close();
    return res.status(200).json(printers);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}

export default handler;
