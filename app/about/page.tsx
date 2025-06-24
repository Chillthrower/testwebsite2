import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
                Homesssss
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Retail Experts. <span className="text-blue-600">Global Vision.</span> Local Impact.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Built on decades of international retail experience and a deep understanding of Southeast Asian markets.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gray-200 rounded-2xl mx-auto lg:mx-0 mb-8 lg:mb-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Walter Dantis"
                  width={256}
                  height={256}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Walter Dantis</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 23 years of experience leading global retail brands including Escada, M&S, Kenzo, and Hush
                Puppies, Walter brings unparalleled expertise to the Southeast Asian retail landscape.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                His journey spans multiple continents and cultures, giving him unique insights into both international
                best practices and local market dynamics. This combination of global experience and regional
                understanding forms the foundation of Turning Point Retail Solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Walter's passion lies in transforming retail businesses through strategic thinking, operational
                excellence, and most importantly, investing in people who make retail magic happen every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower retail businesses across Southeast Asia with world-class strategies, operational
                  excellence, and people-first training that drives sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading retail consulting partner in Southeast Asia, known for transforming businesses and
                  creating lasting impact in local communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, integrity, innovation, and respect for people and cultures. We believe in building
                  partnerships that create mutual success and positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Four core principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise You Can Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Decades of proven experience with global brands and deep understanding of retail dynamics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every solution is tailored to your unique needs, challenges, and market position.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investing in People</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe great retail starts with great people. Our training programs empower your team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term success through responsible business practices and community impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
