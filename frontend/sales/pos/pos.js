// ========================================
// Professional POS System - Connected to Node.js Backend
// ========================================

let posCart = [];
let currentInvoice = generateInvoiceNumber();
let allProducts = []; // Ab ye API se aayega

function renderPOS(container) {
  container.innerHTML = `
    <div class="pos-professional" style="display: grid; grid-template-columns: 1fr 450px; gap: 20px; padding: 20px; height: calc(100vh - 100px);">
      
      <!-- LEFT SIDE -->
      <div style="display: flex; flex-direction: column; gap: 20px; overflow-y: auto;">
        
        <!-- Header -->
        <div style="background: var(--panel); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
            <div><label style="font-size: 11px; color: var(--text-faint);">Invoice #</label><div style="font-weight: 700; color: #2F6FED;">${currentInvoice}</div></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Date</label><div style="font-weight: 600;">${new Date().toLocaleDateString()}</div></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Cashier</label><div style="font-weight: 600;">Admin (001)</div></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Customer</label><input type="text" id="customerName" placeholder="Walk-in" style="width: 100%; padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px;"></div>
          </div>
        </div>

        <!-- Barcode Search -->
        <div style="background: var(--panel); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
          <label style="font-size: 12px; color: var(--text-faint); text-transform: uppercase; font-weight: 600;"><i class="fa-solid fa-barcode"></i> Scan or Search</label>
          <div style="display: flex; gap: 10px; margin-top: 8px;">
            <input type="text" id="barcodeInput" placeholder="Barcode or name..." style="flex: 1; padding: 12px 16px; border: 2px solid var(--border); border-radius: 8px; font-size: 14px;" onkeypress="handleBarcodeScan(event)">
            <button onclick="searchProduct()" style="padding: 12px 24px; background: #2F6FED; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>

        <!-- Manual Entry -->
        <div style="background: var(--panel); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
          <h3 style="font-family: 'Space Grotesk'; margin-bottom: 15px; font-size: 16px;"><i class="fa-solid fa-plus-circle" style="color: #2F6FED;"></i> Add Manually</h3>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div><label style="font-size: 11px; color: var(--text-faint);">Item</label><select id="itemId" onchange="autoFillItem()" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px;"><option value="">Select</option></select></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Name</label><input type="text" id="itemName" readonly style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px; background: var(--bg);"></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Category</label><input type="text" id="itemCategory" readonly style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px; background: var(--bg);"></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Price</label><input type="number" id="itemPrice" step="0.01" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px;"></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Qty</label><input type="number" id="itemQty" value="1" min="1" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px;"></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Disc %</label><input type="number" id="itemDiscount" value="0" min="0" max="100" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px;"></div>
          </div>
          <button onclick="addItemToCart()" style="width: 100%; margin-top: 15px; padding: 12px; background: linear-gradient(135deg, #16A398, #0d7a72); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>

        <!-- Quick Grid -->
        <div style="background: var(--panel); padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
          <h3 style="font-family: 'Space Grotesk'; margin-bottom: 15px; font-size: 16px;"><i class="fa-solid fa-grid-2" style="color: #16A398;"></i> Quick Select</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px;" id="productsGrid">
            <div style="text-align:center; padding:20px; color:var(--text-faint);">Loading products from server...</div>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE (CART) -->
      <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden;">
        <div style="padding: 20px; border-bottom: 1px solid var(--border); background: linear-gradient(135deg, #FDE8F3, #FBE6E6);">
          <h2 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 5px;"><i class="fa-solid fa-receipt"></i> Current Bill</h2>
          <div style="font-size: 12px; color: var(--text-dim);"><span id="itemCount">0</span> items</div>
        </div>
        <div style="flex: 1; overflow-y: auto; padding: 15px;" id="cartItemsList">
          <div style="text-align: center; padding: 40px; color: var(--text-faint);"><i class="fa-solid fa-cart-shopping" style="font-size: 48px; opacity: 0.3;"></i><p>Cart is empty</p></div>
        </div>
        <div style="padding: 20px; border-top: 2px solid var(--border); background: var(--bg);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 13px;"><span style="color: var(--text-dim);">Subtotal:</span><span style="font-weight: 600;" id="subtotal">$0.00</span></div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 13px;"><span style="color: var(--text-dim);">Discount:</span><span style="font-weight: 600; color: #E0342F;" id="totalDiscount">-$0.00</span></div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 13px;"><span style="color: var(--text-dim);">Tax (17%):</span><span style="font-weight: 600;" id="totalTax">$0.00</span></div>
          <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid var(--border); margin-top: 12px;"><span style="font-size: 18px; font-weight: 700;">Total:</span><span style="font-size: 24px; font-weight: 700; color: #2F6FED;" id="grandTotal">$0.00</span></div>
        </div>
        <div style="padding: 20px; border-top: 1px solid var(--border);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
            <div><label style="font-size: 11px; color: var(--text-faint);">Payment</label><select id="paymentMethod" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px; margin-top: 4px;"><option value="cash">Cash</option><option value="card">Card</option></select></div>
            <div><label style="font-size: 11px; color: var(--text-faint);">Received</label><input type="number" id="amountReceived" step="0.01" placeholder="0.00" style="width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-size: 13px; margin-top: 4px;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 10px; background: #E3F6F2; border-radius: 6px; margin-bottom: 15px;"><span style="font-weight: 600;">Change:</span><span style="font-weight: 700; color: #16A398; font-size: 16px;" id="changeAmount">$0.00</span></div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button onclick="clearCart()" style="padding: 12px; background: #fee; color: #E0342F; border: 1px solid #E0342F; border-radius: 8px; cursor: pointer; font-weight: 600;"><i class="fa-solid fa-trash"></i> Clear</button>
            <button onclick="generateBill()" style="padding: 12px; background: linear-gradient(135deg, #2F6FED, #1a56db); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;"><i class="fa-solid fa-print"></i> Save Bill</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize: Load products from Node.js backend
  loadProductsFromBackend();
}

// ========================================
// API & Logic Functions
// ========================================

async function loadProductsFromBackend() {
  try {
    // Node.js API call
    const response = await fetch('/api/products');
    allProducts = await response.json();
    
    renderProductGrid();
    populateDropdown();
  } catch (error) {
    console.error("Backend error:", error);
    document.getElementById('productsGrid').innerHTML = '<div style="color:red; text-align:center;">Failed to load products. Is backend running?</div>';
  }
}

function renderProductGrid() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = allProducts.map(p => `
    <div onclick="quickAddItem('${p.id}')" style="background: var(--bg); padding: 15px; border-radius: 8px; cursor: pointer; border: 1px solid var(--border); text-align: center;">
      <div style="font-size: 24px; margin-bottom: 8px;"></div>
      <div style="font-size: 12px; font-weight: 600; margin-bottom: 4px;">${p.name}</div>
      <div style="font-size: 13px; color: #2F6FED; font-weight: 700;">$${p.price.toFixed(2)}</div>
    </div>
  `).join('');
}

function populateDropdown() {
  const select = document.getElementById('itemId');
  if (!select) return;
  select.innerHTML = '<option value="">Select Item</option>' + 
    allProducts.map(p => `<option value="${p.id}">${p.id} - ${p.name}</option>`).join('');
}

function generateInvoiceNumber() {
  const date = new Date();
  return `INV-${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
}

function handleBarcodeScan(event) {
  if (event.key === 'Enter') searchProduct();
}

async function searchProduct() {
  const input = document.getElementById('barcodeInput').value;
  if (!input) return;

  try {
    const response = await fetch(`/api/products?q=${encodeURIComponent(input)}`);
    const results = await response.json();
    
    if (results.length > 0) {
      quickAddItem(results[0].id);
      document.getElementById('barcodeInput').value = '';
    } else {
      alert('Product not found in database!');
    }
  } catch (error) {
    alert('Search failed!');
  }
}

function autoFillItem() {
  const itemId = document.getElementById('itemId').value;
  const product = allProducts.find(p => p.id === itemId);
  if (product) {
    document.getElementById('itemName').value = product.name;
    document.getElementById('itemCategory').value = product.category;
    document.getElementById('itemPrice').value = product.price;
  }
}

function quickAddItem(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  const existingItem = posCart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty++;
  } else {
    posCart.push({ ...product, qty: 1, discount: 0 });
  }
  updateCartDisplay();
}

