import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import PosterSection from "./components/PosterSection";
import { tmdb } from "../../api/auth";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const [usernameFix, setUsernameFix] = useState();

  useEffect(() => {
    const getSessionId = async () => {
      try {
        // Ambil token yang sudah divalidasi atau yang diotorisasi dari URL
        let requestToken = localStorage.getItem("validated_token") || localStorage.getItem("pending_token");

        // Cek jika token di URL ada dan belum disimpan
        const tokenFromURL = new URLSearchParams(window.location.search).get("request_token");
        if (tokenFromURL) {
          requestToken = tokenFromURL;
          localStorage.setItem("validated_token", tokenFromURL); // Asumsikan user klik 'Allow'
        }

        if (!requestToken) {
          alert("Token tidak ditemukan. Silakan login ulang.");
          navigate("/");
          return;
        }

        console.log("Membuat session dengan token", requestToken);

        // Step 1 : Create session Id
        const sessionRes = await tmdb.post("/authentication/session/new", {
          request_token: requestToken,
        });

        const sessionId = sessionRes.data.session_id;
        if (!sessionId) throw new Error("Gagal membuat session");

        localStorage.setItem("session_id", sessionId);
        localStorage.removeItem("validated_token");
        localStorage.removeItem("pending_token");

        console.log("✅ Session ID dibuat:", sessionId);

        // Step 2 : Set username
        const username = localStorage.getItem("username");
        setUsernameFix(username);

        console.log("✅ Username dibuat:", username);
        
        // Bersihkan parameter URL setelah berhasil
        window.history.replaceState({}, document.title, "/beranda");
      } catch (error) {
        console.error(
          "Gagal membuat session:",
          error.response?.data?.status_message || error.message
        );
      }
    };

    getSessionId();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div>
        <PosterSection />
      </div>
    </>
  );
};

export default HomePage;
