const originalObj = {  // original obj
    name: "Furqan",
    address: { city: "Karachi",  state: "Pakistan",
    },
};

const shallowCopy = Object.assign({}, originalObj); // Shallow copy using Object.assign()

function deepCopy(obj) {     // Deep copy function
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepCopy(obj[i]);
        }
        return arrCopy;
    }
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]);
        }
    }
    return newObj;
}

const deepCopyObj = deepCopy(originalObj);

const referenceCopy = originalObj; // Reference copy

shallowCopy.address.city = "San Francisco";
deepCopyObj.address.state = "CA";
referenceCopy.name = "Alice";

console.log("Original Object:", originalObj);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopyObj);
console.log("Reference Copy:", referenceCopy);
