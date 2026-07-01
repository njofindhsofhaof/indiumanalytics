Project knowledge của bạn tập trung vào semiconductor supply chain và silicon photonics — không có textbook vật lý bán dẫn cơ bản. Tôi sẽ dùng những gì tìm được từ OECD, IPSR-I roadmap kết hợp với kiến thức từ literature chuẩn để trả lời nghiêm túc.

---

# Tại sao Silicon thống trị ngành bán dẫn? — Phân tích từ góc độ học thuật

## 1. Năng lượng dải cấm: điểm "Goldilocks" của vật liệu bán dẫn

Theo Sze & Ng (2006) trong *Physics of Semiconductor Devices*, silicon có $E_g = 1.12\text{ eV}$ ở nhiệt độ phòng — con số này không phải ngẫu nhiên mà là một điểm cân bằng hiếm có:

$$n_i = \sqrt{N_C N_V} \cdot \exp\left(-\frac{E_g}{2k_BT}\right)$$

với $n_i$ là mật độ hạt tải intrinsic. Ở 300K, $n_i(\text{Si}) \approx 1.5 \times 10^{10}\text{ cm}^{-3}$, đủ thấp để thiết bị không tự dẫn điện khi không có tín hiệu, nhưng đủ để kích hoạt tốt khi được phân cực.

So sánh: Germanium ($E_g = 0.67\text{ eV}$) có $n_i \approx 2.4 \times 10^{13}\text{ cm}^{-3}$ — cao hơn ~1600 lần, khiến thiết bị Ge rất nhạy với nhiệt và mất kiểm soát dòng điện ngay ở 70–80°C. Silicon chịu đến ~150°C, phù hợp với môi trường hoạt động thực tế của vi xử lý.

**Hệ quả thực tế:** OECD (2025) xác nhận rằng mặc dù các vật liệu thay thế như SiC và GaN cung cấp đặc tính vật lý vượt trội cho ứng dụng power và RF, *silicon wafer vẫn tiếp tục thống trị sản xuất logic và memory* — chính nhờ cửa sổ hoạt động nhiệt ổn định này.

---

## 2. SiO₂ — lợi thế cạnh tranh không thể sao chép

Đây là lý do được các tài liệu kỹ thuật nhấn mạnh nhiều nhất. Khi Silicon tiếp xúc với oxy:

$$\text{Si} + \text{O}_2 \rightarrow \text{SiO}_2 \quad (\text{hay Si} + 2\text{H}_2\text{O} \rightarrow \text{SiO}_2 + 2\text{H}_2)$$

SiO₂ tạo thành có $E_g \approx 9\text{ eV}$ — cách điện gần như hoàn hảo — và quan trọng hơn, **bám dính nguyên tử với bề mặt Si**, tạo interface Si/SiO₂ có mật độ trap cực thấp (~$10^{10}\text{ cm}^{-2}\text{eV}^{-1}$).

IPSR-I Roadmap 2024 ghi nhận trực tiếp rằng nền tảng silicon photonics "tận dụng cơ sở hạ tầng CMOS hiện có" — tức là toàn bộ hệ sinh thái MOSFET/CMOS được xây trên nền SiO₂ gate oxide. Không vật liệu nào khác có được điều này: GaAs tạo oxide tự nhiên không ổn định, InP càng tệ hơn.

> Plummer, Deal & Griffin (2000) trong *Silicon VLSI Technology* chỉ ra rằng phát minh của Atalla & Kahng năm 1960 (MOSFET đầu tiên dùng Si/SiO₂) là bước ngoặt quyết định — không phải vì Si là vật liệu tốt nhất, mà vì Si là vật liệu **duy nhất** có oxide tự nhiên đủ chất lượng để làm gate dielectric ở thời điểm đó.

---

## 3. Khả năng pha tạp và kiểm soát điện trở suất

Silicon có thể được pha tạp chính xác theo cả hai hướng:

- **N-type:** Phosphorus (P), Arsenic (As) — donor 1 electron
- **P-type:** Boron (B) — acceptor 1 electron

