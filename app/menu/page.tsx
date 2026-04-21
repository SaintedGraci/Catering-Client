import Navigation from '../components/Navigation';

export default function Menu() {
  const menuItems = [
    { category: 'Appetizers', items: ['Bruschetta', 'Stuffed Mushrooms', 'Shrimp Cocktail'] },
    { category: 'Main Courses', items: ['Grilled Salmon', 'Beef Tenderloin', 'Vegetarian Pasta'] },
    { category: 'Desserts', items: ['Tiramisu', 'Chocolate Cake', 'Fruit Tart'] },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Menu</h1>
          
          <div className="space-y-8">
            {menuItems.map((section) => (
              <div key={section.category} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-amber-600">{section.category}</h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-gray-700 text-lg">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
