const ages = [12, 34, 56, 12];
const ages2 = [31, 23, 14, 16];
const ages3 = [34, 45, 56, 34];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 456;
const minister = 345;
const shochiv = 3545;
const takePoisha = [456, 345, 3545, 345, 5677];
// const maximum = Math.max(business, minister, shochiv);
const maximum = Math.max(...takePoisha);
console.log(maximum);
