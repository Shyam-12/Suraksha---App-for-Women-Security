import img from '../Images/pic.jpg'

const About = () => {
    return (
        <div className="flex w-full justify-center items-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20">
            <div className="flex flex-1 justify-start flex-col">
                <h1 className="text-5xl text-pink-800  py-1">About Suraksha</h1>
                <p className="text-left mt-5 text-pink-500 text-2xl font-light md:w-0/12 w-11/12 text-base">A main feature of website is the Emergency Text, Call Button.
If the person feels unsafe in any situtation, they can click on that emergency button and within no time an Alert Message will be sent to her Trusted Contacts with her Location Credentials that she is in need of help.</p>
            </div>

            <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                 <img src={img} />
            </div>
        </div>
        </div>
    )
}

export default About;