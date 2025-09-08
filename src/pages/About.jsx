import { FaUserCheck, FaClock, FaHeadset } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaUserCheck className="text-yellow-400 text-4xl mb-4 mx-auto" />,
      title: "Trusted Professionals",
      desc: "All service providers are verified to ensure quality and reliability.",
    },
    {
      icon: <FaClock className="text-yellow-400 text-4xl mb-4 mx-auto" />,
      title: "Instant Booking",
      desc: "Book your desired service in just a few clicks without any hassle.",
    },
    {
      icon: <FaHeadset className="text-yellow-400 text-4xl mb-4 mx-auto" />,
      title: "24/7 Support",
      desc: "Our team is always ready to help you with your queries and emergencies.",
    },
  ];

  return (
    <section id="about" className="pt-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Civic Mate</h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
          Civic Mate connects you with verified local service providers and civic solutions to make your life easier, faster, and safer.
        </p>

        {/* Image + Description Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              We aim to simplify your life by connecting you with trusted service providers in your local area. From household tasks to professional services, Civic Mate ensures reliability and convenience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/service1.jpg" alt="Service 1" className="w-full h-48 object-cover rounded-xl shadow-lg" />
            <img src="/images/service2.jpg" alt="Service 2" className="w-full h-48 object-cover rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Trusted Features */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
