const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const sendBtn = document.getElementById('send');

function add(text, who) {
  const d = document.createElement('div');
  d.className = 'msg ' + who;
  d.innerText = text;
  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
  return d;
}

function sendMessage() {
  const t = input.value.trim();
  if (!t) return;

  add('YOU: ' + t, 'user');
  input.value='';
  
  // Create AI message and keep its reference
  const aiMsg = add('J.A.R.V.I.S: Processing...', 'ai');
  
  // Fake typing delay
  setTimeout(() => {
    aiMsg.innerText = 'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';
  }, 1000);
}

// Click SEND
sendBtn.onclick = sendMessage;

// Press ENTER to send (important for mobile)
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Auto focus on desktop
input.focus();