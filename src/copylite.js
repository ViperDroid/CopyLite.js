/**
 * CopyLite.js
 * Simple copy-to-clipboard utility
 */

function copyToClipboard(text) {
  if (!navigator.clipboard) {
    const input = document.createElement('textarea');
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'absolute';
    input.style.left = '-9999px';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  } else {
    navigator.clipboard.writeText(text);
  }
  console.log("✅ Copied to clipboard:", text);
}

// UMD export
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CopyLite = factory();
  }
})(this, function () {
  return {
    copyToClipboard
  };
});
