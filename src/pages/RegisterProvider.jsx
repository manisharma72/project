import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterProvider = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    location: "",
    contact: "",
    amount: "",
    idProof: "",
    photo: "",
  });

  const servicesList = ["Plumber", "Electrician", "Mechanic", "Carpenter", "Painter", "Maid", "Tutor"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedProviders = JSON.parse(localStorage.getItem("providers") || "[]");
    storedProviders.push({ ...formData, service: formData.service.toLowerCase() });
    localStorage.setItem("providers", JSON.stringify(storedProviders));
    alert(`${formData.name} registered successfully!`);
    navigate(`/services/${formData.service.toLowerCase()}`);
  };

  return (
    <section className="pt-24 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Register as a Service Provider</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="p-3 rounded-xl border"/>
          <select name="service" value={formData.service} onChange={handleChange} required className="p-3 rounded-xl border">
            <option value="">Select Service</option>
            {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="p-3 rounded-xl border"/>
          <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required className="p-3 rounded-xl border"/>
          <input type="number" name="amount" placeholder="Service Amount (₹)" value={formData.amount} onChange={handleChange} required className="p-3 rounded-xl border"/>
          <input type="text" name="idProof" placeholder="ID Proof" value={formData.idProof} onChange={handleChange} required className="p-3 rounded-xl border"/>
          <input type="text" name="photo" placeholder="Photo URL" value={formData.photo} onChange={handleChange} required className="p-3 rounded-xl border"/>
          <button type="submit" className="py-3 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition">Register</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterProvider;
