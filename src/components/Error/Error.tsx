interface ErrorProps{
    messege:string;
} 
export default function Error({messege}:ErrorProps){
    return(
    
        <div className="flex justify-center items-center h-48 text-red-500">
               Error: {messege}
        </div>
    
    )
}