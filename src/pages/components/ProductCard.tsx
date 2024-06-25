// components/ProductCard.tsx
import Link from 'next/link';
import { Card } from 'react-bootstrap';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <a>
        <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
};

export default ProductCard;
