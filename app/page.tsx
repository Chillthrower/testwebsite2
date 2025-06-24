import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users, TrendingUp, Award, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Turning Point <span className="text-blue-600">Retail</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Retail. <span className="text-blue-600">Empowering Growth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We help retail businesses thrive through innovative strategies, operational excellence, and people-first
              training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Work With Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Explore Services
              </Button>
            </div>

            {/* Founder Credibility */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <p className="text-gray-700 text-lg font-medium">
                With <span className="text-blue-600 font-bold">23+ years</span> leading global brands like{" "}
                <span className="font-semibold">Escada, M&S, Kenzo, and Hush Puppies</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive retail solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Store Operations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimize your retail operations with proven strategies that drive efficiency and profitability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Franchise Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scale your business through strategic franchise development and partnership programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill Academy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empower your team with comprehensive training programs designed for retail excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
              "Turning Point Retail Solutions transformed our operations completely. Their expertise and dedication to
              our success is unmatched."
            </blockquote>
            <cite className="text-lg text-gray-600 font-medium">— Regional Director, Leading Fashion Retailer</cite>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-6 py-2 text-lg font-medium mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            Serving Clients Across Asia & Beyond
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Global Expertise, Local Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our base in Cambodia, we serve retail businesses across Southeast Asia and beyond, bringing
            international best practices to local markets.
          </p>
        </div>
      </section>

      {/* Newsletter & Social */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-300 mb-8">Get the latest insights and updates from the retail industry</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900 border-0 flex-1" />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">Subscribe</Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Turning Point Retail</h3>
              <p className="text-gray-400 mb-4">
                Transforming retail businesses through innovative strategies and operational excellence.
              </p>
              <p className="text-gray-400">
                No 101, Building 61, Street 57, BKK 1<br />
                Phnom Penh, Cambodia
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+855 86 844 464</li>
                <li>info@turningpointretail.com</li>
                <li>www.turningpointretail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Turning Point Retail Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
