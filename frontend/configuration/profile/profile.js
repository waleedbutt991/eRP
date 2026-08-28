function renderProfile(container) {
  container.innerHTML = `
    <div style="padding: 30px; max-width: 900px; margin: 0 auto;">
      <h1 style="font-family: 'Space Grotesk'; font-size: 24px; color: var(--text); margin-bottom: 25px;">
        <i class="fa-solid fa-id-card" style="color: #E0342F; margin-right: 10px;"></i> Company Profile
      </h1>
      <div style="background: var(--panel); border-radius: 12px; border: 1px solid var(--border); padding: 30px;">
        <div style="text-align: center; padding: 40px; color: var(--text-faint);">
          <i class="fa-solid fa-building" style="font-size: 48px; opacity: 0.3; margin-bottom: 15px;"></i>
          <p>Company Profile form - Coming soon!</p>
          <p style="font-size: 12px;">Yahan company ki details, logo, address, NTN, STRN waghera honge</p>
        </div>
      </div>
    </div>
  `;
}