"use client";
import { useState } from "react";
import axios from "axios";

const ReservationForm = ({ selectedService }) => {
const [name, setName] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");

const getServiceName = (service) => {
switch (service) {
    case 1:
    return "Haircuts and Styling";
    case 2:
    return "Manicure and Pedicure";
    case 3:
    return "Facial Treatments";
    default:
    return "";
}
};

const handleSubmit = async (e) => {
    e.preventDefault()
    if(!name && !text){
        alert("nama dan pesan harus di isi!")
        return
    }try{
        await axios.post('/api/reservation', {name, service, date, time})
        setName('')
        setDate('')
        setTime('')
    }catch(err){
        console.error('data err post', err)
    }
};

return (
<div className="p-4 border border-gray-300 rounded w-full max-w-md mt-24">
    <h2 className="text-xl font-bold mb-4">Reservation Form</h2>
    <form onSubmit={handleSubmit}>
    <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
        Name
        </label>
        <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
        />
    </div>
    <div className="mb-4">
        <label htmlFor="service" className="block mb-2">
        Service
        </label>
        <input
        type="text"
        id="service"
        value={getServiceName(selectedService)}
        readOnly
        className="w-full p-2 border rounded bg-gray-100"
        />
    </div>
    <div className="mb-4">
        <label htmlFor="date" className="block mb-2">
        Date
        </label>
        <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded"
        required
        />
    </div>
    <div className="mb-4">
        <label htmlFor="time" className="block mb-2">
        Time
        </label>
        <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border rounded"
        required
        />
    </div>
    <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded"
    >
        Submit
    </button>
    </form>
</div>
);
};

export default ReservationForm;
