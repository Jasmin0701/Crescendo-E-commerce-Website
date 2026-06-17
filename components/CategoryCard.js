import Link from 'next/link';
import './CategoryCard.css';

export default function CategoryCard({ title, description, image, link }) {
  return (
    <div className="category-card">
      <div className="category-content">
        <h3 className="category-title">{title}</h3>
        <p className="category-desc">{description}</p>
        <Link href={link} className="category-link">View {title} &gt;</Link>
      </div>
      <div className="category-image-wrapper">
        <img src={image} alt={title} className="category-image" />
      </div>
    </div>
  );
}
