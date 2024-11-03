import { messages, sender, receiver } from "./data.js";

// Display the receiver's name and icon
const receiverNameDiv = document.getElementById('receiver-name');
const receiverIconDiv = document.getElementById('receiver-icon');

// Set receiver's name and first letter icon or icon image
receiverNameDiv.textContent = receiver.name;
if (receiver.iconImg) {
    receiverIconDiv.innerHTML = `<img src="${receiver.iconImg}" alt="${receiver.name.charAt(0)}" class="user-image" />`;
} else {
    receiverIconDiv.textContent = receiver.name.charAt(0);
}

// Function to display messages
const chatBox = document.getElementById('chat-box');
let messageIndex = 0;

function displayNextMessage() {
    if (messageIndex >= messages.length) return;

    const message = messages[messageIndex];
    const isSender = message.name === sender.name;

    const msgElement = document.createElement('div');
    msgElement.classList.add('message', isSender ? 'sender' : 'receiver');

    const userIconHTML = (isSender ? sender : receiver).iconImg
        ? `<img src="${isSender ? sender.iconImg : receiver.iconImg}" alt="${message.name.charAt(0)}" class="user-image" />`
        : `${message.name.charAt(0)}`;

    msgElement.innerHTML = `
        <div class="user-icon ${isSender ? 'sender-user-icon' : 'receiver-user-icon'}">
            ${userIconHTML}
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
