
const InfoAlert = ({message})=>{
    return (
        <>
        <div className="flex flex-col h-screen flex-1 flex flex-col text-center items-center justify-center text-[#ccc] ">
            <div className="mt-50">
                <div>
                <h2>
                    {
                        message
                    }
                </h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default InfoAlert;