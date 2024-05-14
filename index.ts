// generic function take an argument and return value of same type
function identity<Type>(arg: Type): Type {
    return arg;
}

// test generic function, should return "1"
let test1 : number = identity<number>(1);
console.log(test1);

// generic function take an array of elements and return new array in reverse order
function reverseArray<Type>(arg: Type[]): Type[] {
    var arr = arg.reverse();
    return arr;
}

// test generic function, should return "[3,2,1]"
let test2 : number[] = reverseArray<number>([1,2,3]);
console.log(test2);

/*
// generic object mapper
function mapObject<K extends String | number, V, U>(obj:{[key: K]: V}, mapFn: (val: V)=> U): {[key: K]: U} {

}

// test generic object mapper
let test3 = mapObject({a:1, b:2}, x => x.toString());
console.log(test3); */


// generic filter function which filters elements of any array based on a predicate function which returns a boolean
function filterArray<Type>(arg: Type[], filter: (element: Type) => boolean): Type[] {
    let output: Type[] = [];
    for (var ele of arg) {
        if (filter(ele)) {
            output.push(ele);
        }
    }
    return output;
}

// test generic filter function, should return "[2.4]"
let test4 : number[] = filterArray<number>([1,2,3,4], x => x %2 === 0);
console.log(test4);