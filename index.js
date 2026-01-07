// The text we want to animate
let text = "CS Student from Trinity College Dublin";
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


document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".main__btn");
  const theo = document.querySelector(".golden_theo");

  button.addEventListener("click", () => {
    if (theo) {
      theo.classList.add("tail_wag_active");
    }
  });
});
