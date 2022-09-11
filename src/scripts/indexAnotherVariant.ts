const multidimensionalArr: Array<any> = [[[[3, '2', 1]], [[[[[[[6, undefined, 4]]]]]]]], [], 4, [[8, 4]]];
const simpleArr: Array<any> = [1, true, 3, null, 5];

function getFlatFunc (array: any[]): any[] | never {

    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    return array.reduce((flatAccum: any[], currentArr: any[] | any) => {
        return flatAccum.concat(
            Array.isArray(currentArr) ? getFlatFunc(currentArr) : currentArr
        );
    }, []);
}

console.log(getFlatFunc(multidimensionalArr)); //array output
console.log(getFlatFunc(simpleArr, [5, 3, 4])); /*Expected 1 arguments, but got 2. in ts or in js -
                                                          Uncaught Error: Function accepts only 1
                                                          argument, too much arguments provided*/