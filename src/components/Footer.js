const Footer = () => (
  <footer className="bg-gray-900 text-white p-10 md:p-16 mt-8">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-lg mb-4">About</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">Contact Us</li>
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Help</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">Payments</li>
          <li className="hover:text-white cursor-pointer">Shipping</li>
          <li className="hover:text-white cursor-pointer">FAQ</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">Facebook</li>
          <li className="hover:text-white cursor-pointer">Twitter</li>
          <li className="hover:text-white cursor-pointer">Instagram</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Policy</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="hover:text-white cursor-pointer">Return Policy</li>
          <li className="hover:text-white cursor-pointer">Terms of Use</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p className="text-center md:text-left">© 2024 Flipkart Clone - Made with ❤️ by Nitin Bharti</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img src="https://www.nettikasinot.org/wp-content/uploads/2023/03/visa-kasinot-logo-suuri.png" alt="Visa" className="w-10 h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" className="w-10 h-6" />
          <img src="https://avatars.githubusercontent.com/u/476675?s=280&v=4" alt="PayPal" className="w-10 h-6" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
