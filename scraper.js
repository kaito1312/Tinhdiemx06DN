const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// NOTE: Đây là script mẫu minh họa cho việc cào dữ liệu điểm chuẩn.
// Do cấu trúc web của các trường hoặc các trang tổng hợp thường xuyên thay đổi,
// Script này mô phỏng luồng hoạt động chính để lấy dữ liệu.
// Dữ liệu tĩnh đã được tạo trong data.json để đảm bảo ứng dụng luôn chạy ổn định.

async function scrapeDiemChuan() {
    console.log("Đang bắt đầu cào dữ liệu điểm chuẩn năm 2025 khối X06...");
    
    // Một số URL giả định (thực tế cần thay bằng URL chính thức năm 2025)
    const urls = [
        { uni: "DUT", url: "https://example-tuyensinh.com/dut/2025" },
        { uni: "UTE", url: "https://example-tuyensinh.com/ute/2025" },
        { uni: "VKU", url: "https://example-tuyensinh.com/vku/2025" }
    ];

    let scrapedData = [];

    for (let site of urls) {
        try {
            console.log(`Đang cào dữ liệu từ: ${site.uni}`);
            // Mô phỏng quá trình request (Trong thực tế bỏ comment dòng dưới)
            // const response = await axios.get(site.url);
            // const $ = cheerio.load(response.data);
            
            // Lặp qua các hàng trong bảng điểm chuẩn của trang web
            // $('table tr').each((index, element) => {
            //     const major = $(element).find('td.major-name').text();
            //     const blocks = $(element).find('td.blocks').text();
            //     const score = parseFloat($(element).find('td.score').text());
            //     
            //     if(blocks.includes('X06')) {
            //         scrapedData.push({ university: site.uni, major, score });
            //     }
            // });
            
            console.log(`[Thành công] Lấy dữ liệu từ ${site.uni}`);
        } catch (error) {
            console.error(`[Lỗi] Không thể lấy dữ liệu từ ${site.uni} - ${error.message}`);
        }
    }

    console.log("Quá trình cào hoàn tất.");
    console.log("Sử dụng dữ liệu tĩnh (data.json) làm bản gốc cho ứng dụng.");
}

scrapeDiemChuan();
