// ========================================
// eERP - Main Routing & Module System
// Compatible with Vercel + .NET Backend
// ========================================

const MODULES = [
  { 
    key: 'sales', 
    name: 'Sales', 
    icon: 'fa-chart-line', 
    bg: '#FDE8F3', 
    color: '#E91E8C', 
    options: [
      { name: 'Dashboard', icon: 'fa-house', script: 'sales/dashboard/dashboard.js', renderFunc: 'renderSalesDashboard', isDefault: true },
      { name: 'POS', icon: 'fa-cash-register', script: 'sales/pos/pos.js', renderFunc: 'renderPOS' },
      { name: 'Reports', icon: 'fa-chart-pie', script: 'sales/reports/reports.js', renderFunc: 'renderReports' }
    ]
  },
  { 
    key: 'inventory', 
    name: 'Inventory', 
    icon: 'fa-boxes-stacked', 
    bg: '#E3F6F2', 
    color: '#16A398', 
    options: [
      { name: 'Dashboard', icon: 'fa-house', script: 'inventory/dashboard/dashboard.js', renderFunc: 'renderInventoryDashboard', isDefault: true },
      { name: 'Opening Stock', icon: 'fa-box-open' },
      { name: 'Purchase', icon: 'fa-truck-ramp-box' },
      { name: 'Reports', icon: 'fa-chart-pie' }
    ]
  },
  { 
    key: 'finance', 
    name: 'Finance Management', 
    icon: 'fa-file-invoice-dollar', 
    bg: '#FBE6E6', 
    color: '#E0342F', 
    options: [
      { name: 'Dashboard', icon: 'fa-house', script: 'finance/dashboard/finance-dashboard.js', renderFunc: 'renderFinanceDashboard', isDefault: true },
      { name: 'Setup', icon: 'fa-sliders' },
      { name: 'Accounts', icon: 'fa-book-open' },
      { name: 'Reports', icon: 'fa-chart-pie' }
    ]
  },
  { 
    key: 'hr', 
    name: 'HR Management', 
    icon: 'fa-users', 
    bg: '#EDE7FB', 
    color: '#7B3FC4', 
    options: [
      { name: 'Dashboard', icon: 'fa-house', script: 'hr/dashboard/hr-dashboard.js', renderFunc: 'renderHRDashboard', isDefault: true },
      { name: 'Employee', icon: 'fa-id-badge' },
      { name: 'Leaves', icon: 'fa-umbrella-beach' },
      { name: 'Attendance', icon: 'fa-clock' },
      { name: 'Payroll', icon: 'fa-money-check-dollar' },
      { name: 'Settings', icon: 'fa-gear' }
    ]
  }
  { 
  key: 'crm', 
  name: 'CRM', 
  icon: 'fa-handshake', 
  bg: '#E8F4FD', 
  color: '#3B82F6', 
  options: [
    { name: 'Dashboard', icon: 'fa-house', script: 'crm/dashboard/crm-dashboard.js', renderFunc: 'renderCRMDashboard', isDefault: true },
    { name: 'Customers', icon: 'fa-users' },
    { name: 'Leads', icon: 'fa-bullseye' },
    { name: 'Opportunities', icon: 'fa-chart-line' },
    { name: 'Activities', icon: 'fa-calendar-check' }
  ]
},
];

// ========================================
// Dashboard Grid Generation
// ========================================

const grid = document.getElementById('grid');
if (grid) {
  MODULES.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--card-bg', m.bg);
    card.style.setProperty('--card-icon', m.color);
    card.innerHTML = `
      <div class="icon-circle"><i class="fa-solid ${m.icon}"></i></div>
      <div class="name">${m.name}</div>
    `;
    card.addEventListener('click', () => navigateTo(m.key));
    grid.appendChild(card);
  });
}

// ========================================
// Navigation Functions
// ========================================

function navigateTo(key) {
  if (location.hash.replace('#', '') === key) { 
    renderRoute(); 
    return; 
  }
  location.hash = key;
}

