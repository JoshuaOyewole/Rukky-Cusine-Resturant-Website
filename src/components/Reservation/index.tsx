import axios from "axios";
import React, { useState } from "react"
import { toast } from "react-toastify";
import { Title } from "../Sections"

type CredentialProps = {
    date: React.HTMLInputTypeAttribute,
    time: React.HTMLInputTypeAttribute,
    persons: number
}
const Reservation = () => {
    const date = new Date().toDateString();

    const [reservationInfo, setReservationInfo] = useState<CredentialProps>({} as CredentialProps);

    const handleCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReservationInfo({
            ...reservationInfo,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleBooking = async () => {
        /* Send the Reservation Details to the DB */
        try {
            const res = await axios.post("http://localhost:3100/api/reservation", reservationInfo);
            toast.success(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="w-full py-14 xl:py-24 bg-orange-800" id="reserveTable">
            <div className="w-full flex items-center justify-center flex-col">
                <Title title={"Make a Reservation"} center color="text-white xl:text-4xl" />
                <div className="pt-12 w-[90%] lg:w-4/5 lg:flex lg:justify-between " >
                    <div className="mb-6 basis-full lg:basis-[32%]">
                        <input
                            type="date"
                            name="date"
                            value={reservationInfo.date}
                            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                            placeholder={date}
                            onChange={handleCredential}
                        />
                    </div>

                    <div className="mb-6 basis-[23%]">
                        <input
                            type="time"
                            name="time"
                            value={reservationInfo.time}
                            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                            placeholder="7PM"
                            onChange={handleCredential}
                        />
                    </div>
                    <div className="mb-6 basis-[23%]">
                        <input
                            type="number"
                            name="persons"
                            value={reservationInfo.persons}
                            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                            placeholder="2 Persons"
                            onChange={handleCredential}
                        />
                    </div>

                    <div className="mb-6 basis-[10%]">
                        <input
                            type="submit"
                            value='Submit'
                            className="py-3 w-full bg-black text-white px-6 rounded hover:bg-orange-600 transition-all ease-linear duration-200"
                            onClick={handleBooking}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservation