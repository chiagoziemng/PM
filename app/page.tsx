import type { Metadata } from "next"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Power Mike Hotel Abuja | Luxury Accommodation in Nigeria's Capital",
  description:
    "Experience premium hospitality at Power Mike Hotel Abuja. Modern rooms, excellent amenities, and prime location in Nigeria's capital. Book your stay today!",
  keywords:
    "Power Mike Hotel, Abuja hotels, luxury accommodation Abuja, Nigeria hotels, business hotel Abuja, premium lodging",
  openGraph: {
    title: "Power Mike Hotel Abuja | Luxury Accommodation",
    description:
      "Experience premium hospitality at Power Mike Hotel Abuja. Modern rooms, excellent amenities, and prime location.",
    type: "website",
    locale: "en_NG",
    siteName: "Power Mike Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Mike Hotel Abuja | Luxury Accommodation",
    description: "Experience premium hospitality at Power Mike Hotel Abuja.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://powermike-hotel.com",
  },
}

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
  telephone: "+234-XXX-XXX-XXXX",
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-300/30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PM</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black tracking-tight">Power Mike Hotel</h1>
                <p className="text-sm text-gray-800/70">Abuja, Nigeria</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#rooms"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                Rooms
              </Link>
              <Link
                href="#amenities"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                Amenities
              </Link>
              <Link
                href="#location"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                Location
              </Link>
              <Link
                href="#contact"
                className="text-gray-800 hover:text-black transition-colors font-medium"
              >
                Contact
              </Link>
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2">Book Now</Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800">
          <div className="absolute inset-0 bg-black/60"></div>
          <Image
            src="/images/hero.jpg?height=1080&width=1920"
            alt="Power Mike Hotel Abuja - Luxury accommodation in Nigeria's capital"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              ⭐ Rated #1 Hotel in Abuja
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
              WELCOME TO
              <span className="block text-gray-800">POWER MIKE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where Comfort Meets Style and Exceptional Service Elevates Every Experience in Nigeria&apos;s Capital
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-10 py-4 font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Stay Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gray-800 border-white hover:bg-white hover:text-black text-lg px-10 py-4 font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +234-703-944-8131
              </Button>
            </div>
            <div className="mt-10 flex justify-center items-center space-x-12 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-gray-100 mr-2" />
                Free Cancellation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-gray-100 mr-2" />
                Best Price Guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-gray-100 mr-2" />
                Instant Confirmation
              </div>
            </div>
          </div>
        </section>

        {/* Quick Booking Form */}
        <section className="bg-black py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-5xl mx-auto bg-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-black">Check Availability & Book Now</h2>
                <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-800">Check-in Date</label>
                    <Input type="date" className="w-full border-gray-300/30 focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-800">Check-out Date</label>
                    <Input type="date" className="w-full border-gray-300/30 focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-800">Guests</label>
                    <select className="w-full p-3 border border-gray-300/30 rounded-md focus:border-black focus:outline-none">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white py-3">
                      Search Rooms
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
                  Welcome to Power Mike Hotel Abuja
                </h2>
                <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                  Located in the prestigious Central Business District of Abuja, Power Mike Hotel offers unparalleled
                  luxury and convenience for both business and leisure travelers.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Image
                    src="/images/hero.jpg?height=500&width=700"
                    alt="Power Mike Hotel lobby - elegant interior design"
                    width={700}
                    height={500}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-black p-4 rounded-lg">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-black">Prime Location</h3>
                      <p className="text-gray-800 leading-relaxed">
                        Strategically located in Abuja&apos;s CBD, minutes away from government offices, shopping centers,
                        and major attractions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-black p-4 rounded-lg">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-black">Premium Security</h3>
                      <p className="text-gray-800 leading-relaxed">
                        24/7 security with CCTV monitoring, secure parking, and professional security personnel ensuring
                        your safety.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="bg-black p-4 rounded-lg">
                      <Star className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-black">Exceptional Service</h3>
                      <p className="text-gray-800 leading-relaxed">
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
        <section id="rooms" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Luxurious Rooms & Suites</h2>
              <p className="text-xl text-gray-800">
                Choose from our selection of elegantly designed accommodations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                {
                  name: "Deluxe Room",
                  price: "₦25,000",
                  image: "/images/hero.jpg?height=350&width=450",
                  features: ["King Size Bed", "City View", "Free WiFi", "Air Conditioning"],
                },
                {
                  name: "Executive Suite",
                  price: "₦45,000",
                  image: "/images/hero.jpg?height=350&width=450",
                  features: ["Separate Living Area", "Premium View", "Mini Bar", "Work Desk"],
                },
                {
                  name: "Presidential Suite",
                  price: "₦85,000",
                  image: "/images/hero.jpg?height=350&width=450",
                  features: ["Luxury Amenities", "Panoramic View", "Butler Service", "Private Balcony"],
                },
              ].map((room, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white"
                >
                  <div className="relative">
                    <Image
                      src={room.image || "/images/hero.jpg"}
                      alt={`${room.name} at Power Mike Hotel Abuja`}
                      width={450}
                      height={350}
                      className="w-full h-56 object-cover"
                    />
                    <Badge className="absolute top-6 left-6 bg-black text-white">
                      From {room.price}/night
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-black">{room.name}</h3>
                    <ul className="space-y-3 mb-6">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-800">
                          <CheckCircle className="h-5 w-5 text-black mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white py-3">
                      Book This Room
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">World-Class Amenities</h2>
              <p className="text-xl text-gray-800">Everything you need for a comfortable and memorable stay</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
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
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <amenity.icon className="h-9 w-9 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-3 text-lg">{amenity.name}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">What Our Guests Say</h2>
              <div className="flex justify-center items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current" />
                ))}
                <span className="ml-3 text-xl font-semibold text-gray-800">4.8/5 (324 reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
                <Card key={index} className="p-8 border-0 shadow-lg bg-gray-50">
                  <CardContent className="p-0">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-800 mb-6 italic text-lg leading-relaxed">&quot;{testimonial.review}&quot;</p>
                    <div>
                      <p className="font-semibold text-black text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-800/70">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">Perfect Location in Abuja</h2>
                <p className="text-xl text-gray-800">Centrally located in the heart of Nigeria&apos;s capital city</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <div className="bg-white h-80 rounded-lg mb-8 flex items-center justify-center shadow-lg">
                    <p className="text-gray-800 text-lg">Interactive Map Coming Soon</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-black mr-4" />
                      <span className="text-gray-800 text-lg">
                        Central Business District, Abuja, FCT, Nigeria
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-black mr-4" />
                      <span className="text-gray-800 text-lg">+234 703 944 8131</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-black mr-4" />
                      <span className="text-gray-800 text-lg">powermikeguesthouse@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold mb-8 text-black">Nearby Attractions</h3>
                  <div className="space-y-4">
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
                        className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
                      >
                        <span className="font-semibold text-black text-lg">{attraction.name}</span>
                        <div className="text-right text-sm text-gray-800">
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
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Ready to Experience Luxury?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-50">
              Book your stay at Power Mike Hotel Abuja today and discover why we&apos;re the preferred choice for discerning
              travelers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-10 py-4 font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now - Best Rates Guaranteed
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gray-800 hover:bg-white hover:text-black text-lg px-10 py-4 font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Special Offers
              </Button>
            </div>
            <p className="mt-6 text-gray-100">Free cancellation • Instant confirmation • Secure booking</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-xl">PM</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Power Mike Hotel</h3>
                    <p className="text-gray-50">Abuja, Nigeria</p>
                  </div>
                </div>
                <p className="text-gray-50 mb-6 leading-relaxed">
                  Experience luxury and comfort in the heart of Nigeria&apos;s capital city.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">in</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3 text-gray-50">
                  <li>
                    <Link href="#rooms" className="hover:text-white transition-colors">
                      Rooms & Suites
                    </Link>
                  </li>
                  <li>
                    <Link href="#amenities" className="hover:text-white transition-colors">
                      Amenities
                    </Link>
                  </li>
                  <li>
                    <Link href="#location" className="hover:text-white transition-colors">
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-6">Services</h4>
                <ul className="space-y-3 text-gray-50">
                  <li>Room Service</li>
                  <li>Conference Facilities</li>
                  <li>Airport Transfer</li>
                  <li>Laundry Service</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
                <div className="space-y-4 text-gray-509">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>Central Business District, Abuja</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+234 703 944 8131</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>powermikeguesthouse@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300/30 mt-12 pt-8 text-center text-gray-50">
              <p>
                &copy; {new Date().getFullYear()} Power Mike Hotel. All rights reserved.  Designed by <a href="omarandblasius.com.ng" className="text-warning">Omar and Blasius Software Studio </a>
              </p>
              
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