function addItemToCart() {
  const itemId = document.getElementById('itemId').value;
  const itemName = document.getElementById('itemName').value;
  const itemCategory = document.getElementById('itemCategory').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);
  const itemQty = parseInt(document.getElementById('itemQty').value);
  const itemDiscount = parseFloat(document.getElementById('itemDiscount').value);

  if (!itemId || !itemName || isNaN(itemPrice) || itemQty < 1) {
    alert('Please fill all required fields correctly!');
    return;
  }

  const existingItem = posCart.find(item => item.id === itemId);
  if (existingItem) {
    existingItem.qty += itemQty;
    existingItem.discount = itemDiscount;
  } else {
    posCart.push({ id: itemId, name: itemName, category: itemCategory, price: itemPrice, qty: itemQty, discount: itemDiscount, tax: 17 });
  }

  // Reset form
  document.getElementById('itemId').value = '';
  document.getElementById('itemName').value = '';
  document.getElementById('itemCategory').value = '';
  document.getElementById('itemPrice').value = '';
  document.getElementById('itemQty').value = '1';
  document.getElementById('itemDiscount').value = '0';

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById('cartItemsList');
  if (!cartContainer) return;
  
  if (posCart.length === 0) {
    cartContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--text-faint);"><i class="fa-solid fa-cart-shopping" style="font-size: 48px; opacity: 0.3;"></i><p>Cart is empty</p></div>';
  } else {
    cartContainer.innerHTML = posCart.map((item, index) => {
      const discountAmount = (item.price * item.discount) / 100;
      const priceAfterDiscount = item.price - discountAmount;
      const taxAmount = (priceAfterDiscount * item.tax) / 100;
      const itemTotal = (priceAfterDiscount + taxAmount) * item.qty;

      return `
        <div style="background: var(--bg); padding: 12px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--border);">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
            <div style="flex: 1;"><div style="font-weight: 600; font-size: 13px;">${item.name}</div><div style="font-size: 11px; color: var(--text-faint);">${item.id}</div></div>
            <button onclick="removeFromCart(${index})" style="background: none; border: none; color: #E0342F; cursor: pointer;"><i class="fa-solid fa-times-circle"></i></button>
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; font-size: 12px;">
            <div><div style="color: var(--text-faint); font-size: 10px;">Qty</div><div style="display: flex; align-items: center; gap: 5px;"><button onclick="updateQty(${index}, -1)" style="width: 24px; height: 24px; border: 1px solid var(--border); background: white; border-radius: 4px; cursor: pointer;">-</button><span style="font-weight: 600;">${item.qty}</span><button onclick="updateQty(${index}, 1)" style="width: 24px; height: 24px; border: 1px solid var(--border); background: white; border-radius: 4px; cursor: pointer;">+</button></div></div>
            <div><div style="color: var(--text-faint); font-size: 10px;">Price</div><div style="font-weight: 600;">$${item.price.toFixed(2)}</div></div>
            <div><div style="color: var(--text-faint); font-size: 10px;">Disc %</div><input type="number" value="${item.discount}" min="0" max="100" onchange="updateDiscount(${index}, this.value)" style="width: 100%; padding: 4px; border: 1px solid var(--border); border-radius: 4px; font-size: 11px;"></div>
            <div style="text-align: right;"><div style="color: var(--text-faint); font-size: 10px;">Total</div><div style="font-weight: 700; color: #2F6FED;">$${itemTotal.toFixed(2)}</div></div>
          </div>
        </div>`;
    }).join('');
  }

  const subtotal = posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalDiscount = posCart.reduce((sum, item) => sum + ((item.price * item.discount / 100) * item.qty), 0);
  const afterDiscount = subtotal - totalDiscount;
  const totalTax = afterDiscount * 0.17;
  const grandTotal = afterDiscount + totalTax;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('totalDiscount').textContent = `-$${totalDiscount.toFixed(2)}`;
  document.getElementById('totalTax').textContent = `$${totalTax.toFixed(2)}`;
  document.getElementById('grandTotal').textContent = `$${grandTotal.toFixed(2)}`;
  document.getElementById('itemCount').textContent = posCart.length;

  const amountReceived = parseFloat(document.getElementById('amountReceived')?.value || 0);
  const change = amountReceived - grandTotal;
  document.getElementById('changeAmount').textContent = `$${change > 0 ? change.toFixed(2) : '0.00'}`;
}

