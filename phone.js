let dynamic = document.querySelector(".dynamic");
let input = document.querySelector(".input");
let searchBtn = document.querySelector(".search_btn");
let popup = document.querySelector(".popup");


async function fetchPhones(id) {
  // console.log(id);

  let response = await fetch(
      `https://openapi.programming-hero.com/api/phone/${id}`
    );

  let smartPhones = await response.json();
  // console.log(smartPhones);
  
  let div = `<div class="details">
  <img src="${smartPhones.data.image}" alt="">
  <h3>${smartPhones.data.name}</h3>
  <h4><span>Brand:</span>${smartPhones.data.brand}</h4>
    <p><span>storage:</span>${smartPhones.data.mainFeatures.storage}</p>
            <p><span>displaySize:</span>${smartPhones.data.mainFeatures.displaySize}</p>
            <p><span>chipSet:</span> ${smartPhones.data.mainFeatures.chipSet}</p>
            <p><span>memory:</span>${smartPhones.data.mainFeatures.memory}</p>
            <p><span>sensors:</span>${smartPhones.data.mainFeatures.sensors}</p>
            <p>${smartPhones.data.releaseDate}</p>
            <button class = "closeBtn">Close</button>
            </div>`;
            
            popup.innerHTML = "";
  popup.innerHTML += div;
  popup.style.display = "block";
  
  let popupDetails = document.querySelector(".details");
  console.log(popupDetails);
  popupDetails.classList.toggle("animate__animated");
  popupDetails.classList.toggle("animate__bounceIn");
  document.body.style.overflowY = "hidden";

  let closeBtn = document.querySelector(".closeBtn");
  //   console.log(closeBtn);
  closeBtn.addEventListener("click", (e) => {
      popupDetails.classList.toggle("animate__animated");
      popupDetails.classList.toggle("animate__bounceOut");
      setTimeout(function () {
          popup.style.display = "none";
          document.body.style.overflowY = "auto";
        }, 580);
  });
}


async function fetchSmartPhones(search) {
    let response = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${search}`
    );
    
    let smartPhones = await response.json();
    //   console.log(smartPhones.data[0].slug);
    dynamic.innerHTML = "";

        for (let i = 0; i < 9; i++) {
            let div = `<div>
            <img src="${smartPhones.data[i].image}" alt="">
            <h3>${smartPhones.data[i].phone_name}</h3>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <button onclick="fetchPhones('${smartPhones.data[i].slug}')">SHOW DETAILS</button>
            </div>`;
            dynamic.innerHTML += div;
        }
        dynamic.innerHTML += `<button id="show">SHOW ALL</button>`;
        let showAllBtn = document.querySelector('#show');
        showAllBtn.classList.add('shown');
        console.log(showAllBtn);
        callBridge(search, showAllBtn);
    }

    function callBridge(search, btn){
        btn.addEventListener('click', () => fecthAll(search))
    }
    async function fecthAll(search) {

        let response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
        
        let smartPhones = await response.json();
        //   console.log(smartPhones.data[0].slug);
        dynamic.innerHTML = "";
    
          smartPhones.data.forEach((ele) => {
                // fetchPhones(ele.slug);
                let div = `<div>
                        <img src="${ele.image}" alt="">
                        <h3>${ele.phone_name}</h3>
                        <p>There are many variations of passages of available, but the majority have suffered</p>
                        <button onclick="fetchPhones('${ele.slug}')">SHOW DETAILS</button>
                    </div>`;
                dynamic.innerHTML += div;
              });
    }

// Event listener for the search button click
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let search = input.value;
  dynamic.innerHTML = `<h1 class="searching">Searching...</h1>`;
  document.querySelector(".searching").classList.toggle("animate__animated");
  document.querySelector(".searching").classList.toggle("animate__fadeOut");
  document.querySelector(".searching").classList.toggle("animate__repeat-3");

  setTimeout(() => {
    fetchSmartPhones(search);
  }, 2000);
});