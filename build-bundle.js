const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Icons.jsx',
  'src/components/Navbar.jsx',
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/DivisionModal.jsx',
  'src/components/Activities.jsx',
  'src/components/Team.jsx',
  'src/components/RecruitmentProcess.jsx',
  'src/components/Statistics.jsx',
  'src/components/Testimonials.jsx',
  'src/components/FAQ.jsx',
  'src/components/ApplicationForm.jsx',
  'src/components/Footer.jsx',
  'src/App.jsx'
];

let bundle = '/* Avengers Club — S.H.I.E.L.D. Unified Component System */\n\n';

for (const file of files) {
  const filePath = path.join(__dirname, file);
  const content = fs.readFileSync(filePath, 'utf8');
  bundle += `\n/* ==========================================================================\n   MODULE: ${file}\n   ========================================================================== */\n\n`;
  bundle += content;
  bundle += '\n';
}

bundle += `
/* ==========================================================================
   DETERMINISTIC APPLICATION MOUNTING CONTROLLER
   ========================================================================== */
(function initAvengersApp() {
  function mount() {
    const rootEl = document.getElementById('root');
    if (!rootEl) {
      setTimeout(mount, 20);
      return;
    }
    if (typeof window.App === 'function' && typeof ReactDOM !== 'undefined') {
      try {
        const root = ReactDOM.createRoot(rootEl);
        root.render(React.createElement(window.App));
        console.log('[S.H.I.E.L.D. COMMAND] Avengers Club Portal Successfully Mounted.');
      } catch (err) {
        console.error('[S.H.I.E.L.D. ERROR] Error mounting app:', err);
      }
    } else {
      setTimeout(mount, 20);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
`;

fs.writeFileSync(path.join(__dirname, 'src', 'bundle.jsx'), bundle, 'utf8');
console.log('[SUCCESS] Created src/bundle.jsx with', bundle.length, 'bytes');
