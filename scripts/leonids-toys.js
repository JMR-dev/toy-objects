
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


/* console.log(buildingBlocks);
console.log(hotWheels);
console.log(stuffedAnimals); */

// console.log(buildingBlocks.id);

/* for(const buildingBlock of buildingBlocks) {
    console.log(buildingBlock.name)
}

for(const hotWheel of hotWheel) {
    console.log(hotWheel.name)
}

for(stuffedAnimal of stuffedAnimals) {
    console.log(stuffedAnimal.name)
}
*/

const dumptruck = createtoyobj(4,"dump truck", "toy vehicles", `${150.00}`, true, "High quality fully aluminum and steel construction!", "Tonka")

const racetrack = createtoyobj(5, "Race Track", "toy vehicles", `${200.00}`, false, "Fun place for kids to race their hotwheels!","Neumann" )

toys.push(dumptruck, racetrack)

console.log(toys);

for(const toy of toys){
    console.log(toy.name)
}