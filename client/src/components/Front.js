

const Front = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10 mt-20">
                    <h1 className="text-xl sm:text-3xl text-pink-400  py-1">lorem ipsum dolor emet</h1>
                    <p className="text-left mt-5 text-pink-400 font-liight md:w-0/12 w-11/12 text-base">lorem ipsum dolor emet lorem ipsum lorem</p>
                    <button type="button"className="flex flex-row justify-center items-center my-5 bg-blue-700 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]" >
                        Send Text
                    </button>
                    <button type="button"className="flex flex-row justify-center items-center my-5 bg-blue-700 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]" >
                        Call 100
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Front;