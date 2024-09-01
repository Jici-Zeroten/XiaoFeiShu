// Disable right-click
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Disable Ctrl+U and Ctrl+P
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && (event.key === 'u' || event.key === 'U')) {
    event.preventDefault();
  }
  // Disable Ctrl+P (Print)
  if ((event.ctrlKey || event.metaKey) && (event.key === 'p' || event.key === 'P')) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.key === 'C')) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && (event.key === 'x' || event.key === 'X')) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && (event.key === 'a' || event.key === 'A')) {
    event.preventDefault();
  }
  // 禁用 F12 键（开发者工具）
  if (event.key === 'F12') {
    event.preventDefault();
  }
  // 禁用 Ctrl+Shift+I（开发者工具）
  if ((event.ctrlKey || event.metaKey) && (event.shiftKey && event.key === 'I')) {
    event.preventDefault();
  }
  // 禁用 Ctrl+Shift+J（开发者工具）
  if ((event.ctrlKey || event.metaKey) && (event.shiftKey && event.key === 'J')) {
    event.preventDefault();
  }
});

// Disable drag and drop
document.addEventListener('dragstart', function(event) {
  event.preventDefault();
});

// 禁用复制
document.addEventListener('copy', function(event) {
  event.preventDefault();
});
