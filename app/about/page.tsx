import { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">About</h1>
      </div>

      <div className="bg-surface border border-border rounded-lg p-6 space-y-6">
        <section>
          <h2 className="text-white font-bold text-lg mb-3">
            Photonic Analytics là gì
          </h2>
          <div className="space-y-3 text-white/75 text-sm leading-relaxed">
            <p>
              Photonic Analytics là nền tảng nghiên cứu độc lập theo dõi ngành
              Silicon Photonics và Photonic AI — từ interconnect quang (CPO,
              transceiver), photonic switch, đến photonic processor thế hệ
              tiếp theo. Nội dung bao gồm TRL tracker theo layer công nghệ,
              phân tích supply chain (vật liệu, wafer, packaging), theo dõi
              cổ phiếu liên quan, và các catalyst sắp tới (earnings, hội nghị
              ngành, mốc sản xuất).
            </p>
            <p>
              Đây không phải một trang tin tổng hợp. Mỗi thesis, mỗi số liệu
              đều được truy vết về nguồn gốc — phân biệt rõ giữa &quot;số liệu
              đã công bố&quot; và &quot;ước tính/dự báo&quot; — để người đọc
              tự đánh giá được độ tin cậy thay vì nhận kết luận có sẵn.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">
            Vì sao mình xây trang này
          </h2>
          <div className="space-y-3 text-white/75 text-sm leading-relaxed">
            <p>
              Mình tiếp cận ngành bán dẫn từ nền tảng phi kỹ thuật. Mục tiêu
              dài hạn là chuyển sang mảng Advanced Packaging trong chuỗi giá
              trị bán dẫn. Thay vì học lý thuyết suông, mình chọn cách buộc
              bản thân hiểu ngành đủ sâu để viết ra được — theo dõi công nghệ
              nào đang chuyển từ phòng lab sang sản xuất thật, ai đang thắng
              trong chuỗi cung ứng, và tại sao.
            </p>
            <p>
              Photonic Analytics là sản phẩm phụ của quá trình đó: một công
              cụ nghiên cứu cá nhân được công khai hoá, cập nhật liên tục khi
              mình đọc báo cáo ngành, earnings call, và tin tức kỹ thuật.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Phương pháp</h2>
          <ul className="space-y-2 text-white/75 text-sm leading-relaxed list-disc list-inside">
            <li>
              <strong className="text-white">
                Phân tầng theo TRL (Technology Readiness Level)
              </strong>
              : mỗi công nghệ được định vị từ nghiên cứu (TRL 1-3) đến sản
              xuất đại trà (TRL 8-9), tránh nhầm lẫn giữa &quot;sắp có&quot;
              và &quot;đã có&quot;.
            </li>
            <li>
              <strong className="text-white">Truy vết nguồn</strong>: số
              liệu thị trường, thị phần, công suất đều gắn nguồn — ưu tiên
              báo cáo hãng, earnings transcript, và các đơn vị phân tích
              ngành (TrendForce, IFP, Epoch AI...) hơn suy đoán.
            </li>
            <li>
              <strong className="text-white">Cập nhật theo sự kiện</strong>:
              catalyst calendar theo dõi các mốc thực tế — earnings, hội nghị
              (OFC, ECOC), volume ramp — thay vì bình luận cảm tính về xu
              hướng.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Về mình</h2>
          <p className="text-white/75 text-sm leading-relaxed">
            Mình là Hiếu (Việt Nam), hiện làm Business Analyst / Automation
            Consultant cho doanh nghiệp, đồng thời theo học cao đẳng ngành
            Điện - Điện tử để xây nền tảng kỹ thuật cho hướng chuyển ngành
            sang Advanced Packaging. Ngoài công việc chính, mình dành thời
            gian nghiên cứu và đầu tư liên quan đến ngành bán dẫn, với hướng
            đi dài hạn là trở thành Process/Equipment Engineer tại một nhà
            máy OSAT.
          </p>
        </section>

        <section className="border-t border-border pt-4">
          <p className="text-xs text-muted">
            <strong className="text-white">Lưu ý:</strong> Nội dung trên
            trang phục vụ mục đích nghiên cứu và giáo dục cá nhân, không phải
            khuyến nghị đầu tư. Mọi quyết định tài chính là trách nhiệm của
            người đọc.
          </p>
        </section>
      </div>
    </div>
  );
}
