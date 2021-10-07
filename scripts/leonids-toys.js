toyID = 1

const toys = []
/* const toyfactory = (randomtoyOBJ) => {
    if (toys.length < 1) {
        randomtoyOBJ.id = 1
    } else {
        
        const lastIndex = toys.length - 1
        const currentLastToy = toys[lastIndex]
        const maxId = currentLastToy.id
        const idForNewToy = maxId + 1
        randomtoyOBJ.id = idForNewToy  
    }
    // console.log(randomtoyOBJ, "This is a generated toy OBJ")
    toys.push(randomtoyOBJ)
    } */
    
const createtoyobj = (toyname, typename, unitprice, stockst, description, toyman) => {
    const newOBJ = {
        name: toyname,
        type: typename,
        price: unitprice,
        stockstatus: stockst,
        itemdescription: description,
        manufacturer: toyman

    }
    if (toys.length < 1) {
        newOBJ.id = 1
    } else {
        
        const lastIndex = toys.length - 1
        const currentLastToy = toys[lastIndex]
        const maxId = currentLastToy.id
        const idForNewToy = maxId + 1
        newOBJ.id = idForNewToy  
    }
    toys.push(newOBJ)
    
}

const buildingBlocks = createtoyobj("building blocks", "construction toy", `${50.00}`, true, "Quality building blocks for inquiring and creative minds", "Hasboro");

const hotWheels = createtoyobj("hot wheels set", "toy vehicles", `${100.00}`, true, "Beautifully painted model cars! Durable and will keep children entertained for hours. (Not for children under the age of 5, small parts/swallowing hazard", "Mattel");
const stuffedAnimals = createtoyobj("Beanie Babies", "Stuffed Animals", `${15.00}`, false, "Soft, plushy, and cute! Perfect for infants all the way up to 7 years old!", "Beanie Babies");

const dumptruck = createtoyobj("dump truck", "toy vehicles", `${150.00}`, true, "High quality fully aluminum and steel construction!", "Tonka")
const racetrack = createtoyobj("Race Track", "toy vehicles", `${200.00}`, false, "Fun place for kids to race their hotwheels!", "Neumann")
console.log(toys)


for (const toy of toys) {
        if(toyID === toy.id){
            toy.price = toy.price * 1.05
            console.log(`The ${toy.name} costs ${toy.price}.`)
        }
    }
    


