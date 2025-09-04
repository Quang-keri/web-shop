import ProductCard from "./product-card";
import quizlet from "../assets/img/quizlet-logo.png";
import gpt from "../assets/img/chatgpt.png";
import canva from "../assets/img/canva.png";
import wordwall from "../assets/img/wordwall.png";

const products = [
  {
    id: 1,
    name: "Quizlet Plus",
    image: quizlet,
    prices: [
      { duration: "1 năm", price: "220,000đ", popular: false },
      { duration: "1 tháng", price: "15,000đ", popular: false },
    ],
    features: ["Không giới hạn flashcards, hỗ trợ hình ảnh"],
  },
  {
    id: 2,
    name: "ChatGPT Plus",

    image: gpt,
    prices: [{ duration: "1 tháng", price: "365,000đ", popular: false }],
    features: ["GPT-4 không giới hạn, phản hồi nhanh"],
  },
  {
    id: 3,
    name: "Wordwall Pro",

    image: wordwall,
    prices: [{ duration: "1 tháng", price: "70,000đ", popular: false }],
    features: ["Không giới hạn game, template đa dạng"],
  },
  {
    id: 4,
    name: "Wordwall Standard",

    image: wordwall,
    prices: [{ duration: "1 tháng", price: "50,000đ", popular: false }],
    features: ["Chia sẻ link ,các loại game cho học sinh"],
  },
  {
    id: 5,
    name: "Canva Pro",

    image: canva,
    prices: [{ duration: "1 tháng", price: "25,000đ", popular: false }],
    features: ["Template premium, font chữ đa dạng"],
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-1 px-1">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Các phần mềm giáo dục được tin dùng nhất hiện nay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
