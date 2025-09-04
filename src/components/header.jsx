export default function Header() {
  return (
    <header className="sticky top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-2">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg"></span>
          </div>
          <span className="font-bold text-xl text-foreground">
            {" "}
            <a href="http://localhost:5173/"> Kana Shop</a>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#products"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sản phẩm
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Giới thiệu
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Liên hệ
          </a>
        </nav>

        <h3 className="text-red-500 ">
          Liên hệ facebook để được phản hồi nhanh nhất !
        </h3>
      </div>
    </header>
  );
}
