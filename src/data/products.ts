import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'The Great Gatsby',
    price: 1349,
    originalPrice: 2299,
    image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F587de0aa-6282-4589-9af9-bf0f84ff85f5_2774x2774.jpeg',
    category: 'fiction',
    description: 'F. Scott Fitzgerald\'s masterpiece about the Jazz Age and the American Dream. A timeless classic that explores themes of wealth, love, and moral decay.',
    rating: 4.8,
    reviewCount: 2156,
    inStock: true,
    featured: true,
    tags: ['classic', 'american literature', 'jazz age']
  },
  {
    id: '2',
    name: 'To Kill a Mockingbird',
    price: 1649,
    image: 'https://blattzirkus.wordpress.com/wp-content/uploads/2017/05/to-kill-a-mockingbird-banner.png',
    category: 'fiction',
    description: 'Harper Lee\'s Pulitzer Prize-winning novel about racial injustice and childhood innocence in the American South.',
    rating: 4.9,
    reviewCount: 3289,
    inStock: true,
    featured: true,
    tags: ['classic', 'pulitzer prize', 'social justice']
  },
  {
    id: '3',
    name: 'Dune',
    price: 1599,
    image: 'https://images.squarespace-cdn.com/content/v1/5e08337a5096316889b19963/1598823184128-3CYUPMM7173C24CF0PK8/IMG_7917.PNG',
    category: 'science-fiction',
    description: 'Frank Herbert\'s epic science fiction masterpiece set on the desert planet Arrakis. A complex tale of politics, religion, and ecology.',
    rating: 4.7,
    reviewCount: 1834,
    inStock: true,
    featured: true,
    tags: ['sci-fi', 'epic', 'space opera']
  },
  {
    id: '4',
    name: 'Pride and Prejudice',
    price: 1249,
    image: 'https://m.media-amazon.com/images/I/71QlyxnQrDL._UF1000,1000_QL80_.jpg',
    category: 'romance',
    description: 'Jane Austen\'s beloved romantic novel about Elizabeth Bennet and Mr. Darcy. A witty exploration of love, class, and social expectations.',
    rating: 4.8,
    reviewCount: 2967,
    inStock: true,
    featured: false,
    tags: ['romance', 'classic', 'british literature']
  },
  {
    id: '5',
    name: 'The Catcher in the Rye',
    price: 1799,
    image: 'https://onlinebooksoutlet.com/cdn/shop/products/the-catcher-in-the-rye-book-buy-onlinebooksoutlet.webp?v=1748526371',
    category: 'fiction',
    description: 'J.D. Salinger\'s controversial coming-of-age story following Holden Caulfield through New York City.',
    rating: 4.2,
    reviewCount: 1678,
    inStock: false,
    featured: false,
    tags: ['coming of age', 'controversial', 'modern classic']
  },
  {
    id: '6',
    name: 'Sapiens: Brief History of Humankind', 
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.blinkist.io/images/books/559266ac6561380007da0000/1_1/470.jpg',
    category: 'non-fiction',
    description: 'Yuval Noah Harari\'s fascinating exploration of human history from the Stone Age to the present day.',
    rating: 4.6,
    reviewCount: 4512,
    inStock: true,
    featured: true,
    tags: ['history', 'anthropology', 'bestseller']
  },
  {
    id: '7',
    name: 'The Hobbit',
    price: 2599,
    image: 'https://m.media-amazon.com/images/I/81uEDUfKBZL.jpg',
    category: 'fantasy',
    description: 'J.R.R. Tolkien\'s enchanting tale of Bilbo Baggins and his unexpected journey to the Lonely Mountain.',
    rating: 4.9,
    reviewCount: 3456,
    inStock: true,
    featured: false,
    tags: ['fantasy', 'adventure', 'tolkien']
  },
  {
    id: '8',
    name: 'Educated',
    price: 1949,
    image: 'https://southblueprint.com/wp-content/uploads/2020/04/IMG_7886-900x675.jpg',
    category: 'memoir',
    description: 'Tara Westover\'s powerful memoir about education, family, and the struggle between loyalty and independence.',
    rating: 4.7,
    reviewCount: 2834,
    inStock: true,
    featured: true,
    tags: ['memoir', 'education', 'family']
  },
  {
    id: '9',
    name: '1984',
    price: 2149,
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/140207174014-george-orwells-1984-s023030360.jpg?q=x_0,y_0,h_1080,w_1920,c_fill/w_1280',
    category: 'dystopian',
    description: 'George Orwell\'s chilling dystopian masterpiece about totalitarianism and the power of language.',
    rating: 4.8,
    reviewCount: 5678,
    inStock: true,
    featured: true,
    tags: ['dystopian', 'political', 'orwell']
  },
  {
    id: '10',
    name: 'The Silent Patient',
    price: 1749,
    image: 'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/50/2020/07/Well-do-th-repairs-for-you.png',
    category: 'thriller',
    description: 'Alex Michaelides\' gripping psychological thriller about a woman who refuses to speak after allegedly murdering her husband.',
    rating: 4.5,
    reviewCount: 1923,
    inStock: true,
    featured: false,
    tags: ['thriller', 'psychological', 'mystery']
  }
];

export const categories = [
  { id: 'all', name: 'All Books', icon: 'BookOpen', count: products.length },
  { id: 'fiction', name: 'Fiction', icon: 'Book', count: products.filter(p => p.category === 'fiction').length },
  { id: 'non-fiction', name: 'Non-Fiction', icon: 'GraduationCap', count: products.filter(p => p.category === 'non-fiction').length },
  { id: 'science-fiction', name: 'Sci-Fi', icon: 'Rocket', count: products.filter(p => p.category === 'science-fiction').length },
  { id: 'romance', name: 'Romance', icon: 'Heart', count: products.filter(p => p.category === 'romance').length },
  { id: 'fantasy', name: 'Fantasy', icon: 'Wand2', count: products.filter(p => p.category === 'fantasy').length }
];