const directions = ["NORD","SUD","SUD","EST","OUEST","NORD","OUEST","NORD"]
const directions1 = ["NORD","SUD","EST","OUEST"]
const directionsInfo = (tabDirection) =>{
    let infoDirection = tabDirection.reduce((acc, valActu) => {
        if( acc[valActu]){
            acc[valActu] += 1
        }else{
            acc[valActu] = 1
        }
        return acc
    }, {})
    return infoDirection
}  
const reduceDirections = (directions) => { 
    let originInfoDirection = directionsInfo(directions)
    let result = []
    let diffNS = (originInfoDirection['NORD'] - originInfoDirection['SUD'])
    let diffOE = (originInfoDirection['OUEST'] - originInfoDirection['EST'])
    if(diffNS > 0){
        for (let i = 0; i < diffNS; i++) {
            result.push("NORD")
        }
    }else{
        for (let i = 0; i < (diffNS) * -1; i++) {
            result.push("SUD")
        }
    }
    if(diffOE > 0){
        for (let i = 0; i < diffOE; i++) {
            result.push("OUEST")
        }
    }else{
        for (let i = 0; i < (diffOE) * -1; i++) {
            result.push("EST")
        }
    }    
}

reduceDirections(directions)
