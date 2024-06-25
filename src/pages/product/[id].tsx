// src/pages/product/[id].tsx
import { GetServerSideProps } from "next";
import { useState } from "react";
import { fetchProducts } from "../services/api";
import styles from "../../styles/Product.module.css";
import { Card } from 'react-bootstrap';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
}

const ProductPage = ({ product }: { product: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <div className={styles.carousel}>
        <img
          src={product.images[currentImage]}
          alt={product.title}
          width={300}
        />
        <div>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              width={50}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const products = await fetchProducts();
  const product = products.find(
    (p: Product) => p.id === parseInt(id as string)
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
