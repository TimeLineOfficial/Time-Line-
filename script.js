// Generate Random Token
function generateToken() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Display Token if Name is Empty
document.getElementById('customerName').addEventListener('blur', function() {
  if (this.value === "") {
    document.getElementById('tokenDisplay').textContent = "Your Token: " + generateToken();
  } else {
    document.getElementById('tokenDisplay').textContent = "";
  }
});

// Show Popup for "Why?"
document.querySelector(".info").addEventListener("click", function() {
  alert("This photo is asked for better identification of recipient's during the time of delivery.");
});

// Handle Live Delivery Options
document.getElementById("liveDelivery").addEventListener("change", function() {
  const liveDeliveryOptions = document.getElementById("liveDeliveryOptions");
  if (this.checked) {
    liveDeliveryOptions.innerHTML = `
      <label for="deliveryMethod">Delivery Method:</label>
      <select id="deliveryMethod" name="deliveryMethod">
        <option value="videoCall">Live delivery on video call</option>
        <option value="recorded">Recorded video of delivery</option>
      </select>
      <label for="platform">Choose Platform:</label>
      <select id="platform" name="platform">
        <option value="whatsapp">WhatsApp</option>
        <option value="googleMeet">Google Meet</option>
        <option value="instagram">Instagram</option>
      </select>
      <div id="platformDetails"></div>
    `;

    document.getElementById("platform").addEventListener("change", function() {
      const platformDetails = document.getElementById("platformDetails");
      switch (this.value) {
        case 'whatsapp':
          platformDetails.innerHTML = `
            <label for="whatsappNumber">Fill Your WhatsApp Number:</label>
            <input type="tel" id="whatsappNumber" name="whatsappNumber" placeholder="Enter your WhatsApp number" pattern="^[0-9]{10}$">
          `;
          break;
        case 'googleMeet':
          platformDetails.innerHTML = `
            <label for="email">Enter your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email">
          `;
          break;
        case 'instagram':
          platformDetails.innerHTML = `
            <label for="instagramId">Enter your Instagram ID:</label>
            <input type="text" id="instagramId" name="instagramId" placeholder="Enter your Instagram ID">
          `;
          break;
        default:
          platformDetails.innerHTML = '';
          break;
      }
    });
  } else {
    liveDeliveryOptions.innerHTML = '';
  }
});

// Handle Item Type Selection
document.getElementById("itemType").addEventListener("change", function() {
  const selectedItemType = this.value;
  const additionalSections = document.getElementById("additionalSections");

  switch (selectedItemType) {
    case 'message':
      additionalSections.innerHTML = `
        <h3>Write Your Message</h3>
        <textarea name="message" rows="4" placeholder="Write your message here..." required></textarea>
      `;
      break;
    case 'writtenByTimeline':
      additionalSections.innerHTML = `
        <h3>Write Your Letter</h3>
        <textarea name="letter" rows="4" placeholder="Write your letter here..." required></textarea>
      `;
      break;
    case 'itemsSendByCustomer':
      additionalSections.innerHTML = `
        <h3>Send Item At</h3>
        <textarea rows="3" readonly>Time Line Office, Parle-G factor, Patanava, Ramnagar, Ramnagar industrial area, Varanasi, Uttar Pradesh, 221009</textarea>
        <button type="button" onclick="copyAddress()">Copy Address</button>
        <p class="instruction">Please write your token number on the delivery package for better identification.</p>
      `;
      break;
    case 'itemsBuyByTimeline':
      additionalSections.innerHTML = `
        <h3>Describe Your Product</h3>
        <textarea name="productDescription" rows="4" placeholder="Describe your product..." required></textarea>
        <h3>Optional: Product Link</h3>
        <input type="url" name="productLink" placeholder="Paste the product link here">
      `;
      break;
    default:
      additionalSections.innerHTML = '';
      break;
  }
});

function copyAddress() {
  const addressText = document.querySelector('textarea[readonly]');
  addressText.select();
  document.execCommand('copy');
  alert("Address copied to clipboard!");
}

// Redirect to Payment Page
document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const customerName = document.getElementById("customerName").value || document.getElementById("tokenDisplay").textContent;
  localStorage.setItem("customerName", customerName);
  localStorage.setItem("token", document.getElementById("tokenDisplay").textContent);
  window.location.href = "payment.html";
});

// Ask Button Functionality
document.getElementById("askButton").addEventListener("click", function() {
  alert("Feel free to ask any questions! We're here to help.");
});