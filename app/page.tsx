"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <RoomsSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Hero Section
const HeroSection = () => {
  const [showOverview, setShowOverview] = useState(false);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {!showOverview ? (
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className="max-w-4xl px-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Power Mike Hotel
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience luxury redefined in our globally acclaimed hospitality
              destinations
            </p>
            <button
              // onClick={() => setShowOverview(true)}
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Excellence
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-blue-900/95 flex items-center justify-center z-20">
          <div className="max-w-4xl px-6 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Welcome to Luxury</h2>
            <p className="text-lg mb-8">
              Discover our world-class amenities, exquisite dining, and
              unparalleled service that defines the Power Mike Hotel experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Suites</h3>
                <p>Luxuriously appointed rooms with stunning city views</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fine Dining</h3>
                <p>World-class cuisine crafted by renowned chefs</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-2xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Spa & Wellness</h3>
                <p>Rejuvenating treatments in our luxury spa</p>
              </div>
            </div>
            <button
              onClick={() => setShowOverview(false)}
              className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// Overview Section
const OverviewSection = () => {
  return (
    <section
      id="overview"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Redefining Luxury Hospitality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every detail at Power Mike Hotel is crafted to exceed expectations,
            creating unforgettable experiences for our distinguished guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Luxury and Trust Angle
            </h3>

            <p className="text-gray-600">High-level service and distinction</p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Uncompromising standards in every detail
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🕐</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              24/7 Service
            </h3>
            <p className="text-gray-600">
              Round-the-clock personalized attention
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Modern Amenities
            </h3>
            <p className="text-gray-600">
              State-of-the-art facilities and technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Rooms Section
const RoomsSection = () => {
  const rooms = [
    {
      id: "deluxe",
      name: "Royale room",
      description:
        "Indulge in the epitome of luxury and sophistication in our Royale Room. With its exquisite design and unrivaled comfort, this room is designed to make your stay truly exceptional.",
      price: "28,000",
      image: "/images/ui.jpeg",
    },
    {
      id: "executive",
      name: " Deluxe room",
      description:
        "Experience utmost comfort and style in our Deluxe Room. Thoughtfully designed with your relaxation in mind, this room offers a perfect blend of modern amenities and a soothing ambiance.",
      price: "25,000",
      image: "/images/p1.jpg",
    },
    {
      id: "presidential",
      name: "Studio room",
      description:
        "Welcome to our cozy and functional Studio Room. Designed for the modern traveler, this room offers a comfortable and efficient space to relax, work, and recharge",
      price: "10,000",
      image: "/images/studio.jpg",
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of premium suites, each
            designed to provide an unparalleled hospitality experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-video relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                ></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    ₦{room.price}/night
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-900">
                    ₦{room.price}/night
                  </span>
                  <a
                    href="https://wa.me/+2347039448131?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20Room"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300">
            View All Rooms
          </button>
        </div> */}
      </div>
    </section>
  );
};

// Booking Section
const BookingSection = () => {
  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Luxury Stay
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the epitome of luxury and comfort. Reserve your stay at
            Power Mike Hotel today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Quick Reservation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Guests
                  </label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Room Type
                  </label>
                  <select className="w-full px-4 py-3 bg-gray/80 border border-white/30 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white">
                    <option value="deluxe">Royale Suite - ₦30,000/night</option>
                    <option value="executive">
                      Deluxe Suite - ₦28,000/night
                    </option>
                    <option value="presidential">
                      Studio Suite - ₦10,000/night
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://wa.me/+2347039448131?text=Hello%2C%20I%27m%20interested%20in%20checking%20the%20availability%20of%20Rooms",
                    "_blank"
                  )
                }
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Check Availability
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-1 rounded-xl">
              <div className="bg-blue-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Why Book Directly With Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-900 font-bold">✓</span>
                    </div>
                    <span>Best Rate Guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-900 font-bold">✓</span>
                    </div>
                    <span>Complimentary Room Breakfast</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-900 font-bold">✓</span>
                    </div>
                    <span>Early Check-in & Late Check-out</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-900 font-bold">✓</span>
                    </div>
                    <span>Exclusive Member Benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "An extraordinary experience that exceeded all expectations. The attention to detail and personalized service made our stay unforgettable.",
      author: "Chinedu Obianuju",
      position: "CEO, Global Enterprises",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      text: "The epitome of luxury hospitality. From the moment we arrived, we were treated like royalty. Will definitely return.",
      author: "Tolulope",
      position: "Travel Blogger",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
    {
      text: "Power Mike Hotel sets a new standard for luxury accommodations. The amenities, dining, and service are simply unmatched.",
      author: "Michael Chen",
      position: "International Investor",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Guest Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what our distinguished guests have to say about their stay
            at Power Mike Hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-2 ${testimonial.gradient} rounded-t-xl`}
              ></div>
              <div className="text-5xl text-gray-200 mb-4">&quot;</div>
              <p className="text-gray-600 mb-8 italic">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const message = `Name: ${formData.fullName}\nEmail: ${
      formData.email
    }\nSubject: ${formData.subject || "No subject"}\nMessage: ${
      formData.message
    }`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/+2347039448131?text=${encodedMessage}`,
      "_blank"
    );
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our dedicated team for reservations, inquiries, or
            any assistance you may need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 p-4 flex items-center justify-center">
                  <div className="text-4xl">📍</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Address
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    Area 1, 9 argungu close,
                    <br />
                    off Benue Crescent,
                    <br />
                    Garki, Abuja
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 flex items-center justify-center">
                  <div className="text-4xl">📞</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Phone
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    +234 703 944 8131
                    <br />
                    +234 703 590 1868
                    <br />
                    24/7 Concierge
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Visit Power Mike Hotel
              </h3>
              <p className="mb-6">
                Located in the heart of the city, Power Mike Hotel offers easy
                access to premier shopping, dining, and entertainment
                destinations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  5 minutes from Central Business Area
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  10 minutes from three arms zone
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  15 minutes from Airport
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Send us a Message
            </h3>

            {/* <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="event">Event Planning</option>
                  <option value="feedback">Feedback</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                  placeholder="Tell us how we can assist you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form> */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="event">Event Planning</option>
                  <option value="feedback">Feedback</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                  placeholder="Tell us how we can assist you..."
                  required
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
