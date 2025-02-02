// contain objects in js 

const CarCompany = {
    Mahindra: 5,
    Tata  : 6,
    Suzuki: 7,
    Toyota: 4
}

console.log(CarCompany);
console.log(CarCompany.Mahindra);
console.log(CarCompany["Mahindra"]);
delete CarCompany.Mahindra;
 console.log(CarCompany);
// console.log(CarCompany.Mahindra);

CarCompany.Mahindra=7;
console.log(CarCompany);

