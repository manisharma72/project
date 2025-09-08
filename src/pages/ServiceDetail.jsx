import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const serviceCapitalized = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);

  const staticProviders = [
    { name: "Amit Sharma", service: "plumber", location: "Delhi", contact: "9876543210", amount: 500, idProof: "DL12345", photo: "/images/person1.jpg" },
    { name: "Rohit Kumar", service: "plumber", location: "Delhi", contact: "9876543211", amount: 600, idProof: "DL12346", photo: "/images/person2.jpg" },
    { name: "Vijay Singh", service: "mechanic", location: "Delhi", contact: "9988776655", amount: 1000, idProof: "MC12345", photo: "/images/person11.jpg" },
    { name: "Suresh Yadav", service: "electrician", location: "Noida", contact: "9123456782", amount: 420, idProof: "EL12347", photo: "/images/person8.jpg" },
    { name: "Karan Singh", service: "carpenter", location: "Delhi", contact: "9876500001", amount: 800, idProof: "CP12345", photo: "/images/person16.jpg" },
  ];

  const storedProviders = JSON.parse(localStorage.getItem("providers") || "[]");
  const allProviders = [...staticProviders, ...storedProviders];
  const filteredProviders = allProviders.filter(p => p.service === serviceName.toLowerCase());

  return (
    <section className="pt-24 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{serviceCapitalized} Providers</h2>
        {filteredProviders.length === 0 ? (
          <p className="text-gray-600">No providers registered yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProviders.map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg">
                <img src={p.photo} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-4"/>
                <h4 className="text-xl font-semibold mb-1">{p.name}</h4>
                <p className="text-gray-600 mb-1">ID Proof: {p.idProof}</p>
                <p className="text-gray-600 mb-1">Location: {p.location}</p>
                <p className="text-gray-600 mb-1">Amount: ₹{p.amount}</p>
                <p className="text-gray-600 mb-2">Contact: {p.contact}</p>
                <button className="w-full py-2 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition">Call Now</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;
