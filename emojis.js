let dynamic_div = document.querySelector(".emoji_container");
let btns = document.querySelector(".btns");
let search_field = document.querySelector(".search_field");
let popup = document.querySelector(".popup");
let copybtn = document.querySelector(".copy_button");
let closeBtn = document.querySelector(".close_btn");
let popupEmoji = document.querySelector(".popup_emoji");

search_field.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  displayEmojis(searchQuery);
});
btns.addEventListener("click", (e) => {
  let btn_clicked = e.target.getAttribute("data-category");
  displayEmojis(btn_clicked);
});

function displayEmojis(searchQuery = " ") {
  let filtered_emojis = emojiList.filter((emoji) => {
    if (searchQuery === " " || searchQuery === "all") {
      return true;
    }
    if (
      emoji.description.indexOf(searchQuery) != -1 ||
      emoji.category.indexOf(searchQuery) != -1 ||
      emoji.aliases.indexOf(searchQuery) != -1
    ) {
      return true;
    }
  });

  dynamic_div.innerHTML = " ";

  filtered_emojis.forEach((emoji) => {
    let emoji_div = document.createElement("div");
    emoji_div.innerText = emoji.emoji;
    emoji_div.style.cursor = "pointer";
    dynamic_div.appendChild(emoji_div);

    emoji_div.addEventListener('click', () =>{
        popup.classList.add('openanima');
        copybtn.innerText = "Click to copy on Clipboard!📋";
        popupEmoji.innerText = emoji.emoji;
    })
  });
}

copybtn.addEventListener("click", (e) => {
    let emoji = popupEmoji.innerText;
    navigator.clipboard.writeText(emoji);
    e.target.innerText = "Copied to Clipboard! 🤌❤️‍🔥";
        setTimeout(()=>{
            popup.classList.remove('openanima');
        }, 800)
});

closeBtn.addEventListener('click', ()=>{
    popup.classList.add('closeanima');
    setTimeout(() => {
        popup.classList.remove('openanima')
        popup.classList.remove('closeanima')
    }, 500);
});

window.addEventListener("load", () => displayEmojis());