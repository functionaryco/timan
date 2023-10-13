import { Button } from "@ariakit/react";

export default function Buttons({setDivision}:any) {
    
    return(
        <div className="sprint">
        <Button onClick ={()=>{setDivision(6)}} className="button">Small</Button>
        <Button onClick ={()=>{setDivision(12)}} className="button">Medium</Button>
        <Button onClick ={()=>{setDivision(18)}} className="button">Large</Button>
        </div>
    )
  
}
