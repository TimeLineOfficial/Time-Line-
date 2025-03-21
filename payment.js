// Generate CAPTCHA
function generateCaptcha() {
  const captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
  document.getElementById("captchaDisplay").textContent = captcha;
}

// Initialize CAPTCHA
generateCaptcha();

// Validate CAPTCHA (case-insensitive)
function validateCaptcha() {
  const captchaInput = document.getElementById("captchaInput").value.toUpperCase(); // Convert input to uppercase
  const captchaDisplay = document.getElementById("captchaDisplay").textContent;

  if (captchaInput === captchaDisplay) {
    document.getElementById("qrCodeSection").style.display = "block";
    document.getElementById("captchaSection").style.display = "none";
  } else {
    alert("Invalid CAPTCHA. Please try again.");
    generateCaptcha();
  }
}

// Submit Order
function submitOrder() {
  const receiptUpload = document.getElementById("receiptUpload");
  if (receiptUpload.files.length > 0 && receiptUpload.files[0].size <= 4 * 1024 * 1024) {
    const customerName = localStorage.getItem("customerName") || localStorage.getItem("token");
    document.getElementById("popupMessage").innerHTML = `Your Order is submitted <strong>${customerName}</strong>. Please write your token number on the delivery package for better identification.`;
    document.getElementById("popup").style.display = "block";
  } else {
    alert("Please upload a valid payment receipt (max 4MB).");
  }
}

// Close Popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}