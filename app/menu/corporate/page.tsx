import MenuSlideshow from '@/components/MenuSlideshow';

const dishes = [
  {
    name: 'Gourmet Sandwich Platter',
    description: 'An assortment of artisan sandwiches including turkey avocado, caprese, and roast beef on freshly baked breads — ideal for business lunches and team meetings.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80',
  },
  {
    name: 'Caesar Salad Station',
    description: 'Classic Caesar salad with house-made dressing, shaved parmesan, and garlic croutons. A crowd-pleasing option that keeps your team energized throughout the day.',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=1200&q=80',
  },
  {
    name: 'Pasta Buffet',
    description: 'A selection of penne arrabbiata, fettuccine alfredo, and pesto farfalle served with garlic bread — a hearty and satisfying option for large corporate gatherings.',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&q=80',
  },
  {
    name: 'Executive Bento Box',
    description: 'Individually portioned bento boxes with grilled protein, seasonal sides, and a fresh fruit cup — perfect for seated corporate dinners and formal presentations.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80',
  },
  {
    name: 'Coffee & Pastry Break',
    description: 'Premium coffee, assorted teas, and a selection of croissants, muffins, and Danish pastries — the perfect mid-meeting refreshment to keep productivity high.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
  },
];

export default function CorporateMenu() {
  return <MenuSlideshow title="Corporate Menus" dishes={dishes} />;
}
