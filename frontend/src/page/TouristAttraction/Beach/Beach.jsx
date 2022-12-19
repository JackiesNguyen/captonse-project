import React from "react";
import TourisGlobal from "../components/TouristGlobal";

const Beach = () => {
  window.scrollTo(0, 0);
  return (
    <div className="beach">
      <TourisGlobal
        name="Bãi biển đẹp"
        text="Thành phố Đà Nẵng từ lâu đã nổi tiếng với nhiều bãi 
        biển đẹp kéo dài từ chân đèo Hải Vân đến Non Nước: Non Nước, Bắc Mỹ
         An, Mỹ Khê, Phạm Văn Đồng, Xuân Thiều, Thanh Bình, Nam Ô và các bãi thuộc
          bán đảo Sơn Trà ( Bãi Nam, Bãi Rạng, Bãi Bụt, Bãi Tiên Sa, Bãi Con, Bãi Bắc...).
          Bên cạnh đó, từ trung tâm thành phố đến các bãi biển đều rất gần, chỉ thoáng chốc du khách đã có thể đắm mình trên bãi biển.
          Đặc biệt, du khách đến Đà Nẵng tắm biển có thể hoàn toàn yên tâm vì thành phố là một trong những địa phương đi đầu trong cả nước về công tác cứu hộ bãi biển. Đội cứu hộ, cứu nạn với quân số đông, có mặt ở khắp các bãi biển và làm việc chuyên nghiệp từ 4h30 sáng đến 18h30 hàng ngày nhằm đảm bảo sự an toàn cao nhất cho du khách khi tắm và nghỉ ngơi trên biển."
      />
    </div>
  );
};

export default Beach;
