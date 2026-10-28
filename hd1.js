<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tuần 8: JavaScript Fundamentals & Tư Duy Logic AI-First</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --success: #16a34a;
            --warning: #d97706;
            --danger: #dc2626;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --code-bg: #0f172a;
            --code-text: #f1f5f9;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        body {
            background-color: var(--bg);
            color: var(--text-main);
            line-height: 1.6;
            padding: 24px 16px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
        }

        header {
            background: linear-gradient(135deg, #1e3a8a, #2563eb);
            color: white;
            padding: 28px 24px;
            border-radius: 12px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            font-size: 1.8rem;
            margin-bottom: 8px;
        }

        header p {
            color: #bfdbfe;
            font-size: 0.95rem;
        }

        .card {
            background: var(--card-bg);
            border-radius: 10px;
            border: 1px solid var(--border);
            padding: 24px;
            margin-bottom: 20px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: #0f172a;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 2px solid var(--border);
            padding-bottom: 10px;
        }

        .badge {
            font-size: 0.75rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 9999px;
            background: #dbeafe;
            color: #1e40af;
        }

        .info-list {
            list-style: none;
            margin-bottom: 16px;
        }

        .info-list li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 8px;
        }

        .info-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--success);
            font-weight: bold;
        }

        pre {
            background-color: var(--code-bg);
            color: var(--code-text);
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            font-size: 0.9rem;
            line-height: 1.5;
            margin: 12px 0;
            font-family: Consolas, "Courier New", monospace;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 10px 18px;
            border-radius: 6px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            gap: 8px;
        }

        .btn:hover {
            background-color: var(--primary-hover);
            transform: translateY(-1px);
        }

        .btn-secondary {
            background-color: #475569;
        }
        .btn-secondary:hover {
            background-color: #334155;
        }

        .btn-warning {
            background-color: var(--warning);
        }
        .btn-warning:hover {
            background-color: #b45309;
        }

        .btn-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 14px 0;
        }

        .output-box {
            background-color: #f1f5f9;
            border-left: 4px solid var(--primary);
            padding: 14px;
            border-radius: 4px;
            margin-top: 12px;
            font-family: Consolas, "Courier New", monospace;
            font-size: 0.9rem;
            white-space: pre-wrap;
            color: #0f172a;
        }

        .explanation {
            background: #fefce8;
            border-left: 4px solid var(--warning);
            padding: 14px 18px;
            border-radius: 4px;
            margin-top: 12px;
            font-size: 0.95rem;
        }

        .input-group {
            display: flex;
            gap: 10px;
            margin: 14px 0;
            align-items: center;
        }

        .input-group input {
            padding: 9px 14px;
            border: 1px solid var(--border);
            border-radius: 6px;
            font-size: 0.95rem;
            flex: 1;
            max-width: 260px;
        }

        .input-group input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        footer {
            text-align: center;
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-top: 30px;
            padding-bottom: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>TUẦN 8: JAVASCRIPT FUNDAMENTALS & TƯ DUY LOGIC AI-FIRST</h1>
        <p>Học phần: 111101 - Thiết kế Web | Giáo trình Giảng dạy - Lạc Hồng</p>
    </header>

    <!-- 1. MỤC TIÊU & CHUẨN ĐẦU RA -->
    <section class="card">
        <h2 class="card-title">1. Mục tiêu & Chuẩn đầu ra (LLO)</h2>
        <ul class="info-list">
            <li><strong>LLO 3.1.1:</strong> Khai báo và sử dụng đúng các loại biến (<code>let</code>, <code>const</code>) và phân biệt kiểu dữ liệu (String, Number, Boolean).</li>
            <li><strong>LLO 3.1.2:</strong> Viết được cấu trúc điều kiện (<code>if-else</code>) để xử lý logic kiểm tra điểm, phân loại.</li>
            <li><strong>LLO 3.1.3:</strong> Sử dụng Prompt yêu cầu AI chuyển đổi ngôn ngữ tự nhiên thành mã JavaScript logic tương ứng.</li>
            <li><strong>LLO 3.1.4:</strong> Thực hiện Debug cơ bản bằng cách sử dụng <code>console.log()</code> để kiểm tra giá trị của biến.</li>
        </ul>
    </section>

    <!-- 2. HOẠT ĐỘNG 1 -->
    <section class="card">
        <h2 class="card-title">
            <span>Hoạt động 1: "Hello JS Console"</span>
            <span class="badge">30 phút</span>
        </h2>
        <p>Thực hiện khai báo biến, tính toán số học và quan sát kết quả tại <strong>F12 > Console</strong> hoặc xem màn hình hiển thị trực tiếp bên dưới:</p>
        
        <pre><code>// Khai báo biến
const myName = "Nguyễn Văn A";
let age = 20;

// Các phép toán
let a = 15;
let b = 4;
console.log("Cộng:", a + b);       // 19
console.log("Trừ:", a - b);        // 11
console.log("Nhân:", a * b);       // 60
console.log("Chia:", a / b);       // 3.75
console.log("Chia lấy dư:", a % b);// 3</code></pre>

        <div class="btn-group">
            <button class="btn" onclick="runActivity1()">▶ Chạy Code & Xem kết quả</button>
        </div>

        <div id="output1" class="output-box" style="display: none;"></div>

        <div class="explanation">
            <strong>💡 Vibe Coding Question:</strong> <em>"Tại sao khi cộng <code>'10' + 20</code> trong JS lại ra <code>'1020'</code> mà không phải <code>30</code>?"</em><br>
            <strong>Giải thích:</strong> Vì <code>'10'</code> là chuỗi (String), toán tử <code>+</code> ưu tiên <strong>nối chuỗi</strong> (ép kiểu ngầm định - Type Coercion). Để tính ra 30, ta cần chuyển chuỗi thành số: <code>Number('10') + 20</code>.
        </div>
    </section>

    <!-- 3. HOẠT ĐỘNG 2 -->
    <section class="card">
        <h2 class="card-title">
            <span>Hoạt động 2: "Logic Builder" - Phân Loại Điểm</span>
            <span class="badge">45 phút</span>
        </h2>

        <p><strong>Yêu cầu:</strong> Nhập điểm số, phân loại: Giỏi (&gt;8), Khá (&gt;6.5), Trung bình (&gt;=5), Yếu (&lt;5).</p>

        <pre><code>let score = parseFloat(prompt("Nhập điểm (0-10):"));

if (isNaN(score) || score < 0 || score > 10) {
    alert("Điểm không hợp lệ!");
} else if (score > 8) {
    alert("Xếp loại: Giỏi 🌟");
} else if (score > 6.5) {
    alert("Xếp loại: Khá 👍");
} else if (score >= 5) {
    alert("Xếp loại: Trung bình 📚 (Đạt)");
} else {
    alert("Xếp loại: Yếu ⚠️ (Cần cố gắng)");
}</code></pre>

        <div class="btn-group">
            <button class="btn" onclick="runPromptExercise()">🔔 Chạy bằng hộp thoại prompt() & alert()</button>
        </div>

        <!-- Trình kiểm tra trực quan trên trang -->
        <div style="margin-top: 18px; padding-top: 16px; border-top: 1px dashed var(--border);">
            <p><strong>Hoặc thử trực tiếp ngay trên trang:</strong></p>
            <div class="input-group">
                <input type="number" id="webScoreInput" placeholder="Nhập điểm (0 - 10)..." step="0.1" min="0" max="10">
                <button class="btn btn-secondary" onclick="evaluateWebScore()">Kiểm tra điểm</button>
            </div>
            <div id="webScoreOutput" class="output-box" style="display: none;"></div>
        </div>
    </section>

    <!-- 4. HOẠT ĐỘNG 3 -->
    <section class="card">
        <h2 class="card-title">
            <span>Hoạt động 3: "AI Logic Explainer"</span>
            <span class="badge">30 phút</span>
        </h2>

        <p><strong>Đoạn mã có lỗi thường gặp:</strong></p>
        <pre><code>let age = 15;
// LỖI: Dùng dấu gán "=" thay vì so sánh "==="
if (age = 18) {
    console.log("Bạn vừa đủ 18 tuổi!");
} else {
    console.log("Bạn chưa đủ 18 tuổi.");
}</code></pre>

        <div class="btn-group">
            <button class="btn btn-warning" onclick="explainBug()">🔍 Xem AI phân tích lỗi & Luồng chạy</button>
        </div>

        <div id="bugExplanationOutput" class="output-box" style="display: none;"></div>
    </section>

    <footer>
        <p>Nhấn <strong>F12</strong> để mở cửa sổ <strong>DevTools Console</strong> và quan sát luồng log thực tế của trình duyệt.</p>
    </footer>
</div>

<!-- JAVASCRIPT XỬ LÝ TOÀN BỘ LOGIC -->
<script>
    // --- HOẠT ĐỘNG 1: LOG & TÍNH TOÁN ---
    function runActivity1() {
        const myName = "Nguyễn Văn A";
        let age = 20;
        let a = 15;
        let b = 4;

        // In ra DevTools Console
        console.log("--- HOẠT ĐỘNG 1: CONSOLE LOG ---");
        console.log("Họ và tên:", myName);
        console.log("Tuổi:", age);
        console.log("a + b =", a + b);
        console.log("a - b =", a - b);
        console.log("a * b =", a * b);
        console.log("a / b =", a / b);
        console.log("a % b =", a % b);
        console.log("Phép thử '10' + 20 =", '10' + 20);
        console.log("Phép chuẩn Number('10') + 20 =", Number('10') + 20);

        // Hiển thị ra màn hình giao diện
        const outputDiv = document.getElementById("output1");
        outputDiv.style.display = "block";
        outputDiv.textContent = 
`[CONSOLE OUTPUT]
Họ và tên: ${myName}
Tuổi: ${age}
-------------------------
Phép cộng (15 + 4): ${a + b}
Phép trừ (15 - 4): ${a - b}
Phép nhân (15 * 4): ${a * b}
Phép chia (15 / 4): ${a / b}
Phép chia lấy dư (15 % 4): ${a % b}
-------------------------
Thử nghiệm ép kiểu:
- '10' + 20 = "${'10' + 20}" (Nối chuỗi - String concatenation)
- Number('10') + 20 = ${Number('10') + 20} (Cộng số - Number addition)`;
    }

    // --- HOẠT ĐỘNG 2: PROMPT & ALERT ---
    function runPromptExercise() {
        let rawInput = prompt("Mời bạn nhập điểm tổng kết (thang điểm 0 - 10):");
        
        if (rawInput === null) return; // Người dùng ấn Cancel

        let score = parseFloat(rawInput);

        if (isNaN(score) || score < 0 || score > 10) {
            alert("⚠️ Lỗi: Vui lòng nhập số hợp lệ từ 0 đến 10!");
            return;
        }

        let rank = "";
        let message = "";

        if (score > 8) {
            rank = "Giỏi 🌟";
            message = "Chúc mừng bạn đã đạt xuất sắc!";
        } else if (score > 6.5) {
            rank = "Khá 👍";
            message = "Chúc mừng bạn đã đạt kết quả tốt!";
        } else if (score >= 5) {
            rank = "Trung bình 📚";
            message = "Chúc mừng bạn đã đạt!";
        } else {
            rank = "Yếu ⚠️";
            message = "Rất tiếc, hãy cố gắng hơn ở học kỳ sau nhé!";
        }

        alert(`Điểm số: ${score}\nXếp loại: ${rank}\nThông báo: ${message}`);
        console.log(`[Xếp loại điểm] Điểm: ${score} -> ${rank}`);
    }

    // --- HOẠT ĐỘNG 2: KIỂM TRA TRỰC TIẾP TRÊN FORM ---
    function evaluateWebScore() {
        const inputVal = document.getElementById("webScoreInput").value;
        const output = document.getElementById("webScoreOutput");
        output.style.display = "block";

        if (inputVal.trim() === "") {
            output.textContent = "⚠️ Vui lòng nhập điểm trước khi bấm kiểm tra!";
            return;
        }

        const score = parseFloat(inputVal);

        if (isNaN(score) || score < 0 || score > 10) {
            output.textContent = "⚠️ Điểm không hợp lệ! Vui lòng nhập từ 0.0 đến 10.0.";
            return;
        }

        let rank = "";
        let note = "";

        if (score > 8) {
            rank = "Giỏi 🌟";
            note = "Chúc mừng bạn đã đạt kết quả xuất sắc!";
        } else if (score > 6.5) {
            rank = "Khá 👍";
            note = "Chúc mừng bạn đã đạt kết quả khá!";
        } else if (score >= 5) {
            rank = "Trung bình 📚";
            note = "Chúc mừng bạn đã đạt!";
        } else {
            rank = "Yếu ⚠️";
            note = "Rất tiếc, hãy cố gắng hơn!";
        }

        output.textContent = `Kết quả kiểm tra:
- Điểm nhập vào: ${score}
- Xếp loại: ${rank}
- Đánh giá: ${note}`;
    }

    // --- HOẠT ĐỘNG 3: GIẢI THÍCH LỖI LOGIC ---
    function explainBug() {
        const output = document.getElementById("bugExplanationOutput");
        output.style.display = "block";
        output.textContent = 
`[PHÂN TÍCH LUỒNG CODE TỪ AI]

1. LỖI LOGIC NẰM Ở ĐÂU?
   Trong câu lệnh: if (age = 18)
   Dấu '=' là toán tử GÁN giá trị (Assignment), không phải toán tử SO SÁNH (Comparison).

2. TẠI SAO CODE CHẠY SAI?
   - Khi chạy lệnh (age = 18), biến age bị gán lại bằng giá trị 18.
   - Biểu thức này trả về giá trị 18. Trong JavaScript, số 18 khác 0 nên được coi là "Truthy" (tương đương true).
   - Vì vậy, điều kiện if luôn luôn ĐÚNG, nhánh else không bao giờ được thực thi dù tuổi ban đầu là bao nhiêu!

3. CÁCH SỬA CHUẨN:
   Đổi '=' thành '===' (so sánh tuyệt đối cả giá trị lẫn kiểu dữ liệu):
   
   if (age === 18) {
       console.log("Bạn vừa đủ 18 tuổi!");
   } else {
       console.log("Bạn chưa đủ 18 tuổi.");
   }`;
    }
</script>

</body>
</html>
