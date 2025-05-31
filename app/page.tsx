"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Shield,
  Star,
  Calendar,
  Users,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Power Mike Hotel",
  description: "Luxury hotel in Abuja offering premium accommodation and excellent amenities",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Central Business District",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "Nigeria",
  },
  telephone: "+234-703-944-8131",
  url: "https://powermike-hotel.com",
  priceRange: "₦₦₦",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
    { "@type": "LocationFeatureSpecification", name: "Parking" },
    { "@type": "LocationFeatureSpecification", name: "Restaurant" },
    { "@type": "LocationFeatureSpecification", name: "Fitness Center" },
    { "@type": "LocationFeatureSpecification", name: "24/7 Security" },
  ],
  starRating: {
    "@type": "Rating",
    ratingValue: "4.5",
  },
}

export default function PowerMikeHotelLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-300/30">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">PM</span>
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-black tracking-tight">Power Mike Hotel</h1>
                  <p className="text-xs sm:text-sm text-gray-800/70">Abuja, Nigeria</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <Link href="#rooms" className="text-gray-800 hover:text-black transition-colors font-medium">
                  Rooms
                </Link>
                <Link href="#amenities" className="text-gray-800 hover:text-black transition-colors font-medium">
                  Amenities
                </Link>
                <Link href="#location" className="text-gray-800 hover:text-black transition-colors font-medium">
                  Location
                </Link>
                <Link href="#contact" className="text-gray-800 hover:text-black transition-colors font-medium">
                  Contact
                </Link>
                <Button className="bg-black hover:bg-gray-800 text-white px-4 xl:px-6 py-2">Book Now</Button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => {
                  console.log("Menu clicked, current state:", mobileMenuOpen)
                  setMobileMenuOpen(!mobileMenuOpen)
                }}
                aria-label="Toggle mobile menu"
                type="button"
              >
                {mobileMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`lg:hidden transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
              }`}
            >
              <nav className="mt-4 pb-4 border-t border-gray-200 pt-4">
                <div className="flex flex-col space-y-3">
                  <Link
                    href="#rooms"
                    className="text-gray-800 hover:text-black transition-colors font-medium py-2 px-2 rounded hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rooms
                  </Link>
                  <Link
                    href="#amenities"
                    className="text-gray-800 hover:text-black transition-colors font-medium py-2 px-2 rounded hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Amenities
                  </Link>
                  <Link
                    href="#location"
                    className="text-gray-800 hover:text-black transition-colors font-medium py-2 px-2 rounded hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Location
                  </Link>
                  <Link
                    href="#contact"
                    className="text-gray-800 hover:text-black transition-colors font-medium py-2 px-2 rounded hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button
                    className="bg-black hover:bg-gray-800 text-white w-full mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800">
          <div className="absolute inset-0 bg-black/60"></div>
          <Image
            src="/images/hero.jpg"
            alt="Power Mike Hotel Abuja - Luxury accommodation in Nigeria's capital"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6">
            <Badge className="mb-4 sm:mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm text-xs sm:text-sm">
              ⭐ Rated #1 Hotel in Abuja
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
              WELCOME TO
              <span className="block text-gray-300">POWER MIKE</span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Where Comfort Meets Style and Exceptional Service Elevates Every Experience in Nigeria&apos;s Capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 font-semibold w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book Your Stay Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 font-semibold w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call +234-703-944-8131
              </Button>
            </div>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-xs sm:text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-100 mr-2" />
                Free Cancellation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-100 mr-2" />
                Best Price Guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-100 mr-2" />
                Instant Confirmation
              </div>
            </div>
          </div>
        </section>

        {/* Quick Booking Form */}
        <section className="bg-black py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-6xl mx-auto bg-white border-0 shadow-2xl">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-black">
                  Check Availability & Book Now
                </h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-800">Check-in Date</label>
                    <Input type="date" className="w-full border-gray-300/30 focus:border-black h-11 sm:h-12" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-800">Check-out Date</label>
                    <Input type="date" className="w-full border-gray-300/30 focus:border-black h-11 sm:h-12" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-800">Guests</label>
                    <select className="w-full p-3 border border-gray-300/30 rounded-md focus:border-black focus:outline-none h-11 sm:h-12">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                  <div className="flex items-end sm:col-span-1 lg:col-span-1">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white h-11 sm:h-12">Search Rooms</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                  Welcome to Power Mike Hotel Abuja
                </h2>
                <p className="text-lg sm:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed px-4">
                  Located in the prestigious Central Business District of Abuja, Power Mike Hotel offers unparalleled
                  luxury and convenience for both business and leisure travelers.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <Image
                    src="/images/hero.jpg"
                    alt="Power Mike Hotel lobby - elegant interior design"
                    width={700}
                    height={500}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
                <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="bg-black p-3 sm:p-4 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-black">Prime Location</h3>
                      <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                        Strategically located in Abuja&apos;s CBD, minutes away from government offices, shopping
                        centers, and major attractions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="bg-black p-3 sm:p-4 rounded-lg flex-shrink-0">
                      <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-black">Premium Security</h3>
                      <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                        24/7 security with CCTV monitoring, secure parking, and professional security personnel ensuring
                        your safety.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="bg-black p-3 sm:p-4 rounded-lg flex-shrink-0">
                      <Star className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-black">Exceptional Service</h3>
                      <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                        Our dedicated staff provides personalized service to ensure your stay exceeds expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                Luxurious Rooms & Suites
              </h2>
              <p className="text-lg sm:text-xl text-gray-800 px-4">
                Choose from our selection of elegantly designed accommodations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
              {[
                {
                  name: "Deluxe Room",
                  price: "₦25,000",
                  image: "/images/hero.jpg",
                  features: ["King Size Bed", "City View", "Free WiFi", "Air Conditioning"],
                },
                {
                  name: "Executive Suite",
                  price: "₦45,000",
                  image: "/images/hero.jpg",
                  features: ["Separate Living Area", "Premium View", "Mini Bar", "Work Desk"],
                },
                {
                  name: "Presidential Suite",
                  price: "₦85,000",
                  image: "/images/hero.jpg",
                  features: ["Luxury Amenities", "Panoramic View", "Butler Service", "Private Balcony"],
                },
              ].map((room, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white"
                >
                  <div className="relative">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={`${room.name} at Power Mike Hotel Abuja`}
                      width={450}
                      height={350}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <Badge className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black text-white text-xs sm:text-sm">
                      From {room.price}/night
                    </Badge>
                  </div>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">{room.name}</h3>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-800 text-sm sm:text-base">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black mr-2 sm:mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white py-2 sm:py-3">
                      Book This Room
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                World-Class Amenities
              </h2>
              <p className="text-lg sm:text-xl text-gray-800 px-4">
                Everything you need for a comfortable and memorable stay
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
              {[
                { icon: Wifi, name: "Free High-Speed WiFi", desc: "Stay connected throughout your stay" },
                { icon: Car, name: "Secure Parking", desc: "Complimentary parking for all guests" },
                { icon: Utensils, name: "Restaurant & Bar", desc: "Fine dining and refreshing drinks" },
                { icon: Dumbbell, name: "Fitness Center", desc: "Modern gym equipment available 24/7" },
                { icon: Shield, name: "24/7 Security", desc: "Round-the-clock security and surveillance" },
                { icon: Users, name: "Conference Rooms", desc: "Fully equipped meeting facilities" },
                { icon: Phone, name: "Concierge Service", desc: "Personalized assistance and recommendations" },
                { icon: Star, name: "Laundry Service", desc: "Professional cleaning and pressing" },
              ].map((amenity, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <amenity.icon className="h-7 w-7 sm:h-9 sm:w-9 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">
                    {amenity.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed px-2">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                What Our Guests Say
              </h2>
              <div className="flex justify-center items-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-semibold text-gray-800">4.8/5 (324 reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
              {[
                {
                  name: "Adebayo Johnson",
                  role: "Business Executive",
                  review:
                    "Exceptional service and prime location. Perfect for business trips to Abuja. The staff went above and beyond to ensure my comfort.",
                  rating: 5,
                },
                {
                  name: "Sarah Williams",
                  role: "Tourist",
                  review:
                    "Beautiful hotel with amazing amenities. The rooms are spacious and clean. Great value for money in Abuja!",
                  rating: 5,
                },
                {
                  name: "Dr. Michael Okafor",
                  role: "Conference Attendee",
                  review:
                    "Stayed here for a medical conference. The conference facilities are top-notch and the location is very convenient.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-4 sm:p-6 lg:p-8 border-0 shadow-lg bg-gray-50">
                  <CardContent className="p-0">
                    <div className="flex mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-800 mb-4 sm:mb-6 italic text-base sm:text-lg leading-relaxed">
                      &quot;{testimonial.review}&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-black text-base sm:text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-800/70">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                  Perfect Location in Abuja
                </h2>
                <p className="text-lg sm:text-xl text-gray-800 px-4">
                  Centrally located in the heart of Nigeria&apos;s capital city
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                <div>
                  <div className="bg-white h-64 sm:h-80 rounded-lg mb-6 sm:mb-8 flex items-center justify-center shadow-lg">
                    <p className="text-gray-800 text-base sm:text-lg">Interactive Map Coming Soon</p>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start sm:items-center">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0" />
                      <span className="text-gray-800 text-sm sm:text-base lg:text-lg">
                        Central Business District, Abuja, FCT, Nigeria
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-gray-800 text-sm sm:text-base lg:text-lg">+234 703 944 8131</span>
                    </div>
                    <div className="flex items-start sm:items-center">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0" />
                      <span className="text-gray-800 text-sm sm:text-base lg:text-lg break-all sm:break-normal">
                        powermikeguesthouse@gmail.com
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-black">Nearby Attractions</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: "Aso Rock", distance: "5 km", time: "10 min drive" },
                      { name: "National Assembly", distance: "3 km", time: "7 min drive" },
                      { name: "Millennium Park", distance: "2 km", time: "5 min drive" },
                      { name: "Jabi Lake Mall", distance: "8 km", time: "15 min drive" },
                      { name: "Nnamdi Azikiwe Airport", distance: "45 km", time: "1 hour drive" },
                      { name: "Central Market", distance: "4 km", time: "10 min drive" },
                    ].map((attraction, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm"
                      >
                        <span className="font-semibold text-black text-sm sm:text-base lg:text-lg">
                          {attraction.name}
                        </span>
                        <div className="text-right text-xs sm:text-sm text-gray-800">
                          <div className="font-medium">{attraction.distance}</div>
                          <div>{attraction.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
              Ready to Experience Luxury?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-gray-50 px-4">
              Book your stay at Power Mike Hotel Abuja today and discover why we&apos;re the preferred choice for
              discerning travelers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 font-semibold w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book Now - Best Rates Guaranteed
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 font-semibold w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call for Special Offers
              </Button>
            </div>
            <p className="mt-4 sm:mt-6 text-gray-100 text-sm sm:text-base">
              Free cancellation • Instant confirmation • Secure booking
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg sm:text-xl">PM</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">Power Mike Hotel</h3>
                    <p className="text-gray-50 text-sm sm:text-base">Abuja, Nigeria</p>
                  </div>
                </div>
                <p className="text-gray-50 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Experience luxury and comfort in the heart of Nigeria&apos;s capital city.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs sm:text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs sm:text-sm font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs sm:text-sm font-bold">in</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-50">
                  <li>
                    <Link href="#rooms" className="hover:text-white transition-colors text-sm sm:text-base">
                      Rooms & Suites
                    </Link>
                  </li>
                  <li>
                    <Link href="#amenities" className="hover:text-white transition-colors text-sm sm:text-base">
                      Amenities
                    </Link>
                  </li>
                  <li>
                    <Link href="#location" className="hover:text-white transition-colors text-sm sm:text-base">
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-white transition-colors text-sm sm:text-base">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Services</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-50 text-sm sm:text-base">
                  <li>Room Service</li>
                  <li>Conference Facilities</li>
                  <li>Airport Transfer</li>
                  <li>Laundry Service</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Info</h4>
                <div className="space-y-3 sm:space-y-4 text-gray-50">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm">Central Business District, Abuja</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">+234 703 944 8131</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm break-all">powermikeguesthouse@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-50">
              <p className="text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} Power Mike Hotel. All rights reserved. Designed by{" "}
                <a
                  href="https://omarandblasius.com.ng"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Omar and Blasius Software Studio
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
