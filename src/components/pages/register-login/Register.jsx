import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Fade from "react-reveal/Fade";

function Register() {
  // lấy dữ liệu users từ api để so sánh
  const [data, setData] = useState([]);

  const loadData = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setData(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const initialState = {
    userName: "",
    email: "",
    password: "",
    condition: "user",
    status: "active",
  };
  const [inputValue, setInputValue] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const checkMail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (checkMail.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < data.length; i++) {
      if (
        !inputValue.userName ||
        !inputValue.email ||
        !inputValue.password ||
        !confirmPassword
      ) {
        popUpMissingInfor();
        return;
      } else if (
        inputValue.userName.length < 5 ||
        inputValue.userName.length > 15
      ) {
        alert(
          "Tên đăng nhập không được ngắn hơn 5 ký tự hoặc dài hơn 15 ký tự"
        );
        return;
      } else if (data[i].userName === inputValue.userName) {
        alert("Tên đăng nhập đã được sử dụng");
        return;
      } else if (!validateEmail(inputValue.email)) {
        alert("Email không đúng định dạng");
        return;
      } else if (data[i].email === inputValue.email) {
        alert("Email đã được sử dụng");
        return;
      } else if (inputValue.password.length < 8) {
        alert("Mật khẩu không được nhỏ hơn 8 ký tự");
        return;
      } else if (inputValue.password !== confirmPassword) {
        alert("Xác nhận mật khẩu không đúng");
        return;
      } else {
        popUpRegister();
        axios
          .post("http://localhost:5000/users", inputValue)
          .then((res) => console.log("data", res.data))
          .catch((err) => err);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    }
  };

  const [popUpClass, setpopUpClass] = useState("");

  const [missingInforText, setmissingInforText] = useState("");
  const popUpMissingInfor = () => {
    setpopUpClass("show");
    setmissingInforText("Thông tin bắt buộc đang để trống");
    setTimeout(function () {
      setpopUpClass("");
    }, 2000);
  };

  const [registerText, setRegisterText] = useState("");
  const popUpRegister = () => {
    setpopUpClass("show");
    setRegisterText("Đăng ký thành công");
    setTimeout(function () {
      setpopUpClass("");
    }, 2000);
  };

  return (
    <div className="body">
      <Fade top>
        <div id="wrapper">
          <form onSubmit={handleSubmit} id="form-register">
            <h1 className="form-heading">ĐĂNG KÝ</h1>
            <div className="form-group">
              <i className="fa-solid fa-user" />
              <input
                name="userName"
                type="text"
                className="form-input"
                placeholder="Tên đăng nhập"
                onChange={handleInputValue}
              />
              <span className="star">*</span>
            </div>
            <div className="form-group">
              <i className="fa-solid fa-at" />
              <input
                name="email"
                type="text"
                className="form-input"
                placeholder="Email  (VD: email@address.com)"
                onChange={handleInputValue}
              />
              <span className="star">*</span>
            </div>
            <div className="form-group">
              <i className="fa-solid fa-key" />
              <input
                name="password"
                type="password"
                className="form-input"
                placeholder="Mật khẩu"
                onChange={handleInputValue}
              />
              <span className="star">*</span>
            </div>
            <div className="form-group">
              <i className="fa-solid fa-key" />
              <input
                name="confirmPassword"
                type="password"
                className="form-input"
                placeholder="Nhập lại mật khẩu"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="star">*</span>
            </div>
            <input type="submit" value="Đăng ký" className="form-submit" />
            <p>Đã có tài khoản? Hãy đăng nhập bên dưới.</p>
            <Link to={"/login"}>
              <input type="button" value="Đăng nhập" className="form-submit" />
            </Link>
          </form>
        </div>
      </Fade>
      <div id="snack-bar" className={popUpClass}>
        <img src="./img/logo4.png" width={"150px"} alt="" />
        <p>{missingInforText}</p>
        <p>{registerText}</p>
      </div>
    </div>
  );
}

export default Register;
