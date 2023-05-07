import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebase";
import Fade from "react-reveal/Fade";
import axios from "axios";

function AddTvSeries() {
  // lấy dữ liệu users từ api để so sánh
  const [data, setData] = useState([]);

  const loadData = async () => {
    const result = await axios.get("http://localhost:5000/tv-series");
    setData(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Lấy thời gian hiện tại
  var today = new Date();
  var date =
    today.getFullYear() +
    "" +
    (today.getMonth() < 10
      ? "0" + (today.getMonth() + 1).toString()
      : today.getMonth() + 1) +
    "" +
    (today.getDate() < 10 ? "0" + today.getDate().toString() : today.getDate());
  var time =
    (today.getHours() < 10
      ? "0" + today.getHours().toString()
      : today.getHours()) +
    "" +
    (today.getMinutes() < 10
      ? "0" + today.getMinutes().toString()
      : today.getMinutes()) +
    "" +
    (today.getSeconds() < 10
      ? "0" + today.getSeconds().toString()
      : today.getSeconds());
  var dateTime = Number(date + time);

  // Hàm sinh id
  var uniq = new Date().getTime();
  const initialState = {
    id: uniq,
    title: "",
    country: "",
    updateTime: dateTime,
    year: 0,
    runtime: "",
    genreOne: "",
    genreTwo: "",
    genreThree: "",
    plot: "",
    poster: "",
    trailer: "",
    videos: [],
    episodes: "",
    complete: "",
    voteAverage: 0,
    voteCount: 0,
  };
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  // State upload ảnh lên
  const [imageUpload, setImageUpload] = useState(null);
  const [videoUpload, setVideoUpload] = useState(null);
  // State lấy url ảnh về
  const [imageUrls, setImageUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [videoData, setVideoData] = useState(null);

  // Bước 1: Upload ảnh
  // Bước 2: Lấy ảnh về
  // Bước 3: Hiển thị ảnh

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "posters/tv-series/");
  const videosListRef = ref(storage, "videos/tv-series/");

  //Hàm đọc ảnh input
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageUpload(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  //Hàm đọc video input
  const handleVideoChange = (e) => {
    if (e.target.files[0]) {
      setVideoUpload(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setVideoData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Viết hàm upload
  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) {
      alert("Ảnh chưa được chọn");
      return;
    }

    const imageRef = ref(storage, `posters/tv-series/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    alert("Ảnh đã được tải lên");
  };

  // Viết hàm upload video
  const uploadVideo = (e) => {
    e.preventDefault();
    if (videoUpload == null) {
      alert("Video chưa được chọn");
      return;
    }

    const videoRef = ref(storage, `videos/tv-series/${videoUpload.name}`);

    uploadBytes(videoRef, videoUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setVideoUrls((prev) => [...prev, url]);
      });
    });
    alert("Video đã được tải lên");
  };

  // Lấy dữ liệu trả về từ firebase

  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [imagesListRef]);

  useEffect(() => {
    listAll(videosListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setVideoUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [videosListRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < data.length; i++) {
      if (
        !inputValue.title ||
        !inputValue.country ||
        !inputValue.year ||
        !inputValue.runtime ||
        !inputValue.plot ||
        !inputValue.episodes ||
        !inputValue.trailer ||
        !inputValue.complete
      ) {
        alert("Thông tin cần điền chưa đầy đủ");
        return;
      } else {
        alert("Thêm phim thành công!");
        inputValue.updateTime = +inputValue.updateTime;
        inputValue.year = +inputValue.year;
        inputValue.poster = imageUrls[imageUrls.length - 1];
        inputValue.videos = [
          ...inputValue.videos,
          videoUrls[videoUrls.length - 1],
        ];
        console.log(inputValue);
        axios.post("http://localhost:5000/tv-series", inputValue);
        setTimeout(() => {
          window.location.href =
            "/adminsjsodkjgsdoigjsdi3454sdgrgr/movie25855555kpgmhdu465ggfy8fhdh/add-tv-series";
        }, 2000);
        return;
      }
    }
  };

  return (
    <div>
      <div className="body">
        <Fade top>
          <div id="wrapper">
            <form onSubmit={handleSubmit} id="form-register">
              <h1 className="form-heading">THÊM PHIM BỘ</h1>
              <div className="form-group">
                <i className="fa-sharp fa-solid fa-a"></i>
                <input
                  name="title"
                  type="text"
                  className="form-input"
                  placeholder="Tên phim"
                  onChange={handleInputValue}
                />
              </div>
              <div className="form-group">
                <i className="fa-sharp fa-solid fa-calendar-days"></i>
                <input
                  name="year"
                  type="number"
                  className="form-input"
                  placeholder="Năm sản xuất ( VD : 2021 )"
                  onChange={handleInputValue}
                />
              </div>
              <div className="form-group">
                <i className="fa-sharp fa-solid fa-plus-minus"></i>
                <input
                  name="runtime"
                  type="text"
                  className="form-input"
                  placeholder="Thời lượng phim ( VD : 70 phút/Tập )"
                  onChange={handleInputValue}
                />
              </div>

              <div className="form-group">
                <i className="fa-sharp fa-solid fa-hashtag"></i>
                <input
                  name="episodes"
                  type="text"
                  className="form-input"
                  placeholder="Số tập hiện tại ( VD : 16/24 )"
                  onChange={handleInputValue}
                />
              </div>

              <div className="form-group-option">
                <i className="fa-sharp fa-solid fa-globe"></i>
                <select
                  name="country"
                  onChange={handleInputValue}
                  className="select"
                  id=""
                  value={inputValue.country}
                >
                  <option value="">Chọn Quốc Gia</option>
                  <option value="Việt Nam">Việt Nam</option>
                  <option value="Nhật Bản">Nhật Bản</option>
                  <option value="Âu Mỹ">Âu Mỹ</option>
                  <option value="Hàn Quốc">Hàn Quốc</option>
                  <option value="Trung Quốc">Trung Quốc</option>
                  <option value="Thái Lan">Thái Lan</option>
                  <option value="Đang Cập Nhật">Đang Cập Nhật</option>
                </select>
              </div>

              <div className="form-group-option">
                <div className="form-group-option-inside">
                  <p>THỂ LOẠI 1</p>
                  <select
                    className="select"
                    name="genreOne"
                    onChange={handleInputValue}
                    value={inputValue.genreOne}
                    id=""
                  >
                    <option value="">Chọn Thể Loại</option>
                    <option value="Hành Động">Hành Động</option>
                    <option value="Tình Cảm">Tình Cảm</option>
                    <option value="Phiêu Lưu">Phiêu Lưu</option>
                    <option value="Hài Hước">Hài Hước</option>
                    <option value="Tâm Lý - Trinh Thám">
                      Tâm Lý - Trinh Thám
                    </option>
                    <option value="Khoa Học Viễn Tưởng">
                      Khoa Học Viễn Tưởng
                    </option>
                    <option value="Kinh Dị">Kinh Dị</option>
                    <option value="Âm Nhạc">Âm Nhạc</option>
                    <option value="Hoạt Hình">Hoạt Hình</option>
                  </select>
                </div>
              </div>

              <div className="form-group-option">
                <div className="form-group-option-inside">
                  <p>THỂ LOẠI 2</p>
                  <select
                    className="select"
                    name="genreTwo"
                    onChange={handleInputValue}
                    value={inputValue.genreTwo}
                    id=""
                  >
                    <option value="">Chọn Thể Loại</option>
                    <option value="Hành Động">Hành Động</option>
                    <option value="Tình Cảm">Tình Cảm</option>
                    <option value="Phiêu Lưu">Phiêu Lưu</option>
                    <option value="Hài Hước">Hài Hước</option>
                    <option value="Tâm Lý - Trinh Thám">
                      Tâm Lý - Trinh Thám
                    </option>
                    <option value="Khoa Học Viễn Tưởng">
                      Khoa Học Viễn Tưởng
                    </option>
                    <option value="Kinh Dị">Kinh Dị</option>
                    <option value="Âm Nhạc">Âm Nhạc</option>
                    <option value="Hoạt Hình">Hoạt Hình</option>
                  </select>
                </div>
              </div>

              <div className="form-group-option">
                <div className="form-group-option-inside">
                  <p>THỂ LOẠI 3</p>
                  <select
                    className="select"
                    name="genreThree"
                    onChange={handleInputValue}
                    value={inputValue.genreThree}
                    id=""
                  >
                    <option value="">Chọn Thể Loại</option>
                    <option value="Hành Động">Hành Động</option>
                    <option value="Tình Cảm">Tình Cảm</option>
                    <option value="Phiêu Lưu">Phiêu Lưu</option>
                    <option value="Hài Hước">Hài Hước</option>
                    <option value="Tâm Lý - Trinh Thám">
                      Tâm Lý - Trinh Thám
                    </option>
                    <option value="Khoa Học Viễn Tưởng">
                      Khoa Học Viễn Tưởng
                    </option>
                    <option value="Kinh Dị">Kinh Dị</option>
                    <option value="Âm Nhạc">Âm Nhạc</option>
                    <option value="Hoạt Hình">Hoạt Hình</option>
                  </select>
                </div>
              </div>

              <div className="form-group-option">
                <div className="form-group-option-inside">
                  <p>TÌNH TRẠNG</p>
                  <select
                    className="select"
                    name="complete"
                    onChange={handleInputValue}
                    value={inputValue.complete}
                    id=""
                  >
                    <option value="Đang Cập Nhật">Đang Cập Nhật</option>
                    <option value="Hoàn Thành">Hoàn Thành</option>
                  </select>
                </div>
              </div>
              <textarea
                placeholder="Nội dung phim"
                className="form-text-area"
                name="plot"
                id=""
                cols="30"
                rows="5"
                onChange={handleInputValue}
              ></textarea>
              <div className="form-group">
                <i className="fa-sharp fa-solid fa-link"></i>
                <input
                  name="trailer"
                  type="text"
                  className="form-input"
                  placeholder="Link Trailer Youtube"
                  onChange={handleInputValue}
                />
              </div>

              {/* input ảnh */}
              <input
                className="input-img"
                type="file"
                onChange={handleImageChange}
              />
              <img
                alt=""
                className="playerProfilePic_home_tile"
                src={imgData}
              />
              <p>
                <button className="input-img-button" onClick={uploadFile}>
                  {" "}
                  Upload Ảnh
                </button>
              </p>

              {/* input video */}
              <input
                className="input-img"
                type="file"
                onChange={handleVideoChange}
              />
              <video
                className="playerProfileVideo_home_tile"
                src={videoData}
                controls
              ></video>

              <p>
                <button className="input-img-button" onClick={uploadVideo}>
                  {" "}
                  Upload Video
                </button>
              </p>

              <input type="submit" value="Thêm phim" className="form-submit" />
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default AddTvSeries;
