  const apiURL = 'https://restcountries.eu/rest/v2/all';
  
  const searchInput = document.getElementById('search-input');
  const displayList = document.getElementById('countries-list')
  let countryList = [];


  searchInput.addEventListener('keyup', (event) => {
      const target = event.target.value.toLowerCase();
      const filteredCountry = countryList.filter((c) => {
               return c.name.toLowerCase().includes(target);
      });
      displayCountries(filteredCountry);
  });


  const selectedRegion = document.getElementById('selected-region');
   
  selectedRegion.addEventListener('change', (e) => {
      const targetValue = e.target.value;

      if(targetValue === "all") {
          return displayCountries(countryList);
      }

      const filteredRegions = countryList.filter((re) => {
          return re.region.toLowerCase().includes(targetValue)
      });

      displayCountries(filteredRegions);
  })



  const getData = async() => {
      try {
          const response = await fetch(apiURL);
          countryList = await response.json();
          console.log(countryList);
          displayCountries(countryList)
      } catch(error) {
          console.log(error)
      }
  }
 

  const displayCountries = (countries) => {
      const htmlString = countries.map((country) => {
            return `
            <div class="col-sm-12 col-md-6 col-lg-3">
                <a href="country.html?countryName=${country.name}" class="text-decoration-none text-dark">
                   <div class="card my-3">
                        <img src="${country.flag}" class="card-img-top" alt="country falg" style="height: 50%;">
                       <div class="card-body">
                        <h5 class="card-text"> ${country.name}</h5>
                        <p class="card-text">Population: ${country.population}</p>
                        <p class="card-text">Region: ${country.region}</p>
                        <p class="card-text">Capital City: ${country.capital}</p>
                      </div>
                    </div> 
                </a>
            </div>
            
            `;
      })
      .join('');

      displayList.innerHTML = htmlString;
  }


  getData();