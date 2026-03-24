import { useState } from 'react'
import { Phone, Mail, MapPin, ChevronRight, CheckCircle2, Shield, Settings, Laptop, Lightbulb, Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import logo from './assets/images/logo.png'
import whatsappIcon from './assets/images/whatsapp.svg'
import floorTopImg from './assets/images/floor_top_counter.png'
import desktopImg from './assets/images/desktop_counter.png'
import looseNoteImg from './assets/images/loose_note_counter.png'
import heroBg from './assets/images/hero_bg.png'
import sk105Img from './assets/images/sk_105.png'
import sk555Img from './assets/images/sk_555.png'
import sk555aImg from './assets/images/sk_555a.png'
import sk5Img from './assets/images/sk_5.png'
import sk25Img from './assets/images/sk_2_5.png'
import sk25bImg from './assets/images/sk_2_5b.png'

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const requirement = e.target[2].value;
    const body = `Name: ${name}%0AEmail: ${email}%0ARequirement:%0A${requirement}`;
    window.location.href = `mailto:boas0509@gmail.com?subject=Website Inquiry from ${name}&body=${body}`;
  };

  const products = [
    {
      id: 'ft55',
      name: 'Floor Top Currency Counting Machine',
      model: 'SK-FT55',
      image: floorTopImg,
      specs: [
        'Feed Method: Vacuum Type',
        'Counting Speed: 100 pcs in 3 sec',
        'Dimension: 350mm x 450mm x 795mm',
        'Hopper Capacity: 200 pcs',
        'Power Consumption: 450 Watts',
        'Silent and Reliable'
      ]
    },
    {
      id: 'd50',
      name: 'Desktop Currency Counting Machine',
      model: 'SK-D50',
      image: desktopImg,
      specs: [
        'Feed Method: Vacuum Type',
        'Counting Speed: 100 pcs in 3 sec',
        'Dimension: 350mm x 450mm x 240mm',
        'Hopper Capacity: 200 pcs',
        'Automatic Start/Stop',
        'Extra Reset Function'
      ]
    },
    {
      id: 'sk15',
      name: 'Loose Note Counting Machine',
      model: 'SK-15',
      image: looseNoteImg,
      specs: [
        'Automatic start, stop and clear',
        'UV, MG, IR detection',
        'Counting Speed: 1000 pcs/min',
        'Hopper/Stacker: 200/200 pcs',
        'Semi value counting for INR',
        'Software update via RS-232'
      ]
    },
    {
      id: 'sk105',
      name: 'Currency Authentication & Sorting Machine',
      model: 'SK-105',
      image: sk105Img,
      specs: [
        'Multi-currency counting & sorting',
        'Advanced fake note detection',
        'High-speed processing',
        'User-friendly interface',
        'Heavy-duty industrial build'
      ]
    },
    {
      id: 'sk555',
      name: '32 Inch Digital Wall Mount Display',
      model: 'SK-555',
      image: sk555Img,
      specs: [
        'Screen Size: 32"',
        'Resolution: 1920 x 1080',
        'Brightness: 400 cd/m2',
        'Connectivity: Pen drive, Wifi, Ethernet',
        'MS Iron Frame',
        '1 Year Warranty'
      ]
    },
    {
      id: 'sk555a',
      name: 'Rechargable LED Table Top Stand',
      model: 'SK-555A',
      image: sk555aImg,
      specs: [
        'Size: A4',
        'Type: Rechargeable LED',
        'Material: Metal, Tempered Glass',
        'Mounting: Tabletop Mount',
        'Ideal for Restaurants & Cafes',
        'Long battery life'
      ]
    },
    {
      id: 'sk5',
      name: 'Fake Note Detector LED',
      model: 'SK-5',
      image: sk5Img,
      specs: [
        'Power consumption: 11W max',
        'Magnifying glass: 140x60mm',
        'Dimmer: Adjustment of neon intensity',
        'Strong metal cabinet'
      ]
    },
    {
      id: 'sk25',
      name: 'Fake Note Detector LED',
      model: 'SK-2.5',
      image: sk25Img,
      specs: [
        'Power Voltage: DC5V-1 AMP',
        'Power Consumption: 3W',
        'Ultraviolet Light Detects security Threads',
        'White Light for Watermark verification',
        'Compact and professional design'
      ]
    },
    {
      id: 'sk25b',
      name: 'Fake Note Detector LED',
      model: 'SK-2.5b',
      image: sk25bImg,
      specs: [
        'Power Voltage: DC5V-1 AMP',
        'Power Consumption: 3W',
        'Rechargeable lithium battery inside for portable usage',
        'Ultraviolet Light Detects security Threads',
        'Built-in magnifier for micro-print verification'
      ]
    }
  ]

  const services = [
    { title: 'Currency Authentication', icon: <Shield className="w-8 h-8" /> },
    { title: 'CCTV Security Systems', icon: <Settings className="w-8 h-8" /> },
    { title: 'Kiosk & Digital Advertising', icon: <Laptop className="w-8 h-8" /> },
    { title: 'LED Lights Solutions', icon: <Lightbulb className="w-8 h-8" /> },
    { title: 'IT Solution & Software', icon: <CheckCircle2 className="w-8 h-8" /> }
  ]

  const whatsappLink = "https://wa.me/917880003565"

  return (
    <div className="app">
      <motion.div style={{ scaleX, position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: '#c19a6b', originX: 0, zIndex: 2000 }} />
      {/* Header */}
      <nav className="header" style={{ position: 'fixed', top: 0, width: '100%', background: '#fff', zIndex: 1000, padding: '10px 0', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={logo} alt="BOAS Logo" style={{ height: '40px' }} />
            <div style={{ lineHeight: 1.1 }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1a2a4e' }}>BOAS</span><br/>
              <span className="mobile-hide" style={{ fontSize: '0.6rem', color: '#666', fontWeight: 500 }}>Bank & Retail Automation</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="nav-links mobile-hide" style={{ display: 'flex', gap: '20px', fontWeight: 600 }}>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#25D366', borderColor: '#25D366', padding: '8px 15px', fontSize: '0.85rem' }}>
              <img src={whatsappIcon} alt="WhatsApp" style={{ width: '16px', height: '16px', filter: 'brightness(0) invert(1)' }} /> <span className="mobile-hide">Chat with Us</span>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: '#1a2a4e', cursor: 'pointer', padding: '5px' }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mobile-menu-dropdown"
            style={{ background: '#fff', padding: '20px', borderTop: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '15px', fontWeight: 600 }}
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="hero section" style={{ marginTop: '60px', color: '#fff', position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        {/* Animated Background */}
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '120%', 
            height: '120%', 
            background: 'linear-gradient(135deg, #1a2a4e 0%, #2c4176 50%, #1a2a4e 100%)', 
            zIndex: -1,
            filter: 'blur(5px)'
          }} 
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ fontSize: 'min(4.5rem, 11vw)', color: '#fff', marginBottom: '20px', fontWeight: 800, textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
            >
              Advance Banking & <br/><span style={{ color: '#c19a6b' }}>Retail Automation</span>
            </motion.h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px', opacity: 0.9, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Industry Leading Excellence. Precision engineered currency solutions for modern banking needs. Reliable, accurate, and high-performance automation.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#products" className="btn btn-accent" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>Explore Products</a>
              <a href="#contact" className="btn" style={{ border: '1px solid #fff', color: '#fff', fontSize: '1.1rem', padding: '15px 40px' }}>Get a Quote</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.div 
        className="stats container" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'flex', justifyContent: 'space-around', padding: '40px 0', background: '#fff', marginTop: '-40px', borderRadius: '15px', position: 'relative', zIndex: 2, boxShadow: 'var(--shadow)', flexWrap: 'wrap', gap: '20px' }}
      >
        {[ {lab: 'Years Experience', val: '15+'}, {lab: 'Products', val: '20+'}, {lab: 'Happy Clients', val: '500+'}, {lab: 'Service Support', val: '24/7'} ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: '120px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>{s.val}</h3>
            <p style={{ color: '#666' }}>{s.lab}</p>
          </div>
        ))}
      </motion.div>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Our Featured Products</h2>
            <div style={{ height: '4px', width: '60px', background: '#c19a6b', margin: '0 auto 20px' }}></div>
            <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto' }}>Leading the market with high-performance machines designed for durability and extreme accuracy.</p>
          </div>

          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {products.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }} 
                style={{ background: '#fff', border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ padding: '20px', background: '#f8f9fa', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={p.image} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{ background: '#1a2a4e', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>{p.model}</span>
                  </div>
                  <h3 style={{ marginBottom: '15px', fontSize: '1.25rem', minHeight: '3em' }}>{p.name}</h3>
                  <ul style={{ marginBottom: '25px', flex: 1 }}>
                    {p.specs.map((s, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#555', marginBottom: '8px', lineHeight: '1.4' }}>
                        <CheckCircle2 size={14} style={{ color: '#c19a6b', marginTop: '3px', flexShrink: 0 }} /> {s}
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ textAlign: 'center', fontSize: '0.9rem' }}>Inquire Now</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ background: '#f0f2f5' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2>Comprehensive Solutions</h2>
            <p style={{ color: '#666' }}>Beyond products, we offer end-to-end automation and security services.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow)' }}
                style={{ background: '#fff', padding: '30px', borderRadius: '15px', textAlign: 'center', transition: '0.3s' }}
              >
                <div style={{ color: '#c19a6b', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <h4 style={{ color: '#1a2a4e' }}>{s.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container" style={{ padding: '0 10px' }}>
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             style={{ background: '#1a2a4e', borderRadius: '25px', padding: 'min(60px, 8vw)', color: '#fff' }}
           >
             <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
               <div>
                 <h2 style={{ color: '#fff', marginBottom: '25px' }}>Get in Touch</h2>
                 <p style={{ opacity: 0.8, marginBottom: '40px' }}>Our team is ready to assist you with the best automation tools for your business.</p>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                   <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                     <MapPin className="text-accent" />
                     <div>
                       <p style={{ fontWeight: 600 }}>Visit Us</p>
                       <p style={{ opacity: 0.8 }}>D-04, Sector 1 Devendra Nagar, Raipur, 492001 (C.G)</p>
                     </div>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                     <Phone className="text-accent" />
                     <div>
                       <p style={{ fontWeight: 600 }}>Call Us</p>
                       <p style={{ opacity: 0.8 }}>Ph: 0771-4028251<br/>Mobile: +91 7880003565</p>
                     </div>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                     <Mail className="text-accent" />
                     <div>
                       <p style={{ fontWeight: 600 }}>Email Us</p>
                       <p style={{ opacity: 0.8 }}>boas0509@gmail.com</p>
                     </div>
                   </div>
                 </div>
               </div>
               <div style={{ background: '#fff', padding: 'min(40px, 6vw)', borderRadius: '15px', color: '#333' }}>
                 <h3 style={{ marginBottom: '20px' }}>Send a Message</h3>
                 <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                   <input type="text" placeholder="Your Name" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                   <input type="email" placeholder="Your Email" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
                   <textarea placeholder="Tell us about your requirement" required rows="4" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }}></textarea>
                   <button type="submit" className="btn btn-primary">Send Inquiry</button>
                 </form>
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', background: '#0a101f', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <p style={{ opacity: 0.6 }}>© 2026 BOAS - Advance Banking & Office Retail Automation Products. All Rights Reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', opacity: 0.6, fontSize: '0.9rem' }}>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
            <a href="#home">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        href={whatsappLink} 
        target="_blank" 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        whileHover={{ scale: 1.1 }}
        style={{ position: 'fixed', bottom: '40px', right: '40px', background: '#25D366', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', zIndex: 9999 }}
      >
        <img src={whatsappIcon} alt="WhatsApp" style={{ width: '32px', height: '32px', filter: 'brightness(0) invert(1)' }} />
      </motion.a>
    </div>
  )
}

export default App
