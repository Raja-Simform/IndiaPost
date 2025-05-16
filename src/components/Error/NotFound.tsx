interface NotFoundProps{
    CODE:number|string
}
export default function NotFound({CODE}:NotFoundProps){
    return(
        <div className="flex justify-center items-center h-48 text-gray-500">
        No post offices found for PIN code {CODE}.
      </div>
    )
}