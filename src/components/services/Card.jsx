"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReservationForm from "./ReservationForm";

const Card = () => {
  const [selectedDiv, setSelectedDiv] = useState(1);

  const handleDivClick = (divNumber) => {
    setSelectedDiv(divNumber);
  };

  const getDivStyle = (divNumber) => {
    if (selectedDiv === divNumber) {
      return "p-0 text-white scale-75";
    }
    return " text-black";
  };

  const getDescription = () => {
    switch (selectedDiv) {
      case 1:
        return (
          <div className="text-center flex items-center justify-center flex-col">
        <h1 className="text-xl font-bold">Haircuts and Styling</h1>
        <p className="w-72 text-center">dijamin potong di sini tidak ada kata kata menyesal lagi, bebas memilih gaya rambut apapun ga usah malu</p>
        <div>
        <h3 className="text-red-600 text-lg font-semibold">Rp. 130.000</h3>
        </div>
          </div>
      );
      case 2:
        return (
          <div className="text-center flex items-center flex-col">
          <h1 className="text-xl font-bold">Manicure and Pedicure</h1>
          <p className="w-72 text-center">kuku anda bisa bersih mengkilat bak sebuah berlian hanya melakukan perawatan di sini</p>
        <div>
        <h3 className="text-yellow-600 text-lg font-semibold">Rp. 160.000</h3>
        </div>
        </div>
      );
      case 3:
        return (
          <div className="text-center flex items-center flex-col">
        <h1 className="text-xl font-bold">Facial Treatments</h1>
            <p className="w-72 text-center">Wajah anda bisa jadi semulus paha jeta, jika anda tidak puas silahkan refund 100%</p>
        <div>
        <h3 className="text-pink-600 text-lg font-semibold">Rp. 135.000</h3>
        </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center pt-24 space-y-4">
      <div className="flex space-x-4 ">
        <motion.div
          className={`cursor-pointer ${getDivStyle(1)}`}
          onClick={() => handleDivClick(1)}
          whileHover={{ scale: 1.1 }}
        >
            {selectedDiv === 1 ? null :(
              <Image
              src="/image/Service Hair.png"
              alt="Image 1"
              width={100}
              height={100}
              className="saturate-0 w-32"
              />
            )}
          {selectedDiv === 1 && (
            <Image
              src="/image/Service Hair.png"
              alt="Image 1"
              width={100}
              height={100}
              className="w-32"
            />
          )}
        </motion.div>
        <motion.div
          className={`cursor-pointer ${getDivStyle(2)}`}
          onClick={() => handleDivClick(2)}
          whileHover={{ scale: 1.1 }}
        >
          {selectedDiv === 2 ? null :(
            <Image
            src="/image/Service Facial.png"
            className="saturate-0 w-32"
            alt="Image 2"
            width={100}
            height={100}
            />
          )}
          {selectedDiv === 2 && (
            <Image
            src="/image/Service Facial.png"
            className=" w-32"
            alt="Image 2"
            width={100}
            height={100}
            />
          )}
        </motion.div>
        <motion.div
          className={`cursor-pointer ${getDivStyle(3)}`}
          onClick={() => handleDivClick(3)}
          whileHover={{ scale: 1.1 }}
          >
          {selectedDiv === 3 ? null :(
            <Image
            src="/image/Service Manicure.png"
            alt="Image 3"
            width={100}
            height={100}
            className="saturate-0 w-32"
            />
          )}
          {selectedDiv === 3 && (
            <Image
            src="/image/Service Manicure.png"
            alt="Image 3"
            className=" w-32"
              width={100}
              height={100}
            />
          )}
        </motion.div>
      <motion.div
        className="p-4 border border-gray-300 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
        {getDescription()}
      </motion.div>
    </div>
    <ReservationForm selectedService={selectedDiv} />
        </div>
  );
};

export default Card;
