import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Banner from "../components/Banner";
import historyImg from "../../../assets/images/about__history_img.jpg";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import lichsudanang4 from "../../../assets/images/lich-su-da-nang-4.jpg";
import lichsudanang5 from "../../../assets/images/tourane-1929-lich-su-da-nang.jpg";
import lichsudanang3 from "../../../assets/images/lich-su-da-nang-3.jpg";

import "./History.scss";

const History = () => {
  window.scrollTo(0, 0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="history">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : (
        <div className="history__container">
          <Banner bannerImg={historyImg} />
          <Container>
            <div className="history__content">
              <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                  <p>
                    Trong lịch sử dân tộc, Đà Nẵng được biết đến không chỉ là
                    một thành phố cảng lớn nhất miền Trung Việt Nam mà còn là
                    một địa danh gắn liền với công cuộc mở mang bờ cõi Đại Việt
                    từ nhiều thế kỉ trước. Dấu vết của một cửa ngõ giao lưu quốc
                    tế gắn liền với xứ Đàng Trong vẫn còn, và trong dư ba của
                    lịch sử, đây là một tiền đồn quan trọng trong công cuộc
                    chống ngoại xâm của hai cuộc kháng chiến thần thánh vừa qua.
                  </p>

                  <figure>
                    <img src={lichsudanang4} alt={lichsudanang4} />
                    <figcaption>Ảnh: Thành phố Đà Nẵng</figcaption>
                  </figure>
                  <p>
                    Thành phố Đà Nẵng nằm khiêm nhường ven biển miền Trung, tọa
                    độ 108° 10’ 30” kinh tuyến Đông và 16° 17’ 30” vĩ tuyến Bắc;
                    cách thủ đô Hà Nội 759km, cách cố đô Huế về phía bắc 107km,
                    cách thành phố Hồ Chí Minh về phía nam 917km.
                  </p>
                  <ul>
                    <li>Đông – giáp biển Đông</li>
                    <li>
                      Tây – giáp huyện Hiên và huyện Đại Lộc tỉnh Quảng Nam
                    </li>
                    <li>Nam – giáp huyện Điện Bàn, tỉnh Quảng Nam</li>
                    <li>Bắc – giáp huyện Phú Lộc, tỉnh Thừa Thiên – Huế.</li>
                    <li>Diện tích Đà Nẵng: 1.248,4km2</li>
                  </ul>
                  <h3>Địa danh Đà Nẵng</h3>
                  <p>
                    Theo sách “Lược sử Đà Nẵng 700 năm (1306 – 2006)” – Nhà Xuất
                    bản Đà Nẵng – Tác giả Lê Duy Anh – Lê Hoàng Vinh thì địa
                    danh được mang ba tên gọi quen thuộc là Đà Nẵng, Hàn và
                    Tourane:
                  </p>
                  <ul>
                    <li>
                      Đà Nẵng: Danh xưng Đà Nẵng từ xưa là không phải của tiếng
                      Việt thuần túy, mà bắt nguồn từ ngôn ngữ Chàm (Chăm,
                      Champa hay Chiêm Thành). Có nghĩa là: Đà là sông, Nẵng là
                      lớn. Như vậy, Đà Nẵng có nghĩa là sông lớn.
                    </li>
                    <li>
                      Hàn: Nếu người được hỏi là người Chàm, thì câu trả lời là
                      “Darak” hay “Danak” từ đó người Việt mô phỏng thành “Đà
                      Nẵng”. Nếu người được hỏi là người Tàu (thuộc Hải Nam) thì
                      câu trả lời là “Hành Cảng” hay “Hàn Cảng” và từ đó rút gọn
                      thành “Hàn”
                    </li>
                    <li>
                      Tourane: Tourane là danh xưng chính thức, cái tên mà thực
                      dân Pháp đã đặt cho Đà Nẵng vào khoảng năm 1860 -1888 kể
                      từ khi Pháp xâm chiếm Đà Nẵng cho đến hết thời Pháp thuộc
                      năm 1945. Danh xưng Tourane, chỉ thông dụng đối với người
                      Pháp và những quan chức theo làm việc cho Pháp, còn trong
                      dân chúng thì vẫn dùng từ Đà Nẵng hoặc cửa Hàn, đất Hàn.
                    </li>
                  </ul>
                  <h3>Lịch sử Đà Nẵng</h3>
                  <p>
                    Là một trong những cửa sông lớn của miền Quảng Nam (mở rộng
                    về phương Nam), từ nhiều thế kỷ trước, kể cả khi Hội An còn
                    đang trong thời kì phát triển rực rỡ vào thế kỉ XVII, cửa
                    biển Đà Nẵng đã được đánh giá rất cao. Chúng ta từng biết
                    bức tranh nổi tiếng của dòng họ Chaya Nhật Bản vẽ quang cảnh
                    buôn bán ở Hội An. Nếu đúng như một giả thiết rằng cửa biển
                    vẽ trong ấy là cửa biển Đà Nẵng với Ngũ Hành Sơn và con sông
                    Cổ Cò thì không có gì ngạc nhiên khi cho rằng những chiếc
                    tàu vượt đại dương, có trọng tải lớn, thiết bị kỹ thuật đi
                    biển cao của các thương nhân Nhật Bản hoặc Trung Hoa đều
                    phải lựa chọn lối vào là cửa Đà Nẵng thay vì cửa Hội An, vì
                    ưu thế vượt trội của vịnh Đà Nẵng là nước sâu và có độ an
                    toàn cao. Trên thực tế, từ thế kỉ thứ XVIII trở về sau, tiềm
                    năng Đà Nẵng với tư cách là một hải cảng đã ngày càng tỏ rõ
                    tính ưu việt của nó đối với khu vực.
                  </p>
                  <p>
                    Năm 1835, khi vua Minh Mạng có dụ: “Tàu Tây chỉ được đậu tại
                    Cửa Hàn, còn các biển khác không được tới buôn bán” thì Đà
                    Nẵng trở thành một thương cảng lớn bậc nhất miền Trung. Từ
                    thời điểm này trở đi, thay vì cửa Đại Chiêm như trước đây,
                    các quan hệ về buôn bán, ngoại giao ngày một tập trung dần
                    vào một đầu mối chính của miền Trung là cửa biển Đà Nẵng.
                    Nhờ vị trí và vai trò ngày càng quan trọng với miền Trung,
                    Đà Nẵng bắt đầu phát triển các ngành tiểu thủ công nghiệp
                    địa phương như những ngành sửa chữa tàu thuyền, sơ chế nông
                    lâm sản, các dịch vụ thương mại liên quan.
                  </p>
                  <p>
                    Năm 1858, cuộc xâm lược của Pháp tại Việt Nam khởi đầu bằng
                    cuộc tấn công vào Đà Nẵng. Sau khi thành lập Liên bang Đông
                    Dương thì Pháp tách Đà Nẵng khỏi Quảng Nam với tính cách là
                    một nhượng địa (concession) và đổi tên thành Tourane. Đơn vị
                    hành chính này chịu sự cai quản trực tiếp của Toàn quyền
                    Đông Dương thay vì triều đình Huế – tuy thị trấn này năm
                    trong xứ Trung Kỳ.
                  </p>
                  <figure>
                    <img src={lichsudanang5} alt={lichsudanang5} />
                  </figure>
                  <p>
                    Đầu thế kỉ 20, Tourane được Pháp xây dựng trở thành một đô
                    thị theo kiểu Tây phương. Cơ sở hạ tầng xã hội, kỹ thuật sản
                    xuất được đầu tư. Các ngành nghề sản xuất và kinh doanh hình
                    thành và phát triển: sản xuất nông nghiệp, tiểu thủ công
                    nghiệp, chế biến hàng xuất khẩu, sữa chữa tàu thuyền, kinh
                    doanh dịch vụ. Cùng với Hải Phòng và Sài Gòn, Tourane trở
                    thành trung tâm thương mại quan trọng của cả nước.
                  </p>
                  <p>
                    Tháng 3 năm 1965, Mỹ đổ bộ vào Đà Nẵng và thiết lập ở đây
                    một căn cứ quân sự hỗn hợp lớn. Năm 1967, Đà Nẵng được chính
                    quyền Việt Nam Cộng hòa ấn định là thành phố trực thuộc
                    trung ương và xác định mục tiêu xây dựng Đà Nẵng thành trung
                    tâm chính trị, quân sự, văn hóa cho vùng I và II chiến
                    thuật.
                  </p>
                  <p>
                    Năm 1975, hòa bình lập lại, Đà Nẵng (là thành phố thuộc tỉnh
                    Quảng Nam – Đà Nẵng) bắt tay vào khôi phục những hậu quả
                    nặng nề của cuộc chiến tranh. Mặc dù còn lắm khó khăn nhưng
                    công cuộc phục hồi và phát triển thành phố đã đạt được nhiều
                    thành quả, nhất là thời kỳ đổi mới, sau 1986.
                  </p>
                  <figure>
                    <img src={lichsudanang3} alt={lichsudanang3} />
                    <figcaption>Ảnh: Thành phố Đà Nẵng 1965</figcaption>
                  </figure>
                  <p>
                    Người Pháp khi tấn công vào Việt Nam, lựa chọn đầu tiên của
                    họ là Đà Nẵng. Những người Mỹ đầu tiên đổ bộ vào Việt Nam
                    cũng lựa chọn nơi này. Điều ấy chắc chắn không phải là sự
                    ngẫu nhiên của lịch sử, mặc dù lịch sử ngoài những tất yếu,
                    luôn ẩn chứa những yếu tố ngẫu nhiên. Tầm quan trọng và sức
                    ảnh hưởng của Đà Nẵng do vị trí đầu tiên của mình đối với
                    miền Trung, đối với cả nước có thể được khẳng định
                  </p>
                  <p>
                    Nhìn trên bản đồ, Đà Nẵng rõ ràng là điểm cuối cùng của cả
                    một khu vực rộng lớn. Phía trước mặt là biển cả. Phía sau là
                    Tây Nguyên. Rộng hơn nữa là cả khu vực Đông Dương bao gồm cả
                    Lào, Campuchia, một phần Thái Lan và Myanma. Ngày nay, việc
                    hình thành hành lang kinh tế Đông – Tây liên quan đến cửa
                    khẩu Lao Bảo, việc mở rộng quốc lộ 24B đi qua vùng ba biên
                    Ngọc Hồi, và trong tương lai, nếu con đường trực chỉ hướng
                    Tây đi qua bến Giằng, vượt cửa khẩu Đăc Tà Ốc nối Đà Nẵng
                    với vùng cao nguyên Boloven màu mỡ được đầu tư xây dựng như
                    trong một phác thảo đầy hứa hẹn của giới nghiên cứu lưu ý
                    thời gian gần đây, thì rõ ràng, Đà Nẵng đã được đặt vào, và
                    sẽ phát huy hiệu quả vị trí quan trọng trong việc giao lưu
                    thương mại và văn hóa của cả khu vực rộng lớn vùng sông Mê
                    Kông.
                  </p>
                  <p>
                    Đà Nẵng nằm ở trung độ của Việt Nam, trên trục giao thông
                    huyết mạch Bắc Nam về cả đường bộ, đường sắt, đường biển và
                    đường hành không, là cửa ngõ giao thông quan trọng của cả
                    miền Trung và Tây Nguyên, là điểm cuối của hành lang kinh tế
                    Đông Tây đi qua các nước Myanma, Lào, Thái Lan, Việt Nam.
                  </p>
                  <p>
                    Từ năm 1997, khi trở thành thành phố trực thuộc trung ương,
                    Đà Nẵng đã có nhiều thay đổi theo hướng tích cực. Trong hơn
                    10 năm qua, Đà Nẵng đã liên tục thay đổi gương mặt của mình.
                    Chưa bao giờ trong quá trình phát triển, Đà Nẵng quyết liệt
                    như thế trong nhu cầu tự làm mới mình. Sự phát triển Đà Nẵng
                    vừa là nhu cầu tự thân, vừa là để đáp ứng yêu cầu của một
                    thành phố đầu tàu có sứ mệnh liên đới trách nhiệm đối với
                    miền Trung trong giai đoạn mới của đất nước.s
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      textTransform: "uppercase",
                      fontStyle: "italic",
                    }}
                  >
                    Nguồn tham thảo:
                  </p>
                  <ul
                    style={{
                      fontSize: "16px",
                      fontStyle: "italic",
                    }}
                  >
                    <li>
                      Cổng thông tin điện tử thành phố Đà Nẵng – danang.gov.vn
                    </li>
                    <li>Đà Nẵng toàn cảnh – Nhà Xuất bản Đà Nẵng, 3. 2010</li>
                    <li>
                      Lược sử Đà Nẵng 700 năm (1306 – 2006) – Nhà Xuất bản Đà
                      Nẵng – Tác giả Lê Duy Anh – Lê Hoàng Vinh
                    </li>
                    <li>Nguồn ảnh: Internet, photographer: Kim Liên</li>
                  </ul>
                </Col>
                <Col sm={2}></Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default History;
