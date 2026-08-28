function renderWarehouses(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 1200px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text);">
          <i class="fa-solid fa-warehouse" style="color: #10B981; margin-right: 10px;"></i> Warehouses Management
        </h1>
        <button onclick="alert('Add Warehouse form - Coming soon!')" style="padding: 12px 24px; background: linear-gradient(135deg, #10B981, #047857); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
          <i class="fa-solid fa-plus"></i> Add Warehouse
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        ${[
          { id: 'WH001', name: 'Main Warehouse', location: 'Karachi', capacity: '10,000 sq ft', currentStock: 284, status: 'Active' },
          { id: 'WH002', name: 'Store A - Retail', location: 'Karachi', capacity: '2,000 sq ft', currentStock: 156, status: 'Active' },
          { id: 'WH003', name: 'Store B - Outlet', location: 'Lahore', capacity: '1,500 sq ft', currentStock: 89, status: 'Active' },
          { id: 'WH004', name: 'Distribution Center', location: 'Islamabad', capacity: '5,000 sq ft', currentStock: 412, status: 'Active' },
          { id: 'WH005', name: 'Returns Warehouse', location: 'Karachi', capacity: '500 sq ft', currentStock: 23, status: 'Active' }
        ].map(wh => `
          <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
              <div>
                <div style="font-size: 12px; color: var(--text-faint); font-weight: 600;">${wh.id}</div>
                <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin: 5px 0;">${wh.name}</h3>
              </div>
              <span style="padding: 4px 12px; background: #10B98120; color: #10B981; border-radius: 12px; font-size: 11px; font-weight: 600;">${wh.status}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: var(--text-dim);">
              <div><i class="fa-solid fa-location-dot" style="width: 20px; color: var(--text-faint);"></i> ${wh.location}</div>
              <div><i class="fa-solid fa-ruler-combined" style="width: 20px; color: var(--text-faint);"></i> ${wh.capacity}</div>
              <div><i class="fa-solid fa-boxes-stacked" style="width: 20px; color: var(--text-faint);"></i> ${wh.currentStock} items</div>
            </div>
            <div style="display: flex; gap: 10px; margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border);">
              <button style="flex: 1; padding: 8px; background: var(--bg); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;"><i class="fa-solid fa-pen"></i> Edit</button>
              <button style="flex: 1; padding: 8px; background: var(--bg); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}