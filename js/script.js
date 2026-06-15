// ==========================================
// 1. DANH SÁCH DỮ LIỆU SẢN PHẨM (ARRAY DATA)
// ==========================================
var mangSanPham =[
    { 
        maSp: "1", 
        tenSp: "Cây Đa Bonsai", 
        giaSp: "200.000", 
        tenAnh: "cay-da.jpg", 
        moTa: "Cây Đa Bonsai dáng đẹp, mang lại phong thủy tốt.", 
        tenGoiKhac: "Cây Sanh Đa",
        tenKhoaHoc: "Ficus benjamina",
        hoThucVat: "Moraceae",
        xuatXu: "Châu Á",
        dacDiem: "<li>Dáng bonsai nghệ thuật</li><li>Lá xanh mướt quanh năm</li>", 
        yNghia: "<li>Mang lại sự trường thọ và sức khỏe</li>", 
        congDung: "<li>Làm cảnh, thanh lọc không khí</li>",
        cachChamSoc: "<li><strong>Đất:</strong> Ưa đất thịt, tơi xốp, giữ ẩm tốt.</li><li><strong>Nước:</strong> Tưới khi mặt đất se khô.</li><li><strong>Nhiệt độ:</strong> Phát triển tốt ở 18-28°C.</li><li><strong>Ánh sáng:</strong> Ưa ánh sáng bán phần, tránh nắng gắt trực tiếp.</li>"
    },
    { maSp: "2", tenSp: "Cây Sung Bonsai", giaSp: "350.000", tenAnh: "cay-sung-bonsai.jpg", moTa: "Cây Sung Bonsai dáng cổ thụ, gốc rễ bám đá nghệ thuật.", tenGoiKhac: "Cây Ưu Đàm Thụ",tenKhoaHoc: "Ficus racemosa",hoThucVat: "Moraceae",xuatXu: "Đông Nam Á",dacDiem: "<li>Thân gỗ dẻo dễ uốn nắn</li><li>Trái mọc thành chùm từ thân</li>", yNghia: "<li>Tượng trưng cho sự sung túc và viên mãn</li>", congDung: "<li>Trang trí sân vườn, làm thuốc Đông y</li>",cachChamSoc: "<li><strong>Đất:</strong> Đất màu mỡ, giữ ẩm tốt.</li><li><strong>Nước:</strong> Ưa nước, tưới đẫm hằng ngày.</li><li><strong>Nhiệt độ:</strong> Ưa khí hậu nóng ẩm.</li><li><strong>Ánh sáng:</strong> Cần nắng trực tiếp nhiều để đậu quả.</li>"},
    { maSp: "3", tenSp: "Cây Tùng La Hán Bonsai", giaSp: "1.200.000", tenAnh: "tung-la-han.jpg", moTa: "Cây Tùng La Hán cao cấp mang vẻ đẹp quyền quý, uy nghi.", tenGoiKhac: "Vạn Niên Tùng", tenKhoaHoc: "Podocarpus macrophyllus", hoThucVat: "Podocarpaceae", xuatXu: "Nhật Bản và Trung Quốc", dacDiem: "<li>Lá hình kim thanh mảnh xanh mướt</li><li>Thân gỗ cứng, tuổi thọ rất cao</li>", yNghia: "<li>Thể hiện sự trường thọ và khí phách quân tử</li>", congDung: "<li>Làm cây cảnh ngoại thất phong thủy cao cấp</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất thoát nước tốt, pha cát.</li><li><strong>Nước:</strong> Tưới khi thấy đất khô, tránh úng.</li><li><strong>Nhiệt độ:</strong> Thích hợp nơi thoáng mát.</li><li><strong>Ánh sáng:</strong> Ưa sáng, tốt nhất nên đặt ngoài trời.</li>" },
    { maSp: "4", tenSp: "Cây Linh Sam Bonsai", giaSp: "450.000", tenAnh: "cay-linh-sam.jpg", moTa: "Cây Linh Sam hoa tím rực rỡ, thích hợp để bàn hoặc ban công.", tenGoiKhac: "Cây Ba Chia", tenKhoaHoc: "Desmodium unifoliatum", hoThucVat: "Fabaceae", xuatXu: "Việt Nam", dacDiem: "<li>Thân xù xì, hóa lũa tự nhiên rất đẹp</li><li>Hoa màu tím hoặc trắng mọc thành chùm</li>", yNghia: "<li>Xua đuổi tà khí, mang lại may mắn</li>", congDung: "<li>Cây cảnh thưởng thạch, bonsai mini</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất thoát nước nhanh, nhiều khoáng.</li><li><strong>Nước:</strong> Tưới đẫm hằng ngày.</li><li><strong>Nhiệt độ:</strong> Chịu được nắng nóng.</li><li><strong>Ánh sáng:</strong> Cần nắng trực tiếp liên tục để ra hoa.</li>" },
    { maSp: "5", tenSp: "Cây Mai Chiếu Thủy", giaSp: "280.000", tenAnh: "mai-chieu-thuy.jpg", moTa: "Cây Mai Chiếu Thủy hoa trắng nở quanh năm, hương thơm dễ chịu.", tenGoiKhac: "Cây Mai Chấn Thủy", tenKhoaHoc: "Wrightia religiosa", hoThucVat: "Apocynaceae", xuatXu: "Đông Dương", dacDiem: "<li>Hoa màu trắng 5 cánh luôn hướng xuống đất</li><li>Thân có các nốt sần xù xì tạo nét cổ kính</li>", yNghia: "<li>Trấn giữ đất đai, mang lại bình an cho gia đạo</li>", congDung: "<li>Tạo mùi hương thư giãn cho không gian sống</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất tơi xốp, giữ ẩm vừa đủ.</li><li><strong>Nước:</strong> Ưa nước, cần tưới hằng ngày.</li><li><strong>Nhiệt độ:</strong> 20-30°C.</li><li><strong>Ánh sáng:</strong> Ưa nắng, càng nhiều nắng hoa càng thơm.</li>" },
    { maSp: "6", tenSp: "Cây Nguyệt Quế Bonsai", giaSp: "390.000", tenAnh: "cay-nguyet-que.jpg", moTa: "Cây Nguyệt Quế lá lớn dáng trực, hoa thơm ngào ngạt.", tenGoiKhac: "Cây Nguyệt Quới", tenKhoaHoc: "Murraya paniculata", hoThucVat: "Rutaceae", xuatXu: "Châu Á nhiệt đới", dacDiem: "<li>Lá xanh bóng thuôn hình bầu dục</li><li>Hoa màu trắng kem có mùi thơm như hoa bưởi</li>", yNghia: "<li>Tượng trưng cho sự chiến thắng và vinh quang</li>", congDung: "<li>Hương thơm giúp giảm stress, làm sạch không khí</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất giàu dinh dưỡng, thoát nước tốt.</li><li><strong>Nước:</strong> Tưới đều, tránh làm rụng hoa.</li><li><strong>Nhiệt độ:</strong> 23-29°C.</li><li><strong>Ánh sáng:</strong> Ánh sáng gián tiếp hoặc nắng nhẹ.</li>" },
    { maSp: "7", tenSp: "Cây Kim Quýt Bonsai", giaSp: "500.000", tenAnh: "cay-kim-quyt.jpg", moTa: "Cây Kim Quýt Bonsai độc lạ với những quả chín đỏ mọng.", tenGoiKhac: "Cây Quýt Gai", tenKhoaHoc: "Triphasia trifolia", hoThucVat: "Rutaceae", xuatXu: "Đông Nam Á", dacDiem: "<li>Thân có gai nhỏ, lá chia ba thùy nhỏ</li><li>Quả tròn khi chín chuyển sang màu đỏ rực</li>", yNghia: "<li>Thu hút tài lộc và vận may cho gia chủ</li>", congDung: "<li>Trang trí phòng khách, quả có thể làm thuốc</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất pha cát, tơi xốp.</li><li><strong>Nước:</strong> Tưới đủ ẩm, giảm nước khi ra nụ.</li><li><strong>Nhiệt độ:</strong> 20-32°C.</li><li><strong>Ánh sáng:</strong> Cần nắng trực tiếp để đậu quả.</li>" },
    { maSp: "8", tenSp: "Cây Đa Búp Đỏ Đổ Cổ", giaSp: "180.000", tenAnh: "da-bup-do.jpg", moTa: "Cây Đa Búp Đỏ để bàn với sắc lá nổi bật và hiện đại.", tenGoiKhac: "Cây Cao Su Ấn Độ", tenKhoaHoc: "Ficus elastica", hoThucVat: "Moraceae", xuatXu: "Ấn Độ và Malaysia", dacDiem: "<li>Lá lớn, dày, bề mặt bóng bẩy</li><li>Búp non có màu đỏ rực như ngọn lửa</li>", yNghia: "<li>Mang lại ý chí mạnh mẽ và sự kiên cường</li>", congDung: "<li>Hút bụi mịn và độc tố formaldehyde cực tốt</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất thịt, tơi xốp.</li><li><strong>Nước:</strong> Tưới 1-2 lần/tuần.</li><li><strong>Nhiệt độ:</strong> Văn phòng (18-28°C).</li><li><strong>Ánh sáng:</strong> Ánh sáng gián tiếp, chịu bóng tốt.</li>" },
    { maSp: "9", tenSp: "Cây Sanh Bonsai", giaSp: "650.000", tenAnh: "cay-sanh-bonsai.jpg", moTa: "Cây Sanh Bonsai dáng ôm đá nghệ thuật, rễ buông độc đáo.", tenGoiKhac: "Cây Sanh Quê", tenKhoaHoc: "Ficus microcarpa", hoThucVat: "Moraceae", xuatXu: "Châu Á nhiệt đới", dacDiem: "<li>Khả năng sinh trưởng mạnh, dễ tạo rễ phụ</li><li>Lá nhỏ, mật độ cành lá dày đặc</li>", yNghia: "<li>Tượng trưng cho sự tài lộc, gia đình hòa thuận</li>", congDung: "<li>Làm cây cảnh sân vườn lớn hoặc bonsai nghệ thuật</li>", cachChamSoc: "<li><strong>Đất:</strong> Dễ thích nghi với nhiều loại đất.</li><li><strong>Nước:</strong> Ưa nước, cần tưới hằng ngày.</li><li><strong>Nhiệt độ:</strong> Chịu nóng tốt.</li><li><strong>Ánh sáng:</strong> Ưa nắng mạnh để ra rễ phụ.</li>" },
    { maSp: "10", tenSp: "Cây Hoa Giấy Bonsai", giaSp: "320.000", tenAnh: "hoa-giay-bonsai.jpg", moTa: "Cây Hoa Giấy Bonsai dáng huyền, hoa nở rực rỡ đón xuân.", tenGoiKhac: "Cây Bông Giấy", tenKhoaHoc: "Bougainvillea spectabilis", hoThucVat: "Nyctaginaceae", xuatXu: "Nam Mỹ", dacDiem: "<li>Thân leo hóa gỗ, có gai nhỏ</li><li>Cánh hoa mỏng như giấy với nhiều sắc màu</li>", yNghia: "<li>Mang lại may mắn, bảo vệ gia đình khỏi xui xẻo</li>", congDung: "<li>Trang trí cổng nhà, ban công, sân thượng</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất thoát nước cực tốt.</li><li><strong>Nước:</strong> Tưới ít, nên xiết nước để kích ra hoa.</li><li><strong>Nhiệt độ:</strong> Nắng nóng.</li><li><strong>Ánh sáng:</strong> 100% nắng trực tiếp.</li>" },
    { maSp: "11", tenSp: "Cây Lộc Vừng Bonsai", giaSp: "850.000", tenAnh: "loc-vung-bonsai.jpg", moTa: "Cây Lộc Vừng Bonsai dáng trực quân tử, hoa rủ chuỗi đỏ rực.", tenGoiKhac: "Cây Chiếc", tenKhoaHoc: "Barringtonia acutangula", hoThucVat: "Lecythidaceae", xuatXu: "Vùng đất ngập nước Nam Á", dacDiem: "<li>Thân xù xì, lá có răng cưa nhỏ</li><li>Hoa mọc thành chuỗi dài màu đỏ rủ xuống</li>", yNghia: "<li>Mang lại tài lộc, sự hưng vượng và phát đạt</li>", congDung: "<li>Cây tạo bóng mát, làm cảnh quan phong thủy</li>", cachChamSoc: "<li><strong>Đất:</strong> Ưa đất phù sa, giàu mùn, giữ ẩm tốt.</li><li><strong>Nước:</strong> Cây ưa nước, cần tưới đẫm hàng ngày.</li><li><strong>Nhiệt độ:</strong> Nóng ẩm.</li><li><strong>Ánh sáng:</strong> Nắng trực tiếp, cường độ cao.</li>" },
    { maSp: "12", tenSp: "Cây Trà Phúc Kiến", giaSp: "250.000", tenAnh: "tra-phuc-kien.jpg", moTa: "Cây Trà Phúc Kiến dáng bonsai mini, lá xanh bóng mượt.", tenGoiKhac: "Cây Bùm Sụm", tenKhoaHoc: "Carmona retusa", hoThucVat: "Boraginaceae", xuatXu: "Đông Nam Á và Nam Á", dacDiem: "<li>Lá nhỏ thuôn nhọn, có lông nhám mịn</li><li>Hoa màu trắng nhỏ, quả chín màu đỏ rực</li>", yNghia: "<li>Trừ tà khí, mang lại sự điềm tĩnh và may mắn</li>", congDung: "<li>Làm cây để bàn, tạo dáng bonsai tiểu cảnh</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất tơi xốp, thoát nước tốt.</li><li><strong>Nước:</strong> Chỉ tưới khi đất mặt se khô.</li><li><strong>Nhiệt độ:</strong> 20-30°C.</li><li><strong>Ánh sáng:</strong> Ưa sáng bán phần, tránh nắng gắt.</li>" },
    { maSp: "13", tenSp: "Cây Hải Đường Bonsai", giaSp: "480.000", tenAnh: "hai-duong-bonsai.jpg", moTa: "Cây Hải Đường hoa đỏ rực rỡ, biểu tượng của mùa xuân.", tenGoiKhac: "Cây Hải Đường Việt Nam", tenKhoaHoc: "Camellia amplexicaulis", hoThucVat: "Theaceae", xuatXu: "Việt Nam", dacDiem: "<li>Lá to, dày, mép có răng cưa nhỏ</li><li>Hoa màu đỏ hồng, cánh dày, nhị vàng rực</li>", yNghia: "<li>Tượng trưng cho phú quý, anh em hòa thuận</li>", congDung: "<li>Trang trí ngày Tết, làm cảnh sân vườn</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất chua nhẹ, giàu mùn.</li><li><strong>Nước:</strong> Giữ ẩm, không để úng.</li><li><strong>Nhiệt độ:</strong> Mát mẻ (15-25°C).</li><li><strong>Ánh sáng:</strong> Ánh sáng tán xạ, tránh nắng gắt.</li>" },
    { maSp: "14", tenSp: "Cây Du Tàu Bonsai", giaSp: "550.000", tenAnh: "cay-du-tau.jpg", moTa: "Cây Du Tàu dáng cổ thụ thu nhỏ, rễ bám đá nghệ thuật.", tenGoiKhac: "Cây Du Trung Quốc", tenKhoaHoc: "Ulmus parvifolia", hoThucVat: "Ulmaceae", xuatXu: "Đông Á", dacDiem: "<li>Lá rất nhỏ, mép lá có răng cưa đều đặn</li><li>Vỏ thân nứt nẻ tạo vẻ già cỗi, cổ kính</li>", yNghia: "<li>Thể hiện sự kiên cường và ý chí vượt khó</li>", congDung: "<li>Cây bonsai thưởng lãm trong nhà hoặc ngoài trời</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất pha cát, tơi xốp.</li><li><strong>Nước:</strong> Tưới đẫm khi đất khô.</li><li><strong>Nhiệt độ:</strong> 15-30°C.</li><li><strong>Ánh sáng:</strong> Ưa nắng hoặc bán phần.</li>" },
    { maSp: "15", tenSp: "Cây Phong Lá Đỏ Bonsai", giaSp: "950.000", tenAnh: "phong-la-do.jpg", moTa: "Cây Phong Lá Đỏ độc đáo với sắc lá chuyển màu rực rỡ.", tenGoiKhac: "Cây Phong Nhật Bản", tenKhoaHoc: "Acer palmatum", hoThucVat: "Sapindaceae", xuatXu: "Nhật Bản và Hàn Quốc", dacDiem: "<li>Lá xẻ 5-7 thùy hình ngôi sao đặc trưng</li><li>Lá đổi từ xanh sang đỏ rực vào mùa thu</li>", yNghia: "<li>Mang lại năng lượng tích cực và tài lộc</li>", congDung: "<li>Trang trí phòng khách, ban công sang trọng</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất nhiều mùn, hơi chua.</li><li><strong>Nước:</strong> Tưới đều đặn, không để khô hoàn toàn.</li><li><strong>Nhiệt độ:</strong> Ưa mát mẻ.</li><li><strong>Ánh sáng:</strong> Nắng sáng nhẹ, tránh nắng gắt.</li>" },
    { maSp: "16", tenSp: "Cây Me Bonsai", giaSp: "700.000", tenAnh: "cay-me-bonsai.jpg", moTa: "Cây Me Bonsai dáng bay nghệ thuật, gốc xù xì cổ thụ.", tenGoiKhac: "Cây Me Chua", tenKhoaHoc: "Tamarindus indica", hoThucVat: "Fabaceae", xuatXu: "Châu Phi nhiệt đới", dacDiem: "<li>Lá kép lông chim nhỏ, khép lại vào ban đêm</li><li>Thân gỗ dẻo, vỏ nứt nẻ đậm chất phong trần</li>", yNghia: "<li>Biểu lộc sự bền bỉ, kiên trì gặt hái thành công</li>", congDung: "<li>Làm cảnh ngoại thất, quả dùng trong ẩm thực</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất cát pha, tơi xốp.</li><li><strong>Nước:</strong> Chịu hạn tốt, tưới khi đất khô.</li><li><strong>Nhiệt độ:</strong> 25-35°C.</li><li><strong>Ánh sáng:</strong> Nắng trực tiếp hoàn toàn.</li>" },
    { maSp: "17", tenSp: "Cây Khế Bonsai", giaSp: "600.000", tenAnh: "cay-khe-bonsai.jpg", moTa: "Cây Khế ngọt Bonsai dáng trực, quả chín mọng vàng ươm.", tenGoiKhac: "Cây Ngũ Liêm Tử", tenKhoaHoc: "Averrhoa carambola", hoThucVat: "Oxalidaceae", xuatXu: "Đông Nam Á", dacDiem: "<li>Hoa màu tím hồng mọc thành chùm nhỏ</li><li>Quả chia 5 múi, khi chín có màu vàng</li>", yNghia: "<li>Nhắc nhở về lòng biết ơn và sự chung thủy</li>", congDung: "<li>Trang trí sân vườn, cho quả ăn được</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất thịt pha mùn.</li><li><strong>Nước:</strong> Cần nhiều nước khi có quả.</li><li><strong>Nhiệt độ:</strong> 22-32°C.</li><li><strong>Ánh sáng:</strong> Nắng trực tiếp toàn phần.</li>" },
    { maSp: "18", tenSp: "Cây Linh Sam Sông Hinh", giaSp: "520.000", tenAnh: "linh-sam-song-hinh.jpg", moTa: "Linh Sam Sông Hinh dòng lũa rin, hoa tím đậm rất sai.", tenGoiKhac: "Linh Sam Lá Rí", tenKhoaHoc: "Desmodium unifoliatum var.", hoThucVat: "Fabaceae", xuatXu: "Phú Yên, Việt Nam", dacDiem: "<li>Lá rí nhỏ thuôn dài, gai bén nhọn</li><li>Dòng linh sam có hoa tím đậm và thơm nhất</li>", yNghia: "<li>Gia tăng vượng khí, xua đuổi vận xui</li>", congDung: "<li>Dòng bonsai cao cấp được người chơi săn đón</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất hạt to, thoát nước siêu tốt.</li><li><strong>Nước:</strong> Tưới đẫm hàng ngày.</li><li><strong>Nhiệt độ:</strong> 25-35°C.</li><li><strong>Ánh sáng:</strong> Nắng trực tiếp 100%.</li>" },
    { maSp: "19", tenSp: "Cây Hương Thảo Đứng", giaSp: "120.000", tenAnh: "huong-thao.jpg", moTa: "Cây Hương Thảo tỏa tinh dầu thơm ngát, đuổi muỗi hiệu quả.", tenGoiKhac: "Cây Mê Điệt Hương", tenKhoaHoc: "Salvia rosmarinus", hoThucVat: "Lamiaceae", xuatXu: "Địa Trung Hải", dacDiem: "<li>Lá nhỏ hình kim, màu xanh lục xám</li><li>Tỏa ra mùi thơm dễ chịu khi chạm vào</li>", yNghia: "<li>Tăng cường trí nhớ, mang lại sự trung thành</li>", congDung: "<li>Đuổi muỗi, làm gia vị Âu, giảm stress</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất pha cát, cực kỳ thoát nước.</li><li><strong>Nước:</strong> Tưới ít, chờ đất khô hẳn.</li><li><strong>Nhiệt độ:</strong> Mát mẻ, khô ráo.</li><li><strong>Ánh sáng:</strong> Nắng gắt 6-8 tiếng/ngày.</li>" },
    { maSp: "20", tenSp: "Cây Phát Tài Núi", giaSp: "450.000", tenAnh: "phat-tai-nui.jpg", moTa: "Cây Phát Tài Núi dáng uốn lượn, phù hợp góc phòng khách.", tenGoiKhac: "Cây Đại Lộc", tenKhoaHoc: "Dracaena draco", hoThucVat: "Asparagaceae", xuatXu: "Châu Á nhiệt đới", dacDiem: "<li>Cụm lá mảnh, dài, nhọn mọc ở đỉnh thân</li><li>Thân cây uyển chuyển, dễ tạo thế đứng</li>", yNghia: "<li>Mang lại may mắn, tài lộc và sự thăng tiến</li>", congDung: "<li>Thanh lọc không khí, trang trí nội thất</li>", cachChamSoc: "<li><strong>Đất:</strong> Đất thịt, tơi xốp.</li><li><strong>Nước:</strong> Tưới 3 ngày/lần.</li><li><strong>Nhiệt độ:</strong> 20-30°C.</li><li><strong>Ánh sáng:</strong> Ánh sáng bán phần.</li>" },
];

