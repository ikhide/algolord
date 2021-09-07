const data = [
  {
    id: 1,
    make: "Honda",
    model: "Civic",
    year: 2001,
    mileage: 222133,
    price: 6995,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2012,
    mileage: 71887,
    price: 16995,
  },
  {
    id: 3,
    make: "Honda",
    model: "Civic",
    year: 2011,
    mileage: 22133,
    price: 6995,
  },
  {
    id: 4,
    make: "Honda",
    model: "Civic",
    year: 2021,
    mileage: 2101,
    price: 19995,
  },
  {
    id: 5,
    make: "Toyota",
    model: "Corolla",
    year: 2011,
    mileage: 61281,
    price: 10995,
  },
  {
    id: 6,
    make: "BMW",
    model: "340",
    year: 2021,
    mileage: 793,
    price: 61994,
  },
  {
    id: 7,
    make: "BMW",
    model: "330",
    year: 2021,
    mileage: 3122,
    price: 58888,
  },
  {
    id: 8,
    make: "BMW",
    model: "340",
    year: 2017,
    mileage: 52287,
    price: 58888,
  },
  {
    id: 9,
    make: "Audi",
    model: "A4",
    year: 2015,
    mileage: 48621,
    price: 20595,
  },
  {
    id: 10,
    make: "Audi",
    model: "A7",
    year: 2018,
    mileage: 38714,
    price: 52888,
  },
  {
    id: 11,
    make: "Audi",
    model: "A7",
    year: 2018,
    mileage: 51714,
    price: 50995,
  },
  {
    id: 11,
    make: "Dodge",
    model: "Grand Caravan",
    year: 2018,
    mileage: 51714,
    price: 20999,
  },
  {
    id: 12,
    make: "Dodge",
    model: "Grand Caravan",
    year: 2018,
    mileage: 53880,
    price: 20999,
  },
  {
    id: 13,
    make: "Dodge",
    model: "Grand Caravan",
    year: 2017,
    mileage: 62514,
    price: 21450,
  },
  {
    id: 14,
    make: "Dodge",
    model: "Grand Caravan",
    year: 2017,
    mileage: 70004,
    price: 19300,
  },
  {
    id: 14,
    make: "Honda",
    model: "Fit",
    year: 2007,
    mileage: 142081,
    price: 3499,
  },
  {
    id: 15,
    make: "Jeep",
    model: "Wrangler",
    year: 2017,
    mileage: 31671,
    price: 51999,
  },
  {
    id: 16,
    make: "Lexus",
    model: "IS 300",
    year: 2019,
    mileage: 47221,
    price: 43595,
  },
  {
    id: 17,
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    mileage: 915,
    price: 25991,
  },
  {
    id: 18,
    make: "Toyota",
    model: "Camry",
    year: 2018,
    mileage: 19915,
    price: 22199,
  },
  {
    id: 19,
    make: "Mercedes-Benz",
    model: "C350",
    year: 2016,
    mileage: 35287,
    price: 29995,
  },
  {
    id: 20,
    make: "Dodge",
    model: "Grand Caravan",
    year: 2017,
    mileage: 65747,
    price: 19595,
  },
  {
    id: 21,
    make: "GMC",
    model: "Acadia",
    year: 2017,
    mileage: 87858,
    price: 29990,
  },
  {
    id: 22,
    make: "subaru",
    model: "BRZ",
    year: 2019,
    mileage: 41887,
    price: 33395,
  },
  {
    id: 23,
    make: "Dodge",
    model: "Grand Caravan",
    year: 2019,
    mileage: 16254,
    price: 24999,
  },
  {
    id: 24,
    make: "Honda",
    model: "Civic",
    year: 2012,
    mileage: 42000,
    price: 18999,
  },
  {
    id: 25,
    make: "Mercedes-Benz",
    model: "C300",
    year: 2017,
    mileage: 30000,
    price: 33991,
  },
  {
    id: 26,
    make: "Toyota",
    model: "Corolla",
    year: 2016,
    mileage: 21281,
    price: 18995,
  },
  {
    id: 27,
    make: "Lincoln",
    model: "MKZ",
    year: 2017,
    mileage: 55000,
    price: 26995,
  },
  {
    id: 28,
    make: "Jaguar",
    model: "XF 300",
    year: 2019,
    mileage: 23555,
    price: 46995,
  },
  {
    id: 29,
    make: "Cadillac",
    model: "XTS",
    year: 2017,
    mileage: 89000,
    price: 23995,
  },
];

const api = (
  { make, model, minYear, maxYear, minPrice, maxPrice },
  database
) => {
  let response = database.filter((car) => {
    let formula = "";

    //Append Make Params
    if (make) {
      formula = formula + "(make.includes(car.make.toLowerCase()))";
    }

    //Append Model Params
    if (model) {
      formula = make ? formula + " && (" : formula + "(";
      formula = formula + "model.includes(car.model.toLowerCase()))";
    }

    //Append Year Params
    if (minYear) {
      formula =
        make || model
          ? formula + ` && (car.year >=${minYear})`
          : formula + ` (car.year >=${minYear})`;
    }

    if (maxYear) {
      formula =
        make || model || minYear
          ? formula + ` && (car.year <=${maxYear})`
          : formula + ` (car.year <=${maxYear})`;
    }

    //Append Price Params
    if (minPrice) {
      formula =
        make || model || minYear || maxYear
          ? formula + ` && (car.price >=${minPrice})`
          : formula + ` (car.price >=${minPrice})`;
    }

    if (maxPrice) {
      formula =
        make || model || minYear || maxYear || minPrice
          ? formula + ` && (car.price <=${maxPrice})`
          : formula + ` (car.price <=${maxPrice})`;
    }

    return eval(formula);
  });

  return response;
};

const searchParams = {
  make: "honda,toyota",
  model: "civic,camry",
  minYear: 2018,
  maxYear: 2021,
  minPrice: 6995,
  maxPrice: 22199,
};

console.log(api(searchParams, data));
