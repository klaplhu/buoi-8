// Nhập điểm
let rawInput = prompt("Nhập điểm tổng kết của bạn (0 - 10):");
let score = parseFloat(rawInput);

// Kiểm tra tính hợp lệ của dữ liệu đầu vào
if (isNaN(score) || score < 0 || score > 10) {
    alert("Vui lòng nhập một số điểm hợp lệ từ 0 đến 10!");
} else {
    let rank = "";
    
    // Cấu trúc if-else phân loại điểm
    if (score > 8) {
        rank = "Giỏi 🌟";
    } else if (score > 6.5) {
        rank = "Khá 👍";
    } else if (score >= 5) {
        rank = "Trung bình 📚";
    } else {
        rank = "Yếu ⚠️";
    }

    // Hiển thị kết quả ra màn hình bằng alert
    alert("Điểm của bạn: " + score + "\nXếp loại: " + rank);
    console.log(`Kết quả phân loại: Điểm ${score} - Xếp loại ${rank}`);
}