// ==========================================
// 2. HÀM CHUNG CHO GIỎ HÀNG (FUNCTIONS)
// ==========================================
function themVaoGioTheoMa(maSp) {
    var sanPham = mangSanPham.find(x => x.maSp === maSp);
    if (sanPham) {
        themVaoGio(sanPham, 1);
    }
}

function themVaoGio(sanPham, soLuongThem) {
    var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
    var spDaCo = gio.find(item => item.maSp === sanPham.maSp);
    
    if (spDaCo) {
        spDaCo.soLuong = (spDaCo.soLuong || 1) + soLuongThem;
    } else {
        sanPham.soLuong = soLuongThem;
        gio.push(sanPham);
    }
    
    localStorage.setItem("gioHang", JSON.stringify(gio));
    capNhatHeaderGioHang();
    alert("Đã thêm " + sanPham.tenSp + " vào giỏ hàng!");
}

function capNhatHeaderGioHang() {
    var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
    var tongSoLuong = gio.reduce((sum, sp) => sum + (sp.soLuong || 1), 0);
    document.querySelectorAll(".so-luong-gio").forEach(the => the.innerText = tongSoLuong);
}

function xoaKhoiGio(index) {
    // 1. Lấy giỏ hàng từ localStorage
    var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
    
    // 2. Xóa phần tử tại vị trí index
    gio.splice(index, 1);
    
    // 3. Lưu lại giỏ hàng đã cập nhật
    localStorage.setItem("gioHang", JSON.stringify(gio));
    
    // 4. Load lại trang để cập nhật giao diện
    location.reload(); 
}

