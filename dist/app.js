const features = {
  create: { source: 'Files & folders', output: '.7z', meta: 'Create / 7Z · ZIP · TAR', title: 'Everything together', description: 'Bring files and folders into a single archive. Choose 7Z, ZIP or TAR for the archive you want to make.' },
  extract: { source: 'Your archive', output: 'Files', meta: 'Extract / 20+ formats', title: 'Open what comes your way', description: 'Extract files from RAR, ZIP, 7Z, ISO and more than 20 archive formats, as listed in the product artwork.' },
  protect: { source: 'Your files', output: 'AES', meta: 'Protect / AES-256', title: 'Keep a password between them', description: 'Protect supported archives with AES-256 password protection. Choose a strong password and share it separately from your files.' },
  split: { source: 'Large file', output: 'Parts', meta: 'Split / Smaller parts', title: 'Break a big file down', description: 'Split large files into smaller parts. Keep all parts together so the recipient has the complete set.' },
  test: { source: 'Your archive', output: 'Test', meta: 'Test / Archive integrity', title: 'Check before you share', description: 'Test an archive for errors. An archive integrity check helps identify problems with the archive; it is not a malware scan.' },
  convert: { source: 'Your archive', output: 'ZIP', meta: 'Convert / Supported formats', title: 'A different format, when you need it', description: 'Convert between supported archive formats. The available output options depend on the source archive and the application.' }
};
document.querySelectorAll('[data-feature]').forEach(button => button.addEventListener('click', () => {
  const feature = features[button.dataset.feature];
  document.querySelectorAll('[data-feature]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  for (const [id, key] of Object.entries({'diagram-source':'source','diagram-output':'output','feature-meta':'meta','feature-title':'title','feature-description':'description'})) document.getElementById(id).textContent = feature[key];
}));
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
if (menu && navigation) {
  const mobile = matchMedia('(max-width: 700px)');
  const resetMenu = () => { menu.hidden = !mobile.matches; menu.setAttribute('aria-expanded', 'false'); navigation.classList.toggle('is-collapsed', mobile.matches); };
  resetMenu(); mobile.addEventListener('change', resetMenu);
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-collapsed', !open); });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', resetMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && mobile.matches && menu.getAttribute('aria-expanded') === 'true') { resetMenu(); menu.focus(); } });
}
const copyButton = document.getElementById('copy-hash');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try { await navigator.clipboard.writeText(document.getElementById('hash').textContent); status.textContent = 'Copied'; }
    catch { status.textContent = 'Select and copy the checksum above.'; }
  });
}

// Motion is progressive enhancement: content stays visible without JavaScript.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const stage = document.querySelector('.archive-stage');
const packButton = document.getElementById('pack-demo');
if (stage && packButton) {
  packButton.hidden = false;
  packButton.addEventListener('click', () => {
    const packed = stage.classList.toggle('packed');
    packButton.innerHTML = packed ? 'Unpack the files <span aria-hidden="true">↗</span>' : 'Pack the files <span aria-hidden="true">↗</span>';
    document.getElementById('scene-status').textContent = packed ? 'Together. Ready for what’s next.' : 'A little order for your files.';
  });
}
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold:0.08});
  document.querySelectorAll('.formats,.section-heading,.feature-explorer,.protection-inner,.studio-heading,.studio h2,.studio-intro,.work-grid article,.download-intro,.download-card,.faq').forEach(element => {
    element.classList.add('reveal'); revealObserver.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { document.documentElement.classList.remove('motion-ready'); revealObserver.disconnect(); }
  });
}
const progress = document.querySelector('.reading-progress');
if (progress) {
  let scheduled = false;
  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, {passive:true});
  window.addEventListener('resize', updateProgress);
  updateProgress();
}
document.querySelectorAll('[data-feature]').forEach(button => button.addEventListener('click', () => {
  const diagram = document.querySelector('.file-diagram');
  if (!reducedMotion.matches && diagram?.animate) diagram.animate([{opacity:.3,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
}));
