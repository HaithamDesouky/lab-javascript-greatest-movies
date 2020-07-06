// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(data => data.director);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let steve = arr.filter(data =>
    data.genre.indexOf('Drama') !== -1 && data.director === 'Steven Spielberg'
      ? data
      : 0
  );

  return steve.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (!arr.length) {
    return 0;
  } else {
    let rates = arr.filter(data => data.rate);
    let ratesMapped = rates.map(f => f.rate); /// USE FILTER!!!
    let reduced = ratesMapped.reduce((acc, next) => acc + next) / arr.length;

    return parseFloat(reduced.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let drama = arr.filter(function (value) {
    if (value.genre.includes('Drama')) {
      return value;
    }
  });

  let dramaFiltered = drama.filter(function (data) {
    if (data.rate) {
      return data.rate;
    }
  });

  let mapped = dramaFiltered.map(f => f.rate);
  let reduced = mapped.reduce((acc, val) => {
    return acc + val;
  }, 0);
  if (reduced === 0) {
    return 0;
  } else {
    let sum = reduced / mapped.length;

    return parseFloat(sum.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let newArr = [...arr].sort((a, b) =>
    a.year > b.year ? (a.year > b.year ? 1 : -1) : -1
  );

  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let array = [{ title: 'tom' }, { title: 'bill' }, { title: 'joe' }];

function orderAlphabetically(arr) {
  let newArr = [...arr].sort((a, b) =>
    a.title > b.title ? (a.title > b.title ? 1 : -1) : -1
  );
  let mapArr = newArr.map(data => data.title);
  let limit = [];
  if (mapArr.length > 20) {
    for (let i = 0; i < 20; i++) {
      limit.push(mapArr[i]);
    }
    return limit;
  } else {
    return mapArr;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let newArr = arr.map(a => ({ ...a }));
  for (let obj of newArr) {
    obj.duration = turnStringIntoTime(obj.duration);
  }
  return newArr;
}
function turnStringIntoTime(time) {
  let split = [...time];

  let newTime = [];

  for (let i = 0; i < split.length; i++) {
    if (split[i + 1] === 'h') {
      newTime.push(parseInt(split[i]) * 60);
    } else if (split[i + 2] === 'm') {
      newTime.push(split[i] + split[i + 1]);
    } else if (split[i + 1] === 'm' && split[i - 1] === '') {
      newTime.push(split[i]);
    }
  }

  let timeData = newTime.map(f => parseInt(f));

  return timeData.reduce((acc, next) => acc + next);
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
  if (!arr.length) {
    return null;
  } else {
    let highestRating = 0;
    let highestYear = '';
    for (let i = 0; i < 2300; i++) {
      getAverage(i);
    }
    return `The best year was ${highestYear} with an average rate of ${highestRating}`;
  }
}

function getAverage(yearInput) {
  let newArr = [...arr];

  let mapped = newArr
    .filter(data => (data.year === yearInput ? data.year : null))
    .map(d => d.rate);
  if (mapped.length) {
    let reduced = mapped.reduce((acc, next, i, array) => acc + next);

    let total = reduced / mapped.length;
    if (total > highestRating) {
      highestRating = total;
      highestYear = yearInput;
    }
    console.log(highestYear);
  }
}
