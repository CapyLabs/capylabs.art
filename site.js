document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = button.closest('section').querySelector('[role="status"]');
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      if (status) status.textContent = (button.dataset.copyLabel || 'Color') + ' copied.';
    } catch {
      if (status) status.textContent = 'Copy this text: ' + button.dataset.copy;
    }
  });
});
