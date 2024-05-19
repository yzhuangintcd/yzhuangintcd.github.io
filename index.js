// The text we want to animate
let text = "CS Student from Trinity College Dublin 👋 ";
// The current position of the animation
let index = 0;

function typingAnimation(id) {
  setTimeout(() => {
    index++;
    updateText(id);
    if (index < text.length) {
      typingAnimation(id);
    }
  }, 50);
}

function updateText(id) {
  // Get the element with our id
  const typing = document.getElementById(id);
  // Split our text into lines based on newline characters or <br> tags
  const lines = text.substring(0, index).split(/\n|<br>/);

  // Check if our element exists before updating it
  if (typing == null) {
    return;
  }

  // Update the element with our new lines
  typing.innerHTML = lines
    .map((line, index) => {
      // Check if this is the last line in our text
      const isLastLine = index === lines.length - 1;

      // Add a line break if this isn't the last line of text
      const lineBreak = isLastLine ? "" : "<br>";

      // Return our line of text with or without a line break
      return `${line}${lineBreak}`;
    })
    .join("");

  // If we're done animating, hide stale cursor and show blinking cursor
  if (index === text.length) {
    // hide the stale cursor
    document.getElementById("cursor-stale").style.display = "none";

    // Add a cursor at the end of our animation that blinks
    typing.insertAdjacentHTML("beforeend", '<span class="cursor"></span>');
  }
}

const menu = document.querySelector("#mobile-menu");
const menuLink = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLink.classList.toggle("active");
});

typingAnimation("typing-animation");



// test.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.main__btn');
    const emojiContainer = document.getElementById('emoji-container');

    button.addEventListener('click', () => {
        riseContainer();
    });

    function riseContainer() {
        // Clear any existing emojis and animation
        emojiContainer.innerHTML = '';
        emojiContainer.style.animation = 'none';

        // Calculate the number of emojis based on the screen width
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const emojiWidth = 50; // Width of each emoji (adjust based on your preference)
        const emojiHeight = 50; // Height of each emoji (adjust based on your preference)
        const numEmojis = Math.ceil(screenWidth / emojiWidth);

        // Create and append the specified number of emojis with random positions within the screen width and height
        for (let i = 0; i < numEmojis; i++) {
            const emoji = document.createElement('span');
            emoji.textContent = '👋';
            emoji.classList.add('emoji');

            // Calculate random horizontal and vertical positions
            let randomHorizontalPosition = Math.random() * (screenWidth - emojiWidth);
            let randomVerticalPosition = Math.random() * (screenHeight - emojiHeight);

            // Ensure emojis do not overlap
            randomHorizontalPosition = avoidOverlap(randomHorizontalPosition, emojiWidth, emojiContainer);
            randomVerticalPosition = avoidOverlap(randomVerticalPosition, emojiHeight, emojiContainer);

            // Set the position of the emoji
            emoji.style.left = `${randomHorizontalPosition}px`;
            emoji.style.top = `${randomVerticalPosition}px`;

            emojiContainer.appendChild(emoji);
        }

        // Trigger the rise animation
        // We use a setTimeout to re-enable the animation after a very short delay
        setTimeout(() => {
            emojiContainer.style.animation = 'rise 12s ease forwards';
        }, 10);
    }

    // Function to avoid overlap of emojis
    function avoidOverlap(position, size, container) {
        const minDistance = size * 1.5; // Minimum distance between emojis
        const emojis = container.querySelectorAll('.emoji');
        let newPosition = position;

        emojis.forEach(emoji => {
            const emojiPosition = parseInt(emoji.style.left, 10);
            if (Math.abs(emojiPosition - position) < minDistance) {
                newPosition = emojiPosition + minDistance;
            }
        });

        return newPosition;
    }
});
