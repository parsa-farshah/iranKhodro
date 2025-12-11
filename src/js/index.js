// state btn
const $stateBtn = document.querySelector("#stateBtn");
const $optionsState = document.querySelector("#optionsState");
const $optionsStateLi = document.querySelectorAll("#optionsState>li");

$stateBtn.addEventListener("click", () => {
  $optionsState.classList.toggle("h-0");
  $optionsState.classList.toggle("h-fit");
  $stateBtn.children[1].classList.toggle("rotate-180");

  $optionsStateLi.forEach((val) => {
    val.addEventListener("click", () => {
      $stateBtn.children[0].children[1].innerText = val.innerText;
      $optionsState.classList.toggle("h-0");
      $optionsState.classList.toggle("h-fit");
      $stateBtn.children[1].classList.toggle("rotate-180");
    });
  });
});
// end state btn

/////////////////////////////////////////////// city btn
const $cityBtn = document.querySelector("#cityBtn");
const $optionsCity = document.querySelector("#optionsCity");
const $optionsCityLi = document.querySelectorAll("#optionsCity>li");

$cityBtn.addEventListener("click", () => {
  $optionsCity.classList.toggle("h-0");
  $optionsCity.classList.toggle("h-fit");
  $cityBtn.children[1].classList.toggle("rotate-180");

  $optionsCityLi.forEach((val) => {
    val.addEventListener("click", () => {
      $cityBtn.children[0].children[0].innerText = val.innerText;
      $optionsCity.classList.toggle("h-0");
      $optionsCity.classList.toggle("h-fit");
      $cityBtn.children[1].classList.toggle("rotate-180");
    });
  });
});
// end city btn

/////////////////////////////////////////////// Agency btn
const $agencyBtn = document.querySelector("#agencyBtn");
const $optionsAgency = document.querySelector("#optionsAgency");
const $optionsAgencyLi = document.querySelectorAll("#optionsAgency>li");

$agencyBtn.addEventListener("click", () => {
  $optionsAgency.classList.toggle("h-0");
  $optionsAgency.classList.toggle("h-fit");
  $agencyBtn.children[1].classList.toggle("rotate-180");

  $optionsAgencyLi.forEach((val) => {
    val.addEventListener("click", () => {
      $agencyBtn.children[0].children[0].innerText = val.innerText;
      $optionsAgency.classList.toggle("h-0");
      $optionsAgency.classList.toggle("h-fit");
      $agencyBtn.children[1].classList.toggle("rotate-180");
    });
  });
});
// end city btn
