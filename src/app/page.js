"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Telefon inputining default stillari

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // ✅ Yangi handleSubmit funksiyasi
  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      setError("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setError(""); // Xatolikni tozalash
    alert("Ma'lumotlar yuborildi!");
  };

  return (
    <div className="bg-[#11003b] flex flex-col justify-center items-center px-[20px] pb-[20px] ">
      <p className="text-white text-center leading-[99px] text-6xl p-0 ">
        TEZ MUDDATDA 7.0+
      </p>
      <p className="leading-[50px] text-center text-4xl text-white mb-[25px] ">
        OLMOQCHI BO'LSANGIZ VIDEONI KO'RING
      </p>
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/5XwcxzWD0r8"
        title="Tez muddatda 7+ olish uchun, C2 daraja shart emas"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="max-w-[650px] rounded-[20px] shadow-lg w-full"
      ></iframe>

      <p className="leading-[36px] text-[23px] text-white text-center mb-[20px] mt-[20px] ">
        FORMАNI TO'LDIRING VA 180 SAOTDA QANDAY QILIB 7,0+ OLISH <br />
        MUMKINLIGINI BILIB OLING
      </p>

      <div className="inputBox max-w-[700px] w-full flex flex-col gap-[10px]">
        {/* Ism inputi */}
        <input
          className="text-black border border-black bg-white rounded-[90px] text-[18px] font-normal h-[60px] px-4 w-full outline-none"
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Telefon inputi */}
        <PhoneInput
          country={"uz"}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputProps={{
            required: true,
            className:
              "text-black border border-danger bg-white rounded-[90px] text-[18px] font-normal h-[60px] px-4 w-full outline-none pl-[65px]",
          }}
          flagClass="rounded-full overflow-hidden"
        />

        {/* Xatolik xabari */}
        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Yuborish tugmasi */}
        <button
          className="px-[15px] block w-full font-black h-[90px] text-white rounded-[100px] text-[21px] bg-[#cb67a5] cursor-pointer font-[Poppins] outline-none border-none"
          onClick={handleSubmit}
        >
          IELTS BALLINGIZNI OSHIRISH UCHUN YECHIM
        </button>
      </div>
    </div>
  );
}
