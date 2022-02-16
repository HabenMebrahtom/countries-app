
const apiURL = 'https://restcountries.com/v3.1/name/';

const display = document.getElementById('display');

const getData = async() => {

    const params = new URLSearchParams(window.location.search);
    const countryName = params.get('countryName');
    console.log(countryName);

    try{
        const response = await fetch(apiURL + '/' + countryName);
       if(response.ok) {
            const country = await response.json();
            console.log(country)

        country.map((ctry) => {
          display.innerHTML += `
            <div class="col-sm-10 col-md-6 col-lg-6">
                  <img src="${ctry.flag}" id="img" alt="${ctry.name} flag">
            </div>
            
            <div class="col-sm-10 col-md-6 col-lg-6">
                 <h3 class="mt-5"> ${ctry.name}</h3>
                <div class="d-flex"> 
                   <div class="py-5">
                     <p><strong>Native Name: </strong> ${ctry.nativeName}</p>
                     <p><strong>Population: </strong> ${ctry.population}</p>
                     <p><strong>Region: </strong> ${ctry.region}</p>
                     <p><strong>Sub Region: </strong> ${ctry.subregion}</p>
                     <p><strong>Capital: </strong> ${ctry.capital}</p>
                </div>
                <div class="p-5">
                      <p><strong>Top Level Domain: </strong>${ctry.topLevelDomain}</p>
                      <p><strong>Currencies: </strong> ${ctry.currencies.map(cur => {
                        return  `<span>${cur.name}</span>`;
                         })}</p>
                      <p><strong>Languages: </strong> ${ctry.languages.map(lang => {
                        return  `<span>${lang.name}</span>`;
                         }).join(', ')}</p>
                 </div>
               </div>
               <div class="d-flex">
               <p><strong>Border Countries: </strong> ${ctry.borders.map(border => {
                      return `<a href=""><button class="btn btn-warning shadow mx-1" id="btn">${border}</button></a>`;
               }).join('')}</p>
             </div>
        </div>`;
             });
       }

} catch(error) {
        console.log(error)
    }
}

  getData();
