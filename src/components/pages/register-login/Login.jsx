import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterLogin.css";
import Fade from "react-reveal/Fade";
import axios from "axios";

function Login() {
  const [data, setData] = useState([]);
  const [nameOrEmail, setNameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadData = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setData(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    let getUser = data.find(
      (user) =>
        (user.userName === nameOrEmail && user.password === password) ||
        (user.email === nameOrEmail && user.password === password)
    );

    if (getUser) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userName === nameOrEmail || data[i].email === nameOrEmail) {
          if (data[i].status === "Bị Khóa") {
            alert("Tài khoản của bạn đã bị khóa");
            return;
          }
          const avatarChar = data[i].userName.charAt(0);
          let user = {
            userName: data[i].userName,
            email: data[i].email,
            condition: data[i].condition,
            avatarChar: avatarChar,
          };
          localStorage.setItem("loginFlag", JSON.stringify(user));
          alert("Đăng nhập thành công");
          if (data[i].condition === "admin") {
            setTimeout(() => {
              window.location.href = "/adminsdjsodkjgsdoigjsdi3454sdgrgr";
            }, 2000);
            return;
          }
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
          return;
        }
      }
    } else if (!nameOrEmail || !password) {
      alert("Thông tin đăng nhập không được để trống");
    } else {
      alert("Tên đăng nhập, email hoặc mật khẩu bị sai");
      return;
    }
  };
  return (
    <div className="body">
      <Fade top>
        <div id="wrapper">
          <form onSubmit={handleLogin} id="form-register">
            <h1 className="form-heading">ĐĂNG NHẬP</h1>
            <div className="form-group">
              <i className="fa-solid fa-user" />
              <input
                name="nameOrEmail"
                type="text"
                className="form-input"
                value={nameOrEmail}
                onChange={(e) => setNameOrEmail(e.target.value)}
                placeholder="Tên đăng nhập hoặc email"
              />
            </div>
            <div className="form-group">
              <i className="fa-solid fa-key" />
              <input
                name="checkPassword"
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
              />
            </div>
            <br />
            <input type="submit" value="Đăng nhập" className="form-submit" />
            <p>Chưa có tài khoản? Hãy đăng ký bên dưới.</p>
            <Link to={"/register"}>
              <input type="button" value="Đăng ký" className="form-submit" />
            </Link>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Login;
