import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import FeaturesSection from '@/components/FeaturesSection';
import productsData from '@/data/products.json';
import Link from 'next/link';
import './page-styles.css';

export default function Home() {
  const featuredProducts = productsData.slice(0, 3);
  
  const categories = [
    {
      id: 'cat1',
      title: 'Speaker',
      description: 'Morbi justo sem, venenatis sit amet tortor id, porttitor facilisis metus. Ut scelerisque mauris.',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
      link: '/products?category=Speakers'
    },
    {
      id: 'cat2',
      title: 'Accessories',
      description: 'Morbi justo sem, venenatis sit amet tortor id, porttitor facilisis metus. Ut scelerisque mauris.',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80',
      link: '/products?category=Accessories'
    },
    {
      id: 'cat3',
      title: 'Wireless Charger',
      description: 'Morbi justo sem, venenatis sit amet tortor id, porttitor facilisis metus. Ut scelerisque mauris.',
      image: 'https://images.unsplash.com/photo-1622445270947-44ff56b11200?w=500&q=80',
      link: '/products?category=Wireless Charger'
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      
      <section className="featured-products container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <Link href="/products" className="btn btn-primary">See All Products</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="shop-by-category container">
        <div className="section-header">
          <h2 className="section-title">Shop By Category</h2>
          <div className="category-controls">
            <button className="control-btn" aria-label="Previous">&larr;</button>
            <button className="control-btn" aria-label="Next">&rarr;</button>
          </div>
        </div>
        <div className="category-grid">
          {categories.map(category => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </section>

      <FeaturesSection />
    </div>
  );
}
