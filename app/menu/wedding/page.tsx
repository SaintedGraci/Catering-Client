import MenuSlideshow from '@/components/MenuSlideshow';

const dishes = [
  {
    name: 'Garden Fresh Salad',
    description: 'A vibrant mix of seasonal greens, cherry tomatoes, candied walnuts, and goat cheese drizzled with a honey-lemon vinaigrette — the perfect elegant starter for your wedding reception.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80',
  },
  {
    name: 'Herb-Roasted Chicken',
    description: 'Tender free-range chicken slow-roasted with rosemary, thyme, and garlic butter, served alongside creamy mashed potatoes and seasonal vegetables.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=1200&q=80',
  },
  {
    name: 'Beef Tenderloin',
    description: 'Premium cut beef tenderloin cooked to perfection, served with a rich red wine reduction, truffle mashed potatoes, and asparagus spears.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=80',
  },
  {
    name: 'Pan-Seared Salmon',
    description: 'Atlantic salmon fillet with a lemon-dill cream sauce, served over wild rice pilaf and sautéed spinach — a light yet luxurious choice for your guests.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&q=80',
  },
  {
    name: 'Wedding Dessert Platter',
    description: 'A curated dessert selection featuring mini wedding cake slices, macarons, chocolate truffles, and fresh berry tarts — beautifully presented for your celebration.',
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=1200&q=80',
  },
];

export default function WeddingMenu() {
  return <MenuSlideshow title="Wedding Menus" dishes={dishes} />;
}
