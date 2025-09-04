import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-180 h-90 object-center"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm">
          {product.description}
        </p>

        <div className="space-y-3 mb-4">
          {product.prices.map((price, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted rounded-lg"
            >
              <div>
                <span className="font-medium text-card-foreground">
                  {price.duration}
                </span>
                {price.popular && (
                  <div className="ml-2 bg-primary text-primary-foreground">
                    Phổ biến
                  </div>
                )}
              </div>
              <span className="text-lg font-bold text-primary">
                {price.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-card-foreground mb-2">Tính năng:</h4>
          <ul className="space-y-1">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.facebook.com/quang.kana"
            className="w-full border border-sky-400 text-sky-500 
             hover:bg-sky-100 hover:text-sky-600 
             text-center block rounded-md py-2 transition-colors"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </div>
  );
}
