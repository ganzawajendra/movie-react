import React from 'react'
import Navbar from "../../../components/fragments/Navbar";
import Footer from "../../../components/fragments/Footer";
import InputBar from "../../../components/elements/InputBar";
import InputSubmit from "../../../components/elements/InputSubmit";
import Button from "../../../components/fragments/Button";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-image h-screen flex items-center justify-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 "></div>
        <div className="card-transition-gradient"></div>
        <div className="w-1/2 flex flex-col items-center justify-center z-10 relative text-white bg-black/60 p-10 gap-5">
          <div className="w-full">
            <h1 className="text-2xl font-montserrat-bold text-start">
              Daftar Akun Anda
            </h1>
          </div>
          <form className="flex flex-col w-full gap-5">
            <InputBar name="username" type="text">
              Username
            </InputBar>
            <InputBar name="email" type="email">
              Email
            </InputBar>
            <InputBar name="password" type="password">
              Sandi
            </InputBar>
            <InputSubmit value="Daftar" />
          </form>
          <div className="w-full">
            <p className="font-lato-light">Sudah Punya Akun di Moflix? <Button navlink="/login" style="underline hover:text-gray-400 transition-all duration-300 font-montserrat-light" padding="px-1">Login</Button></p>
            <div className="w-1/2">
            <p className="font-lato text-gray-500 text-sm">Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan kamu bukan bot.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RegisterPage