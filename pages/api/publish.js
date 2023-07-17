import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { userId, printerName, filaments, location, availability, price } = req.body;
        console.log(req.body);
        if (!userId || !printerName || !filaments || !location || !price) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            const client = new MongoClient(process.env.MONGODB_URI);
            await client.connect();
            const db = client.db("printbnb");
            const result = await db.collection('unapproved-printers').insertOne({ userId, printerName, filaments, location, availability, price });
            console.log(result);
            client.close();

            return res.status(201).json({ message: 'Printer registered successfully' });
        } catch (error) {
            console.error('Failed to connect to the database', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else if (req.method === 'GET') {
      const client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      const db = client.db("printbnb");
      const printers = await db.collection('printers').find({}).toArray();
      client.close();
      return res.status(200).json(printers);
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
}

export default handler;
