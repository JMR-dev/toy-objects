
const toys = []

    const createtoyobj = (number,toyname, typename, unitprice, stockst,description,toyman ) => {
        const newOBJ = {
            id: number,
            name: toyname,
            type: typename,
            price: unitprice,
            stockstatus: stockst,
            itemdescription: description,
            manufacturer: toyman
    
    }
    return newOBJ
    toys.push(newOBJ)
}


const buildingBlocks = createtoyobj(1, "building blocks", "construction toy", `${50.00}`,true,"Quality building blocks for inquiring and creative minds", "Hasboro");
const hotWheels = createtoyobj(2,"hot wheels set", "toy vehicles",`${100.00}`, true, "Beautifully painted model cars! Durable and will keep children entertained for hours. (Not for children under the age of 5, small parts/swallowing hazard", "Mattel");
const stuffedAnimals = createtoyobj(3,"Beanie Babies", "Stuffed Animals", `${15.00}`, false, "Soft, plushy, and cute! Perfect for infants all the way up to 7 years old!", "Beanie Babies");

console.log(buildingBlocks);
console.log(hotWheels);
console.log(stuffedAnimals);
console.log(toys)