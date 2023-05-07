import React from "react";
import "./AdminManager.css";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function AdminUsers() {
  // Khởi tạo giá trị người dùng từ api
  const [data, setData] = useState([]);

  // Giá trị chuyển trang
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);
  const [pageStyle, setPageStyle] = useState(1);

  // Chỉ lấy dữ liệu là người dùng
  const userData = data.filter((e) => e.condition === "user");

  // Trạng thái active của router
  const navLinkClassName = ({ isActive }) =>
    isActive ? "left-bar-icon-active" : "left-bar-icon";

  // Gọi api lấy giá trị người dùng
  const loadData = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setData(result.data);
  };

  //Khóa và mở khóa người dùng
  const handleLock = async (user, id) => {
    console.log(id);
    if (user.status === "Hoạt Động") {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        status: "Bị Khóa",
      });
    } else if (user.status === "Bị Khóa") {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        status: "Hoạt Động",
      });
    }

    loadData();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn chắc chắc muốn xóa chứ?") === true) {
      await axios.delete(`http://localhost:5000/users/${id}`);
      loadData();
    }
  };

  // Chuyển trang
  const handleChangePages = (page) => {
    console.log(page, "this is page");
    setPageStyle(page);
  };

  // Sang dãy trang trước
  const handlePrevPages = () => {
    if (pageNumbers[0] !== 1) {
      const newPageNumbers = pageNumbers.map((e) => e - 5);
      setPageNumbers(newPageNumbers);
      setPageStyle(newPageNumbers[0]);
    }
  };

  // Sang dãy trang tiếp
  const handleNextPages = () => {
    const newPageNumbers = pageNumbers.map((e) => e + 5);
    setPageNumbers(newPageNumbers);
    setPageStyle(newPageNumbers[0]);
    console.log(pageNumbers);
  };

  // Xử Lý bất đồng bộ
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Fade top cascade>
        <div className="admin-manager-title">
          <i className="fa-sharp fa-solid fa-user"></i> QUẢN LÝ NGƯỜI DÙNG
        </div>
      </Fade>
      <Fade left>
        <div className="admin-users-container">
          <div className="left-bar">
            <NavLink
              to={
                "/adminsdjsodkjgsdoigjsdi3454sdgrgr/user25855555kpgmhdu465ggfy8fhdh"
              }
              className={navLinkClassName}
            >
              <div title="Quản lý người dùng">
                <i className="fa-sharp fa-solid fa-user"></i>
              </div>
            </NavLink>
            <NavLink
              to={
                "/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh"
              }
              className={navLinkClassName}
            >
              <div title="Quản lý phim">
                <i className="fa-sharp fa-solid fa-film"></i>
              </div>
            </NavLink>
            <NavLink
              to={
                "/adminsdjsodkjgsdoigjsdi3454sdgrgr/comment25855555kpgmhdu465ggfy8fhdh"
              }
              className={navLinkClassName}
            >
              <div title="Quản lý bình luận">
                <i className="fa-sharp fa-solid fa-comments"></i>
              </div>
            </NavLink>
          </div>

          {/* Quản lý thông tin người dùng */}
          <div className="main-bar">
            <Table className="table-modal" striped bordered hover>
              <thead>
                <tr className="bg-dark text-white">
                  <th>
                    <span className="main-bar-title">
                      <i className="fa-solid fa-id-card"></i> ID
                    </span>{" "}
                  </th>
                  <th>
                    <span span className="main-bar-title">
                      Tên Đăng Nhập
                    </span>
                  </th>
                  <th>
                    <span span className="main-bar-title">
                      <i className="fa-sharp fa-solid fa-envelope"></i> Email
                    </span>
                  </th>
                  <th colSpan={2}>
                    <span className="main-bar-title">
                      <i className="fa-sharp fa-solid fa-lock"></i> /{" "}
                      <i className="fa-sharp fa-solid fa-lock-open"></i>
                    </span>
                  </th>
                  <th>
                    <span span className="main-bar-title">
                      <i className="fa-sharp fa-solid fa-comments"></i>
                    </span>
                  </th>
                  <th>
                    <span span className="main-bar-title">
                      Xóa
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData
                  .slice(pageStyle * 10 - 10, pageStyle * 10)
                  .map((user, index) => (
                    <tr key={index}>
                      <td>
                        <span className="detail-infor">{user.id}</span>{" "}
                      </td>
                      <td>
                        <span className="detail-infor">{user.userName}</span>
                      </td>
                      <td>
                        <span className="detail-infor">{user.email}</span>
                      </td>

                      {user.status === "Hoạt Động" ? (
                        <>
                          <td>
                            <span className="detail-infor">
                              <i
                                id="detail-infor-active"
                                className="fa-sharp fa-solid fa-circle"
                              ></i>{" "}
                              <img
                                src="/img/unlocked.png"
                                width={"25px"}
                                alt=""
                              />
                            </span>
                          </td>
                          <td>
                            <p
                              onClick={(e) => handleLock(user, user.id)}
                              className="lock-button"
                            >
                              Khóa
                            </p>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>
                            <span className="detail-infor">
                              <i
                                id="detail-infor"
                                className="fa-sharp fa-solid fa-circle"
                              ></i>{" "}
                              <img src="/img/lock.png" width={"25px"} alt="" />
                            </span>
                          </td>
                          <td>
                            <p
                              onClick={(e) => handleLock(user, user.id)}
                              className="unlock-button"
                            >
                              Mở
                            </p>
                          </td>
                        </>
                      )}

                      <td>
                        <span className="edit">
                          <i
                            title="Xem bình luận"
                            className="fa-solid fa-comment"
                          ></i>
                        </span>{" "}
                      </td>
                      <td>
                        <span
                          onClick={(e) => handleDelete(user.id)}
                          className="delete"
                        >
                          <i
                            title="Xóa"
                            className="fa-sharp fa-solid fa-trash"
                          ></i>
                        </span>{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          {/* Hết quản lý */}
        </div>
      </Fade>
      {/* Chuyển trang */}
      <div className="page-change">
        <p onClick={handlePrevPages} className="page-number">
          &lt;
        </p>
        {pageNumbers.map((page, pageID) => (
          <p
            onClick={(e) => handleChangePages(page)}
            key={pageID}
            className={
              page !== pageStyle ? "page-number" : "page-number-active"
            }
          >
            {page}
          </p>
        ))}
        <p onClick={handleNextPages} className="page-number">
          &gt;
        </p>
      </div>
    </>
  );
}

export default AdminUsers;
