function renderBanks(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 1200px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
        <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text);">
          <i class="fa-solid fa-building-columns" style="color: #8B5CF6; margin-right: 10px;"></i> Bank Accounts Management
        </h1>
        <button onclick="alert('Add Bank Account form - Coming soon!')" style="padding: 12px 24px; background: linear-gradient(135deg, #8B5CF6, #6D28D9); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
          <i class="fa-solid fa-plus"></i> Add Bank Account
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        ${[
          { bank: 'Habib Bank Limited', account: 'HBL-1234-5678-9012', type: 'Current', balance: 45000, currency: 'PKR' },
          { bank: 'Meezan Bank', account: 'MBL-9876-5432-1098', type: 'Savings', balance: 125000, currency: 'PKR' },
          { bank: 'Standard Chartered', account: 'SCB-USD-5566-7788', type: 'Current', balance: 8500, currency: 'USD' }
        ].map(bank => `
          <div style="background: linear-gradient(135deg, #F5F3FF, #EDE9FE); border: 1px solid #DDD6FE; border-radius: 12px; padding: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
              <div>
                <h3 style="font-family: 'Space Grotesk'; font-size: 18px; margin: 0 0 5px 0;">${bank.bank}</h3>
                <div style="font-size: 12px; color: var(--text-dim); font-weight: 600;">${bank.type} Account</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 11px; color: var(--text-faint);">Balance</div>
                <div style="font-size: 24px; font-weight: 700; color: #6D28D9;">${bank.currency} ${bank.balance.toLocaleString()}</div>
              </div>
            </div>
            <div style="background: white; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 14px; letter-spacing: 1px; margin-bottom: 15px;">
              ${bank.account}
            </div>
            <div style="display: flex; gap: 10px;">
              <button style="flex: 1; padding: 8px; background: white; border: 1px solid #DDD6FE; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;"><i class="fa-solid fa-pen"></i> Edit</button>
              <button style="flex: 1; padding: 8px; background: white; border: 1px solid #DDD6FE; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}