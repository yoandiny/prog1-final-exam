let carte = [
    "....X",
    "X....",
    ".x...",
    "..X..",
    "X...X"
]
export const countMaxBobsleigh = (N , map) => {
    let countPlace = 0
    let FreePlace;
    let NumbreOfPlace =  []
    for(let i = 0 ; i < N ; i++){
        if(map[i].includes("....")){
            NumbreOfPlace.push("libre")
        }
    }
    FreePlace = NumbreOfPlace.length
    return FreePlace
}
console.log(countMaxBobsleigh(5 , carte));