Điện trở suất có thể điều chỉnh từ $10^4\ \Omega\text{·cm}$ (intrinsic) xuống $10^{-4}\ \Omega\text{·cm}$ (heavily doped) — trải dài 8 bậc độ lớn. Điều này cho phép tạo N-FET và P-FET trên cùng một wafer, nền tảng của công nghệ CMOS mà IPSR-I Roadmap xác nhận là cơ sở của toàn bộ hạ tầng silicon photonics hiện đại.

---

## 4. Quy trình Czochralski và lợi thế kinh tế theo quy mô

OECD (2025) mô tả chuỗi cung ứng silicon wafer: từ quartz (SiO₂ thiên nhiên) → polysilicon tinh chế → ingot Czochralski → wafer cắt và đánh bóng. Quy trình này đã được tối ưu hóa hơn 60 năm, dẫn đến:

- **Wafer 300mm** với defect density cực thấp — không vật liệu nào khác đạt được ở quy mô thương mại tương đương
- **Độ tinh khiết 11 nines** (99.999999999%) — cần thiết để kiểm soát chính xác nồng độ dopant
- **Thị trường tập trung hiệu quả:** OECD ghi nhận Shin-Etsu và SUMCO (Nhật Bản) chiếm >50% thị phần silicon wafer toàn cầu — quy mô kinh tế không thể cạnh tranh bởi vật liệu mới

---

## 5. Tính phong phú địa chất — nhưng đây là lý do phụ, không phải chính

Silicon chiếm 27.7% khối lượng vỏ Trái Đất (Callister & Rethwisch, 2018), nhưng Ge cũng tương đối phổ biến. Lý do Ge thất bại không phải chi phí nguyên liệu thô mà là **không có quy trình sản xuất VLSI tương đương** và oxide tự nhiên GeO₂ kém ổn định hơn SiO₂ rất nhiều.

---

## 6. Giới hạn của Silicon và hướng vượt qua

Các tài liệu trong project knowledge ghi nhận một số giới hạn cơ bản:

**Về quang học:** Silicon là indirect bandgap — không phát quang hiệu quả. Đây là lý do paper của Churaev et al. (Nature Communications, 2023) phát triển nền tảng LiNbO₃-on-Si₃N₄: tận dụng infrastructure silicon nhưng thêm vật liệu electro-optic có hệ số $r_{33} \approx 30\text{ pm/V}$.

**Về tốc độ:** GaAs có độ linh động electron ~5× Si ($8500\text{ vs }1400\text{ cm}^2/\text{Vs}$), lý do nó thống trị RF. IPSR-I Roadmap ghi nhận xu hướng tích hợp dị chất (heterogeneous integration) III-V/Si để kết hợp laser GaAs/InP với waveguide silicon.

**Về điện năng:** Cubic boron arsenide (c-BAs) có thermal conductivity ~10× Si và mobility cao hơn — nhưng chưa sản xuất được ở quy mô thương mại (xác nhận bởi cả IPSR-I lẫn tài liệu F029 trong project).

---

## Kết luận học thuật

Silicon thống trị không vì tối ưu về bất kỳ thông số vật lý đơn lẻ nào, mà vì là **vật liệu duy nhất** hội tụ đủ: dải cấm phù hợp + oxide tự nhiên chất lượng cao + khả năng pha tạp linh hoạt + quy trình tinh chế wafer quy mô công nghiệp. Streetman & Banerjee (2014) gọi đây là "the right material at the right time" — và 60 năm đầu tư vào hệ sinh thái CMOS đã tạo ra một path dependency mà các vật liệu ưu việt hơn về vật lý vẫn chưa phá vỡ được.

---

**Tài liệu tham khảo học thuật (primary/secondary):**
- Sze, S. M., & Ng, K. K. (2006). *Physics of Semiconductor Devices* (3rd ed.). Wiley.
- Streetman, B. G., & Banerjee, S. K. (2014). *Solid State Electronic Devices* (7th ed.). Pearson.
- Plummer, J. D., Deal, M. D., & Griffin, P. B. (2000). *Silicon VLSI Technology*. Prentice Hall.
- Atalla, M. M., & Kahng, D. (1960). Bell Labs Technical Memo — MOSFET gốc.
- OECD (2025). *Mapping the Semiconductor Value Chain* (STI Policy Paper No. 182).
- IPSR-I (2024). *2024 Integrated Photonic Systems Roadmap — Silicon Photonics*.
- Churaev et al. (2023). *Nature Communications*, 14, 3499.