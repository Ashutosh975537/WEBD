const countryName = new URLSearchParams(window.location.search).get("name");
const flagImage = document.querySelector(".flagContainer img");
const countryElementName = document.querySelector(".countryTitle");
const nativeName = document.querySelector(".nativeName");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".subRegion");
const capital = document.querySelector(".capital");
const tld = document.querySelector(".topLevelDomain");
const currency = document.querySelector(".currencies");
const language = document.querySelector(".language");
const neighbourTaq = document.querySelector(".neighbourTaq");
const backButton = document.querySelector(".anchorButton") ;
const darkContainer = document.querySelector(".darkContainer");
darkContainer.addEventListener("click",()=>{
  document.body.classList.toggle('dark');
})
backButton.addEventListener("click",()=>{
  history.back();
})
function convert(number){
    number = number.toString() ;
    let flag = 0 ;
    let count = 0 ;
    let ans = "" ;
    for(let i = number.length - 1 ; i >= 0 ;i--){
          if(flag && count === 2){
            ans = ans.concat(',');
            count = -1 ;
            i++ ;
          }
          else if(count === 3 && !(flag)){
            ans = ans.concat(',');
            count = -1 ;
            flag = true ;
            i++ ;
          }else{
            ans = ans.concat(number[i]) ;
          }
      count ++ ;
    }
    let str = '' ;
    for(let i = ans.length - 1 ; i >= 0 ; i--){
        str = str.concat(ans[i]) ;
    }
    return str ;
}

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg;
    flagImage.alt = country.name.common;
    countryElementName.innerText = country.name.common;
    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    }
    population.innerText = convert(country.population);
    region.innerText = country.region;
    if (country.subregion) {
      subRegion.innerText = country.subregion;
    }
    if (country.capital) {
      capital.innerText = country.capital;
    }
    tld.innerText = country.tld.join(" , ");
    if (country.currencies) {
      currency.innerText = Object.values(country.currencies)[0].name;
    }
    language.innerText = Object.values(country.languages).join(" , ");
    if (country.borders) {
      country.borders.forEach((neighbour) => {
        fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
          .then((res) => res.json())
          .then(([neighName]) => {
            const a = document.createElement('a') ;
            a.innerText = neighName.name.common ;
            a.href = `./country.html?name=${neighName.name.common}`
            neighbourTaq.appendChild(a);
          });
      });
    }
  });
