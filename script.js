const messages = [
    { name: 'Vinicius Jr', msg: 'Congrats on the Ballon d' },
    { name: 'Vinicius Jr', msg: 'Congrats on the Ballon d\'Or, Rodri! Finally recognized for your talen?' },
    { name: 'Rodri', msg: 'Haha! Well, someone has to hold down the midfield while you’re out there dancing like you’re at a party!' },
    { name: 'Vinicius Jr', msg: 'Dancing? Please! I’m just making defenders look like traffic cones! You’re the one who should be worried about getting run over!' },
    { name: 'Rodri', msg: 'Traffic cones? More like I’m the one waving goodbye as you zoom past! Just don’t ask me to help you when you trip over your own feet again.' },
    { name: 'Vinicius Jr', msg: 'Congrats on the Ballon d' },
    { name: 'Vinicius Jr', msg: 'Congrats on the Ballon d\'Or, Rodri! Finally recognized for your talen?' },
    { name: 'Rodri', msg: 'Haha! Well, someone has to hold down the midfield while you’re out there dancing like you’re at a party!' },

];

const receiver = "Rodri";
const sender = "Vinicius Jr";

// Display the receiver's name and icon
const receiverNameDiv = document.getElementById('receiver-name');
const receiverIconDiv = document.getElementById('receiver-icon');

// Set receiver's name and first letter icon
receiverNameDiv.textContent = receiver;
receiverIconDiv.textContent = receiver.charAt(0);

// Function to display messages
const chatBox = document.getElementById('chat-box');
let messageIndex = 0;

function displayNextMessage() {
    if (messageIndex >= messages.length) return;

    const message = messages[messageIndex];
    const msgElement = document.createElement('div');
    
    // Determine if the message is from sender or receiver
    const isSender = message.name === sender;

    // Assign classes for styling based on sender or receiver
    msgElement.classList.add('message', isSender ? 'sender' : 'receiver');
    msgElement.innerHTML = `
    <div class="user-icon ${isSender ? 'sender-user-icon' : 'reciever-user-icon'}">
        ${message.name.charAt(0)}
    </div>
    <div class="single-msg-box">${message.msg}</div>
`;

    // Append message to chat box and play sound
    chatBox.appendChild(msgElement);
    const sound = isSender ? document.getElementById('sender-sound') : document.getElementById('receiver-sound');
    sound.play().catch(error => console.error('Error playing sound:', error));

    // Scroll to the bottom and update message index
    chatBox.scrollTop = chatBox.scrollHeight;
    messageIndex++;
}

// Event listener for the "Next Message" button
document.getElementById('next-message-btn').addEventListener('click', displayNextMessage);
