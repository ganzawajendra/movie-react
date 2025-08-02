import React, { use, useContext, useState } from "react";
import Navbar from "../../../components/fragments/Navbar";
import Footer from "../../../components/fragments/Footer";
import InputBar from "../../../components/elements/InputBar";
import InputSubmit from "../../../components/elements/InputSubmit";
import Button from "../../../components/fragments/Button";
import { tmdb } from "../../../api/auth";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const {sessionId} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Ambil request token
      const tokenResponse = await tmdb.get("/authentication/token/new");
      const requestToken = tokenResponse.data.request_token;

      console.log("Token Diterima:", requestToken);
      if (!requestToken) throw new Error("Gagal mendapatkan request token");

      // Step 2: Validasi login user
      try {
        await tmdb.post("/authentication/token/validate_with_login", {
          username,
          password,
          request_token: requestToken,
        });

        console.log("Login berhasil divalidasi")
        localStorage.setItem("validated_token", requestToken);
        localStorage.setItem("username", username);

        navigate("/beranda", { replace: true });
      } catch (validationError) {
        console.warn("Login gagal, redirect ke otorisasi manual...")

        // Redirect ke halaman TMDB untuk otorisasi manual
        localStorage.setItem("pending_token", requestToken);
        localStorage.setItem("username", username);

        // Jika invalid (username/password salah), redirect ke otentikasi TMDB
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}/allow?redirect_to=http://localhost:5173/beranda`;
      }
    } catch (error) {
      console.error(
        "Login error:",
        error?.response?.data?.status_message || error.message
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-image h-screen flex items-center justify-center relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 "></div>
        <div className="card-transition-gradient"></div>
        <div className="w-1/2 flex flex-col items-center justify-center z-10 relative text-white bg-black/60 p-10 gap-5">
          <div className="w-full">
            <h1 className="text-2xl font-montserrat-bold text-start">Masuk</h1>
          </div>
          <form className="flex flex-col w-full gap-5" onSubmit={handleLogin}>
            <InputBar
              name="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            >
              Username
            </InputBar>
            <InputBar
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            >
              Sandi
            </InputBar>
            <InputSubmit value="Masuk" />
          </form>
          <div>
            <Button
              navlink="/forgot-password"
              style="font-lato-light underline hover:text-gray-400 transition-all duration-300"
            >
              Lupa Sandi?
            </Button>
          </div>
          <div className="w-full">
            <p className="font-lato-light">
              Baru di Moflix?{" "}
              <Button
                navlink="/register"
                style="underline hover:text-gray-400 transition-all duration-300 font-montserrat-light"
                padding="px-1"
              >
                Daftar Sekarang
              </Button>
            </p>
            <div className="w-1/2">
              <p className="font-lato text-gray-500 text-sm">
                Halaman ini dilindungi oleh reCAPTCHA Google untuk memastikan
                kamu bukan bot.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
