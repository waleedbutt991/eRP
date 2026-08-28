function renderTaxes(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 1200px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text);">
          <i class="fa-solid fa-percent" style="color: #E0342F; margin-right: 10px;"></i> Tax Settings
        </h1>
        <button onclick="alert('Add Tax form - Coming soon!')" style="padding: 12px 24px; background: linear-gradient(135deg, #E0342F, #b91c1c); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
          <i class="fa-solid fa-plus"></i> Add Tax
        </button>
      </div>

      <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: var(--bg); text-align: left;">
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Tax Name</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Rate (%)</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Type</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Applied On</th>
              <th style="padding: 15px; font-size: 12px; color: var(--text-dim); text-transform: uppercase;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${[
              { name: 'Sales Tax (GST)', rate: 17, type: 'Percentage', applied: 'All Products', status: 'Active' },
              { name: 'Import Duty', rate: 11, type: 'Percentage', applied: 'Imported Items', status: 'Active' },
              { name: 'Luxury Tax', rate: 25, type: 'Percentage', applied: 'Luxury Items', status: 'Active' },
              { name: 'Zero Rated', rate: 0, type: 'Percentage', applied: 'Essential Goods', status: 'Active' }
            ].map(tax => `
              <tr style="border-bottom: 1px solid var(--border);">
                <td style="padding: 15px; font-weight: 600;">${tax.name}</td>
                <td style="padding: 15px; font-size: 18px; font-weight: 700; color: #E0342F;">${tax.rate}%</td>
                <td style="padding: 15px;"><span style="padding: 4px 12px; background: #F59E0B20; color: #F59E0B; border-radius: 12px; font-size: 11px; font-weight: 600;">${tax.type}</span></td>
                <td style="padding: 15px; font-size: 13px; color: var(--text-dim);">${tax.applied}</td>
                <td style="padding: 15px;"><span style="padding: 4px 12px; background: #10B98120; color: #10B981; border-radius: 12px; font-size: 11px; font-weight: 600;">${tax.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}