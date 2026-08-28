// ========================================
// Inventory: Opening Stock Form
// ========================================

const inventoryItems = [
  { id: 'ITM001', name: 'Laptop Dell XPS', category: 'Electronics', currentStock: 0 },
  { id: 'ITM002', name: 'Wireless Mouse', category: 'Electronics', currentStock: 0 },
  { id: 'ITM003', name: 'Cotton T-Shirt', category: 'Clothing', currentStock: 0 },
  { id: 'ITM004', name: 'Running Shoes', category: 'Footwear', currentStock: 0 }
];

function renderOpeningStock(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 900px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text);">
          <i class="fa-solid fa-boxes-stacked" style="color: #16A398; margin-right: 10px;"></i> Opening Stock Entry
        </h1>
        <span style="background: #E3F6F2; color: #16A398; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">One-time Setup</span>
      </div>

      <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 30px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <form id="openingStockForm" onsubmit="saveOpeningStock(event)">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            
            <div style="grid-column: span 2;">
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Select Item</label>
              <select id="os_item" required onchange="autoFillItemDetails()" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px; background: var(--bg);">
                <option value="">-- Choose an Item --</option>
                ${inventoryItems.map(item => `<option value="${item.id}">${item.id} - ${item.name} (${item.category})</option>`).join('')}
              </select>
            </div>

            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Category</label>
              <input type="text" id="os_category" readonly style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px; background: #f1f5f9; color: var(--text-dim);">
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Warehouse / Location</label>
              <select id="os_warehouse" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px;">
                <option value="Main Warehouse">Main Warehouse</option>
                <option value="Store A">Store A</option>
                <option value="Store B">Store B</option>
              </select>
            </div>

            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Opening Quantity</label>
              <input type="number" id="os_qty" min="1" required oninput="calculateTotalValue()" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px;">
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Unit Cost Price ($)</label>
              <input type="number" id="os_cost" step="0.01" min="0" required oninput="calculateTotalValue()" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px;">
            </div>

            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Base Selling Price ($)</label>
              <input type="number" id="os_selling_price" step="0.01" min="0" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px;">
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Tax Rate (%)</label>
              <input type="number" id="os_tax" value="17" min="0" max="100" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px;">
            </div>

            <div style="grid-column: span 2; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 15px; display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
              <span style="font-weight: 600; color: #166534;">Total Inventory Value:</span>
              <span id="os_total_value" style="font-size: 24px; font-weight: 700; color: #15803d;">$0.00</span>
            </div>

            <div style="grid-column: span 2;">
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Remarks / Notes</label>
              <textarea id="os_remarks" rows="3" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 14px; margin-top: 6px; resize: vertical;"></textarea>
            </div>

          </div>

          <div style="display: flex; gap: 15px; margin-top: 10px;">
            <button type="button" onclick="document.getElementById('openingStockForm').reset(); document.getElementById('os_total_value').textContent = '$0.00';" style="flex: 1; padding: 14px; background: white; border: 1px solid var(--border); border-radius: 8px; font-weight: 600; cursor: pointer; color: var(--text-dim);">Clear Form</button>
            <button type="submit" style="flex: 2; padding: 14px; background: linear-gradient(135deg, #16A398, #0d7a72); color: white; border: none; border-radius: 8px; font-weight: 600; font-size: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <i class="fa-solid fa-save"></i> Save Opening Stock
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function autoFillItemDetails() {
  const itemId = document.getElementById('os_item').value;
  const item = inventoryItems.find(i => i.id === itemId);
  if (item) {
    document.getElementById('os_category').value = item.category;
  }
}

function calculateTotalValue() {
  const qty = parseFloat(document.getElementById('os_qty').value) || 0;
  const cost = parseFloat(document.getElementById('os_cost').value) || 0;
  const total = qty * cost;
  document.getElementById('os_total_value').textContent = `$${total.toFixed(2)}`;
}

function saveOpeningStock(event) {
  event.preventDefault();
  
  const stockData = {
    itemId: document.getElementById('os_item').value,
    category: document.getElementById('os_category').value,
    warehouse: document.getElementById('os_warehouse').value,
    quantity: parseFloat(document.getElementById('os_qty').value),
    unitCost: parseFloat(document.getElementById('os_cost').value),
    sellingPrice: parseFloat(document.getElementById('os_selling_price').value),
    taxRate: parseFloat(document.getElementById('os_tax').value),
    totalValue: parseFloat(document.getElementById('os_total_value').textContent.replace('$', '')),
    remarks: document.getElementById('os_remarks').value,
    date: new Date().toISOString()
  };

  console.log("✅ Opening Stock Data Ready for Backend:", stockData);
  alert(`Opening Stock Saved!\nItem: ${stockData.itemId}\nValue: $${stockData.totalValue.toFixed(2)}\n\n(Ye data backend par inventory table mein update hoga)`);
  
  document.getElementById('openingStockForm').reset();
  document.getElementById('os_total_value').textContent = '$0.00';
}