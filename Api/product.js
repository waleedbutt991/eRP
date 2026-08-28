// Vercel Serverless Function for Products
export default function handler(req, res) {
  // CORS headers (taake frontend backend ko call kar sake)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Ye data asal mein Database se aayega, abhi testing ke liye yahan hai
  const products = [
    { id: 'P001', barcode: '1234567890', name: 'Laptop Dell XPS', category: 'Electronics', price: 999.99, tax: 17 },
    { id: 'P002', barcode: '1234567891', name: 'Wireless Mouse', category: 'Electronics', price: 25.00, tax: 17 },
    { id: 'P003', barcode: '1234567892', name: 'Mechanical Keyboard', category: 'Electronics', price: 75.00, tax: 17 },
    { id: 'P004', barcode: '1234567893', name: 'Cotton T-Shirt', category: 'Clothing', price: 29.99, tax: 17 },
    { id: 'P005', barcode: '1234567894', name: 'Denim Jeans', category: 'Clothing', price: 59.99, tax: 17 },
    { id: 'P006', barcode: '1234567895', name: 'Bluetooth Headphones', category: 'Electronics', price: 149.99, tax: 17 },
    { id: 'P007', barcode: '1234567896', name: 'Smart Watch', category: 'Electronics', price: 199.99, tax: 17 },
    { id: 'P008', barcode: '1234567897', name: 'Running Shoes', category: 'Footwear', price: 89.99, tax: 17 }
  ];

  // Search logic
  if (req.query.q) {
    const query = req.query.q.toLowerCase();
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.barcode.includes(query) || 
      p.id.toLowerCase() === query
    );
    return res.status(200).json(filtered);
  }

  res.status(200).json(products);
}