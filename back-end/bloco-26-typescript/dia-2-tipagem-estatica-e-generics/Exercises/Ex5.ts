type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;
// aqui faco um type para minha callback retonar um booleano

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
    const newArray: Array<T> = [];

    for (let i = 0; i < array.length; i++) {
      // chamo minha callback validando se eh true ou nao
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

// chamo minha funcao passando arrays genericos para ela e uma callback q retorna true ou false
console.log(myFilter([1, 2, 3], (item) => {
    return item < 3
}));

console.log(myFilter(["a", "b", "c"], (item) => {
    return item !== "a"
}));