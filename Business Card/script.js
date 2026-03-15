const copyBtn = document.querySelector('.copy-btn');
const feedbackEl = document.getElementById('copyFeedback');

copyBtn.addEventListener('click', () => {
  const email = copyBtn.getAttribute('data-email');
  
  navigator.clipboard.writeText(email).then(() => {
    feedbackEl.textContent = '✓ Email copied!';
    setTimeout(() => {
      feedbackEl.textContent = '';
    }, 2000);
  }).catch(err => {
    console.error('Copy failed:', err);
    feedbackEl.textContent = '❌ Could not copy';
    setTimeout(() => {
      feedbackEl.textContent = '';
    }, 2000);
  });
});