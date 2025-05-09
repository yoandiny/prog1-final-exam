const getLastDelegation = (delegations) => {
    if (!delegations || delegations.length == 0){
        throw new Error("Array cannot be empty, null or undefined");
    }

    let split = [];
    let max;
    let result;
    
    for(let i = 0; i < delegations.length; i++){
        split.push(delegations[i].split(" ")) 
        for (let j = 0; j < split[i].length; j++){
            if (isNaN(split[i][j]) == false){
                split[i][j] = +split[i][j]
            }
        }
        if (i == 0){
            max = split[i][1]/split[i][2]

        } else if (i > 0){
            split[i][1]/split[i][2]
            if (max < split[i][1]/split[i][2]){
                max = split[i][1]/split[i][2]
            }
        }
        if(max  == split[i][1]/split[i][2]){
            result = split[i][0]
        }
        
    } 
    return result
}

console.log(getLastDelegation([]));
