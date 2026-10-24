(() => {
  const dialog = document.querySelector('.certificate-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.certificate-full');
  const title = dialog.querySelector('#certificate-title');
  const caption = dialog.querySelector('.certificate-caption');
  const original = dialog.querySelector('.certificate-original');
  let opener;
  document.querySelectorAll('[data-certificate]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = `${link.dataset.title} — Shenglan Ren`;
      title.textContent = link.dataset.title;
      caption.textContent = link.dataset.caption;
      original.href = link.href;
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });
  dialog.querySelector('.certificate-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus());
})();
