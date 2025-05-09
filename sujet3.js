export const directionsInfo = (tabDirection) =>{
    let infoDirection = tabDirection.reduce((acc, valActu) => {
        if( acc[valActu]){
            acc[valActu] += 1
        }else{
            acc[valActu] = 1
        }
        return acc
    }, {'NORD': 0, 'OUEST': 0, 'SUD': 0 ,'EST': 0})
    return infoDirection
}  
export const reduceDirections = (directions) => { 
    let originInfoDirection = directionsInfo(directions)
    let result = []
    let diffNS = (originInfoDirection['NORD'] - originInfoDirection['SUD'])
    let diffOE = (originInfoDirection['OUEST'] - originInfoDirection['EST'])
    console.log(originInfoDirection);
    console.log(diffOE);
    console.log(diffNS);
    
    if(diffNS > 0){
        for (let i = 0; i < diffNS; i++) {
            result.push('NORD')
        }
    }else{
        for (let i = 0; i < (diffNS) * -1; i++) {
            result.push('SUD')
        }
    }
    if(diffOE > 0 ){
        for (let i = 0; i < diffOE; i++) { //1
            result.push('OUEST')
        }
    }else{
        for (let i = 0; i < (diffOE) * -1; i++) {
            result.push('EST')
        }
    }    
    
    return result
    
}


