import MenuSlideshow from '@/components/MenuSlideshow';

const dishes = [
  {
    name: 'Celebration Appetizer Board',
    description: 'A festive charcuterie and appetizer board loaded with cured meats, artisan cheeses, seasonal fruits, nuts, and gourmet crackers — perfect for any special celebration.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
  },
  {
    name: 'Shrimp Cocktail Tower',
    description: 'Chilled jumbo shrimp served in an elegant tower presentation with house-made cocktail sauce and lemon wedges — a showstopping centerpiece for your event.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=80',
  },
  {
    name: 'Slow-Roasted Prime Rib',
    description: 'Succulent prime rib slow-roasted for hours with a herb crust, served with au jus, horseradish cream, and roasted garlic mashed potatoes.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
  },
  {
    name: 'Custom Celebration Cake',
    description: 'A personalized multi-layer cake crafted to match your event theme, available in flavors like vanilla bean, red velvet, and lemon raspberry.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80',
  },
  {
    name: 'Signature Mocktail Bar',
    description: 'A curated selection of handcrafted mocktails including passion fruit spritz, cucumber mint cooler, and sparkling berry lemonade — refreshing for all ages.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1200&q=80',
  },
];

export default function SpecialOccasionsMenu() {
  return <MenuSlideshow title="Special Occasions" dishes={dishes} />;
}