// ==========================================
// 3. SỰ KIỆN KHỞI TẠO TRANG (DOM RENDER)
// ==========================================
window.onload = function() {
    capNhatHeaderGioHang();

    // 1. RENDER DANH SACH SAN PHAM
    var khungChuaSanPham = document.getElementById("danh-sach-san-pham");
    if (khungChuaSanPham) {
        var thuMucAnh = khungChuaSanPham.getAttribute("data-thu-muc-anh") || "assets/";
        var thuMucTrang = khungChuaSanPham.getAttribute("data-thu-muc-trang") || "";

        // Điều kiện: Nếu ở trang chủ (thuMucTrang là "html/") thì chỉ lấy 4 sản phẩm, ngược lại lấy tất cả
        var sanPhamHienThi = (thuMucTrang === "html/") ? mangSanPham.slice(0, 4) : mangSanPham;

        sanPhamHienThi.forEach(function(sanPham) {
            var theSanPham = document.createElement("div");
            theSanPham.className = "the-san-pham";
            theSanPham.innerHTML = `
                <img src="${thuMucAnh}${sanPham.tenAnh}" alt="${sanPham.tenSp}">
                <h3 class="ten-san-pham">${sanPham.tenSp}</h3>
                <p class="gia-tien">${sanPham.giaSp} đ</p>
                <div class="nhom-nut-bam">
                    <a href="${thuMucTrang}chi-tiet.html?id=${sanPham.maSp}" class="nut-cam nut-trang">XEM CHI TIẾT</a>
                    <button class="nut-cam" onclick="themVaoGioTheoMa('${sanPham.maSp}')">THÊM VÀO GIỎ HÀNG</button>
                </div>
            `;
            khungChuaSanPham.appendChild(theSanPham);
        });
    }

    // 2. RENDER TRANG CHI TIẾT
    var khungChiTiet = document.getElementById("khung-chi-tiet");
    if (khungChiTiet) {
        var idHienTai = new URLSearchParams(window.location.search).get("id");
        var spTimThay = mangSanPham.find(sp => sp.maSp === idHienTai);

        if (spTimThay) {
            khungChiTiet.style.display = "block";
            var thuMucAnh = khungChiTiet.getAttribute("data-thu-muc-anh") || "../assets/";
            
            document.getElementById("anh-chi-tiet").src = thuMucAnh + spTimThay.tenAnh;
            document.getElementById("ten-chi-tiet").innerText = spTimThay.tenSp;
            
            if(document.getElementById("ten-gioi-thieu")) document.getElementById("ten-gioi-thieu").innerText = spTimThay.tenSp.toLowerCase();
            if(document.getElementById("ten-goi-khac")) document.getElementById("ten-goi-khac").innerText = spTimThay.tenGoiKhac;
            if(document.getElementById("ten-khoa-hoc")) document.getElementById("ten-khoa-hoc").innerText = spTimThay.tenKhoaHoc;
            if(document.getElementById("ho-thuc-vat")) document.getElementById("ho-thuc-vat").innerText = spTimThay.hoThucVat;
            if(document.getElementById("xuat-xu")) document.getElementById("xuat-xu").innerText = spTimThay.xuatXu;
            if(document.getElementById("cong-dung-chi-tiet")) document.getElementById("cong-dung-chi-tiet").innerHTML = spTimThay.congDung;
            
            // Tìm đoạn render cũ và thêm dòng này vào
            if(document.getElementById("cach-cham-soc-chi-tiet")) 
            {
                document.getElementById("cach-cham-soc-chi-tiet").innerHTML = spTimThay.cachChamSoc || "<li>Đang cập nhật hướng dẫn chăm sóc...</li>";
            }

            document.getElementById("mota-chi-tiet").innerText = spTimThay.moTa;
            document.getElementById("gia-chi-tiet").innerText = spTimThay.giaSp;
            document.getElementById("dac-diem-chi-tiet").innerHTML = spTimThay.dacDiem;
            document.getElementById("y-nghia-chi-tiet").innerHTML = spTimThay.yNghia;
            
            document.getElementById("nut-them-gio").onclick = function() { 
                var sl = parseInt(document.querySelector(".o-so-luong").value) || 1;
                themVaoGio(spTimThay, sl); 
            };
        } else {
            document.getElementById("thong-bao-loi").style.display = "block";
        }
    }

    // 3. RENDER TRANG GIO HANG
    var danhSachGio = document.getElementById("danh-sach-gio");
    if (danhSachGio) {
        var gio = JSON.parse(localStorage.getItem("gioHang")) || [];
        var tong = 0;

        if (gio.length === 0) {
            danhSachGio.innerHTML = `<tr><td colspan="5" style="text-align:center;">Giỏ hàng trống!</td></tr>`;
        } else {
            gio.forEach(function(sp, index) {
                var giaSo = parseInt(sp.giaSp.replace(/\./g, ''));
                var thanhTien = giaSo * (sp.soLuong || 1);
                tong += thanhTien;
                
                var hang = document.createElement("tr");
                hang.innerHTML = `
                    <td>${sp.tenSp}</td>
                    <td>${sp.giaSp} đ</td>
                    <td>${sp.soLuong}</td>
                    <td>${thanhTien.toLocaleString('vi-VN')} đ</td>
                    <td><button onclick="xoaKhoiGio(${index})" class="nut-xam" style="margin-bottom:0; padding: 5px 10px;">Xóa</button></td>
                `;
                danhSachGio.appendChild(hang);
            });
        }
        document.getElementById("tong-tien").innerText = tong.toLocaleString('vi-VN');
    }
};