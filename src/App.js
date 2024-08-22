import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';

const App = () => {
  const categories = [
    { title: "Mobiles", image: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" },
    { title: "Electronics", image: "https://rukminim2.flixcart.com/image/400/400/data-cable/hdmi-cable/6/s/j/bluerigger-15ft-4-5m-cl3-rated-for-in-wall-installation-original-imaefxwvadcm3wtg.jpeg?q=70" },
    { title: "Fashion", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/x/o/5-rosy-1-lilac-pink-5-vokline-lalic-pink-original-imah3xtnehpd6snq.jpeg?q=70" },
    { title: "Appliances", image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100" },
    { title: "Furniture", image: "https://rukminim2.flixcart.com/image/300/300/k6fd47k0/dining-set/b/a/h/6-seater-na-rosewood-sheesham-afk-79-abishaka-decor-warm-original-imafzvx6zryuz6zs.jpeg?q=70" },
    { title: "Beauty & Personal Care", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/o/f/s/-original-imagzgj3rrwcakr2.jpeg?q=70" },
    { title: "Sports & Fitness", image: "https://rukminim2.flixcart.com/image/400/400/k31wosw0/bar/s/8/b/pushup-bar-for-pushup-s-with-foam-grip-handle-medium-2-monika-original-imafm9h2ry8rkuvj.jpeg?q=70" },
    { title: "Books", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/k/h/e/pali-akhharmala-part-1-palipathmala-part-2-pali-susma-part-3-original-imagxx8788rxkc8a.jpeg?q=70" },
    { title: "Toys", image: "https://rukminim2.flixcart.com/image/312/312/xif0q/block-construction/l/5/a/best-buy-happy-house-building-blocks-creative-learning-toy-original-imagmxmx8fd4g8wz.jpeg?q=70" },
    { title: "Home Decor", image: "https://rukminim2.flixcart.com/image/612/612/k7dnonk0/sticker/h/2/z/heart-design-switch-board-medium-25-dbbb0041-decor-villa-original-imafpmyc8zjhkakg.jpeg?q=70" },
    { title: "Groceries", image: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" },
    { title: "Automobiles", image: "https://rukminim2.flixcart.com/image/612/612/l1zc6fk0/car-cover/o/s/x/no-autorickshaw-body-cover-for-all-bajaj-tvs-piaggio-atul-ape-original-imagdf2ysaecvpp4.jpeg?q=70" },
  ];

  const products = [
    { title: "iPhone 12", price: 999, image: "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70" },
    { title: "Samsung Galaxy S21", price: 799, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/7/g/-original-imahfayjzknzk9hx.jpeg?q=70" },
    { title: "OnePlus 9", price: 729, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/y/-original-imagdhtmgbg6vyrd.jpeg?q=70" },
    { title: "Sony Bravia TV", price: 499, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/i/8/0/-original-imah2dzwa44rbqds.jpeg?q=70" },
    { title: "Nike Running Shoes", price: 149, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/o/s/-original-imah2czkmxnvd4nv.jpeg?q=70" },
    { title: "Adidas T-shirt", price: 29, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/w/t/-original-imahfxuyexcnrkvf.jpeg?q=70" },
    { title: "Apple Watch Series 6", price: 399, image: "https://rukminim2.flixcart.com/image/612/612/kfeamq80/smartwatch/e/9/g/ios-m09f3hn-a-apple-original-imafvvhsm9gncwwa.jpeg?q=70" },
    { title: "Philips Mixer Grinder", price: 79, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mixer-grinder-juicer/l/m/s/-original-imagm6z62qk8kztv.jpeg?q=70" },
    { title: "Levi's Jeans", price: 59, image: "https://rukminim2.flixcart.com/image/612/612/k0bbb0w0/jean/d/t/q/32-65504-0457-levi-s-original-imafjuvn9z4krykh.jpeg?q=70" },
    { title: "Wooden Coffee Table", price: 199, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/v/k/g/50-mdf-50-5-modern-minimalist-style-furniture-for-living-room-original-imahyukq8vpgwceg.jpeg?q=70" },
    { title: "Oppo Reno 6", price: 499, image: "https://rukminim2.flixcart.com/image/312/312/kr2e3680/mobile/4/1/p/reno6-5g-cph2251-oppo-original-imag4xp8y9647cgg.jpeg?q=70" },
    { title: "Canon DSLR Camera", price: 649, image: "https://rukminim2.flixcart.com/image/312/312/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70" },
    { title: "Dumbbells Set", price: 69, image: "https://rukminim2.flixcart.com/image/612/612/l0r1j0w0/dumbbell/p/a/b/4kg-to-22kg-dumbell-set-combo-home-gym-adjustable-dumbbell-black-original-imagch4kyf6eukw8.jpeg?q=70" },
    { title: "Harry Potter Book Set", price: 89, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/x/0/5/harry-potter-1-3-box-set-a-magical-adventure-begins-original-imagyjpj6hthtm6z.jpeg?q=70" },
    { title: "Lego Toy Set", price: 49, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/block-construction/y/n/r/200-pcs-bricks-toys-sets-with-wheel-lego-blocks-educational-toys-original-imah3djbxftmeamw.jpeg?q=70" },
    { title: "Music Set", price: 49, image: "https://rukminim2.flixcart.com/image/300/300/j8ndea80/acoustic-guitar/s/c/d/38c-red-juarez-original-imaeymghzyx9rg9h.jpeg?q=70" },
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="pt-4">
        <Carousel />
      </div>
      <div className="p-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Shop by Categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mb-12">
          {categories.map(category => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Trending Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
