function renderSalesDashboard(container) {
  container.innerHTML = `
    <div style="padding: 40px;">
      <h1 style="font-family: 'Space Grotesk'; color: var(--text); margin-bottom: 10px;">
        <i class="fa-solid fa-chart-line" style="color: #E91E8C;"></i> Sales Dashboard
      </h1>
      <p style="color: var(--text-dim); margin-bottom: 30px;">Sales module ka overview</p>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <div style="background: var(--panel); padding: 25px; border-radius: 12px; border: 1px solid var(--border); cursor: pointer;" onclick="document.querySelector('.module-nav-item:nth-child(2)').click()">
          <div style="width: 50px; height: 50px; background: #FDE8F3; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #E91E8C; font-size: 24px; margin-bottom: 15px;">
            <i class="fa-solid fa-cash-register"></i>
          </div>
          <div style="font-weight: 600; margin-bottom: 5px;">POS</div>
          <div style="font-size: 12px; color: var(--text-faint);">Open POS System</div>
        </div>
        
        <div style="background: var(--panel); padding: 25px; border-radius: 12px; border: 1px solid var(--border); cursor: pointer;" onclick="document.querySelector('.module-nav-item:nth-child(3)').click()">
          <div style="width: 50px; height: 50px; background: #FBE6E6; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #E0342F; font-size: 24px; margin-bottom: 15px;">
            <i class="fa-solid fa-chart-pie"></i>
          </div>
          <div style="font-weight: 600; margin-bottom: 5px;">Reports</div>
          <div style="font-size: 12px; color: var(--text-faint);">View Analytics</div>
        </div>
      </div>
    </div>
  `;
}