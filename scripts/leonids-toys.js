
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
    
}



const buildingBlocks = createtoyobj(1, "building blocks", "construction toy", `${50.00}`,true,"Quality building blocks for inquiring and creative minds", "Hasboro");
const hotWheels = createtoyobj(2,"hot wheels set", "toy vehicles",`${100.00}`, true, "Beautifully painted model cars! Durable and will keep children entertained for hours. (Not for children under the age of 5, small parts/swallowing hazard", "Mattel");
const stuffedAnimals = createtoyobj(3,"Beanie Babies", "Stuffed Animals", `${15.00}`, false, "Soft, plushy, and cute! Perfect for infants all the way up to 7 years old!", "Beanie Babies");

toys.push(buildingBlocks, hotWheels, stuffedAnimals)

/* for (const toy of toys) {
    console.log(toys)
} */
// I don't think I can access the property as it is buried under a function

/* console.log(buildingBlocks);
console.log(hotWheels);
console.log(stuffedAnimals); */
console.log(toys);

console.log(buildingBlocks.id);

for(const buildingBlocks of buildingBlocks) {
    console.log(buildingBlocks.name)
}

for(const hotWheels of hotWheels) {
    console.log(hotWheels.name)
}

for(stuffedAnimals of stuffedAnimals) {
    console.log(stuffedAnimals.name)
}