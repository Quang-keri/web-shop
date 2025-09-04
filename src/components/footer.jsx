export default function Footer() {
  return (
    <footer id="contact" className="bg-muted py-16 px-4">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-foreground">
                Kana shop
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Chuyên cung cấp các phần mềm giáo dục và công cụ làm việc chính
              chủ với giá tốt nhất thị trường. Uy tín - Chất lượng - Hỗ trợ tận
              tình.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Zalo
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Sản phẩm</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Quizlet Plus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ChatGPT Plus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Wordwall Pro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Canva Pro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>📧 FB-1: <a href="https://www.facebook.com/quang.kana"> Kana Shop</a> </li>
              <li>
                📧 FB-2:<a href="https://www.facebook.com/profile.php?id=61558433367473"> Kana Shop 2</a> 
              </li>
            
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Kana Shop. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
