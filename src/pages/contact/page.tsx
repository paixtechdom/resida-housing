import { BsDiscord, BsEnvelopeFill, BsGeoAltFill, BsInstagram, BsTelephoneOutboundFill, BsTwitter } from "react-icons/bs"
import { ContactInfoInterface, InputFieldInterface } from "../../assets/Interfaces"
import { ChangeEvent, FC, useState } from "react"

const contactInfo = [
    {
        icon: <BsTelephoneOutboundFill />,
        contact: "+1 012 3826 781",
    },
    {
        icon: <BsEnvelopeFill />,
        contact: "demo@gmail.com",
    },
    {
        icon: <BsGeoAltFill />,
        contact: "152 Dartmouth Street Boston, Massachusetts 02156 United States",
    }
]
const socialLinks = [
    <BsTwitter/>, <BsInstagram/>, <BsDiscord/>
]

const ContactPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        firtname: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }


    return(
        <main className="center flex-col w-full pt-[20vh] pb-[10vh] bg-gray-50">
            <div className="w-11/12 lg:w-10/12 center flex-col gap-9 text-primary">
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="font-bold text-4xl">
                        Contact Us
                    </h1>
                    <p className="text-gray-700">
                        Any question or remarks? Just write us a message
                    </p>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-[50px] p-2 rounded-xl bg-white min-h-[80vh] shadow-2xl">
                    <div className="bg-primary flex flex-col justify-between text-gray-300 p-6 rounded-l-xl relative overflow-hidden w-full lg:w-5/12">

                        <div className="flex flex-col gap-1 h-[20%]">
                            <h2 className="text-white text-2xl font-semibold">Contact Information</h2>
                            <p>Say something to start a live chat!</p>
                        </div>
                        <div className="flex flex-col gap-4 h-[70%]">
                            {
                                contactInfo.map((contact : ContactInfoInterface, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <div className="text-xl text-white">
                                            {contact.icon}
                                        </div>

                                        <p>{contact.contact}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex gap-4 h-[10%]">
                            {
                                socialLinks.map((link: JSX.Element, i) => (
                                    <div key={i} className="center h-8 w-8 rounded-full bg-[#000] text-white hover:bg-white hover:text-black2 transition-all duration-500">
                                        {link}
                                    </div>
                                ))
                            }
                        </div>

                        <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-20 rounded-full -right-[70px] -bottom-[35px]"></div>

                    </div>


                    <div className="w-full lg:w-7/12 flex flex-col">
                        <div className="grid lg:grid-cols-2 gap-6 gap-y-9">
                            <InputField 
                                className=""
                                label="First Name"
                                type="Text"
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default ContactPage


const InputField :FC <InputFieldInterface> = ({type, label, className, handleChange}) => {
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={label} className={``}>{label}</label>


            <input 
                type={type}
                // onChange={handleChange}
                className=""
            />
        </div>
    )
}