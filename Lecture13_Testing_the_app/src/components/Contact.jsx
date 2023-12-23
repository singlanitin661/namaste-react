const ContactUsComponent = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className=" block text-center font-bold text-3xl p-4 m-4">
            Welcome to the contact-us Page
            </h1>

            <form className="border border-black w-[80%] h-[50vh] flex-col flex items-center justify-center  bg-gray-200">
            <input type="text" className="border border-black p-2 m-4 rounded-xl"placeholder="name"/>
            <input type="text"  className="border w-9/12 h-52 border-black p-2 m-4 rounded-xl" placeholder="Message"/>
            <button  className="border border-black p-2 m-4 bg-slate-300 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default ContactUsComponent;