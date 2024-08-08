const container = document.querySelector(".countriesContainer");
const darkContainer = document.querySelector(".darkContainer");
const input = document.querySelector(".searchContainer input");
const selector = document.querySelector('.selector');
let countryArray  = [] ;
function renderContries(contries){
  container.innerHTML = ``;
  contries.forEach((country) => {
    const a = document.createElement("a");
    a.classList.add("country");
    a.href = `./country.html?name=${country.name.common}`;
    a.innerHTML = `<img src=${country.flags.svg} alt= ${
      country.name.common
    } class = "flag">
                      <h3 class = "countryTitle">${country.name.common}</h3>
                      <div class="countriesDetails">
                          <p  class = "pText"><b class = "bText">Population: </b>${convert(
                            country.population
                          )}</p>
                          <p class = "pText"><b class = "bText">Region: </b>${
                            country.region
                          }</p>
                          <p class = "pText"><b class = "bText">Captial: </b>${
                            country.capital
                          }</p>
                      </div>`;
    container.appendChild(a);
  })
}

function convert(number) {
  number = number.toString();
  let flag = 0;
  let count = 0;
  let ans = "";
  for (let i = number.length - 1; i >= 0; i--) {
    if (flag && count === 2) {
      ans = ans.concat(",");
      count = -1;
      i++;
    } else if (count === 3 && !flag) {
      ans = ans.concat(",");
      count = -1;
      flag = true;
      i++;
    } else {
      ans = ans.concat(number[i]);
    }
    count++;
  }
  let str = "";
  for (let i = ans.length - 1; i >= 0; i--) {
    str = str.concat(ans[i]);
  }
  return str;
}
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((countriesData) => {
    countryArray = countriesData ;
    renderContries(countriesData);
  });

input.addEventListener("input", (event) => {
        const filteredData = countryArray.filter((country) => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())) ;
        renderContries(filteredData);
});


selector.addEventListener('change',(event) =>{
  fetch(`https://restcountries.com/v3.1/region/${event.target.value}`)
  .then((res) => res.json())
  .then(renderContries)
})

darkContainer.addEventListener("click",()=>{
  document.body.classList.toggle('dark');
})