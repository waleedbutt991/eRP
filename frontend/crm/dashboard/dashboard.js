// ========================================
// CRM Dashboard - Customer Relationship Management
// ========================================

function renderCRMDashboard(container) {
  container.innerHTML = `
    <div style="padding: 40px; max-width: 1400px; margin: 0 auto;">
      
      <!-- Header -->
      <div style="margin-bottom: 30px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 28px; color: var(--text); margin-bottom: 8px;">
          <i class="fa-solid fa-handshake" style="color: #3B82F6; margin-right: 12px;"></i>
          CRM Dashboard
        </h1>
        <p style="color: var(--text-dim);">Manage customers, leads, and opportunities</p>
      </div>

      <!-- Stats Cards -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px;">
        <div style="background: linear-gradient(135deg, #3B82F6, #2563EB); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Total Customers</div>
              <div style="font-size: 32px; font-weight: 700;">1,284</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">↑ 12% this month</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-users"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #10B981, #059669); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Active Leads</div>
              <div style="font-size: 32px; font-weight: 700;">342</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">↑ 8% this month</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-bullseye"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #F59E0B, #D97706); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Opportunities</div>
              <div style="font-size: 32px; font-weight: 700;">89</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">Value: $456K</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-chart-line"></i>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #8B5CF6, #7C3AED); padding: 25px; border-radius: 12px; color: white;">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <div style="font-size: 12px; opacity: 0.9; margin-bottom: 8px;">Today's Activities</div>
              <div style="font-size: 32px; font-weight: 700;">24</div>
              <div style="font-size: 12px; opacity: 0.9; margin-top: 8px;">5 pending</div>
            </div>
            <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
              <i class="fa-solid fa-calendar-check"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions & Recent Activity -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        
        <!-- Quick Actions -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-bolt" style="color: #F59E0B; margin-right: 8px;"></i>
            Quick Actions
          </h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <button onclick="alert('Add Customer - Coming soon!')" style="padding: 15px; background: linear-gradient(135deg, #3B82F6, #2563EB); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-user-plus" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">Add Customer</div>
            </button>
            
            <button onclick="alert('Create Lead - Coming soon!')" style="padding: 15px; background: linear-gradient(135deg, #10B981, #059669); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-plus-circle" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">Create Lead</div>
            </button>
            
            <button onclick="alert('Schedule Meeting - Coming soon!')" style="padding: 15px; background: linear-gradient(135deg, #8B5CF6, #7C3AED); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-calendar-plus" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">Schedule Meeting</div>
            </button>
            
            <button onclick="alert('Send Email - Coming soon!')" style="padding: 15px; background: linear-gradient(135deg, #F59E0B, #D97706); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; text-align: left;">
              <i class="fa-solid fa-envelope" style="margin-right: 8px;"></i>
              <div style="font-size: 13px;">Send Email</div>
            </button>
          </div>
        </div>

        <!-- Recent Customers -->
        <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
          <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
            <i class="fa-solid fa-clock-rotate-left" style="color: #10B981; margin-right: 8px;"></i>
            Recent Customers
          </h3>
          
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${[
              { name: 'Ahmed Khan', company: 'Tech Solutions', email: 'ahmed@techsol.com', status: 'Active', color: '#10B981' },
              { name: 'Fatima Ali', company: 'Digital Marketing Co', email: 'fatima@digitalco.com', status: 'New', color: '#3B82F6' },
              { name: 'Hassan Raza', company: 'Import Export Ltd', email: 'hassan@ieltd.com', status: 'Active', color: '#10B981' },
              { name: 'Ayesha Siddiqui', company: 'Fashion Hub', email: 'ayesha@fashionhub.com', status: 'Lead', color: '#F59E0B' }
            ].map(customer => `
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--bg); border-radius: 8px; border: 1px solid var(--border);">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3B82F6, #8B5CF6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">
                  ${customer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style="flex: 1;">
                  <div style="font-weight: 600; font-size: 13px; color: var(--text);">${customer.name}</div>
                  <div style="font-size: 11px; color: var(--text-dim);">${customer.company}</div>
                </div>
                <div style="padding: 4px 10px; background: ${customer.color}20; color: ${customer.color}; border-radius: 12px; font-size: 11px; font-weight: 600;">
                  ${customer.status}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Pipeline Overview -->
      <div style="margin-top: 20px; background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 25px;">
        <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 20px; color: var(--text);">
          <i class="fa-solid fa-filter" style="color: #8B5CF6; margin-right: 8px;"></i>
          Sales Pipeline Overview
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px;">
          ${[
            { stage: 'New Lead', count: 45, value: '$125K', color: '#3B82F6', width: '100%' },
            { stage: 'Contacted', count: 32, value: '$89K', color: '#10B981', width: '70%' },
            { stage: 'Proposal', count: 18, value: '$67K', color: '#F59E0B', width: '50%' },
            { stage: 'Negotiation', count: 8, value: '$34K', color: '#8B5CF6', width: '30%' },
            { stage: 'Closed Won', count: 12, value: '$156K', color: '#10B981', width: '100%' }
          ].map((item, index) => `
            <div style="text-align: center;">
              <div style="background: ${item.color}15; border: 2px solid ${item.color}; border-radius: 8px; padding: 15px; margin-bottom: 8px;">
                <div style="font-size: 24px; font-weight: 700; color: ${item.color};">${item.count}</div>
              </div>
              <div style="font-size: 12px; font-weight: 600; color: var(--text); margin-bottom: 4px;">${item.stage}</div>
              <div style="font-size: 11px; color: var(--text-faint);">${item.value}</div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}