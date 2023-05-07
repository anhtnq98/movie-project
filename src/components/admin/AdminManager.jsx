import React from "react";
import "./AdminManager.css";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function AdminManager() {
  return (
    <>
      <Fade top cascade>
        <div className="admin-manager-title"><i class="fa-sharp fa-solid fa-screwdriver-wrench"></i> QUẢN LÝ ADMIN</div>
      </Fade>
      <div className="admin-manager-container">
        <div className="admin-manager-inside">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/adminsdjsodkjgsdoigjsdi3454sdgrgr/user25855555kpgmhdu465ggfy8fhdh"
          >
            <Zoom left cascade>
              <div className="admin-manager-block">
                <div>
                  <i class="fa-sharp fa-solid fa-user"></i>
                </div>
                <p>Quản Lý Người dùng</p>
              </div>
            </Zoom>
          </Link>
          <Link
            className="nav-link active"
            aria-current="page"
            to="/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh"
          >
            <Zoom left cascade>
              <div className="admin-manager-block">
                <div>
                  <i class="fa-sharp fa-solid fa-film"></i>
                </div>
                <p>Quản Lý Phim</p>
              </div>
            </Zoom>
          </Link>
          <Link
            className="nav-link active"
            aria-current="page"
            to="/adminsdjsodkjgsdoigjsdi3454sdgrgr/comment25855555kpgmhdu465ggfy8fhdh"
          >
            <Zoom left cascade>
              <div className="admin-manager-block">
                <div>
                  <i class="fa-sharp fa-solid fa-comments"></i>
                </div>
                <p>Quản Lý Bình Luận</p>
              </div>
            </Zoom>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminManager;
