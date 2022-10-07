// các ảnh ở section 1
import {
    ANH1, ANH2, ANH3, ANH4, ANH5, ANH6, ANH7,
    ICON1, ICON2, ICON3, ICON4, ICON5, ICON6, ICON8,  
} from '../../assets';

// nội dung, ảnh của các column section 1, mỗi đối tượng là một column
const COLUMNS_SECTION_1 = [
    {
        image: ANH1,
        title: "Tiết kiệm thời gian ",
        text: "SSPA giúp bạn tiết kiệm thời gian tổng hợp công nợ, tính lương, nhắc lịch, CSKH... Hãy dành thời gian đó để gia doanh số & trải nghiệm KH."
    },
    {
        image: ANH2,
        title: "Quản lý chuyên sâu",
        text: "SSPA có các tính năng phù hợp và chuyên sâu cho spa. Giúp xây dựng quy trình tự động hóa spa"
    },
    {
        image: ANH3,
        title: "Dễ dàng sử dụng",
        text: "SSPA có các tính năng phù hợp và chuyên sâu cho spa. Giúp xây dựng quy trình tự động hóa spa"
    }
];

// nội dung, ảnh của các column section 2 và 3, mỗi đối tượng là một section
const SECTIONS_2_3 = [
    {
        COLUMNS: [
            {
                icon: ICON1,
                title: "Quản lý nhân viên",
                text: "Chấm công & tính lương nhân viên theo lương cơ bản, hoa hồng dịch vụ, cùng phụ cấp, tiền thưởng"
            },
            {
                icon: ICON2,
                title: "Quản lý lịch hẹn",
                text: `Đặt lịch hẹn Online qua App khách hàng <br>
                Theo dõi tình trạng đã đến, chưa đến, không đến <br>
                Theo dõi kỹ thuật viên thực hiện dịch vụ <br>
                Quản lý lịch hẹn với khách hàng <br>
                Tự động nhắc nhở theo thời gian…`
            },
            {
                icon: ICON3,
                title: "Quản lý liệu trình",
                text: "Thay thế thẻ liệu trình giấy, tự động nhắc lịch, xem tiến trình và thông tin từng lịch hẹn trong thẻ"
            }
        ]
    },
    {
        COLUMNS: [
            {
                icon: ICON4,
                title: "Quản lý chuỗi spa",
                text: `Đặt lịch hẹn Online qua App khách hàng
                Theo dõi tình trạng đã đến, chưa đến, không đến
                Theo dõi kỹ thuật viên thực hiện dịch vụ
                Quản lý lịch hẹn với khách hàng
                Tự động nhắc nhở theo thời gian…`
            },
            {
                icon: ICON5,
                title: "Báo cáo tổng hợp",
                text: `Biểu đồ thống kê tổng doanh thu, lợi nhuận. <br>
                Thống kê báo cáo chi tiết doanh thu rõ ràng theo nhân viên, theo khách hàng, theo dịch vụ, sản phẩm`
            },
            {
                icon: ICON6,
                title: "Chấm công, tính lương",
                text: `Tính hoa hồng nhân viên theo từng lần làm dịch vụ. <br>
                Chấm công & tính lương theo doanh số`
            },
        ]
    }
];

// nội dung, ảnh của các column section 4, mỗi đối tượng là một column
const COLUMNS_SECTIONS_4 = [
    {
        icon: ICON8,
        image: ANH4,
        title: "Quản lý spa và thẩm mỹ viện",
        paragraphs: [
            "Tiết kiệm tối đa thời gian bán hàng, tính tiền, xuất hóa đơn chỉ trong vài bước",
            "Tăng trưởng doanh thu và quản lý bán hàng online hiệu quả trên sàn TMĐT, facebook, instagram toàn diện",
            "Phần mền quản lý bán hàng giúp theo dõi báo cáo kinh doanh, lãi lỗ và quản lý của hàng mọi lúc mọi nơi"
        ]
    },
    {
        icon: ICON8,
        image: ANH5,
        title: "Nhà phân phối và chủ spa",
        paragraphs: [
            "Lên order, tính tiền tự động, thanh toán đa phương thức, và in hóa đơn chuyên nghiệp",
            "Đồng bộ đơn hàng, bán hàng hiệu quả trên các bán online: Web Order, Grabfood",
            "Phần mền quản lý nhad hàng giúp theo dõi đã tồn kho nguyên vật liệu, doanh thu, lãi lỗ chính xác"
        ]
    },
    {
        icon: ICON8,
        image: ANH6,
        title: "Phần mềm quản lý đa nền tảng",
        paragraphs: [
            "Bán hàng và quản lý đồng bộ tất cả kênh bán hàng từ của hàng, website, mạng xã hội đến các sàn TMĐT",
            "Tối ưu kinh doanh với tính năng quản lý bán hàng đa sàn và thiết kế website bán hàng chuyên nghiệp",
            "Theo dõi quảng cáo, đánh giá và so sánh hiệu quả kinh doanh chi tiết của các kênh"
        ]
    },
];

export {COLUMNS_SECTION_1, SECTIONS_2_3, COLUMNS_SECTIONS_4, ANH7}