function updateQty(index, change) {
  posCart[index].qty += change;
  if (posCart[index].qty < 1) posCart[index].qty = 1;
  updateCartDisplay();
}

function updateDiscount(index, discount) {
  posCart[index].discount = parseFloat(discount) || 0;
  updateCartDisplay();
}

function removeFromCart(index) {
  posCart.splice(index, 1);
  updateCartDisplay();
}

function clearCart() {
  if (posCart.length === 0) return;
  if (confirm('Clear entire cart?')) {
    posCart = [];
    currentInvoice = generateInvoiceNumber();
    updateCartDisplay();
  }
}

async function generateBill() {
  if (posCart.length === 0) {
    alert('Cart is empty!');
    return;
  }

  const billData = {
    invoiceNumber: currentInvoice,
    date: new Date().toISOString(),
    cashier: 'Admin (001)',
    customer: document.getElementById('customerName')?.value || 'Walk-in',
    items: posCart,
    subtotal: parseFloat(document.getElementById('subtotal').textContent.replace('$', '')),
    totalDiscount: parseFloat(document.getElementById('totalDiscount').textContent.replace('-$', '')),
    totalTax: parseFloat(document.getElementById('totalTax').textContent.replace('$', '')),
    grandTotal: parseFloat(document.getElementById('grandTotal').textContent.replace('$', '')),
    paymentMethod: document.getElementById('paymentMethod').value,
    amountReceived: parseFloat(document.getElementById('amountReceived')?.value || 0)
  };

  try {
    // Send to Node.js Backend
    const response = await fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(billData)
    });

    const result = await response.json();

    if (result.success) {
      alert(`✅ Bill Saved to Backend!\nInvoice: ${result.invoiceNumber}\nTotal: $${billData.grandTotal.toFixed(2)}`);
      posCart = [];
      currentInvoice = generateInvoiceNumber();
      updateCartDisplay();
    } else {
      alert('Error saving bill!');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to connect to backend!');
  }
}