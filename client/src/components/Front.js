import img from '../Images/woman.jpg';

const Front = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10 mt-40">
                    <h1 className="text-xl sm:text-3xl text-pink-400  py-1">Suraksha</h1>
                    <p className="text-left mt-5 text-pink-400 md:w-0/12 w-11/12 text-base">A responsive website to help women through panic and unsafe situations.</p>
                    <button type="button"className="w-48 flex flex-row justify-center items-center my-5 bg-blue-700 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]" >
                        <p className="text-white text-base font-semibold">Send Text</p>
                    </button>
                    <button type="button"className="w-48 flex flex-row justify-center items-center my-5 bg-blue-700 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]" >
                        <p className="text-white text-base font-semibold">Call 100</p>
                    </button>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                     <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default Front;