function renderBranches(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 1200px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text);">
          <i class="fa-solid fa-building" style="color: #F59E0B; margin-right: 10px;"></i> Branches Management
        </h1>
        <button onclick="alert('Add Branch form - Coming soon!')" style="padding: 12px 24px; background: linear-gradient(135deg, #F59E0B, #B45309); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
          <i class="fa-solid fa-plus"></i> Add Branch
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        ${[
          { id: 'BR001', name: 'Main Branch - Karachi', address: 'Plot 123, Clifton, Karachi', phone: '+92-21-12345678', manager: 'Ahmed Khan', status: 'Active' },
          { id: 'BR002', name: 'Lahore Branch', address: '456 Mall Road, Lahore', phone: '+92-42-87654321', manager: 'Fatima Ali', status: 'Active' },
          { id: 'BR003', name: 'Islamabad Branch', address: '789 Blue Area, Islamabad', phone: '+92-51-11223344', manager: 'Hassan Raza', status: 'Active' },
          { id: 'BR004', name: 'Peshawar Branch', address: '321 University Road, Peshawar', phone: '+92-91-55667788', manager: 'Ayesha Siddiqui', status: 'Inactive' }
        ].map(branch => `
          <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
              <div>
                <div style="font-size: 12px; color: var(--text-faint); font-weight: 600;">${branch.id}</div>
                <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin: 5px 0;">${branch.name}</h3>
              </div>
              <span style="padding: 4px 12px; background: ${branch.status === 'Active' ? '#10B981' : '#E0342F'}20; color: ${branch.status === 'Active' ? '#10B981' : '#E0342F'}; border-radius: 12px; font-size: 11px; font-weight: 600;">${branch.status}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: var(--text-dim);">
              <div><i class="fa-solid fa-location-dot" style="width: 20px; color: var(--text-faint);"></i> ${branch.address}</div>
              <div><i class="fa-solid fa-phone" style="width: 20px; color: var(--text-faint);"></i> ${branch.phone}</div>
              <div><i class="fa-solid fa-user-tie" style="width: 20px; color: var(--text-faint);"></i> Manager: ${branch.manager}</div>
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