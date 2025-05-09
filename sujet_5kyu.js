let carte = [
    "....X",
    "X....",
    ".....",
    "..X..",
    "X...X"
]

const countMaxBobsleigh = (N , map) => {
    let countPlace = 0
    let freePlace = 0;
    for(let i = 0 ; i < N ; i++){
        for(let j = 0 ; j < N ; j++){
            if(countPlace == 4){
                freePlace += 1
                countPlace = 0
            }
            if(map[i][j] == "."){
                countPlace++
            }else{
                countPlace = 0
            }
            
            
        }
        
        countPlace = 0
    }
    console.log(freePlace)
}
countMaxBobsleigh(5 , carte);
