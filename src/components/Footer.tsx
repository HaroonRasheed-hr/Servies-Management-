import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="hero-gradient text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-sm">S</span>
            </div>
            <span className="font-heading font-bold text-xl">Servico</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Your trusted platform for finding and booking professional home services.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Cleaning</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Plumbing</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Painting</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">House Shifting</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/login" className="hover:opacity-100 transition-opacity">Partner With Us</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-50">
        © 2026 Servico. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
