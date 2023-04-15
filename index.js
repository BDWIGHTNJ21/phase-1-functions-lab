
const distanceFromHqInBlocks = (distinationLocation)=>{
const headQuaters=42
if (distinationLocation > headQuaters) {

  return distinationLocation - headQuaters
}else if (distinationLocation < headQuaters){
    return headQuaters - distinationLocation

 }
}

const distanceFromHqInFeet =(distinationLocation) =>{
    const totalfeet=distanceFromHqInBlocks(distinationLocation) * 264
    return totalfeet
    
}
const distanceTravelledInFeet =(start, destination) =>{
    
    //function distanceTravelledInFeet(a,b);
        if (start > destination) {
           return ( start- destination) *264
            }else if (destination > start) {
            
                return (destination- start) *264    
            }
        }
            
        const calculatesFarePrice = (start, destination) =>{
            const distance=distanceTravelledInFeet(start, destination) 
            if (distance  <= 400 ){ 
                return (0)
            }else if (distance > 400 && distance <2000){
                return (distance -400)* .02

             }else if (distance > 2000 && distance <2500) {
               return (25)  
             }else {
                return 'cannot travel that far'
             }

            }
        