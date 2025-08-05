import { useEffect, useState } from "react";
import Navbar from "../../../components/fragments/Navbar";
import Footer from "../../../components/fragments/Footer";
import InputBar from "../../../components/elements/InputBar";
import InputSubmit from "../../../components/elements/InputSubmit";
import Button from "../../../components/fragments/Button";
import { useNavigate } from "react-router";
import { sessionRes, tokenResponse, validateLogin } from "../../../api/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // const {sessionId} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Request token
      const requestToken = await tokenResponse().then(
        (res) => res.request_token
      );
      if (!requestToken) throw new Error("Gagal mendapatkan request token");

      // Step 2: Validasi login user
      try {
        // Memvalidasi login dari input
        await validateLogin(username, password, requestToken);

        // Create session ID
        const sessionId = await sessionRes(requestToken).then(
          (res) => res.session_id
        );
        if (!sessionId) throw new Error("Gagal membuat session");

        // Simpan dan redirect ke halaman beranda
        localStorage.setItem("username", username);
        localStorage.setItem("session_id", sessionId);
        navigate("/beranda", { replace: true });
      } catch (validationError) {
        // Simpan sebagai pending token
        localStorage.setItem("pending_token", requestToken);
        localStorage.setItem("username", username);

        // Redirect ke halaman TMDB untuk otorisasi manual
        const redirectURL = encodeURIComponent("http://localhost:5173/login");
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}/allow?redirect_to=${redirectURL}`;
      }
    } catch (error) {
      console.error(
        "Login error:",
        error?.response?.data?.status_message || error.message
      );
    }
  };

  useEffect(() => {
    // Memeriksa apakah ada request token di URL
    const tokenFromURL = new URLSearchParams(window.location.search).get(
      "request_token"
    );
    if (tokenFromURL) {
      const createSessionId = async () => {
        try {
          // Membuat session ID
          const sessionId = await sessionRes(tokenFromURL).then(
            (res) => res.session_id
          );
          if (!sessionId) throw new Error("Gagal membuat session");

          // Simpan dan redirect ke halaman beranda
          localStorage.setItem("session_id", sessionId);
          localStorage.removeItem("validated_token") ||
            localStorage.removeItem("pending_token");
          navigate("/beranda", { replace: true });

        } catch (error) {
          console.error("Login error:", error.message);
        }
      };
      
      createSessionId();
    }
  }, [navigate]);

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
