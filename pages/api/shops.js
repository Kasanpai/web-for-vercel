import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'shops.json');

export default function handler(req, res) {
    if (req.method === 'GET') {
        const data = fs.readFileSync(filePath, 'utf8');
        res.status(200).json(JSON.parse(data));
        return;
    }

    if (req.method === 'POST') {
        const data = fs.readFileSync(filePath, 'utf8');
        const shops = JSON.parse(data);

        const newShop = req.body;
        shops.push(newShop);

        fs.writeFileSync(filePath, JSON.stringify(shops, null, 2));

        res.status(201).json(newShop);
        return;
    }

    res.status(405).json({ message: 'Method not allowed' });
}