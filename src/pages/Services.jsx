import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const servicesList = ["Plumber", "Electrician", "Mechanic", "Carpenter", "Painter", "Maid", "Tutor"];

  const departments = [
    { name: "Delhi Police", url: "https://www.delhipolice.nic.in/" },
    { name: "Municipal Corporation Delhi", url: "https://mcdonline.nic.in/" },
    { name: "Electricity Board", url: "https://www.delhielectricity.gov.in/" },
    { name: "Public Works Department", url: "http://pwd.delhigovt.nic.in/" },
    { name: "Water Supply Department", url: "http://www.delhiwater.gov.in/" },
    { name: "Health Department", url: "http://health.delhigovt.nic.in/" },
  ];

  return (
    <section className="pt-24 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">All Services</h2>
        <p className="text-gray-600 mb-12">Click on any service to view registered providers.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {servicesList.map(service => (
            <div
              key={service}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer"
              onClick={() => navigate(`/services/${service.toLowerCase()}`)}
            >
              <img src="/images/service-placeholder.jpg" alt={service} className="w-full h-40 object-cover rounded-xl mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <button className="px-4 py-2 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition">View {service}</button>
            </div>
          ))}
        </div>

        {/* Government Departments */}
        <div className="text-left max-w-4xl mx-auto mt-12">
          <h3 className="text-3xl font-bold mb-6">Government Departments</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {departments.map((dept, idx) => (
              <li key={idx} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex justify-between items-center">
                <span>{dept.name}</span>
                <a href={dept.url} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-semibold hover:underline">Visit</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
