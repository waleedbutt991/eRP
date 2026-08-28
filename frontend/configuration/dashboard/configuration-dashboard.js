// ========================================
// Configuration Dashboard - ERP Settings Hub
// ========================================

function renderConfigurationDashboard(container) {
  container.innerHTML = `
    <div style="padding: 40px; max-width: 1400px; margin: 0 auto;">
      
      <!-- Header -->
      <div style="margin-bottom: 30px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 28px; color: var(--text); margin-bottom: 8px;">
          <i class="fa-solid fa-gear" style="color: #6B7280; margin-right: 12px;"></i>
          Configuration Dashboard
        </h1>
        <p style="color: var(--text-dim);">Manage your ERP system settings, clients, and master data</p>
      </div>

      <!-- Stats Cards -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px;">
        <div style="background: linear-gradient(135deg, #3B82F6, #1D4ED8); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Total Clients</div>
              <div style="font-size: 32px; font-weight: 700;">128</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">↑ 12 new this month</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-users"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #10B981, #047857); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Warehouses</div>
              <div style="font-size: 32px; font-weight: 700;">5</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">3 active</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-warehouse"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #F59E0B, #B45309); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Branches</div>
              <div style="font-size: 32px; font-weight: 700;">4</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">2 cities</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-building"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #8B5CF6, #6D28D9); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Bank Accounts</div>
              <div style="font-size: 32px; font-weight: 700;">3</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">2 banks</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-building-columns"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Configuration Categories -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px;">
        
        <!-- Master Data -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-database" style="color: #3B82F6; margin-right: 8px;"></i>
            Master Data
          </h3>
          
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="navigateTo('configuration'); setTimeout(() => document.querySelectorAll('.module-nav-item')[1].click(), 100);" style="padding: 14px; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #1E40AF; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-users"></i> Parties / Clients
              <span style="margin-left: auto; background: #3B82F6; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">128</span>
            </button>
            
            <button onclick="navigateTo('configuration'); setTimeout(() => document.querySelectorAll('.module-nav-item')[4].click(), 100);" style="padding: 14px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #065F46; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-warehouse"></i> Warehouses
              <span style="margin-left: auto; background: #10B981; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">5</span>
            </button>
            
            <button onclick="navigateTo('configuration'); setTimeout(() => document.querySelectorAll('.module-nav-item')[3].click(), 100);" style="padding: 14px; background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #92400E; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-building"></i> Branches
              <span style="margin-left: auto; background: #F59E0B; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">4</span>
            </button>
          </div>
        </div>

        <!-- Financial Settings -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-coins" style="color: #10B981; margin-right: 8px;"></i>
            Financial Settings
          </h3>
          
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="navigateTo('configuration'); setTimeout(() => document.querySelectorAll('.module-nav-item')[5].click(), 100);" style="padding: 14px; background: #F5F3FF; border: 1px solid #DDD6FE; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #5B21B6; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-building-columns"></i> Bank Accounts
              <span style="margin-left: auto; background: #8B5CF6; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">3</span>
            </button>
            
            <button onclick="navigateTo('configuration'); setTimeout(() => document.querySelectorAll('.module-nav-item')[6].click(), 100);" style="padding: 14px; background: #FEE2E2; border: 1px solid #FECACA; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #991B1B; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-percent"></i> Tax Settings
              <span style="margin-left: auto; background: #E0342F; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">3</span>
            </button>
            
            <button onclick="alert('Currency Settings - Coming soon!')" style="padding: 14px; background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #075985; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-money-bill-wave"></i> Currency
              <span style="margin-left: auto; background: #0EA5E9; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">USD</span>
            </button>
          </div>
        </div>

        <!-- Company & Users -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-building-user" style="color: #E0342F; margin-right: 8px;"></i>
            Company & Users
          </h3>
          
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="navigateTo('configuration'); setTimeout(() => document.querySelectorAll('.module-nav-item')[2].click(), 100);" style="padding: 14px; background: #FFF7ED; border: 1px solid #FED7AA; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #9A3412; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-id-card"></i> Company Profile
            </button>
            
            <button onclick="alert('User Management - Coming soon!')" style="padding: 14px; background: #FDF2F8; border: 1px solid #FBCFE8; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #9D174D; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-user-shield"></i> User Management
              <span style="margin-left: auto; background: #EC4899; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px;">8</span>
            </button>
            
            <button onclick="alert('Roles & Permissions - Coming soon!')" style="padding: 14px; background: #F5F5F4; border: 1px solid #D6D3D1; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left; color: #44403C; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-key"></i> Roles & Permissions
            </button>
          </div>
        </div>
      </div>

      <!-- Recent Activity & Quick Stats -->
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
        
        <!-- Recent Parties -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-clock-rotate-left" style="color: #3B82F6; margin-right: 8px;"></i>
            Recently Added Parties
          </h3>
          
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background: var(--bg); text-align: left;">
                  <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Name</th>
                  <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Type</th>
                  <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Contact</th>
                  <th style="padding: 12px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Linked Modules</th>
                </tr>
              </thead>
              <tbody>
                ${[
                  { name: 'Tech Solutions Ltd', type: 'Party', contact: 'info@techsol.com', modules: ['Sales', 'POS'], color: '#3B82F6' },
                  { name: 'Global Garments Co', type: 'Vendor', contact: 'sales@global.com', modules: ['Inventory', 'Purchase'], color: '#10B981' },
                  { name: 'Ahmed Enterprises', type: 'Both', contact: 'ahmed@ent.com', modules: ['Sales', 'Inventory'], color: '#8B5CF6' },
                  { name: 'Karachi Traders', type: 'Party', contact: 'kt@traders.com', modules: ['Sales'], color: '#3B82F6' }
                ].map(party => `
                  <tr style="border-bottom: 1px solid var(--border);">
                    <td style="padding: 12px; font-weight: 600;">${party.name}</td>
                    <td style="padding: 12px;"><span style="padding: 4px 10px; background: ${party.color}20; color: ${party.color}; border-radius: 12px; font-size: 11px; font-weight: 600;">${party.type}</span></td>
                    <td style="padding: 12px; font-size: 13px; color: var(--text-dim);">${party.contact}</td>
                    <td style="padding: 12px;">
                      <div style="display: flex; gap: 5px;">
                        ${party.modules.map(m => `<span style="padding: 2px 8px; background: var(--bg); border-radius: 4px; font-size: 10px; font-weight: 600;">${m}</span>`).join('')}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- System Info -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-circle-info" style="color: #6B7280; margin-right: 8px;"></i>
            System Info
          </h3>
          
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <div style="padding: 12px; background: var(--bg); border-radius: 8px;">
              <div style="font-size: 11px; color: var(--text-faint); text-transform: uppercase;">ERP Version</div>
              <div style="font-weight: 600; font-size: 14px;">eERP v1.0.0</div>
            </div>
            <div style="padding: 12px; background: var(--bg); border-radius: 8px;">
              <div style="font-size: 11px; color: var(--text-faint); text-transform: uppercase;">Database Status</div>
              <div style="font-weight: 600; font-size: 14px; color: #10B981;">● Connected</div>
            </div>
            <div style="padding: 12px; background: var(--bg); border-radius: 8px;">
              <div style="font-size: 11px; color: var(--text-faint); text-transform: uppercase;">Last Backup</div>
              <div style="font-weight: 600; font-size: 14px;">Today, 03:00 AM</div>
            </div>
            <div style="padding: 12px; background: var(--bg); border-radius: 8px;">
              <div style="font-size: 11px; color: var(--text-faint); text-transform: uppercase;">Active Users</div>
              <div style="font-weight: 600; font-size: 14px;">3 online</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}