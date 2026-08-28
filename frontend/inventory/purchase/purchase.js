// ========================================
// Inventory: Purchase Order Form
// ========================================

let purchaseRows = 0;

// Sample Items (Future: API se aayega - Opening Stock se bhi)
const purchaseItems = [
  { id: 'ITM001', name: 'Laptop Dell XPS', category: 'Electronics', currentStock: 10, costPrice: 900, sellingPrice: 999.99 },
  { id: 'ITM002', name: 'Wireless Mouse', category: 'Electronics', currentStock: 50, costPrice: 15, sellingPrice: 25.00 },
  { id: 'ITM003', name: 'Mechanical Keyboard', category: 'Electronics', currentStock: 25, costPrice: 50, sellingPrice: 75.00 },
  { id: 'ITM004', name: 'Cotton T-Shirt', category: 'Clothing', currentStock: 100, costPrice: 10, sellingPrice: 29.99 },
  { id: 'ITM005', name: 'Denim Jeans', category: 'Clothing', currentStock: 40, costPrice: 30, sellingPrice: 59.99 },
  { id: 'ITM006', name: 'Running Shoes', category: 'Footwear', currentStock: 30, costPrice: 45, sellingPrice: 89.99 }
];

function renderPurchase(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 1200px; margin: 0 auto;">
      
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text);">
          <i class="fa-solid fa-truck-ramp-box" style="color: #E0342F; margin-right: 10px;"></i> Purchase Order Entry
        </h1>
        <button onclick="addPurchaseRow()" style="padding: 10px 20px; background: linear-gradient(135deg, #E0342F, #b91c1c); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-plus"></i> Add Item
        </button>
      </div>

      <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 30px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        
        <!-- Purchase Header Info -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid var(--border);">
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Supplier / Vendor *</label>
            <select id="pu_supplier" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
              <option value="">-- Select Supplier --</option>
              <option value="SUP001">Tech Distributors Ltd</option>
              <option value="SUP002">Global Garments Co</option>
              <option value="SUP003">Electronics Wholesale Inc</option>
              <option value="SUP004">Local Traders</option>
            </select>
          </div>
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Purchase Invoice #</label>
            <input type="text" id="pu_invoice" value="PI-${Date.now().toString().slice(-6)}" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
          </div>
          <div>
            <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Purchase Date *</label>
            <input type="date" id="pu_date" value="${new Date().toISOString().split('T')[0]}" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
          </div>
        </div>

        <!-- Dynamic Items Table -->
        <div style="margin-bottom: 30px;">
          <div style="background: var(--bg); padding: 15px; border-radius: 8px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-family: 'Space Grotesk'; font-size: 16px; color: var(--text);">
              <i class="fa-solid fa-list" style="color: #16A398; margin-right: 8px;"></i> Purchase Items
            </h3>
            <span style="font-size: 13px; color: var(--text-dim);">Add multiple items to this purchase order</span>
          </div>

          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; min-width: 900px;">
              <thead>
                <tr style="background: linear-gradient(135deg, #16A398, #0d7a72); color: white;">
                  <th style="padding: 14px; text-align: left; font-size: 13px; font-weight: 600;">Item</th>
                  <th style="padding: 14px; text-align: center; font-size: 13px; font-weight: 600; width: 100px;">Current Stock</th>
                  <th style="padding: 14px; text-align: center; font-size: 13px; font-weight: 600; width: 100px;">Qty</th>
                  <th style="padding: 14px; text-align: right; font-size: 13px; font-weight: 600; width: 120px;">Unit Cost ($)</th>
                  <th style="padding: 14px; text-align: right; font-size: 13px; font-weight: 600; width: 100px;">Disc %</th>
                  <th style="padding: 14px; text-align: right; font-size: 13px; font-weight: 600; width: 120px;">Line Total</th>
                  <th style="padding: 14px; width: 50px;"></th>
                </tr>
              </thead>
              <tbody id="purchaseTableBody">
                <!-- Dynamic rows will be added here -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Footer Totals -->
        <div style="display: flex; justify-content: flex-end; margin-top: 30px;">
          <div style="width: 400px; background: linear-gradient(135deg, #F0FDF4, #DCFCE7); border: 2px solid #16A398; padding: 25px; border-radius: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px;">
              <span style="color: var(--text-dim); font-weight: 500;">Subtotal:</span>
              <span id="pu_subtotal" style="font-weight: 600; font-size: 16px;">$0.00</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px;">
              <span style="color: var(--text-dim); font-weight: 500;">Total Discount:</span>
              <span id="pu_discount" style="font-weight: 600; color: #E0342F; font-size: 16px;">-$0.00</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px;">
              <span style="color: var(--text-dim); font-weight: 500;">Tax (17%):</span>
              <span id="pu_tax" style="font-weight: 600; font-size: 16px;">$0.00</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 15px; border-top: 2px solid #16A398; margin-top: 15px;">
              <span style="font-size: 20px; font-weight: 700; color: #0d7a72;">Grand Total:</span>
              <span id="pu_grand_total" style="font-size: 28px; font-weight: 700; color: #0d7a72;">$0.00</span>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid var(--border);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Warehouse / Location</label>
              <select id="pu_warehouse" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
                <option value="Main Warehouse">Main Warehouse</option>
                <option value="Store A">Store A</option>
                <option value="Store B">Store B</option>
              </select>
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Payment Terms</label>
              <select id="pu_payment_terms" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
                <option value="immediate">Immediate Payment</option>
                <option value="net30">Net 30 Days</option>
                <option value="net60">Net 60 Days</option>
                <option value="credit">Credit Line</option>
              </select>
            </div>
          </div>
          <div style="margin-top: 15px;">
            <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Notes / Remarks</label>
            <textarea id="pu_notes" rows="3" placeholder="Any additional notes about this purchase order..." style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px; resize: vertical;"></textarea>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 15px; margin-top: 30px; justify-content: flex-end;">
          <button onclick="savePurchaseDraft()" style="padding: 14px 28px; background: white; border: 2px solid var(--border); border-radius: 8px; font-weight: 600; cursor: pointer; color: var(--text-dim); font-size: 14px;">
            <i class="fa-solid fa-floppy-disk" style="margin-right: 8px;"></i> Save as Draft
          </button>
          <button onclick="savePurchase()" style="padding: 14px 35px; background: linear-gradient(135deg, #E0342F, #b91c1c); color: white; border: none; border-radius: 8px; font-weight: 600; font-size: 15px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-check-circle"></i> Receive Stock & Save
          </button>
        </div>

      </div>
    </div>
  `;
  
  // Add first row by default
  addPurchaseRow();
}

// ========================================
// Dynamic Row Functions
// ========================================

function addPurchaseRow() {
  purchaseRows++;
  const tbody = document.getElementById('purchaseTableBody');
  const row = document.createElement('tr');
  row.id = `prow_${purchaseRows}`;
  row.style.borderBottom = "1px solid var(--border)";
  row.style.background = "var(--panel)";
  
  row.innerHTML = `
    <td style="padding: 12px;">
      <select class="p_item" onchange="updateRowDetails(${purchaseRows})" required style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px;">
        <option value="">Select Item</option>
        ${purchaseItems.map(i => `
          <option value="${i.id}" 
                  data-cost="${i.costPrice}" 
                  data-stock="${i.currentStock}"
                  data-name="${i.name}">
            ${i.id} - ${i.name}
          </option>
        `).join('')}
      </select>
    </td>
    <td style="padding: 12px; text-align: center;">
      <span class="p_current_stock" style="font-size: 13px; color: var(--text-dim); font-weight: 600;">-</span>
    </td>
    <td style="padding: 12px;">
      <input type="number" class="p_qty" value="1" min="1" required oninput="calculateRowTotal(${purchaseRows})" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px; text-align: center;">
    </td>
    <td style="padding: 12px;">
      <input type="number" class="p_cost" step="0.01" min="0" required oninput="calculateRowTotal(${purchaseRows})" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px; text-align: right;">
    </td>
    <td style="padding: 12px;">
      <input type="number" class="p_disc" value="0" min="0" max="100" oninput="calculateRowTotal(${purchaseRows})" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px; text-align: right;">
    </td>
    <td style="padding: 12px; text-align: right;">
      <span class="p_line_total" style="font-weight: 700; color: var(--text); font-size: 14px;">$0.00</span>
    </td>
    <td style="padding: 12px; text-align: center;">
      <button onclick="removePurchaseRow(${purchaseRows})" style="background: none; border: none; color: #E0342F; cursor: pointer; font-size: 18px; padding: 5px;">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  `;
  tbody.appendChild(row);
}

function updateRowDetails(rowId) {
  const row = document.getElementById(`prow_${rowId}`);
  const select = row.querySelector('.p_item');
  const costInput = row.querySelector('.p_cost');
  const stockSpan = row.querySelector('.p_current_stock');
  
  const selectedOption = select.options[select.selectedIndex];
  if (selectedOption && selectedOption.value) {
    const cost = parseFloat(selectedOption.dataset.cost) || 0;
    const stock = selectedOption.dataset.stock || 0;
    
    costInput.value = cost.toFixed(2);
    stockSpan.textContent = stock;
    stockSpan.style.color = parseInt(stock) < 10 ? '#E0342F' : '#16A398';
    
    calculateRowTotal(rowId);
  }
}

function calculateRowTotal(rowId) {
  const row = document.getElementById(`prow_${rowId}`);
  const qty = parseFloat(row.querySelector('.p_qty').value) || 0;
  const cost = parseFloat(row.querySelector('.p_cost').value) || 0;
  const disc = parseFloat(row.querySelector('.p_disc').value) || 0;
  
  const discountAmount = (cost * disc) / 100;
  const finalUnitCost = cost - discountAmount;
  const lineTotal = finalUnitCost * qty;
  
  row.querySelector('.p_line_total').textContent = `$${lineTotal.toFixed(2)}`;
  calculateGrandTotal();
}

function removePurchaseRow(rowId) {
  const row = document.getElementById(`prow_${rowId}`);
  if (row) {
    row.remove();
    calculateGrandTotal();
  }
}

function calculateGrandTotal() {
  let subtotal = 0;
  let totalDiscount = 0;
  
  document.querySelectorAll('#purchaseTableBody tr').forEach(row => {
    const qty = parseFloat(row.querySelector('.p_qty').value) || 0;
    const cost = parseFloat(row.querySelector('.p_cost').value) || 0;
    const disc = parseFloat(row.querySelector('.p_disc').value) || 0;
    
    const lineSubtotal = cost * qty;
    const lineDiscount = (cost * disc / 100) * qty;
    
    subtotal += lineSubtotal;
    totalDiscount += lineDiscount;
  });
  
  const afterDiscount = subtotal - totalDiscount;
  const tax = afterDiscount * 0.17;
  const grandTotal = afterDiscount + tax;
  
  document.getElementById('pu_subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('pu_discount').textContent = `-$${totalDiscount.toFixed(2)}`;
  document.getElementById('pu_tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('pu_grand_total').textContent = `$${grandTotal.toFixed(2)}`;
}

// ========================================
// Save Functions
// ========================================

function savePurchaseDraft() {
  const purchaseData = collectPurchaseData();
  
  if (!validatePurchaseData(purchaseData)) return;
  
  console.log("💾 Draft Purchase Data:", purchaseData);
  alert(`📝 Purchase Draft Saved!\n\nItems: ${purchaseData.items.length}\nTotal: $${purchaseData.grandTotal}\n\n(Ye draft backend par save hoga, stock update nahi hoga)`);
}

function savePurchase() {
  const purchaseData = collectPurchaseData();
  
  if (!validatePurchaseData(purchaseData)) return;
  
  console.log("✅ Purchase Data Ready for Backend:", purchaseData);
  
  alert(`✅ Stock Received & Purchase Saved!\n\nSupplier: ${purchaseData.supplier}\nInvoice: ${purchaseData.invoice}\nItems: ${purchaseData.items.length}\nGrand Total: $${purchaseData.grandTotal}\n\n(Ye data backend par:\n1. Inventory quantity update karega\n2. Average cost recalculate karega\n3. Purchase history mein save hoga)`);
  
  // Reset form after save
  resetPurchaseForm();
}

function collectPurchaseData() {
  const items = [];
  
  document.querySelectorAll('#purchaseTableBody tr').forEach(row => {
    const itemId = row.querySelector('.p_item').value;
    const item = purchaseItems.find(i => i.id === itemId);
    
    if (itemId) {
      items.push({
        itemId: itemId,
        itemName: item ? item.name : '',
        quantity: parseFloat(row.querySelector('.p_qty').value) || 0,
        unitCost: parseFloat(row.querySelector('.p_cost').value) || 0,
        discount: parseFloat(row.querySelector('.p_disc').value) || 0,
        lineTotal: row.querySelector('.p_line_total').textContent.replace('$', '')
      });
    }
  });
  
  const subtotal = parseFloat(document.getElementById('pu_subtotal').textContent.replace('$', ''));
  const discount = parseFloat(document.getElementById('pu_discount').textContent.replace('-$', ''));
  const tax = parseFloat(document.getElementById('pu_tax').textContent.replace('$', ''));
  const grandTotal = parseFloat(document.getElementById('pu_grand_total').textContent.replace('$', ''));
  
  return {
    supplier: document.getElementById('pu_supplier').value,
    invoice: document.getElementById('pu_invoice').value,
    date: document.getElementById('pu_date').value,
    warehouse: document.getElementById('pu_warehouse').value,
    paymentTerms: document.getElementById('pu_payment_terms').value,
    notes: document.getElementById('pu_notes').value,
    items: items,
    subtotal: subtotal,
    totalDiscount: discount,
    tax: tax,
    grandTotal: grandTotal,
    timestamp: new Date().toISOString()
  };
}

function validatePurchaseData(data) {
  if (!data.supplier) {
    alert('️ Please select a supplier!');
    document.getElementById('pu_supplier').focus();
    return false;
  }
  
  if (!data.invoice) {
    alert('⚠️ Please enter purchase invoice number!');
    document.getElementById('pu_invoice').focus();
    return false;
  }
  
  if (data.items.length === 0 || data.items.every(i => !i.itemId)) {
    alert('⚠️ Please add at least one item!');
    return false;
  }
  
  return true;
}

function resetPurchaseForm() {
  document.getElementById('purchaseTableBody').innerHTML = '';
  document.getElementById('pu_subtotal').textContent = '$0.00';
  document.getElementById('pu_discount').textContent = '-$0.00';
  document.getElementById('pu_tax').textContent = '$0.00';
  document.getElementById('pu_grand_total').textContent = '$0.00';
  
  purchaseRows = 0;
  addPurchaseRow();
}