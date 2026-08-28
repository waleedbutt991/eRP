// Vercel Serverless Function for Saving Invoices
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    const invoiceData = req.body;
    
    // Yahan aap future mein Database (MongoDB/PostgreSQL) ka code likhenge
    // Abhi hum sirf console mein log kar rahe hain taake confirm ho jaye ke data aa raha hai
    console.log("✅ New Invoice Received:", invoiceData);

    // Success response bhej rahe hain
    return res.status(200).json({ 
      success: true, 
      message: "Invoice saved successfully!", 
      invoiceNumber: invoiceData.invoiceNumber 
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}