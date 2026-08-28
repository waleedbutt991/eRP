// ========================================
// Inventory Dashboard - Complete
// ========================================

function renderInventoryDashboard(container) {
  container.innerHTML = `
    <div style="padding: 40px; max-width: 1400px; margin: 0 auto;">
      
      <!-- Header -->
      <div style="margin-bottom: 30px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 28px; color: var(--text); margin-bottom: 8px;">
          <i class="fa-solid fa-boxes-stacked" style="color: #16A398; margin-right: 12px;"></i>
          Inventory Dashboard
        </h1>
        <p style="color: var(--text-dim);">Manage stock, purchases, and inventory valuation</p>
      </div>

      <!-- Stats Cards -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px;">
        <div style="background: linear-gradient(135deg, #16A398, #0d7a72); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Total Items</div>
              <div style="font-size: 32px; font-weight: 700;">284</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">12 Categories</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-boxes-stacked"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #3B82F6, #2563EB); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Stock Value</div>
              <div style="font-size: 32px; font-weight: 700;">$456K</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">At cost price</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-dollar-sign"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #F59E0B, #D97706); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Low Stock Items</div>
              <div style="font-size: 32px; font-weight: 700;">23</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">Need reorder</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #10B981, #059669); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">This Month Purchase</div>
              <div style="font-size: 32px; font-weight: 700;">$89K</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">42 Orders</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-truck-ramp-box"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions & Alerts -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        
        <!-- Quick Actions -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-bolt" style="color: #F59E0B; margin-right: 8px;"></i>
            Quick Actions
          </h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <button onclick="navigateTo('inventory'); setTimeout(() => document.querySelectorAll('.module-nav-item')[1].click(), 100);" style="padding: 15px; background: linear-gradient(135deg, #16A398, #0d7a72); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-boxes-stacked" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">Opening Stock</div>
            </button>
            
            <button onclick="navigateTo('inventory'); setTimeout(() => document.querySelectorAll('.module-nav-item')[2].click(), 100);" style="padding: 15px; background: linear-gradient(135deg, #E0342F, #b91c1c); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-truck-ramp-box" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">New Purchase</div>
            </button>
            
            <button onclick="alert('Stock Transfer - Coming soon!')" style="padding: 15px; background: linear-gradient(135deg, #3B82F6, #2563EB); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-exchange-alt" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">Stock Transfer</div>
            </button>
            
            <button onclick="alert('Inventory Report - Coming soon!')" style="padding: 15px; background: linear-gradient(135deg, #8B5CF6, #7C3AED); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-file-invoice" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">Stock Report</div>
            </button>
          </div>
        </div>

        <!-- Low Stock Alerts -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-bell" style="color: #F59E0B; margin-right: 8px;"></i>
            Low Stock Alerts
          </h3>
          
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${[
              { name: 'Wireless Mouse', current: 5, min: 20, category: 'Electronics' },
              { name: 'USB-C Cable', current: 12, min: 50, category: 'Electronics' },
              { name: 'Cotton T-Shirt (M)', current: 8, min: 30, category: 'Clothing' },
              { name: 'Running Shoes (9)', current: 3, min: 15, category: 'Footwear' }
            ].map(item => `
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px;">
                <div style="width: 40px; height: 40px; background: #FEE2E2; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #E0342F; font-size: 18px;">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div style="flex: 1;">
                  <div style="font-weight: 600; font-size: 13px; color: var(--text);">${item.name}</div>
                  <div style="font-size: 11px; color: var(--text-dim);">${item.category}</div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 16px; font-weight: 700; color: #E0342F;">${item.current}</div>
                  <div style="font-size: 11px; color: var(--text-faint);">Min: ${item.min}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div style="margin-top: 20px; background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
        <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
          <i class="fa-solid fa-clock-rotate-left" style="color: #3B82F6; margin-right: 8px;"></i>
          Recent Inventory Activity
        </h3>
        
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: var(--bg); text-align: left;">
                <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Date</th>
                <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Item</th>
                <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Type</th>
                <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Qty</th>
                <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Value</th>
              </tr>
            </thead>
            <tbody>
              ${[
                { date: '2026-08-28', item: 'Laptop Dell XPS', type: 'Purchase', qty: '+10', value: '$9,000', color: '#10B981' },
                { date: '2026-08-27', item: 'Wireless Mouse', type: 'Sale', qty: '-5', value: '$125', color: '#E0342F' },
                { date: '2026-08-27', item: 'Cotton T-Shirt', type: 'Purchase', qty: '+50', value: '$500', color: '#10B981' },
                { date: '2026-08-26', item: 'Running Shoes', type: 'Return', qty: '+2', value: '$180', color: '#F59E0B' }
              ].map(activity => `
                <tr style="border-bottom: 1px solid var(--border);">
                  <td style="padding: 12px; font-size: 13px;">${activity.date}</td>
                  <td style="padding: 12px; font-weight: 600;">${activity.item}</td>
                  <td style="padding: 12px;"><span style="padding: 4px 10px; background: ${activity.color}20; color: ${activity.color}; border-radius: 12px; font-size: 11px; font-weight: 600;">${activity.type}</span></td>
                  <td style="padding: 12px; font-weight: 600; color: ${activity.color};">${activity.qty}</td>
                  <td style="padding: 12px; font-weight: 600;">${activity.value}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}