function renderRoute() {
  const key = location.hash.replace('#', '');
  const m = MODULES.find(mod => mod.key === key);

  if (!m) {
    const moduleView = document.getElementById('moduleView');
    const dashboardView = document.getElementById('dashboardView');
    if (moduleView) moduleView.classList.add('hidden');
    if (dashboardView) dashboardView.classList.remove('hidden');
    return;
  }

  const moduleTitle = document.getElementById('moduleTitle');
  if (moduleTitle) moduleTitle.textContent = m.name;
  
  const nav = document.getElementById('moduleNav');
  if (nav) {
    nav.innerHTML = '';
    
    m.options.forEach((opt, i) => {
      const item = document.createElement('div');
      item.className = 'module-nav-item' + (i === 0 ? ' active' : '');
      item.innerHTML = `<i class="fa-solid ${opt.icon}"></i>${opt.name}`;
      
      if (opt.script) {
        item.onclick = () => {
          document.querySelectorAll('.module-nav-item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');
          loadModule(opt.script, opt.renderFunc);
        };
      }
      nav.appendChild(item);
    });
  }

  const moduleView = document.getElementById('moduleView');
  const dashboardView = document.getElementById('dashboardView');
  if (moduleView) moduleView.classList.remove('hidden');
  if (dashboardView) dashboardView.classList.add('hidden');
  
  // Load default dashboard
  const defaultOption = m.options.find(opt => opt.isDefault) || m.options[0];
  if (defaultOption?.script && nav) {
    loadModule(defaultOption.script, defaultOption.renderFunc);
    const firstItem = nav.querySelector('.module-nav-item');
    if (firstItem) {
      document.querySelectorAll('.module-nav-item').forEach(el => el.classList.remove('active'));
      firstItem.classList.add('active');
    }
  }
}

// ========================================
// Dynamic Module Loader (Vercel Compatible)
// ========================================

function loadModule(scriptPath, functionName) {
  const moduleMain = document.querySelector('.module-main');
  if (!moduleMain) return;
  
  // Show loading state
  moduleMain.innerHTML = `
    <div style="text-align:center; padding:50px; color:var(--text-faint);">
      <i class="fa-solid fa-spinner fa-spin" style="font-size:30px;"></i>
      <p style="margin-top:10px;">Loading module...</p>
    </div>
  `;

  // Remove old script if exists
  const oldScript = document.getElementById('dynamicModuleScript');
  if (oldScript) oldScript.remove();

  // Create and load new script
  const script = document.createElement('script');
  script.id = 'dynamicModuleScript';
  script.src = scriptPath;
  
  script.onload = () => {
    if (typeof window[functionName] === 'function') {
      window[functionName](moduleMain);
    } else {
      // Module loaded but render function not found - show success message for development
      moduleMain.innerHTML = `
        <div style="text-align:center; padding:50px;">
          <div style="width: 80px; height: 80px; background: #16A398; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 40px;">
            <i class="fa-solid fa-check"></i>
          </div>
          <h2 style="color:var(--text); font-family: 'Space Grotesk'; margin-bottom: 10px;">Module Loaded!</h2>
          <p style="color:var(--text-dim); margin-bottom: 20px;">${scriptPath} successfully loaded.</p>
          <p style="color:var(--text-faint); font-size: 13px;">Next step: Create <code style="background:var(--bg); padding: 4px 8px; border-radius: 4px;">${functionName}(container)</code> function in this file.</p>
        </div>
      `;
    }
  };
  
  script.onerror = () => {
    moduleMain.innerHTML = `
      <div style="text-align:center; padding:50px;">
        <div style="width: 80px; height: 80px; background: #E0342F; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 40px;">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <h2 style="color:var(--text); font-family: 'Space Grotesk'; margin-bottom: 10px;">File Not Found</h2>
        <p style="color:var(--text-dim); margin-bottom: 10px;"><code style="background:var(--bg); padding: 4px 8px; border-radius: 4px;">${scriptPath}</code></p>
        <p style="color:var(--text-faint); font-size: 13px;">Please create this file to continue.</p>
      </div>
    `;
    console.error(`Failed to load module: ${scriptPath}`);
  };
  
  document.body.appendChild(script);
}

// ========================================
// Global Utility Functions (Future Use)
// ========================================

// API Helper - Future .NET Backend Integration
async function fetchAPI(endpoint, options = {}) {
  // Vercel deployment ke liye relative URL use karein
  const baseURL = ''; // Production mein ye .NET API ka URL hoga
  
  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
}

// Local Storage Helper - Temporary data storage
const Storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(`eERP_${key}`);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(`eERP_${key}`, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Storage set error:', error);
      return false;
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(`eERP_${key}`);
      return true;
    } catch (error) {
      console.error('Storage remove error:', error);
      return false;
    }
  }
};

// ========================================
// Event Listeners
// ========================================

window.addEventListener('popstate', renderRoute);
window.addEventListener('hashchange', renderRoute);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderRoute();
});

// ========================================
// End of shared.js
// ========================================