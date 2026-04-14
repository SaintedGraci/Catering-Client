import MenuSlideshow from '@/components/MenuSlideshow';

const dishes = [
  {
    name: 'Welcome Reception Spread',
    description: 'A grand welcome spread featuring passed hors d\'oeuvres, a live carving station, and an elegant display of seasonal appetizers — setting the tone for an unforgettable event.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  },
  {
    name: "Chef's Table Experience",
    description: 'An intimate multi-course dining experience curated by our executive chef, featuring locally sourced ingredients and seasonal flavors presented with fine dining elegance.',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80',
  },
  {
    name: 'Seafood Extravaganza',
    description: 'A lavish seafood station featuring lobster tails, king crab legs, oysters on the half shell, and grilled scallops — the ultimate luxury dining experience.',
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1200&q=80',
  },
  {
    name: 'Wine & Cheese Pairing',
    description: 'A curated selection of premium wines paired with artisan cheeses, accompanied by our sommelier\'s tasting notes and recommendations for each pairing.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80',
  },
  {
    name: 'Dessert Extravaganza',
    description: 'A spectacular dessert display featuring a chocolate fountain, crêpe station, gelato bar, and an assortment of petit fours — the perfect grand finale to your event.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=80',
  },
];

export default function FullServiceMenu() {
  return <MenuSlideshow title="Full Service Experience" dishes={dishes} />;
}
