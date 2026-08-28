// ========================================
// Parties / Clients Management
// 3 Categories: Party, Vendor, Both
// ========================================

let parties = [
  { id: 'P001', name: 'Tech Solutions Ltd', type: 'Party', email: 'info@techsol.com', phone: '+92-300-1234567', address: 'Karachi, Pakistan', balance: 15000, linkedModules: ['Sales', 'POS'] },
  { id: 'P002', name: 'Global Garments Co', type: 'Vendor', email: 'sales@global.com', phone: '+92-321-7654321', address: 'Lahore, Pakistan', balance: -8500, linkedModules: ['Inventory', 'Purchase'] },
  { id: 'P003', name: 'Ahmed Enterprises', type: 'Both', email: 'ahmed@ent.com', phone: '+92-333-9876543', address: 'Islamabad, Pakistan', balance: 5000, linkedModules: ['Sales', 'Inventory'] }
];

function renderParties(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 1400px; margin: 0 auto;">
      
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text);">
          <i class="fa-solid fa-users" style="color: #3B82F6; margin-right: 10px;"></i> Parties / Clients Management
        </h1>
        <button onclick="showPartyForm()" style="padding: 12px 24px; background: linear-gradient(135deg, #3B82F6, #1D4ED8); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-plus"></i> Add New Party
        </button>
      </div>

      <!-- Category Info Box -->
      <div style="background: linear-gradient(135deg, #EFF6FF, #DBEAFE); border: 1px solid #BFDBFE; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
        <h3 style="font-family: 'Space Grotesk'; font-size: 16px; margin-bottom: 12px; color: #1E40AF;">
          <i class="fa-solid fa-circle-info" style="margin-right: 8px;"></i> Party Categories Explained
        </h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3B82F6;">
            <div style="font-weight: 700; color: #3B82F6; margin-bottom: 5px;">👤 Party (Customer)</div>
            <div style="font-size: 12px; color: var(--text-dim);">Sirf Sales/POS mein dikhega. Aap isko maal bechte hain.</div>
          </div>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #10B981;">
            <div style="font-weight: 700; color: #10B981; margin-bottom: 5px;"> Vendor (Supplier)</div>
            <div style="font-size: 12px; color: var(--text-dim);">Sirf Purchase/Inventory mein dikhega. Ye aapko maal bechta hai.</div>
          </div>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #8B5CF6;">
            <div style="font-weight: 700; color: #8B5CF6; margin-bottom: 5px;">🔄 Both (Dual Role)</div>
            <div style="font-size: 12px; color: var(--text-dim);">Sales aur Purchase dono mein dikhega. Dono taraf kaam karta hai.</div>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <button onclick="filterParties('all')" class="party-filter active" style="padding: 10px 20px; background: #3B82F6; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">All (${parties.length})</button>
        <button onclick="filterParties('Party')" class="party-filter" style="padding: 10px 20px; background: white; border: 1px solid var(--border); border-radius: 8px; font-weight: 600; cursor: pointer;">Party (${parties.filter(p => p.type === 'Party').length})</button>
        <button onclick="filterParties('Vendor')" class="party-filter" style="padding: 10px 20px; background: white; border: 1px solid var(--border); border-radius: 8px; font-weight: 600; cursor: pointer;">Vendor (${parties.filter(p => p.type === 'Vendor').length})</button>
        <button onclick="filterParties('Both')" class="party-filter" style="padding: 10px 20px; background: white; border: 1px solid var(--border); border-radius: 8px; font-weight: 600; cursor: pointer;">Both (${parties.filter(p => p.type === 'Both').length})</button>
      </div>

      <!-- Parties Table -->
      <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: var(--bg); text-align: left;">
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">ID</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Name</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Type</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Contact</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Balance</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Linked Modules</th>
              <th style="padding: 15px; width: 100px;"></th>
            </tr>
          </thead>
          <tbody id="partiesTableBody">
            ${parties.map(party => `
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 15px; font-weight: 600; color: var(--text-dim);">${party.id}</td>
                <td style="padding: 15px;">
                  <div style="font-weight: 600;">${party.name}</div>
                  <div style="font-size: 12px; color: var(--text-faint);">${party.address}</div>
                </td>
                <td style="padding: 15px;">
                  <span style="padding: 4px 12px; background: ${party.type === 'Party' ? '#3B82F6' : party.type === 'Vendor' ? '#10B981' : '#8B5CF6'}20; color: ${party.type === 'Party' ? '#3B82F6' : party.type === 'Vendor' ? '#10B981' : '#8B5CF6'}; border-radius: 12px; font-size: 11px; font-weight: 600;">
                    ${party.type}
                  </span>
                </td>
                <td style="padding: 15px;">
                  <div style="font-size: 13px;">${party.email}</div>
                  <div style="font-size: 12px; color: var(--text-faint);">${party.phone}</div>
                </td>
                <td style="padding: 15px; font-weight: 700; color: ${party.balance >= 0 ? '#10B981' : '#E0342F'};">
                  ${party.balance >= 0 ? '+' : ''}$${party.balance.toLocaleString()}
                </td>
                <td style="padding: 15px;">
                  <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                    ${party.linkedModules.map(m => `<span style="padding: 3px 8px; background: var(--bg); border-radius: 4px; font-size: 10px; font-weight: 600;">${m}</span>`).join('')}
                  </div>
                </td>
                <td style="padding: 15px; text-align: right;">
                  <button onclick="editParty('${party.id}')" style="background: none; border: none; color: #3B82F6; cursor: pointer; margin-right: 8px;"><i class="fa-solid fa-pen"></i></button>
                  <button onclick="deleteParty('${party.id}')" style="background: none; border: none; color: #E0342F; cursor: pointer;"><i class="fa-solid fa-trash"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Add/Edit Party Form (Hidden by default) -->
      <div id="partyFormModal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 1000; align-items: center; justify-content: center;">
        <div style="background: var(--panel); border-radius: 12px; padding: 30px; max-width: 700px; width: 90%; max-height: 90vh; overflow-y: auto;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
            <h2 style="font-family: 'Space Grotesk'; font-size: 22px;">Add New Party</h2>
            <button onclick="closePartyForm()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: var(--text-dim);">×</button>
          </div>
          
          <form id="partyForm" onsubmit="saveParty(event)">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              
              <div style="grid-column: span 2;">
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Party Name *</label>
                <input type="text" id="party_name" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
              </div>

              <div>
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Category *</label>
                <select id="party_type" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
                  <option value="">-- Select Category --</option>
                  <option value="Party">👤 Party (Customer Only)</option>
                  <option value="Vendor">🏭 Vendor (Supplier Only)</option>
                  <option value="Both">🔄 Both (Customer & Supplier)</option>
                </select>
              </div>

              <div>
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Party ID</label>
                <input type="text" id="party_id" value="P${String(parties.length + 1).padStart(3, '0')}" readonly style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px; background: var(--bg);">
              </div>

              <div>
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Email *</label>
                <input type="email" id="party_email" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
              </div>

              <div>
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Phone *</label>
                <input type="tel" id="party_phone" required style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
              </div>

              <div style="grid-column: span 2;">
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Address</label>
                <textarea id="party_address" rows="3" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px; resize: vertical;"></textarea>
              </div>

              <div>
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">Opening Balance ($)</label>
                <input type="number" id="party_balance" step="0.01" value="0" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
              </div>

              <div>
                <label style="font-size: 12px; font-weight: 600; color: var(--text-dim); text-transform: uppercase;">NTN / Tax Number</label>
                <input type="text" id="party_ntn" style="width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 8px; margin-top: 6px; font-size: 14px;">
              </div>

            </div>

            <div style="display: flex; gap: 15px; margin-top: 25px; justify-content: flex-end;">
              <button type="button" onclick="closePartyForm()" style="padding: 12px 24px; background: white; border: 1px solid var(--border); border-radius: 8px; font-weight: 600; cursor: pointer;">Cancel</button>
              <button type="submit" style="padding: 12px 30px; background: linear-gradient(135deg, #3B82F6, #1D4ED8); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                <i class="fa-solid fa-save" style="margin-right: 8px;"></i> Save Party
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;
}

function showPartyForm() {
  document.getElementById('partyFormModal').style.display = 'flex';
}

function closePartyForm() {
  document.getElementById('partyFormModal').style.display = 'none';
  document.getElementById('partyForm').reset();
}

function saveParty(event) {
  event.preventDefault();
  
  const type = document.getElementById('party_type').value;
  const linkedModules = [];
  
  if (type === 'Party' || type === 'Both') {
    linkedModules.push('Sales', 'POS');
  }
  if (type === 'Vendor' || type === 'Both') {
    linkedModules.push('Inventory', 'Purchase');
  }
  
  const newParty = {
    id: document.getElementById('party_id').value,
    name: document.getElementById('party_name').value,
    type: type,
    email: document.getElementById('party_email').value,
    phone: document.getElementById('party_phone').value,
    address: document.getElementById('party_address').value,
    balance: parseFloat(document.getElementById('party_balance').value) || 0,
    linkedModules: linkedModules
  };
  
  parties.push(newParty);
  closePartyForm();
  renderParties(document.querySelector('.module-main'));
  
  alert(`✅ Party Saved!\n\nName: ${newParty.name}\nType: ${newParty.type}\nLinked to: ${linkedModules.join(', ')}\n\nYe ab ${linkedModules.join(' aur ')} modules mein automatically dikhega!`);
}

function filterParties(type) {
  document.querySelectorAll('.party-filter').forEach(btn => {
    btn.style.background = 'white';
    btn.style.color = 'var(--text)';
    btn.style.border = '1px solid var(--border)';
  });
  event.target.style.background = '#3B82F6';
  event.target.style.color = 'white';
  event.target.style.border = 'none';
  
  // Filter logic here (simplified for demo)
  alert(`Filter: ${type} (Backend integration ke baad full filtering kaam karegi)`);
}

function editParty(id) {
  alert(`Edit Party: ${id} (Form open hoga with existing data)`);
}

function deleteParty(id) {
  if (confirm(`Are you sure you want to delete party ${id}?`)) {
    parties = parties.filter(p => p.id !== id);
    renderParties(document.querySelector('.module-main'));
  }
}