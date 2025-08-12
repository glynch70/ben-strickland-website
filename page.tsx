"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import {
  Download,
  Users,
  Target,
  Zap,
  CheckCircle,
  Menu,
  X,
  Calendar,
  Heart,
  Lightbulb,
  MessageCircle,
  TrendingUp,
  BookOpen,
  Compass,
  Filter,
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBookChat = () => {
    window.open("https://calendly.com/ben-stickland", "_blank")
  }

  const handleDownloadWalkthrough = () => {
    // Placeholder for PDF download functionality
    alert("PDF Download functionality coming soon!")
    // In a real implementation, you would link to your PDF file:
    // window.open("/path/to/your/walkthrough.pdf", "_blank");
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const testimonials = [
    {
      quote:
        "Since working with Ben, I've started attracting the right clients, the kind who INSTANTLY understand my value. I've landed podcast invites, exciting collaborations, and feel far more confident showing up online. He helped me clarify my message and communicate what sets me apart in a way that finally clicks with me and my audience.",
      name: "Garry Lynch",
      title: "Founder",
      company: "Bear Media (Scotland)",
      image: "/images/9.png",
    },
    {
      quote:
        "I came across Ben because the algorithm gods clearly knew I needed him. The main thing Ben gave me, was the confidence to be my complete self. Potty mouth n all. It's so easy to feel like you have to show up a certain way, but he helped me realise that when you're yourself, you attract your kind of people. It's true and I've now got a waitlist of clients who want to work with me!",
      name: "Felicity Bartlett",
      title: "Founder",
      company: "Virtually Felicity",
      image: "/images/10.png",
    },
    {
      quote:
        "Ben is a genuine guy who doesn't push a content template, he helps you build a message you'll actually want to repeat. Working with him was illuminating for me. We applied his BE MORE YOU framework to how I position on LinkedIn, and within weeks, engagement started climbing. But more importantly, the content felt like me, and it helped me stand out from the crowd.",
      name: "Matt Earle",
      title: "Founder",
      company: "The Selling Collective",
      image: "/images/11.png",
    },
    {
      quote:
        "Ben simplifies personal branding and content in a way that makes sense to someone like me, a busy entrepreneur. He doesn't overwhelm you but instead provides clear ideas and accountability that make a real difference.",
      name: "Alex Thompson",
      title: "Co-Founder",
      company: "FundSpace",
      image: "/images/12.png",
    },
  ]

  return (
    <div className="min-h-screen dark-texture-bg text-gray-50">
      {/* Dark overlay for better text readability */}
      <div className="min-h-screen bg-black/60">
        {/* Sticky CTA Button */}
        <div
          className={`fixed top-4 right-4 z-50 transition-all duration-300 ${isSticky ? "opacity-100" : "opacity-0"}`}
        >
          <Button onClick={handleBookChat} className="accent-bg hover:bg-[#048a9f] text-white font-bold shadow-lg">
            <Calendar className="w-4 h-4 mr-2" />
            Book a Chat
          </Button>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-[#05ABC4]/30 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-macabro text-xl brand-cream">
                <span className="accent-color">BE MORE</span> YOU
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection("personal-brand")}
                  className="text-gray-50 hover-accent transition-colors text-base"
                >
                  What is a Personal Brand?
                </button>
                <button
                  onClick={() => scrollToSection("success")}
                  className="text-gray-50 hover-accent transition-colors text-base"
                >
                  Success Stories
                </button>
                <button
                  onClick={() => scrollToSection("framework")}
                  className="text-gray-50 hover-accent transition-colors text-base"
                >
                  Framework
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-50 hover-accent transition-colors text-base"
                >
                  Services
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-50 p-2 rounded-md hover:bg-[#05ABC4]/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 border-t border-[#05ABC4]/30">
                  <button
                    onClick={() => scrollToSection("personal-brand")}
                    className="block px-3 py-2 text-base font-medium text-gray-50 hover-accent hover:bg-[#05ABC4]/10 rounded-md transition-colors w-full text-left"
                  >
                    What is a Personal Brand?
                  </button>
                  <button
                    onClick={() => scrollToSection("success")}
                    className="block px-3 py-2 text-base font-medium text-gray-50 hover-accent hover:bg-[#05ABC4]/10 rounded-md transition-colors w-full text-left"
                  >
                    Success Stories
                  </button>
                  <button
                    onClick={() => scrollToSection("framework")}
                    className="block px-3 py-2 text-base font-medium text-gray-50 hover-accent hover:bg-[#05ABC4]/10 rounded-md transition-colors w-full text-left"
                  >
                    Framework
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block px-3 py-2 text-base font-medium text-gray-50 hover-accent hover:bg-[#05ABC4]/10 rounded-md transition-colors w-full text-left"
                  >
                    Services
                  </button>
                  <div className="pt-4 border-t border-[#05ABC4]/20 mt-4">
                    <button
                      onClick={() => {
                        handleBookChat()
                        setIsMenuOpen(false)
                      }}
                      className="block w-full px-3 py-2 text-base font-medium accent-bg text-white hover:bg-[#048a9f] rounded-md transition-colors"
                    >
                      Book a Chat
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* 1. Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="font-macabro text-5xl sm:text-6xl lg:text-8xl mb-6 hero-h1-color">
                  don't be beige.
                  <br />
                  <span className="accent-color">be more you.</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-50 animate-fade-in-up animate-delay-100 leading-relaxed">
                  Build a Personal Brand That Brings You Clients, Talent & Opportunities
                </h2>
                <Button
                  onClick={handleDownloadWalkthrough}
                  size="lg"
                  className="accent-bg hover:bg-[#048a9f] text-white font-bold text-lg px-8 py-4 mb-8 animate-fade-in-up animate-delay-200 w-full md:w-auto hover-glow"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download the Walkthrough
                </Button>
                <p className="text-base text-gray-300 animate-fade-in-up animate-delay-300 leading-relaxed">
                  For founders, solo entrepreneurs, and small business owners ready to build trust, attract clients, and
                  grow visibility.
                </p>
                {/* Optional Social Proof Bar */}
                <div className="mt-6 text-gray-400 text-sm animate-fade-in-up animate-delay-300">
                  <Users className="inline-block w-4 h-4 mr-1 text-[#05ABC4]" />
                  {"100+ founders have downloaded the walkthrough!"}
                </div>
              </div>
              <div className="flex justify-center animate-fade-in-up animate-delay-200">
                <div className="w-80 h-80 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full flex items-center justify-center p-2">
                  <img
                    src="/images/ben-hero.png"
                    alt="Ben Stickland - The Personal Branding Guy, helping founders build authentic personal brands"
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What is a Personal Brand? */}
        <section id="personal-brand" className="py-16 bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
              {/* Text Column */}
              <div>
                <h2 className="font-macabro text-4xl mb-8 brand-cream">What is a Personal Brand?</h2>
                <div className="space-y-6 text-lg text-gray-50 leading-relaxed">
                  <p>
                    Your personal brand isn't your logo or your LinkedIn banner. It's the consistent impression people
                    get when they think of you professionally.
                  </p>
                  <p>
                    It's what makes someone say{" "}
                    <span className="accent-color font-semibold">"I need to work with this person"</span> instead of
                    <span className="text-gray-400"> "They seem... fine, I guess."</span>
                  </p>
                  <p>
                    Most founders think personal branding is vanity. It's not. It's strategy. It's the difference
                    between chasing opportunities and having them come to you.
                  </p>
                </div>
              </div>

              {/* Image Column */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full p-2 mx-auto">
                    <img
                      src="/images/7.png"
                      alt="Ben Stickland with a client, holding a 'Mr. Healthcare' sign"
                      className="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#05ABC4]/20 rounded-full blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What Success Looks Like */}
        <section id="success" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-macabro text-4xl text-center mb-12 brand-cream animate-fade-in-up">
              What Success Looks Like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/60 border-2 border-[#05ABC4] hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up animate-delay-100 hover-glow">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 accent-color mb-4" />
                  <p className="text-lg font-semibold mb-2 text-gray-50 leading-relaxed">
                    "A dream hire says yes after following your content for months."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border-2 border-[#05ABC4] hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up animate-delay-200 hover-glow">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 accent-color mb-4" />
                  <p className="text-lg font-semibold mb-2 text-gray-50 leading-relaxed">
                    "An investor DM's: 'I've been watching your posts – I love what you're building.'"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/60 border-2 border-[#05ABC4] hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up animate-delay-300 hover-glow">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 accent-color mb-4" />
                  <p className="text-lg font-semibold mb-2 text-gray-50 leading-relaxed">
                    "A client signs without hesitation: 'You just get it.'"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. BE MORE YOU Framework */}
        <section id="framework" className="py-16 bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="font-macabro text-4xl mb-4 brand-cream">
                The <span className="accent-color">BE MORE YOU</span> Framework
              </h2>
              <p className="text-xl text-gray-50 leading-relaxed">
                9 pillars that transform your personal brand from beige to brilliant
              </p>
            </div>

            {/* Desktop: 3-column layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {/* BE Column */}
              <div className="text-center">
                <h3 className="font-macabro text-6xl mb-8 accent-color">BE</h3>
                <div className="space-y-4">
                  {[
                    {
                      letter: "B",
                      title: "Beliefs",
                      desc: "What do you stand for (and against)? Turn your convictions into content that builds trust.",
                      icon: Heart,
                    },
                    {
                      letter: "E",
                      title: "Experiences",
                      desc: "Your lived moments, turning points, failures and wins. Teaching moments that build authority.",
                      icon: TrendingUp,
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="bg-black/60 border border-[#05ABC4]/30 hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up hover-glow"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full flex items-center justify-center text-white font-macabro text-lg">
                            {item.letter}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <item.icon className="w-5 h-5 accent-color" />
                              <h4 className="font-macabro text-lg brand-cream">{item.title}</h4>
                            </div>
                            <p className="text-gray-50 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* MORE Column */}
              <div className="text-center">
                <h3 className="font-macabro text-6xl mb-8 accent-color">MORE</h3>
                <div className="space-y-4">
                  {[
                    {
                      letter: "M",
                      title: "Moments",
                      desc: "Everyday behind-the-scenes insights that humanise and warm up your content.",
                      icon: Lightbulb,
                    },
                    {
                      letter: "O",
                      title: "Opinions",
                      desc: "Say what you actually believe. Bold takes create memorability and spark conversation.",
                      icon: MessageCircle,
                    },
                    {
                      letter: "R",
                      title: "Results",
                      desc: "Proof you can deliver! Stats, feedback and outcomes that build credibility and trust.",
                      icon: Target,
                    },
                    {
                      letter: "E",
                      title: "Expertise",
                      desc: "Teach what you know. Insightful frameworks and how-tos that establish authority.",
                      icon: BookOpen,
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="bg-black/60 border border-[#05ABC4]/30 hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up hover-glow"
                      style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full flex items-center justify-center text-white font-macabro text-lg">
                            {item.letter}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <item.icon className="w-5 h-5 accent-color" />
                              <h4 className="font-macabro text-lg brand-cream">{item.title}</h4>
                            </div>
                            <p className="text-gray-50 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* YOU Column */}
              <div className="text-center">
                <h3 className="font-macabro text-6xl mb-8 accent-color">YOU</h3>
                <div className="space-y-4">
                  {[
                    {
                      letter: "Y",
                      title: "Your WHY",
                      desc: "Why do you give a damn? Why should anyone else? Show the mission behind the message.",
                      icon: Compass,
                    },
                    {
                      letter: "O",
                      title: "Others",
                      desc: "Shine a light on your community, mentors & colleagues. Creates depth and shared credibility.",
                      icon: Users,
                    },
                    {
                      letter: "U",
                      title: "Unfiltered",
                      desc: "Drop the polish occasionally. Honest, raw posts are what stick with people.",
                      icon: Filter,
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="bg-black/60 border border-[#05ABC4]/30 hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up hover-glow"
                      style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full flex items-center justify-center text-white font-macabro text-lg">
                            {item.letter}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <item.icon className="w-5 h-5 accent-color" />
                              <h4 className="font-macabro text-lg brand-cream">{item.title}</h4>
                            </div>
                            <p className="text-gray-50 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Single column layout */}
            <div className="md:hidden space-y-6">
              {[
                {
                  letter: "B",
                  title: "Beliefs",
                  desc: "What do you stand for (and against)? Turn your convictions into content that builds trust.",
                  icon: Heart,
                },
                {
                  letter: "E",
                  title: "Experiences",
                  desc: "Your lived moments, turning points, failures and wins. Teaching moments that build authority.",
                  icon: TrendingUp,
                },
                {
                  letter: "M",
                  title: "Moments",
                  desc: "Everyday behind-the-scenes insights that humanise and warm up your content.",
                  icon: Lightbulb,
                },
                {
                  letter: "O",
                  title: "Opinions",
                  desc: "Say what you actually believe. Bold takes create memorability and spark conversation.",
                  icon: MessageCircle,
                },
                {
                  letter: "R",
                  title: "Results",
                  desc: "Proof you can deliver! Stats, feedback and outcomes that build credibility and trust.",
                  icon: Target,
                },
                {
                  letter: "E",
                  title: "Expertise",
                  desc: "Teach what you know. Insightful frameworks and how-tos that establish authority.",
                  icon: BookOpen,
                },
                {
                  letter: "Y",
                  title: "Your WHY",
                  desc: "Why do you give a damn? Why should anyone else? Show the mission behind the message.",
                  icon: Compass,
                },
                {
                  letter: "O",
                  title: "Others",
                  desc: "Shine a light on your community, mentors & colleagues. Creates depth and shared credibility.",
                  icon: Users,
                },
                {
                  letter: "U",
                  title: "Unfiltered",
                  desc: "Drop the polish occasionally. Honest, raw posts are what stick with people.",
                  icon: Filter,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-black/60 border border-[#05ABC4]/30 hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full flex items-center justify-center text-white font-macabro text-2xl">
                        {item.letter}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <item.icon className="w-6 h-6 accent-color" />
                          <h3 className="font-macabro text-xl brand-cream">{item.title}</h3>
                        </div>
                        <p className="text-gray-50 text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Breakpoint Image 2 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center animate-fade-in-up">
            <img
              src="/images/8.png"
              alt="Ben Stickland pointing at a 'Monty's Bakehouse' sign"
              className="w-full max-w-2xl rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* 5. Why Do I Do This? */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div className="lg:text-left text-center order-2 lg:order-1">
                <h2 className="font-macabro text-4xl mb-4 brand-cream">Why do I do this?</h2>
                <h3 className="text-xl mb-8 accent-color text-base leading-relaxed">
                  If I'm telling you to share your story, then I better bloody share mine too!
                </h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-50 leading-relaxed">
                    When I launched my first business in 2019, I didn't start with a slick personal brand. I started
                    with a laptop, rent to pay, and the growing realisation that I needed to stand out to sell my
                    product.
                  </p>
                  <p className="text-base text-gray-50 leading-relaxed">
                    I had to learn how to show up online in a way that felt like me, not like someone doing an
                    impression of an irritating LinkedIn influencer trying to flog you 10 leads in 10 days. And I did.
                  </p>
                  <p className="text-base text-gray-50 leading-relaxed">
                    In less than 18 months, I built a 6-figure profit business from the ground up. Not by shouting
                    louder. Just by building a personal brand that people actually gave a toss about.
                  </p>
                  <p className="text-base text-gray-50 leading-relaxed font-semibold">
                    That's what sets me apart from most personal brand consultants – I've actually done it. Built a
                    business, built the personal brand that supported it. Not in theory, in practice. On the coal face.
                  </p>
                </div>
              </div>

              <div className="flex justify-center order-1 lg:order-2">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full p-2">
                    <img
                      src="/images/6.png"
                      alt="Ben Stickland working outdoors - authentic personal branding in action"
                      className="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#05ABC4]/20 rounded-full blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Choose Your Path */}
        <section id="services" className="py-16 bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-macabro text-4xl text-center mb-12 brand-cream animate-fade-in-up">Choose Your Path</h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 1:1 Coaching - Most Popular */}
              <Card className="relative bg-black/60 border-2 border-[#05ABC4] hover:shadow-xl hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up animate-delay-100 hover-glow">
                <CardContent className="p-8">
                  <Badge className="mb-4 accent-bg text-white">Most Popular</Badge>
                  <h3 className="font-macabro text-2xl mb-2 brand-cream">1:1 Coaching</h3>
                  <p className="text-gray-50 mb-6 text-base leading-relaxed">
                    Deep, hands-on coaching for founders who want serious traction.
                  </p>
                  <div className="text-3xl font-bold mb-6 text-gray-50">
                    £485<span className="text-lg font-normal">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Two private 1-hour sessions monthly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">3 Personalised content ideas per week</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Speaking gigs & podcast direction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">WhatsApp support between sessions</span>
                    </li>
                  </ul>
                  <Button
                    onClick={handleBookChat}
                    className="w-full accent-bg hover:bg-[#048a9f] text-white hover-glow"
                  >
                    Let's Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Done-For-You */}
              <Card className="relative bg-black/60 border border-[#05ABC4]/30 hover:shadow-xl hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up animate-delay-200 hover-glow">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-gray-800 text-white">Done-For-You</Badge>
                  <h3 className="font-macabro text-2xl mb-2 brand-cream">'Done-For-You' Service</h3>
                  <p className="text-gray-50 mb-6 text-base leading-relaxed">
                    For time-strapped founders ready to scale visibility with little stress.
                  </p>
                  <div className="text-3xl font-bold mb-6 text-gray-50">
                    £945<span className="text-lg font-normal">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">10 LinkedIn posts per month written for you</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Two 30-minute strategy check-ins monthly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Crafted video scripts that build trust</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">WhatsApp support between sessions</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white hover-glow">Apply Now</Button>
                  <p className="text-xs text-gray-400 mt-3">3-month commitment required</p>
                </CardContent>
              </Card>

              {/* Group Coaching Community */}
              <Card className="relative bg-black/60 border border-[#05ABC4]/30 hover:shadow-xl hover:shadow-[#05ABC4]/20 transition-all animate-fade-in-up animate-delay-300 hover-glow">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-purple-600 text-white">Community</Badge>
                  <h3 className="font-macabro text-2xl mb-2 brand-cream">Group Coaching Community</h3>
                  <p className="text-gray-50 mb-6 text-base leading-relaxed">
                    Build your brand alongside other ambitious founders.
                  </p>
                  <div className="text-3xl font-bold mb-6 text-gray-50">
                    £24<span className="text-lg font-normal">/week</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Weekly live coaching calls (Friday 12:00 GMT)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Founder-only community</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Replay library of previous sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-50">Light accountability</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white hover-glow">
                    Join Community
                  </Button>
                  <p className="text-xs text-gray-400 mt-3">3-month commitment required</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 7. Outcomes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-macabro text-4xl text-center mb-4 brand-cream animate-fade-in-up">Outcomes</h2>
            <p className="text-xl text-center text-gray-50 mb-12 animate-fade-in-up animate-delay-100 leading-relaxed">
              Here's what happens when you stop being beige…
            </p>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* 8. Final CTA – Book a Chat */}
        <section className="py-16 bg-gradient-to-r from-black to-[#05ABC4]/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div className="text-center lg:text-left">
                <h2 className="font-macabro text-4xl mb-6 brand-cream">
                  Ready to <span className="accent-color">BE MORE YOU</span>?
                </h2>
                <p className="text-xl mb-8 text-gray-50 leading-relaxed">
                  Let's build a brand that people actually give a toss about.
                </p>
                <Button
                  onClick={handleBookChat}
                  size="lg"
                  className="accent-bg text-white hover:bg-[#048a9f] font-bold text-lg px-8 py-4 mb-8 w-full md:w-auto hover-glow"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Chat
                </Button>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#05ABC4] to-[#048a9f] rounded-full p-2">
                    <img
                      src="/images/ben-outdoor-presenting.png"
                      alt="Ben Stickland ready to help you build your personal brand"
                      className="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#05ABC4]/20 rounded-full blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/80 text-gray-50 py-12 border-t border-[#05ABC4]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-macabro text-2xl mb-4 brand-cream">
                  <span className="accent-color">BE MORE</span> YOU
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Personal branding for founders who want to build trust, attract clients, and grow visibility.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-gray-50">Connect</h4>
                <div className="space-y-2 text-gray-400 text-base leading-relaxed">
                  <a href="mailto:ben@thepersonalbrandingguy.com" className="hover-accent transition-colors block">
                    ben@thepersonalbrandingguy.com
                  </a>
                  <a href="tel:+447761562327" className="hover-accent transition-colors block">
                    07761 562327 (Work)
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thepersonalbrandingguy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-accent transition-colors block"
                  >
                    LinkedIn: @thepersonalbrandingguy
                  </a>
                  <a
                    href="https://www.instagram.com/thepersonalbrandingguy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-accent transition-colors block"
                  >
                    Instagram: @thepersonalbrandingguy
                  </a>
                  <a
                    href="https://www.tiktok.com/@thepersonalbrandingguy?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-accent transition-colors block"
                  >
                    TikTok: @thepersonalbrandingguy
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-gray-50">Legal</h4>
                <div className="space-y-2 text-base leading-relaxed">
                  <a href="#" className="text-gray-400 hover:text-gray-50 transition-colors block">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-50 transition-colors block">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-[#05ABC4]/30 mt-8 pt-8 text-center text-gray-400 text-sm leading-relaxed">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
                <p>© 2025 The Personal Branding Guy. All rights reserved.</p>
                <p className="text-sm">
                  Built by{" "}
                  <a
                    href="https://www.bear-media.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-color hover:text-[#048a9f] transition-colors"
                  >
                    www.bear-media.com
                  </a>{" "}
                  2025
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
