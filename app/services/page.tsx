import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Store,
  GraduationCap,
  Heart,
  Megaphone,
  BarChart3,
  Building2,
  ClipboardList,
  Leaf,
  FileText,
  Truck,
  Brain,
  ShoppingCart,
  Monitor,
  Palette,
  Users,
  Target,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "store-operations",
    title: "Store Operations Optimization",
    icon: Store,
    description: "Streamline your retail operations for maximum efficiency and profitability.",
    details:
      "Comprehensive analysis and optimization of store layouts, workflows, inventory management, and staff productivity. We help you create seamless operations that enhance customer experience while reducing costs.",
  },
  {
    id: "skill-academy",
    title: "Retail Skill Development Academy",
    icon: GraduationCap,
    description: "Empower your team with world-class retail training programs.",
    details:
      "Customized training modules covering customer service excellence, sales techniques, product knowledge, and leadership development. Our programs are designed to elevate your team's performance and career growth.",
  },
  {
    id: "customer-experience",
    title: "Customer Experience Enhancement",
    icon: Heart,
    description: "Create memorable experiences that build customer loyalty.",
    details:
      "Design and implement customer journey mapping, touchpoint optimization, and service excellence programs that turn customers into brand advocates.",
  },
  {
    id: "branding-marketing",
    title: "Branding & Marketing Strategy",
    icon: Megaphone,
    description: "Build powerful brand presence and effective marketing campaigns.",
    details:
      "Develop comprehensive brand strategies, marketing campaigns, and promotional activities that resonate with your target audience and drive sales growth.",
  },
  {
    id: "retail-analytics",
    title: "Retail Analytics & BI",
    icon: BarChart3,
    description: "Make data-driven decisions with advanced analytics solutions.",
    details:
      "Implement business intelligence systems, performance dashboards, and predictive analytics to optimize inventory, pricing, and customer targeting strategies.",
  },
  {
    id: "franchise-development",
    title: "Franchise Development",
    icon: Building2,
    description: "Scale your business through strategic franchise programs.",
    details:
      "Complete franchise development services including business model design, franchise documentation, partner recruitment, and ongoing support systems.",
  },
  {
    id: "project-management",
    title: "Retail Project Management",
    icon: ClipboardList,
    description: "Expert management of retail projects from concept to completion.",
    details:
      "Professional project management for store openings, renovations, system implementations, and expansion projects with proven methodologies and timelines.",
  },
  {
    id: "sustainability",
    title: "Sustainability & CSR Plans",
    icon: Leaf,
    description: "Build responsible business practices for long-term success.",
    details:
      "Develop comprehensive sustainability strategies and corporate social responsibility programs that align with your values and market expectations.",
  },
  {
    id: "retail-sops",
    title: "Retail SOPs",
    icon: FileText,
    description: "Standardize operations with comprehensive procedures.",
    details:
      "Create detailed standard operating procedures for all aspects of retail operations, ensuring consistency, quality, and compliance across all locations.",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Optimization",
    icon: Truck,
    description: "Optimize your supply chain for efficiency and cost reduction.",
    details:
      "Analyze and improve procurement, logistics, inventory management, and vendor relationships to reduce costs and improve service levels.",
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Retail Analytics",
    icon: Brain,
    description: "Leverage artificial intelligence for advanced retail insights.",
    details:
      "Implement AI-driven solutions for demand forecasting, customer behavior analysis, pricing optimization, and personalized marketing campaigns.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    icon: ShoppingCart,
    description: "Build and optimize your online retail presence.",
    details:
      "Complete e-commerce solutions including platform selection, website development, payment integration, and digital marketing strategies.",
  },
  {
    id: "retail-software",
    title: "Retail Software Solutions",
    icon: Monitor,
    description: "Implement technology solutions that drive retail success.",
    details:
      "Selection, implementation, and optimization of POS systems, inventory management software, CRM platforms, and other retail technology solutions.",
  },
  {
    id: "visual-merchandising",
    title: "Visual Merchandising",
    icon: Palette,
    description: "Create compelling visual displays that drive sales.",
    details:
      "Design and implement visual merchandising strategies, store layouts, product displays, and seasonal campaigns that attract customers and increase sales.",
  },
  {
    id: "consumer-insights",
    title: "Consumer Insights",
    icon: Users,
    description: "Understand your customers with deep market research.",
    details:
      "Comprehensive market research, customer surveys, focus groups, and behavioral analysis to understand your target market and optimize your offerings.",
  },
  {
    id: "strategic-consulting",
    title: "Retail Management & Strategic Consulting",
    icon: Target,
    description: "High-level strategic guidance for retail transformation.",
    details:
      "Executive-level consulting for business strategy, market expansion, competitive positioning, and organizational transformation initiatives.",
  },
]

export default function ServicesPage() {
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
              <Link href="/services" className="text-blue-600 font-medium">
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
              Comprehensive <span className="text-blue-600">Retail Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              From strategy to execution, we provide end-to-end retail consulting services tailored to your business
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 6).map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Detailed Services Accordion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Detailed Service Offerings
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <AccordionItem key={service.id} value={service.id} className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center space-x-4 text-left">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2">
                      <div className="ml-14">
                        <p className="text-gray-700 leading-relaxed">{service.details}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our expertise can help you achieve your retail goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Get Started Today
          </Link>
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
