import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";


function NewsLetter() {
    const [email, setEmail] = useState<string>('')

    const Subscribe = async () => {
        
        /* Send Email to the DB */
        if (email?.length <= 5 || !email.includes('@')) {
           return toast.warn('Kindly check the Email Address')
        }
        try {
            const res = await axios.post("http://localhost:3100/api/newsletter", {email});
            toast.success(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="nav1 basis-full xl:basis-2/6">
            <h2 className="text-lg font-bold xl:mb-4 xl:text-2xl ">Newsletter</h2>
            <div className="flex flex-col xl:gap-y-3">
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm xl:text-lg xl mb-3  ">Get recent news and updates.</span>
                    <input
                        type="email"
                        className=" p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F6AA1C] focus:ring-[#F6AA1C] block w-full rounded-md sm:text-sm focus:ring-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email address"
                    />
                    <input type="submit" value="Subscribe" className="bg-[#BC3908] py-3 px-6 rounded text-white mt-4" onClick={() => Subscribe()} />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Please provide a valid email address.
                    </p>
                </label>
            </div>
        </div>
    )
}

export default NewsLetter;