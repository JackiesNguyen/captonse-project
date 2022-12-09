import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Banner from "../components/Banner";
import overviewImg from "../../../assets/images/about__overview__img.jpg";
import bandohanhchinh from "../../../assets/images/about__overview__img1.jpg";
import vitrithanhpho from "../../../assets/images/vi-tri-da-nang-o-dong-nam-a.jpg";
import bandovitri from "../../../assets/images/Ban-do-vi-tri-thanh-pho-Da-Nang-o-Viet-Nam.jpg";
import vitrichaua from "../../../assets/images/Vi-tri-thanh-pho-Da-Nang-trong-Chau-A-–-Thai-Binh-Duong.jpg";
import vitrikinhte from "../../../assets/images/Vi-tri-thanh-pho-Da-Nang-trong-hanh-lang-kinh-te-Dong-Tay-cua-ASEAN.jpg";
import vitrilancan from "../../../assets/images/Vi-tri-thanh-pho-Da-Nang-tai-Viet-Nam-va-cac-quoc-gia-lan-can.jpg";
import cacnutdothi from "../../../assets/images/Cac-nut-do-thi-trong-ban-kinh-300-km-quanh-Da-Nang.jpg";
import cocaugdp from "../../../assets/images/Co-cau-GDP-Da-Nang.jpg";
import caclinhvuckinhte from "../../../assets/images/Cac-linh-vuc-kinh-te-Da-Nang-va-cac-thanh-pho-noi-bat.jpg";
import bandokhonggiandulich from "../../../assets/images/ban-do-khong-gian-du-lich-danang-hien-tai.png";
import bandokhonggianvanhoa from "../../../assets/images/ban-do-khong-gian-VAN-HOA-danang-hien-tai.png";
import quyhoachdulich from "../../../assets/images/QUY-HOACH-DU-LICH-DINH-HUONG.png";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import "./Overview.scss";

