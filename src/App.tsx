import { Heart, Users, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      <Hero />
      <Mission />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 via-blue-100/30 to-green-100/40" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg">
            <Heart className="w-16 h-16 text-teal-600" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          Your Mental Well-Being
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
            Matters
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Find guidance, resources, and a safe space to improve your mental health.
        </p>

        <button className="group px-10 py-5 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

function Mission() {
  const missions = [
    {
      icon: Heart,
      title: 'Guidance',
      description: 'Expert advice and support tailored to your unique journey towards mental wellness.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with others in a safe, supportive environment where you are never alone.'
    },
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'Access evidence-based tools and materials to support your mental health growth.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves support on their mental health journey. Our platform provides
            compassionate guidance, fostering awareness, and empowering personal growth in a safe,
            judgment-free space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <mission.icon className="w-10 h-10 text-teal-600" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: 'Daily Wellness Tips',
      description: 'Receive personalized daily insights and practices to nurture your mental well-being.',
      gradient: 'from-teal-400 to-green-400'
    },
    {
      title: 'Anonymous Community',
      description: 'Share your experiences and connect with others in complete privacy and safety.',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Professional Resources',
      description: 'Access vetted therapists, counselors, and mental health professionals when you need them.',
      gradient: 'from-green-400 to-teal-400'
    },
    {
      title: 'Self-Improvement Tools',
      description: 'Explore guided meditations, journaling prompts, and evidence-based exercises.',
      gradient: 'from-cyan-400 to-blue-400'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and support designed to meet you wherever you are on your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${feature.gradient} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`} />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-20`} />
                  <Sparkles className="w-6 h-6 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center animate-slide-up">
        <div className="mb-8 flex justify-center">
          <div className="w-1 h-16 bg-gradient-to-b from-teal-400 to-blue-400 rounded-full" />
        </div>

        <blockquote className="text-3xl md:text-4xl font-light text-gray-700 leading-relaxed mb-8 italic">
          "Healing takes time, and asking for help is a courageous step."
        </blockquote>

        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full" />
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-12 md:p-16 shadow-2xl animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Take the first step towards a healthier mind today.
          </h2>
          <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto">
            Join thousands who have already started their journey to mental wellness.
          </p>

          <button className="group px-12 py-5 bg-white text-teal-600 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            Join Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#privacy' }
  ];

  return (
    <footer className="py-12 px-6 bg-white/50 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-teal-600" strokeWidth={1.5} />
            <span className="text-xl font-semibold text-gray-800">MindfulSpace</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

         
        </div>
      </div>
    </footer>
  );
}

export default App;
