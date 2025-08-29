import React, { useState, useEffect, useRef } from "react";

const ArtisticDesignStudio = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [hoverId, setHoverId] = useState(null);
  const submitBtnRef = useRef(null);

  // Smooth scrolling effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Style sheet (animations) - append once
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes modalSlideIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Artistic Design Studio transformed our home into a masterpiece. Their attention to detail is incredible!",
      rating: 5,
      project: "Modern Family Home",
    },
    {
      name: "Michael Chen",
      text: "Professional, creative, and reliable. They exceeded our expectations in every way.",
      rating: 5,
      project: "Corporate Office Design",
    },
    {
      name: "Emma Williams",
      text: "The team's vision and execution are outstanding. We couldn't be happier with our new space.",
      rating: 5,
      project: "Luxury Apartment",
    },
  ];

  // Auto-rotate testimonials (placed after testimonials declaration)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Enhanced portfolio with more high-quality images
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Modern Living Room",
      description:
        "Contemporary design with warm earth tones and natural lighting",
      category: "Living",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Elegant Dining Space",
      description: "Sophisticated dining area with minimalist aesthetics",
      category: "Dining",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Serene Bedroom",
      description:
        "Peaceful bedroom retreat with soft textures and calming colors",
      category: "Bedroom",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Minimalist Kitchen",
      description: "Clean lines and functional design for modern living",
      category: "Kitchen",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Cozy Study Corner",
      description: "Inspiring workspace with natural light and plants",
      category: "Office",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Spa-like Bathroom",
      description: "Luxurious bathroom with clean, contemporary design",
      category: "Bathroom",
    },
  ];

  // Services data with enhanced descriptions
  const services = [
    {
      title: "Residential Design",
      description:
        "Transform your home into a personalized sanctuary with our expert residential design services that reflect your lifestyle and personality.",
      icon: "🏠",
      features: ["Space Planning", "Color Consultation", "Furniture Selection"],
    },
    {
      title: "Commercial Design",
      description:
        "Create inspiring workspaces that enhance productivity and reflect your brand identity through thoughtful commercial design solutions.",
      icon: "🏢",
      features: ["Office Layout", "Brand Integration", "Ergonomic Solutions"],
    },
    {
      title: "Interior Styling",
      description:
        "Add the perfect finishing touches with our interior styling services, from artwork selection to decorative accents.",
      icon: "🎨",
      features: ["Art Curation", "Accessory Selection", "Styling Consultation"],
    },
    {
      title: "Project Management",
      description:
        "From concept to completion, we handle every detail of your design project with professional project management.",
      icon: "📋",
      features: [
        "Timeline Management",
        "Vendor Coordination",
        "Quality Control",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Awards Won" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // animate submit button if available
    const btn = submitBtnRef.current;
    if (btn) {
      btn.style.transform = "scale(0.95)";
    }
    setTimeout(() => {
      if (btn) {
        btn.style.transform = "scale(1)";
      }
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 150);
  };

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Basic inline styles (kept mostly as provided)
  const styles = {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap')",

    app: {
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: "#2d3748",
      lineHeight: "1.6",
      backgroundColor: "#ffffff",
      overflowX: "hidden",
    },

    fadeInUp: {
      opacity: isVisible.hero ? 1 : 0,
      transform: isVisible.hero ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    fadeInLeft: {
      opacity: isVisible.about ? 1 : 0,
      transform: isVisible.about ? "translateX(0)" : "translateX(-50px)",
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    fadeInRight: {
      opacity: isVisible.about ? 1 : 0,
      transform: isVisible.about ? "translateX(0)" : "translateX(50px)",
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    navbar: {
      position: "fixed",
      top: 0,
      width: "100%",
      background:
        scrollY > 50
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      zIndex: 1000,
      padding: scrollY > 50 ? "0.75rem 0" : "1rem 0",
      borderBottom: "1px solid #e2e8f0",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: scrollY > 50 ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none",
    },

    navContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 2rem",
    },

    logo: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: "700",
      fontSize: scrollY > 50 ? "1.4rem" : "1.6rem",
      color: "#1a202c",
      letterSpacing: "-0.025em",
      transition: "all 0.3s ease",
      background: "linear-gradient(135deg, #1a202c 0%, #4a5568 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },

    navMenu: {
      display: "flex",
      listStyle: "none",
      gap: "2.5rem",
      margin: 0,
      padding: 0,
    },

    navLink: {
      textDecoration: "none",
      color: "#4a5568",
      fontWeight: "500",
      fontSize: "0.95rem",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      position: "relative",
      padding: "0.5rem 0",
    },

    hero: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      background: `linear-gradient(135deg, 
  rgba(247, 250, 252, 0.4) 0%, 
  rgba(237, 242, 247, 0.3) 50%,
  rgba(226, 232, 240, 0.2) 100%),
        url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      position: "relative",
    },

    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(1px)",
    },

    heroContent: {
      maxWidth: "900px",
      position: "relative",
      zIndex: 2,
    },

    heroTitle: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "4.5rem",
      fontWeight: "700",
      marginBottom: "2rem",
      color: "#1a202c",
      letterSpacing: "-0.02em",
      lineHeight: "1.1",
      background:
        "linear-gradient(135deg, #1a202c 0%, #4a5568 50%, #718096 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      animation: "fadeInUp 1s ease-out",
    },

    heroSubtitle: {
      fontSize: "1.6rem",
      marginBottom: "3rem",
      color: "#4a5568",
      fontWeight: "400",
      fontFamily: '"Poppins", sans-serif',
      animation: "fadeInUp 1s ease-out 0.2s both",
    },

    heroButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      flexWrap: "wrap",
      animation: "fadeInUp 1s ease-out 0.4s both",
    },

    btnPrimary: {
      padding: "1rem 2.5rem",
      backgroundColor: "#1a202c",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      textDecoration: "none",
      display: "inline-block",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 8px 25px rgba(26, 32, 44, 0.15)",
    },

    btnSecondary: {
      padding: "1rem 2.5rem",
      backgroundColor: "transparent",
      color: "#1a202c",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      textDecoration: "none",
      display: "inline-block",
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },

    floatingElements: {
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
    },

    floatingShape: {
      position: "absolute",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(237, 242, 247, 0.4), rgba(226, 232, 240, 0.2))",
      animation: "float 6s ease-in-out infinite",
    },

    section: {
      padding: "8rem 2rem",
    },

    container: {
      maxWidth: "1400px",
      margin: "0 auto",
    },

    sectionTitle: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "3rem",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "1.5rem",
      color: "#1a202c",
      letterSpacing: "-0.025em",
    },

    sectionSubtitle: {
      fontSize: "1.2rem",
      textAlign: "center",
      color: "#718096",
      marginBottom: "5rem",
      maxWidth: "700px",
      margin: "0 auto 5rem",
      fontFamily: '"Poppins", sans-serif',
    },

    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "3rem",
      margin: "4rem 0",
      padding: "3rem",
      backgroundColor: "rgba(247, 250, 252, 0.8)",
      borderRadius: "20px",
      backdropFilter: "blur(10px)",
    },

    statCard: {
      textAlign: "center",
      padding: "2rem 1rem",
    },

    statNumber: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "2.8rem",
      fontWeight: "700",
      color: "#1a202c",
      marginBottom: "0.5rem",
      display: "block",
    },

    statLabel: {
      color: "#718096",
      fontSize: "1rem",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },

    alternatingSection: {
      display: "flex",
      alignItems: "center",
      gap: "5rem",
      marginBottom: "8rem",
      flexWrap: "wrap",
    },

    alternatingContent: {
      flex: "1 1 480px",
    },

    alternatingImage: {
      flex: "1 1 480px",
      position: "relative",
    },

    alternatingImg: {
      width: "100%",
      height: "500px",
      objectFit: "cover",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    alternatingTitle: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "2.5rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      color: "#1a202c",
    },

    alternatingDescription: {
      fontSize: "1.2rem",
      color: "#4a5568",
      marginBottom: "2.5rem",
      lineHeight: "1.8",
      fontFamily: '"Poppins", sans-serif',
    },

    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "2.5rem",
      marginTop: "4rem",
    },

    serviceCard: {
      background: "white",
      padding: "3rem 2rem",
      borderRadius: "20px",
      textAlign: "center",
      border: "1px solid #e2e8f0",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },

    serviceIcon: {
      fontSize: "3rem",
      marginBottom: "1.5rem",
      display: "block",
    },

    serviceTitle: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "1.4rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#1a202c",
    },

    serviceDescription: {
      color: "#718096",
      fontSize: "1rem",
      lineHeight: "1.7",
      marginBottom: "1.5rem",
    },

    serviceFeatures: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      fontSize: "0.9rem",
      color: "#4a5568",
    },

    testimonialsSection: {
      background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
      borderRadius: "30px",
      padding: "5rem 3rem",
      margin: "4rem 0",
      position: "relative",
      overflow: "hidden",
    },

    testimonialCard: {
      background: "white",
      padding: "3rem",
      borderRadius: "20px",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
      textAlign: "center",
      maxWidth: "600px",
      margin: "0 auto",
      position: "relative",
    },

    testimonialText: {
      fontSize: "1.3rem",
      fontStyle: "italic",
      color: "#4a5568",
      marginBottom: "2rem",
      lineHeight: "1.7",
      fontFamily: '"Poppins", sans-serif',
    },

    testimonialAuthor: {
      fontWeight: "600",
      color: "#1a202c",
      marginBottom: "0.5rem",
      fontSize: "1.1rem",
    },

    testimonialProject: {
      color: "#718096",
      fontSize: "0.95rem",
    },

    testimonialDots: {
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      marginTop: "2rem",
    },

    testimonialDot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },

    portfolioGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
      gap: "2.5rem",
      marginTop: "4rem",
    },

    portfolioItem: {
      position: "relative",
      borderRadius: "20px",
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
    },

    portfolioImg: {
      width: "100%",
      height: "320px",
      objectFit: "cover",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "block",
    },

    portfolioOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
      padding: "2rem",
      color: "white",
      transform: "translateY(100%)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    portfolioTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      fontFamily: '"Playfair Display", serif',
    },

    portfolioDescription: {
      fontSize: "0.95rem",
      opacity: 0.9,
    },

    contactSection: {
      backgroundColor: "#f7fafc",
    },

    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "5rem",
      alignItems: "start",
    },

    contactInfo: {
      background: "white",
      padding: "3rem",
      borderRadius: "20px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.05)",
    },

    contactForm: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },

    formInput: {
      padding: "1.2rem",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      fontSize: "1rem",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      fontFamily: "inherit",
      backgroundColor: "white",
    },

    footer: {
      backgroundColor: "#1a202c",
      color: "white",
      padding: "4rem 2rem 2rem",
      textAlign: "center",
    },

    modal: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
      padding: "2rem",
      backdropFilter: "blur(5px)",
    },

    modalContent: {
      background: "white",
      padding: "2rem",
      borderRadius: "20px",
      maxWidth: "90%",
      maxHeight: "90%",
      position: "relative",
      animation: "modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    modalImg: {
      maxWidth: "100%",
      maxHeight: "70vh",
      display: "block",
      borderRadius: "12px",
    },

    closeBtn: {
      position: "absolute",
      top: "1rem",
      right: "1.5rem",
      fontSize: "2rem",
      cursor: "pointer",
      color: "#718096",
      background: "none",
      border: "none",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.app}>
      {/* Navigation */}
      <nav style={styles.navbar} aria-label="Main navigation">
        <div style={styles.navContainer}>
          <div style={styles.logo}>Artistic Design Studio</div>
          <ul style={styles.navMenu}>
            <li>
              <a onClick={() => smoothScrollTo("home")} style={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => smoothScrollTo("about")} style={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => smoothScrollTo("services")}
                style={styles.navLink}
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => smoothScrollTo("portfolio")}
                style={styles.navLink}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => smoothScrollTo("contact")}
                style={{
                  ...styles.navLink,
                  backgroundColor: "#1a202c",
                  color: "white",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "8px",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.floatingElements} aria-hidden>
          <div
            style={{
              ...styles.floatingShape,
              width: "60px",
              height: "60px",
              top: "20%",
              left: "10%",
              animationDelay: "0s",
            }}
          />
          <div
            style={{
              ...styles.floatingShape,
              width: "40px",
              height: "40px",
              top: "60%",
              right: "15%",
              animationDelay: "2s",
            }}
          />
          <div
            style={{
              ...styles.floatingShape,
              width: "80px",
              height: "80px",
              bottom: "20%",
              left: "20%",
              animationDelay: "4s",
            }}
          />
        </div>
        <div style={styles.heroContent} id="hero" data-animate>
          <h1 style={{ ...styles.heroTitle, ...styles.fadeInUp }}>
            Artistic Design Studio
          </h1>
          <p style={styles.heroSubtitle}>We create dreams, not just designs</p>
          <div style={styles.heroButtons}>
            <button
              style={styles.btnPrimary}
              onClick={() => smoothScrollTo("portfolio")}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(26, 32, 44, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(26, 32, 44, 0.15)";
              }}
            >
              Explore Our Work
            </button>
            <button
              style={styles.btnSecondary}
              onClick={() => smoothScrollTo("contact")}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(26, 32, 44, 0.05)";
                e.currentTarget.style.borderColor = "#1a202c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About / Alternating section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} data-animate>
            About Us
          </h2>
          <p style={styles.sectionSubtitle} data-animate>
            We blend artistry and function to craft spaces that feel curated,
            comfortable and uniquely yours.
          </p>

          <div style={styles.alternatingSection}>
            <div style={styles.alternatingContent} data-animate id="about">
              <h3 style={styles.alternatingTitle}>Design with Purpose</h3>
              <p style={styles.alternatingDescription}>
                Our team approaches each project with research-backed design
                strategies — from human-centered space planning to materials
                that age gracefully. Whether it's a cozy family home or an
                efficient commercial interior, we design with people in mind.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  style={styles.btnPrimary}
                  onClick={() => smoothScrollTo("services")}
                >
                  Our Services
                </button>
                <button
                  style={styles.btnSecondary}
                  onClick={() => smoothScrollTo("portfolio")}
                >
                  View Portfolio
                </button>
              </div>
            </div>

            <div style={styles.alternatingImage} data-animate>
              <img
                src={portfolioImages[0].src}
                alt={portfolioImages[0].title}
                style={styles.alternatingImg}
                onClick={() => setActiveImage(portfolioImages[0])}
              />
            </div>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} style={styles.statCard} data-animate>
                <span style={styles.statNumber}>{s.number}</span>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ ...styles.section }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} data-animate>
            Our Services
          </h2>
          <p style={styles.sectionSubtitle} data-animate>
            End-to-end design solutions for residential and commercial spaces.
          </p>

          <div style={styles.servicesGrid}>
            {services.map((svc, idx) => (
              <div
                key={idx}
                style={styles.serviceCard}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
                data-animate
              >
                <span style={styles.serviceIcon} aria-hidden>
                  {svc.icon}
                </span>
                <h4 style={styles.serviceTitle}>{svc.title}</h4>
                <p style={styles.serviceDescription}>{svc.description}</p>
                <div style={styles.serviceFeatures}>
                  {svc.features.map((f, i) => (
                    <div key={i}>• {f}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} data-animate>
            Portfolio
          </h2>
          <p style={styles.sectionSubtitle} data-animate>
            A curated selection of our recent projects.
          </p>

          <div style={styles.portfolioGrid}>
            {portfolioImages.map((p) => {
              const overlayStyle =
                hoverId === p.id || (activeImage && activeImage.id === p.id)
                  ? { transform: "translateY(0)" }
                  : {};
              const imgStyle =
                hoverId === p.id ? { transform: "scale(1.03)" } : {};
              return (
                <div
                  key={p.id}
                  style={styles.portfolioItem}
                  onMouseEnter={() => setHoverId(p.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onClick={() => setActiveImage(p)}
                  aria-label={`${p.title} — ${p.category}`}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    style={{ ...styles.portfolioImg, ...imgStyle }}
                    loading="lazy"
                  />
                  <div style={{ ...styles.portfolioOverlay, ...overlayStyle }}>
                    <div style={styles.portfolioTitle}>{p.title}</div>
                    <div style={styles.portfolioDescription}>
                      {p.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} data-animate>
            Testimonials
          </h2>

          <div style={styles.testimonialsSection} data-animate>
            <div style={styles.testimonialCard}>
              <p style={styles.testimonialText}>
                “{testimonials[currentTestimonial].text}”
              </p>
              <div style={styles.testimonialAuthor}>
                {testimonials[currentTestimonial].name}
              </div>
              <div style={styles.testimonialProject}>
                {testimonials[currentTestimonial].project}
              </div>

              <div style={styles.testimonialDots}>
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    style={{
                      ...styles.testimonialDot,
                      background:
                        i === currentTestimonial ? "#1a202c" : "#e2e8f0",
                      width: i === currentTestimonial ? "14px" : "12px",
                      height: i === currentTestimonial ? "14px" : "12px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{ ...styles.section, ...styles.contactSection }}
      >
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} data-animate>
            Contact Us
          </h2>
          <p style={styles.sectionSubtitle} data-animate>
            Tell us about your project — we’d love to help.
          </p>

          <div style={styles.contactGrid}>
            <div style={styles.contactInfo} data-animate>
              <h4
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.6rem",
                }}
              >
                Let's talk
              </h4>
              <p style={{ color: "#718096" }}>
                Email: hello@artisticstudio.example
                <br />
                Phone: +91 9987548004
              </p>
              <div style={{ marginTop: "1rem" }}>
                <strong>Office:</strong>
                <p style={{ marginTop: "0.5rem", color: "#4a5568" }}>
                  Shop no. 2, Manohar Kene Complex, Regency Anantam, Golavali
                  gaon, Dombivli East.
                </p>
              </div>
            </div>

            <form
              style={styles.contactForm}
              onSubmit={handleSubmit}
              data-animate
            >
              <input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.formInput}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.formInput}
                required
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleInputChange}
                style={{ ...styles.formInput, minHeight: "140px" }}
                required
              />
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="submit"
                  ref={submitBtnRef}
                  style={{
                    ...styles.btnPrimary,
                    padding: "0.9rem 1.5rem",
                    fontSize: "1rem",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Modal for portfolio images */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          style={styles.modal}
          onClick={(e) => {
            // close if clicking outside modal content
            if (e.target === e.currentTarget) setActiveImage(null);
          }}
        >
          <div style={styles.modalContent}>
            <button
              onClick={() => setActiveImage(null)}
              style={styles.closeBtn}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.title}
              style={styles.modalImg}
            />
            <div style={{ marginTop: "1rem" }}>
              <h3
                style={{ margin: 0, fontFamily: '"Playfair Display", serif' }}
              >
                {activeImage.title}
              </h3>
              <p style={{ color: "#718096", marginTop: "0.5rem" }}>
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                Artistic Design Studio
              </div>
              <div style={{ color: "#b8c0cc", marginTop: "0.5rem" }}>
                Designing beautiful spaces since 2010
              </div>
            </div>
            <div style={{ color: "#b8c0cc" }}>
              © {new Date().getFullYear()} Artistic Design Studio. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtisticDesignStudio;