const Overview = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="overview">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : (
        <div className="overview__container">
          <Banner bannerImg={overviewImg} />
          <Container>
            <div className="overview__content">
              <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                  <p>
                    Đà Nẵng là thành phố lớn thứ 4 ở Việt Nam sau Thành phố Hồ
                    Chí Minh, Hà Nội và Hải Phòng về đô thị hóa và phát triển
                    kinh tế – xã hội. Nằm trên bờ Biển Đông có cửa sông Hàn, Đà
                    Nẵng là một trong những thành phố cảng có vị trí chiến lược
                    của miền Trung Việt Nam và là một trong 5 thành phố trực
                    thuộc Trung ương.
                  </p>
                  <p>
                    Thành phố Đà Nẵng nằm ở <strong>miền Trung Việt Nam</strong>{" "}
                    với khoảng cách gần như chia đều giữa thủ đô{" "}
                    <strong>Hà Nội</strong> và thành phố{" "}
                    <strong>Hồ Chí Minh</strong>. Đà Nẵng còn là trung tâm của 3
                    di sản văn hóa thế giới là{" "}
                    <strong>
                      Cố đô Huế, phố cổ Hội An và thánh địa Mỹ Sơn
                    </strong>
                    . Bắc giáp tỉnh Thừa Thiên – Huế, Tây và Nam giáp tỉnh Quảng
                    Nam, Đông giáp Biển Đông. Đà Nẵng nằm ở trung độ đất nước,
                    trên trục giao thông Bắc – Nam về đường bộ, đường sắt, đường
                    biển, đường hàng không và điểm cuối của Hành lang Kinh tế
                    Đông Tây trải dài từ Việt Nam, Lào, Thái Lan và Burma
                    (Myanmar)
                  </p>
                  <h3>PHẦN 1: VỊ TRÍ ĐỊA LÝ VÀ QUAN HỆ VÙNG</h3>
                  <figure>
                    <img src={bandohanhchinh} alt={bandohanhchinh} />
                    <figcaption>Bản đồ Hành Chính Đà Nẵng</figcaption>
                  </figure>
                  <p>
                    Việt Nam nằm ở phía Đông bán đảo Đông Dương thuộc Đông Nam
                    Á. Giáp với Biển Đông ở phía Nam và phía Đông, giáp Trung
                    Quốc ở phía Bắc, giáp Lào và Campuchia ở phía Tây.
                  </p>
                  <p>
                    Đà Nẵng, nằm ở trung tâm địa lý của Việt Nam, là một trong
                    63 tỉnh, thành phố trực thuộc trung ương của Việt Nam và là
                    kinh tế xã hội lớn của miền Trung Việt Nam. Tính đến năm
                    2019, thành phố Đà Nẵng có tổng dân số 1.134.310 người, trở
                    thành thành phố lớn nhất miền Trung và lớn thứ 4 trong cả
                    nước.
                  </p>
                  <p>
                    Đà Nẵng giáp với tỉnh Thừa Thiên Huế ở phía Bắc và phía Nam
                    giáp với tỉnh Quảng Nam, tiếp đó là Quảng Ngãi. Cùng với
                    nhau, bốn tỉnh – thành phố này tạo thành vùng Đà Nẵng mở
                    rộng với tổng dân số khoảng 5,8 triệu người.
                  </p>
                  <p>
                    Thành phố Đà Nẵng trải dài từ 15°15′ đến 16°40′ Bắc và từ
                    107°17′ đến 108°20′ Đông, nằm ở trung độ của đất nước, trên
                    trục giao thông Bắc – Nam về đường bộ, đường sắt, đường biển
                    và đường hàng không. Đà Nẵng cách Thủ đô Hà Nội 764km về
                    phía Bắc, cách thành phố Hồ Chí Minh 964 km về phía Nam,
                    cách cố đô Huế 108 km về hướng Tây Bắc.
                  </p>
                  <p>
                    Ngoài ra, Đà Nẵng còn là trung điểm của 3 di sản văn hoá thế
                    giới nổi tiếng là Cố đô Huế, Phố cổ Hội An và Thánh địa Mỹ
                    Sơn. Trong phạm vi khu vực và quốc tế, Đà Nẵng là một trong
                    những cửa ngõ quan trọng ra biển của Tây Nguyên và các nước
                    Lào, Campuchia, Thái Lan, Myanma thông qua Hành lang kinh tế
                    Đông Tây (EWEC) với điểm kết thúc là Cảng Tiên Sa. Nằm trên
                    một trong những tuyến đường biển và đường hàng không quốc tế
                    trọng yếu, thành phố Đà Nẵng có một vị trí địa lý đặc biệt
                    thuận lợi cho việc phát triển sôi động và bền vững.
                  </p>
                  <div className="box">
                    <figure>
                      <img src={vitrithanhpho} alt={vitrithanhpho} />
                      <figcaption>
                        Hình I.1: Vị trí thành phố Đà Nẵng ở Đông Nam Á
                      </figcaption>
                    </figure>
                    <figure>
                      <img src={bandovitri} alt={bandovitri} />
                      <figcaption>
                        Hình I.2: Bản đồ vị trí thành phố Đà Nẵng ở Việt Nam
                      </figcaption>
                    </figure>
                  </div>
                  <p>
                    Với vị trí chiến lược của mình, Đà Nẵng là một Trung tâm
                    phong cách sống quốc tế và Trung tâm dịch vụ cho miền Trung
                    Việt Nam và khu vực Đông Dương.
                  </p>
                  <p>
                    Nằm trên bờ Biển Đông và là cửa ngõ của Hành lang Kinh tế
                    Đông-Tây (EWEC), Đà Nẵng có tiềm năng trở thành một phần
                    không thể thiếu trong mạng lưới chuỗi cung ứng và sản xuất
                    toàn cầu.
                  </p>
                  <p>
                    Đặc biệt, Đà Nẵng là cửa ngõ trung chuyển quan trọng cho Lào
                    (quốc gia không giáp biển) và là tuyến đường thay thế giúp
                    Thái Lan và Myanmar tiếp cận Biển Đông. Ngoài ra, Đà Nẵng có
                    các đường bay trực tiếp đến các trung tâm khu vực khác như
                    Thẩm Quyến, Băng Cốc, Hồng Kông và Singapore. Đây là cơ hội
                    để Đà Nẵng phát triển một cụm logistics và trung tâm thương
                    mại hiện đại phục vụ Đông Nam Á thông qua kết nối đường bộ,
                    đường hàng không và đường biển.
                  </p>
                  <p>
                    Trong phạm vi Việt Nam, Đà Nẵng đã được định hình là một nút
                    đô thị quan trọng tại miền Trung Việt Nam để bổ sung cho Hà
                    Nội và Thành phố Hồ Chí Minh.
                  </p>
                  <p>
                    Theo bề dày lịch sử, Đà Nẵng là trung tâm thương mại, công
                    nghiệp và giáo dục ở miền Trung Việt Nam.Với việc chuyển
                    dịch cơ cấu kinh tế, Đà Nẵng có tiềm năng củng cố vị thế là
                    trung tâm kinh tế, thương mại và dịch vụ của miền Trung Việt
                    Nam.
                  </p>
                  <div className="box">
                    <figure>
                      <img src={vitrichaua} alt={vitrichaua} />
                      <figcaption>
                        Hình I.3: Vị trí thành phố Đà Nẵng trong Châu Á – Thái
                        Bình Dương
                      </figcaption>
                    </figure>
                    <figure>
                      <img src={vitrikinhte} alt={vitrikinhte} />
                      <figcaption>
                        Hình I.4: Vị trí thành phố Đà Nẵng trong hành lang kinh
                        tế Đông Tây của ASEAN
                      </figcaption>
                    </figure>
                  </div>
                  <figure>
                    <img src={vitrilancan} alt={vitrilancan} />
                    <figcaption>
                      Hình I.5: Vị trí thành phố Đà Nẵng tại Việt Nam và các
                      quốc gia lân cận
                    </figcaption>
                  </figure>
                  <p>
                    Trong bán kính 300km từ Đà Nẵng có nhiều thành phố lớn có
                    thể đóng vai trò là thị trường và khu vực tiềm năng cho các
                    sản phẩm và dịch vụ của Đà Nẵng. Đồng thời, cũng là đối tác
                    chính cho thương mại và hợp tác giữa Đà Nẵng, miền Trung
                    Việt Nam và khu vực Đông Dương rộng lớn hơn. Các chi tiết
                    của các nút đô thị khu vực chính trong phạm vi 300km được
                    xác định trong Hình I.6.
                  </p>
                  <p>
                    Đáng chú ý, Pakse_thành phố lớn thứ hai của Lào là đối tác
                    có tiềm năng lớn nhất trong liên kết thương mại và du lịch.
                    Do đó, việc tận dụng khoảng cách gần với Pakse là rất quan
                    trọng trong việc mở rộng giao thương và kết nối Đà Nẵng với
                    Lào và khu vực Đông Dương rộng lớn hơn.
                  </p>
                  <p>
                    Trong miền Trung Việt Nam, một số thành phố lớn có tiềm năng
                    hợp tác với Đà Nẵng để trở thành khu vực dịch vụ và việc làm
                    rộng lớn bao gồm Huế, Hội An, Tam Kỳ và Quảng Ngãi. Đà Nẵng
                    cần định vị sự phát triển trong tương lai để khai thác và bổ
                    sung cho các trung tâm đô thị này thông qua đẩy mạnh hơn kết
                    nối, hợp tác để thúc đẩy tăng trưởng kinh tế trong khu vực.
                  </p>
                  <figure>
                    <img src={cacnutdothi} alt={cacnutdothi} />
                    <figcaption>
                      Hình I.6: Các nút đô thị trong bán kính 300 km quanh Đà
                      Nẵng
                    </figcaption>
                  </figure>
                  <h3>PHẦN 2: HIỆN TRẠNG KINH TẾ ĐÀ NẴNG</h3>
                  <h4>2.1 Tăng trưởng và nguồn tăng trưởng</h4>
                  <p>
                    Trong những năm qua, Đà Nẵng đã có bước phát triển mạnh mẽ,
                    tương đối toàn diện, trở thành một thành phố biển năng động,
                    sáng tạo, khai thác tốt các tiềm năng, thế mạnh. Kinh tế
                    thành phố duy trì ở mức tăng trưởng khá cao. Tổng sản phẩm
                    xã hội trên địa bàn (GRDP, giá so sánh 2010) giai đoạn
                    2010-2020 ước tăng bình quân 7,75%/năm (chưa ước tính hậu
                    quả đại dịch Covid-19), năm 2019 đạt 69.197 tỷ đồng, gấp
                    khoảng 2 lần so với năm 2010; GRDP bình quân đầu người năm
                    2020 ước đạt 103 triệu đồng, gấp khoảng 2,6 lần năm 2010. Cơ
                    cấu kinh tế chuyển dịch theo hướng tích cực và phù hợp hơn,
                    ước tính khu vực dịch vụ chiếm 64,56%; khu vực công
                    nghiệp-xây dựng chiếm 22,32% (trong đó công nghiệp là
                    16,57%); khu vực thủy sản – nông – lâm chiếm 1,72%; thuế sản
                    phẩm trừ trợ cấp sản phẩm chiếm 11,39% GRDP. Đà Nẵng đã bước
                    đầu hình thành những ngành kinh tế mũi nhọn như du lịch,
                    dịch vụ thương mại, vận tải, logistics, tài chính, ngân
                    hàng, công nghiệp công nghệ cao, công nghệ thông tin, nông
                    nghiệp ứng dụng công nghệ cao. Hạ tầng kinh tế – xã hội,
                    diện mạo đô thị có nhiều thay đổi tích cực và tương đối hiện
                    đại.
                  </p>
                  <p>
                    Tuy nhiên, quy mô kinh tế trên địa bàn Đà Nẵng còn khá khiêm
                    tốn trong cơ cấu chung của nền kinh tế Việt Nam; tuy dẫn đầu
                    vùng KTTĐMT, nhưng khoảng cách không lớn. GRDP của thành phố
                    Đà Nẵng hiện chiếm 1,4% so với GDP cả nước, tuy xếp đầu ở
                    vùng KTTĐMT nhưng chỉ xếp thứ 04 khi so sánh trong quy mô
                    GRDP của 05 thành phố trực thuộc trung ương.
                  </p>
                  <p>
                    Đà Nẵng không phải nền kinh tế có quy mô lớn về vốn, lao
                    động và độ mở nền kinh tế nhưng có ưu thế về số lượng doanh
                    nghiệp. Vốn đầu tư, lao động và độ mở của Đà Nẵng chỉ chiếm
                    có tỷ lệ 1,7%, 0,99%, 0,85% của Việt Nam, nhưng lại chiếm vị
                    trí đầu của vùng KTTĐMT.
                  </p>
                  <p>
                    Đóng góp của các yếu tố vốn chiếm 50,4% trong cơ cấu tăng
                    trưởng kinh tế giai đoạn 2016-2020, trong khi đó đóng góp
                    của lao động là 21% và TFP là 28,6%. Tỷ trọng đóng góp của
                    TFP đã có cải thiện đáng kể so với giai đoạn 2011-2015, giai
                    đoạn 2011-2015, cơ cấu tăng trưởng kinh tế tương ứng là
                    59,5%; 25,4%; và 15,1%.
                  </p>
                  <p>
                    Trong tổng vốn thực hiện, vốn đầu tư từ nguồn NSNN còn thấp,
                    bình quân 5 năm 2016-2020 ước khoảng 12,8% trong tổng vốn
                    đầu tư thực hiện toàn xã hội.
                  </p>
                  <p>
                    Giai đoạn 2016-2020, tốc độ tăng bình quân của vốn đầu tư
                    công tích luỹ là 5,6%, đóng góp 0,46 điểm phần trăm vào tốc
                    độ tăng GRDP.
                  </p>
                  <p>
                    Bình quân mỗi năm vốn đầu tư thực hiện từ nguồn NSNN tăng
                    thêm 1% thì đóng góp khoảng 0,08 điểm phần trăm vào tốc độ
                    tăng GRDP toàn thành phố.
                  </p>

                  <figure>
                    <img src={cocaugdp} alt={cocaugdp} />
                    <figcaption>Cơ Cấu GDP Đà Nẵng</figcaption>
                  </figure>
                  <h3>2.2 Cơ cấu kinh tế và lĩnh vực</h3>
                  <p>
                    Cơ cấu kinh tế thành phố chuyển dịch theo hướng “Dịch vụ –
                    công nghiệp – thủy sản, nông, lâm”, năm 2020 khu vực dịch vụ
                    ước đạt 64,22%; khu vực công nghiệp – xây dựng ước đạt
                    22,78% (trong đó công nghiệp khoảng 16,6%); khu vực nông
                    nghiệp ước đạt 1,93%; thuế sản phẩm trừ trợ cấp sản phẩm ước
                    đạt 11,07%. Cơ cấu các thành phần kinh tế chuyển dịch theo
                    hướng phát triển nền kinh tế hàng hóa nhiều thành phần, vận
                    động theo cơ chế thị trường có sự quản lý của nhà nước, các
                    loại hình doanh nghiệp tư nhân và có vốn đầu tư nước ngoài
                    giữ vai trò quan trọng trong nền kinh tế thành phố; năm
                    2010, trong tổng GRDP thành phố (giá hiện hành), kinh tế nhà
                    nước chiếm tỷ trọng 31,89%, kinh tế ngoài nhà nước chiếm
                    51,46% và kinh tế có vốn đầu tư nước ngoài chiếm 6,14%; đến
                    năm 2019, kinh tế nhà nước ước chiếm 22,76%, kinh tế ngoài
                    nhà nước ước chiếm 55,32% và kinh tế có vốn đầu tư nước
                    ngoài ước chiếm 10,56%.
                  </p>
                  <p>
                    Các lĩnh vực du lịch, thương mại, các ngành dịch vụ chất
                    lượng cao, có lợi thế cạnh tranh, nhất là vận tải,
                    logistics, tài chính, ngân hàng, giáo dục – đào tạo, y tế
                    phát triển theo chiều sâu, có vị trí ngày càng quan trọng.
                    Trong đó:
                  </p>
                  <ul>
                    <li>
                      Dịch vụ du lịch phát triển vượt bậc, trở thành ngành kinh
                      tế mũi nhọn và quan trọng, bước đầu đưa Đà Nẵng trở thành
                      điểm đến du lịch lớn của khu vực và cả nước, có khả năng
                      cạnh tranh quốc tế và đóng góp tích cực vào phát triển
                      kinh tế – xã hội của thành phố.
                    </li>
                    <li>
                      Dịch vụ thương mại phát triển nhanh, dần định hình được vị
                      trí, vai trò trung tâm mua sắm, phân phối, trung chuyển
                      hàng hóa và dịch vụ khu vực miền Trung.
                    </li>
                    <li>
                      Các ngành dịch vụ chất lượng cao, có lợi thế cạnh tranh,
                      nhất là thông tin và truyền thông, vận tải, logistics, tài
                      chính, ngân hàng, giáo dục-đào tạo, y tế được tập trung
                      đầu tư phát triển, từng bước tạo lập vai trò trung tâm của
                      khu vực miền Trung – Tây Nguyên.
                    </li>
                  </ul>
                  <p>
                    Các ngành công nghiệp, công nghiệp công nghệ thông tin và
                    công nghiệp công nghệ cao được chú trọng phát triển. Kinh tế
                    biển và cảng biển có bước phát triển, hạ tầng kỹ thuật phục
                    vụ kinh tế biển được đầu tư xây dựng và khai thác hiệu quả.
                    Lĩnh vực nông nghiệp phát triển khá ổn định theo hướng nâng
                    cao giá trị gia tăng, tập trung phát triển các sản phẩm hữu
                    cơ phục vụ du lịch và đô thị, chú trọng nông nghiệp công
                    nghệ cao; hoàn thành mục tiêu xây dựng nông thôn mới.
                  </p>
                  <p>
                    Nhìn chung đóng góp chính cho sự tăng trưởng của kinh tế Đà
                    Nẵng là lĩnh vực sản xuất, thương mại và kinh doanh dịch vụ
                    như được trình bày dưới đây:
                  </p>
                  <figure>
                    <img src={caclinhvuckinhte} alt={caclinhvuckinhte} />
                    <figcaption>
                      Các Lĩnh Vực Kinh Tế Đà Nẵng Và Các Thành Phố Nổi Bật.
                      Nguồn: SJC
                    </figcaption>
                  </figure>
                  <p>
                    So sánh kinh tế Đà Nẵng với TP. Hồ Chí Minh có thể nhận thấy
                    GRDP bình quân đầu người của Đà Nẵng thấp hơn 2 lần trong
                    khi mức độ tăng trưởng kinh tế tương tự nhau. Nền kinh tế Đà
                    Nẵng bị chi phối bởi sản xuất với tỷ lệ cao là 26%, nhưng
                    một khi nền kinh tế phát triển hơn thì nguồn đóng góp chính
                    cho GRDP cũng sẽ chuyển đổi sang ngành kinh tế bền vững hơn,
                    như Auckland (New Zealand) hoặc Singapore, giảm lĩnh vực sản
                    xuất và tăng công nghệ thông tin, dịch vụ kinh doanh R&D và
                    Thương mại. Sự chuyển đổi này sẽ được hậu thuẫn bởi các phát
                    triển hiện tại là Khu Công nghệ cao và các Khu Công viên
                    phần mềm.
                  </p>
                  <h3>PHẦN 3: DU LỊCH ĐÀ NẴNG</h3>
                  <figure>
                    <img
                      src={bandokhonggiandulich}
                      alt={bandokhonggiandulich}
                    />
                    <figcaption>
                      Bản đồ không gian du lịch Đà Nẵng hiện tại
                    </figcaption>
                  </figure>
                  <p>
                    Thời gian qua, du lịch Đà Nẵng có sự phát triển nhanh chóng
                    với sản phẩm đặc trưng, môi trường an toàn, người dân thân
                    thiện, mến khách, tạo dựng được thương hiệu để cạnh tranh
                    quốc tế, làm động lực lan tỏa thúc đẩy nhiều ngành khác cùng
                    phát triển.
                  </p>
                  <p>
                    Tốc độ tăng trưởng bình quân tổng lượng khách tham quan, du
                    lịch Đà Nẵng trong giai đoạn 2010 – 2019 đạt 20,66%/năm,
                    trong đó tốc độ tăng trưởng bình quân khách quốc tế đạt
                    27,34%/năm, khách nội địa đạt 17,68%/năm. Tốc độ tăng trưởng
                    bình quân tổng thu du lịch giai đoạn này đạt 29,11%/năm.*Chi
                    tiêu bình quân khách năm 2019 đạt hơn 3,5 triệu đồng, tăng
                    hơn 2,8 triệu đồng so với năm 2010. Ngày lưu trú năm 2019
                    đạt 2,68 ngày, tăng 0,61 ngày so với năm 2010. Theo kết quả
                    điều tra khảo sát du lịch năm 2019, tỷ trọng đóng góp trực
                    tiếp của ngành du lịch trong GRDP thành phố năm 2019 đạt
                    13,6%, gián tiếp đạt 17,7%. Xét về thị phần, lượng khách du
                    lịch phổ thông tại Đà Nẵng vẫn cao hơn nhiều so với khách có
                    khả năng chi trả cao.
                  </p>
                  <p>
                    Tốc độ tăng trưởng bình quân cơ sở lưu trú du lịch tại Đà
                    Nẵng giai đoạn 2010 – 2019 đạt 19,2%/năm. Tổng số cơ sở lưu
                    trú du lịch năm 2019 là 943 cơ sở với 40.074 phòng, tăng 762
                    cơ sở với 33.985 phòng so với năm 2010, trong đó, cơ sở lưu
                    trú 4-5 sao và tương đương là 89 cơ sở với 16.451 phòng,
                    tăng 83 cơ sở với 15.317 phòng so với năm 2010.
                  </p>
                  <p>
                    Ngành du lịch Đà Nẵng tạo được thương hiệu du lịch trong
                    nước và quốc tế, được bình chọn, đánh giá với danh hiệu ấn
                    tượng.
                  </p>
                  <ul>
                    <li>
                      Việc đầu tư phát triển du lịch đã cơ bản được thực hiện,
                      đảm bảo đúng định hướng trong Điều chỉnh Quy hoạch chung
                      thành phố Đà Nẵng được Thủ tướng Chính phủ phê duyệt năm
                      2013, thu hút nhiều nguồn đầu tư vào các dự án du lịch khu
                      vực, mang lại lợi ích kinh tế, nhưng tiềm năng và tài
                      nguyên du lịch chưa được khai thác và phát huy đầy đủ.
                    </li>
                    <li>
                      Hệ thống cơ sở hạ tầng phục vụ du lịch được đầu tư tương
                      đối hiện đại, đồng bộ, tuy nhiên, trước sự tăng trưởng
                      nóng của ngành du lịch, những năm gần đây đã bắt đầu xuất
                      hiện dấu hiệu quá tải như tại Cảng hàng không quốc tế Đà
                      Nẵng, ùn tắc giao thông tại một số tuyến đường trung tâm
                      thành phố, thiếu bãi đỗ xe, hạ tầng thu gom và xử lý nước
                      thải cũng đang chịu áp lực lớn, đặc biệt là khu vực ven
                      biển phía Đông… Hạ tầng giao thông phục vụ du lịch đường
                      thủy nội địa còn chưa hoàn thiện, chưa có cảng biển chuyên
                      dụng phục vụ du lịch.
                    </li>
                    <li>
                      Hệ thống cơ sở lưu trú du lịch được đầu tư, nâng cấp về
                      chất lượng, quy mô, đa dạng về loại hình từ bình dân đến
                      cao cấp với hàng loạt thương hiệu nổi tiếng thế giới như:
                      Hilton, Accor, Marriott, Sheraton… Tuy nhiên, việc phát
                      triển nhanh về số lượng phòng đã dẫn đến tình trạng “cung”
                      vượt “cầu”. Hiện nay, tại thành phố có một số khu điểm
                      tham quan, du lịch đặc sắc như SunWorld Bà Nà Hills,
                      SunWorld Đà Nẵng Wonders, Khu suối khoáng nóng Núi Thần
                      Tài, Khu du lịch Hòa Phú Thành, Khu di tích quốc gia đặc
                      biệt danh thắng Ngũ Hành Sơn, Bảo tàng Chăm, Bảo tàng Đà
                      Nẵng…, tuy vậy, phần lớn các cơ sở tham quan, vui chơi,
                      giải trí, mua sắm vẫn nằm ở quy mô nhỏ, thiếu sản phẩm
                      chất lượng cao, sản phẩm du lịch mới chậm hình thành để có
                      thể tạo sức hấp dẫn, cạnh tranh với các điểm đến khác.
                    </li>
                    <li>
                      Đà Nẵng còn nhiều tiềm năng để phát triển các sản phẩm du
                      lịch mới, giúp nâng khả năng chi tiêu và thời gian lưu
                      trú, hướng đến dòng khách cao cấp như du lịch sinh thái,
                      cộng đồng, du lịch thủy nội địa, du lịch đô thị, M.I.C.E,
                      chăm sóc sức khỏe, nghỉ dưỡng cao cấp… Đặc biệt, kinh tế
                      ban đêm là lĩnh vực có thể mang lại nguồn thu không nhỏ,
                      nhất là với các điểm đến du lịch. Vì vậy, cần thiết phải
                      quy hoạch các khu tổ hợp giải trí ban đêm riêng biệt, hạn
                      chế ảnh hưởng đến sinh hoạt của người dân, đồng thời ưu
                      tiên dành quỹ đất cho các dự án tạo sản phẩm du lịch quy
                      mô lớn, chất lượng cao.
                    </li>
                  </ul>
                  <h3>PHẦN 4: VĂN HÓA</h3>
                  <figure>
                    <img
                      src={bandokhonggianvanhoa}
                      alt={bandokhonggianvanhoa}
                    />
                    <figcaption>
                      Mạng lưới cơ sở thể thao, tôn giáo, văn hóa hiện trạng
                    </figcaption>
                  </figure>
                  <h4>4.1 Bảo tồn và phát huy di sản văn hóa</h4>
                  <p>
                    Đến nay trên địa bàn thành phố có 02 di tích cấp quốc gia
                    đặc biệt, 17 di tích cấp quốc gia, 55 di tích cấp thành phố
                    và 40 di tích nằm trong danh mục kiểm kê.
                  </p>
                  <p>
                    Nghề đá mỹ nghệ Non Nước, nghệ thuật Tuồng xứ Quảng ở Đà
                    Nẵng, lễ hội Cầu ngư đều đã được đưa vào danh mục di sản văn
                    hóa phi vật thể quốc gia. Các lễ hội đình làng, lễ hội cầu
                    ngư truyền thống… tại các quận, huyện đều được duy trì và tổ
                    chức theo định kỳ hàng năm.
                  </p>
                  <p>
                    Hiện nay, thành phố cũng đã đầu tư xây dựng nhiều bảo tàng
                    lớn để phục vụ nhu cầu văn hóa cho nhân dân như: Bảo tàng
                    Chăm, Bảo tàng Đà Nẵng, Bảo tàng Mỹ thuật,…
                  </p>
                  <h4>4.2 Các hoạt động nghệ thuật chuyên nghiệp</h4>
                  <p>
                    Ở Đà Nẵng hiện tồn tại 03 cơ sở hoạt động nghệ thuật chuyên
                    nghiệp là nhà hát Tuồng Nguyễn Hiển Dĩnh, nhà hát Trưng
                    Vương, Cung văn hóa thiếu nhi Đà Nẵng. Trong đó nhà hát
                    Trưng Vương hiện nay đã trở thành đơn vị tổ chức sự kiện có
                    uy tín và mang tính chuyên nghiệp cao trên địa bàn thành
                    phố, được nhiều cơ quan, đơn vị tin tưởng, phối hợp tổ chức
                    các sự kiện văn hóa, liên hoan nghệ thuật ca, múa, nhạc cấp
                    quốc gia và quốc tế.
                  </p>
                  <h4>4.3 Thư viện</h4>
                  <p>
                    Thư viện Khoa học tổng hợp thành phố là cơ sở được đầu tư
                    hiện đại bao gồm 11 kho sách và một nguồn dữ liệu online độc
                    lập với 25 máy được kết nối với máy chủ và hệ thống truy cập
                    băng thông rộng với khoảng 248.558 tài liệu/82.000 tên. Hệ
                    thống phòng đọc của thư viện cho phép đón tiếp và phục vụ
                    2.500 độc giả. Đối với các thư viện cấp quận, huyện không có
                    trụ sở riêng mà được xây dựng hoặc bố trí một số phòng trong
                    Trung tâm văn hóa thể thao hoặc phòng Văn hóa thể thao quận,
                    huyện, do vậy, diện tích các thư viện còn nhỏ hẹp.
                  </p>
                  <h3>
                    PHẦN 5: DỰ BÁO PHÁT TRIỂN KHU VỰC DU LỊCH VÀ DU LỊCH ĐẾN NĂM
                    2030, TẦM NHÌN ĐẾN NĂM 2045
                  </h3>
                  <h4>5.1 Khu vực dịch vụ</h4>
                  <p>
                    Tập trung phát triển các ngành dịch vụ chất lượng cao, nhất
                    là du lịch, thương mại, dịch vụ logistics, tài chính – ngân
                    hàng, giáo dục – đào tạo, y tế và chăm sóc sức khỏe chất
                    lượng cao, có khả năng cạnh tranh và kết nối cao với các
                    trung tâm dịch vụ quốc tế trong khu vực ASEAN và thế giới.
                  </p>
                  <h4>5.2 Phát triển du lịch</h4>
                  <p>
                    – Phát triển du lịch và dịch vụ chất lượng cao gắn với bất
                    động sản nghỉ dưỡng; Xây dựng Đà Nẵng thành điểm đến du
                    lịch, dịch vụ hàng đầu, tầm khu vực. Tạo sự khác biệt về
                    tính sáng tạo, hấp dẫn và chất lượng sản phẩm dịch vụ phục
                    vụ cho điểm đến du lịch Đà Nẵng. Phát triển du lịch gắn với
                    hình ảnh “thành phố đáng sống”, năng động, văn minh và thành
                    phố lễ hội, sự kiện, đồng thời bảo tồn và khai thác các giá
                    trị văn hóa lịch sử, gìn giữ cảnh quan, bảo vệ môi trường
                    sinh thái. Tăng cường đăng cai tổ chức các sự kiện mang tầm
                    quốc tế và khu vực, đưa Đà Nẵng trở thành thành phố sự kiện,
                    trung tâm hội nghị quốc tế. Phát huy vai trò hạt nhân và cửa
                    ngõ du lịch Vùng kinh tế trọng điểm miền Trung. + Các nhóm
                    sản phẩm du lịch chính: Du lịch biển, nghỉ dưỡng cao cấp; du
                    lịch mua sắm, hội nghị hội thảo (MICE); du lịch văn hoá,
                    lịch sử, tâm linh, sinh thái, làng quê, làng nghề và du lịch
                    đô thị gắn với thành phố trung tâm của cả khu vực; đa dạng
                    hóa các sản phẩm bổ trợ gồm: Du lịch ẩm thực, du lịch chữa
                    bệnh – làm đẹp, du lịch cưới. + Tập trung đầu tư 04 nhóm du
                    lịch trọng tâm: Tập trung đầu tư các nhóm du lịch trọng tâm:
                    Phát triển Bán đảo Sơn Trà trở thành khu du lịch quốc gia
                    theo hướng du lịch sinh thái cao cấp, gắn với bảo tồn thiên
                    nhiên, đa dạng sinh học; Vịnh Đà Nẵng thành “đô thị biển”
                    mang tính chất độc đáo, tạo nên điểm nhấn về kiến trúc và
                    dịch vụ; Trung tâm thành phố với khu bảo tàng sống và trung
                    tâm đô thị mới, CBT (An Đồn); các trung tâm thương mại quốc
                    tế, khu phi thuế quan và outlet, phố đi bộ kết hợp mua sắm
                    và nhà hàng truyền thống; và các dự án vui chơi, giải trí,
                    điểm du lịch sinh thái cộng đồng và liên kết vùng, đặc biệt
                    chú trọng các dịch vụ du lịch về đêm. – Định hướng tăng số
                    lượng khách quốc tế thuộc phân khúc chất lượng cao, có khả
                    năng chi trả cao, hạn chế phụ thuộc vào một số thị trường,
                    thu hút khách du lịch từ các nước phát triển: Tăng cường
                    khai thác và mở rộng các thị trường quốc tế gồm Nga, Ấn Độ,
                    Úc, Bắc Mỹ, Tây Âu, Bắc Âu, Trung Đông… ; tiếp tục khai thác
                    thị trường Hàn Quốc, Trung Quốc, Nhật Bản, Hồng Kông, Đài
                    Loan, Đông Nam Á. – Đẩy mạnh hợp tác liên kết phát triển du
                    lịch giữa ba địa phương Đà Nẵng -Quảng Nam – Thừa Thiên Huế,
                    giữa vùng du lịch trọng điểm miền Trung – Tây Nguyên, giữa
                    các địa phương trong nước, khu vực và quốc tế.
                  </p>
                  <h3>
                    PHẦN 6: QUY HOẠCH DU LỊCH ĐÀ NẴNG ĐẾN NĂM 2030, TẦM NHÌN ĐẾN
                    NĂM 2045
                  </h3>
                  <figure>
                    <img src={quyhoachdulich} alt={quyhoachdulich} />
                    <figcaption>Quy hoạch Du lịch định hướng (2030)</figcaption>
                  </figure>
                  <p>
                    Quy hoạch chung định hướng phát triển các dịch vụ Nhà Hàng –
                    Khách Sạn cùng với các điểm tham quan đa dạng sẽ được định
                    hướng trên khắp Đà Nẵng. Đến năm 2030, đất du lịch có 2.388
                    ha phục vụ cho các hạng mục sau:
                  </p>
                  <h5>DU LỊCH TỰ NHIÊN</h5>
                  <p>
                    Để đảm bảo du lịch Đà Nẵng giữ được sự bền vững, du lịch tự
                    nhiên, du lịch sinh thái có thể được khuyến khích như một
                    phần trong nỗ lực bảo tồn môi trường và các hệ sinh thái độc
                    đáo của Đà Nẵng. Khai thác du lịch tự nhiên sẽ tập trung vào
                    việc tối thiểu hóa tác động lên môi trường tự nhiên, cùng
                    với đó tạo nên những điểm đến hấp dẫn dựa trên cảnh sắc
                    thiên nhiên phong phú của thành phố.
                  </p>
                  <span>Du lịch sông nước</span>
                  <p>
                    Như đã đề cập, Đà Nẵng có sự đa dạng về hệ thống sông biển,
                    là bản sắc của Thành phố và có thể biến thành các điểm đến
                    du lịch tự nhiên hấp dẫn. Sự phát triển của du lịch sông
                    nước cần ưu tiên các sản phẩm du lịch sông nước chất lượng
                    cao và bền vững. Các nút du lịch sông nước định hướng gồm:
                    Sông Hàn nằm ở trung tâm thành phố Đà Nẵng, là hình ảnh mang
                    tính biểu tượng của Đà Nẵng. Một mạng lưới tích hợp các điểm
                    tham quan dọc theo sông Hàn, kết nối với tất cả các nhánh
                    sông ở Đà Nẵng, di chuyển bằng tàu thuyền, taxi du lịch
                    đường sông, tạo điều kiện cho khách du lịch thưởng ngoạn vẻ
                    đẹp sông nước và hoạt động sống đặc sắc hai bên bờ. Thêm vào
                    đó, để tận dụng hơn nữa các đặc tính sông nước dọc theo vịnh
                    Đà Nẵng, bờ biển phía Đông và hệ thống sông Hàn, hai hành
                    lang phát triển du lịch sông nước được định hướng để kết nối
                    các điểm đến du lịch quan trọng, bao gồm khu ven vịnh Đà
                    Nẵng, các bãi biển bờ Đông, các cơ sở nghỉ dưỡng, bến tàu du
                    lịch Tiên Sa, tuyến đường mua sắm chính, bán đảo Sơn Trà và
                    hòn Sơn Trà con và các di sản văn hóa khác của thành phố. Để
                    đảm bảo du lịch Đà Nẵng giữ được sự bền vững, du lịch sinh
                    thái sông nước được khuyến khích như một phần trong nỗ lực
                    bảo tồn môi trường và các hệ sinh thái nhạy cảm của Đà Nẵng.
                    Các cơ sở du lịch sẽ tập trung vào việc tối thiểu hóa tác
                    động lên môi trường tự nhiên, trong khi cung cấp điểm đến
                    hấp dẫn dựa trên tài nguyên thiên nhiên.
                  </p>
                  <span>Du lịch sinh thái sườn đồi</span>
                  <p>
                    Với địa hình độc đáo và đa dạng sinh học phong phú ở vùng
                    đồi núi phía Tây Đà Nẵng, phân khu sườn đồi và phân khu sinh
                    thái phía Tây có thể được khai thác nhằm tối đa hóa tiềm
                    năng của cảnh quan thiên nhiên và đặc điểm danh lam thắng
                    cảnh. Du lịch sườn đồi có thể phát triển chủ yếu tại:
                  </p>
                  <span>Bà Nà Hills</span>
                  <p>
                    Nhằm khai thác đặc trưng khí hậu và cảnh quan thiên nhiên
                    của Bà Nà Hills để phát triển thành tổ hợp khu nghỉ dưỡng và
                    giải trí cao cấp theo chủ đề, thư giãn và nghỉ ngơi.
                  </p>
                  <span>Khu vực rừng núi phía Tây</span>
                  <p>
                    Các hoạt động du lịch sinh thái, mạo hiểm gắn với thiên
                    nhiên, đời sống hoang dã và dã ngoại (Hoà Phú, Hòa Bắc và
                    Hòa Hiệp Bắc) có thể được khuyến khích ở khu vực núi phía
                    Tây Đà Nẵng. Ngoài ra, dọc tuyến đường QL14G và đường Bà Nà,
                    Suối Mơ, các địa điểm nằm dọc theo các nhánh sông, như dọc
                    sông Cu Đê, sông Luông Đông, hồ Đồng Nghệ, cũng có thể tạo
                    cơ hội cho các hoạt động du lịch liên quan đến sông nước
                    được thiết lập trong khu vực rừng núi phía Tây.
                  </p>
                  <span>Khu tổ hợp nghỉ dưỡng cao cấp làng Vân</span>
                  <p>
                    Với cả hai đặc điểm bờ biển và sườn đồi, Khu tổ hợp nghỉ
                    dưỡng cao cấp Làng Vân là nơi duy nhất cung cấp các hoạt
                    động nghỉ dưỡng, bãi biển và các hoạt động dựa trên thiên
                    nhiên và văn hóa tại phía nam đèo Hải Vân.
                  </p>
                  <span>Dãy núi Phước Tường – An Ngãi</span>
                  <p>
                    Dãy núi Phước Tường nằm trung tâm của Đà Nẵng tạo ra cơ hội
                    độc đáo để đưa các không gian thiên nhiên đến gần với thành
                    phố. Khu vực này có thể tổ chức các điểm ngắm cảnh của thành
                    phố, hoạt động dã ngoại và nghỉ dưỡng ngay trong thành phố.
                  </p>
                  <h5>DU LỊCH VĂN HÓA TÂM LINH</h5>
                  <p>
                    Hiện nay, Đà Nẵng có các địa điểm tôn giáo đặc biệt gắn với
                    cảnh quan thiên nhiên của thành phố. Đây là cơ hội để liên
                    kết các khu nghỉ dưỡng chất lượng cao, phong cảnh núi – biển
                    với các điểm đến tâm linh. Du lịch sinh thái tâm linh tập
                    trung tại:
                  </p>
                  <span>Bán đảo Sơn Trà</span>
                  <p>
                    Cùng với chùa Linh Ứng, các thắng cảnh thiên nhiên, hệ sinh
                    thái biển phong phú, các hoạt động hoang dã và mạo hiểm,
                    Công viên chuyên đề phía Nam bán đảo Sơn Trà mới và các cơ
                    sở nghỉ dưỡng chất lượng cao, bán đảo Sơn Trà được định
                    hướng phát triển để trở thành một khu du lịch quốc gia đẳng
                    cấp quốc tế.
                  </p>
                  <span>Danh thắng Ngũ Hành Sơn</span>
                  <p>
                    Danh thắng Ngũ Hành Sơn có thể được phát triển trở thành
                    điểm đến tâm linh và thiên nhiên mang tính biểu tượng tại Đà
                    Nẵng. Danh thắng Ngũ Hành Sơn bao gồm các ngọn nút đá cẩm
                    thạch, đá vôi và các hang động mang tính chất tâm linh trở
                    thành địa điểm dành cho tham quan và khám phá. Thêm vào đó,
                    khu vực xung quanh còn có làng nghề đá mỹ nghệ Non Nước có
                    tiềm năng để phát triển thành Công viên văn hóa tâm linh.
                  </p>
                  <span>Du lịch đô thị</span>
                  <p>
                    Ngoài các dịch vụ du lịch tự nhiên, Đà Nẵng là một điểm đến
                    sôi động với nhiều hoạt động trải nghiệm du lịch ngay trong
                    lòng thành phố. Hoạt động du lịch đô thị bao gồm:
                  </p>
                  <h5>DU LỊCH VĂN HÓA</h5>
                  <span>Khu văn hóa</span>
                  <p>
                    Các di sản và tài sản văn hóa của Đà Nẵng đa dạng, nằm rải
                    rác ở khắp các khu vực đô thị của Đà Nẵng. Trong đó bao gồm
                    bảo tàng Chăm, Thành Điện Hải, bảo tàng Đà Nẵng, bảo tàng Mỹ
                    thuật, các chợ truyền thống, các địa điểm tôn giáo, nhà hát
                    tuồng Nguyễn Hiển Dĩnh, các sự kiện và lễ hội…Những cơ sở
                    này cung cấp cho du khách cơ hội trải nghiệm và tìm hiểu về
                    văn hóa độc đáo của Đà Nẵng. Khu vực xung quanh trung tâm
                    hành chính thành phố hiện nay được định hướng trở thành
                    Không gian văn hóa bao gồm Quảng trường trung tâm, Thành
                    Điện Hải, Bảo tàng Đà Nẵng, Thư viện tổng hợp nhằm tận dụng
                    di sản và kiến trúc độc đáo trong khu vực.
                  </p>
                  <h5>DU LỊCH TÀU BIỂN</h5>
                  <span>Bến tàu du lịch Tiên Sa</span>
                  <p>
                    Với sự xây dựng cảng mới Liên Chiểu, Cảng Tiên Sa sẽ được
                    chuyển đổi thành bến tàu du lịch biển. Điều này cho phép Đà
                    phát triển loại hình du lịch tàu biển và cảng Tiên Sa trở
                    thành cảng du lịch tàu biển hàng đầu Việt Nam và Đông Nam Á
                  </p>
                  <h5>DU LỊCH HỘI THẢO VÀ SỰ KIỆN (MICE)</h5>
                  <p>
                    Các hoạt động du lịch MICE được phát triển khắp địa bàn
                    thành phố, trong đó tập trung dọc bờ biển phía Đông và ven
                    sông Hàn, đặc biệt sẽ phát triển một tuyến phố tài chính
                    trên đường Võ Văn Kiệt gắn với dự án Khu phức hợp trung tâm
                    tài chính thương mại dịch vui chơi trí tổng hợp và Casino.
                    Cùng với các trung tâm hội nghị hiện tại, những phát triển
                    này cung cấp tiềm năng cho du lịch hội thảo, cũng như các sự
                    kiện và lễ hội lớn khác.
                  </p>
                  <h5>DU LỊCH THỂ THAO</h5>
                  <span>Các Trung tâm thể dục thể thao</span>
                  <p>
                    Các trung tâm văn hóa thể thao lớn bao gồm Làng văn hóa thể
                    thao Tuyên Sơn, Khu liên hợp thể dục thể thao Hòa Xuân, các
                    trung tâm thể thao thành tích cao,…
                  </p>
                  <span>Công viên châu Á</span>
                  <p>
                    Khu thể thao hiện tại và khu vực công viên chuyên đề Công
                    viên châu Á có thể được phát triển hơn nữa trở thành một
                    không gian sự kiện trong khu vực dành cho thể thao và các sự
                    kiện văn hóa. Đặc biệt là địa điểm tổ chức bắn pháo hoa quốc
                    tế hằng năm.
                  </p>
                  <span>Các sân Golf</span>
                  <p>
                    Các dự án golf đã được phê duyệt được đưa vào đồ án quy
                    hoạch 2030. Những dự án này cho phép du khách tham gia vào
                    các hoạt động chơi golf và nghỉ dưỡng (BRG, Bà Nà Suối Mơ,
                    Hòa Phong – Hòa Phú,…)
                  </p>
                  <h5>DU LỊCH Y TẾ</h5>
                  <span>Trung tâm Y Tế và Phục hồi Chức Năng</span>
                  <p>
                    Là một phần của mục tiêu trở thành Trung Tâm Y Tế chuyên sâu
                    của Việt Nam, Đà Nẵng sẽ tập trung phát triển các dịch vụ y
                    tế chất lượng cao gồm các bệnh viện quốc tế, các bệnh viện
                    có chuyên khoa đạt chuẩn quốc tế và phòng khám đạt chuẩn
                    quốc tế để đáp ứng được các nhu cầu của du khách và người
                    dân.
                  </p>
                  <span>Du lịch nghỉ dưỡng biển</span>
                  <p>
                    Đà Nẵng có đường bờ biển dài và đẹp, hòn Sơn Trà con, bán
                    đảo Sơn Trà có thể phát triển du lịch biển và nghỉ dưỡng.
                    Đường bờ biển dài góp phần cung cấp các dịch vụ du lịch
                    phong phú, từ bãi biển công cộng đến các khu nghỉ dưỡng sang
                    trọng, nhằm phục vụ các nhu cầu đa dạng của du khách.
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      textTransform: "uppercase",
                      fontStyle: "italic",
                    }}
                  >
                    Nguồn tham thảo: THUYẾT MINH TỔNG HỢP ĐIỀU CHỈNH QUY HOẠCH
                    CHUNG THÀNH PHỐ ĐÀ NẴNG ĐẾN NĂM 2030, TẦM NHÌN ĐẾN NĂM 2045
                  </p>
                  <ul
                    style={{
                      fontSize: "16px",
                      fontStyle: "italic",
                    }}
                  >
                    <li>Cấp phê duyệt: Thủ tướng Chính phủ</li>
                    <li>Cơ quan thẩm định: Bộ Xây dựng</li>
                    <li>
                      Cơ quan tổ chức lập quy hoạch: Ủy ban nhân dân thành phố
                      Đà Nẵng
                    </li>
                    <li>
                      Đơn vị tư vấn lập quy hoạch: Liên danh Công ty Sakae
                      Corporate Advisory và Công ty tư vấn Surbana Jurong
                    </li>
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

export default Overview;
