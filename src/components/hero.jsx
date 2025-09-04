export default function Hero() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Phần Mềm Giáo Dục
          <span className="text-primary"> Chính Chủ</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Cung cấp các phần mềm giáo dục và công cụ làm việc hàng đầu với giá
          tốt nhất thị trường. Uy tín - Chất lượng - Hỗ trợ 24/7
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Xem sản phẩm
          </button>
          <button
            size="lg"
            variant="outline"
            className="border-border hover:bg-muted bg-transparent"
          >
            Liên hệ tư vấn
          </button>
        </div>

       
      </div>
    </section>
  );
}
