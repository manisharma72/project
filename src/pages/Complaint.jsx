import { useState } from "react";

const Complaint = () => {
  const [type, setType] = useState(""); // "provider" | "government" | "college"
  const [name, setName] = useState(""); 
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(""); // optional photo URL
  const [submitted, setSubmitted] = useState(false);

  const serviceProviders = ["Plumber", "Electrician", "Mechanic", "Carpenter", "Painter", "Maid", "Tutor"];
  const governmentDepartments = [
    "Delhi Police", "Municipal Corporation Delhi", "Electricity Board", 
    "Public Works Department", "Water Supply Department", "Health Department"
  ];
  const collegeDepartments = [
    "Computer Science Dept.", "Mechanical Dept.", "Civil Dept.", 
    "Electrical Dept.", "Math Dept.", "Library Dept."
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedComplaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    let assignedTo = "";
    if (type === "provider") assignedTo = "Service Provider";
    else if (type === "government") assignedTo = "Government Department";
    else if (type === "college") assignedTo = "College Dept.";

    storedComplaints.push({ type, name, details, location, photo, assignedTo, date: new Date().toLocaleString() });
    localStorage.setItem("complaints", JSON.stringify(storedComplaints));
    setSubmitted(true);
    setType(""); setName(""); setDetails(""); setLocation(""); setPhoto("");
  };

  return (
    <section className="pt-24 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-lg mt-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Lodge Your Complaint</h1>

        {submitted && <p className="bg-green-200 p-3 mb-4 rounded text-green-800 font-semibold">Complaint submitted successfully!</p>}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-4">
          <select value={type} onChange={(e) => setType(e.target.value)} required className="p-3 rounded-xl border">
            <option value="">Select Complaint Type</option>
            <option value="provider">Service Provider</option>
            <option value="government">Government Department</option>
            <option value="college">College Department</option>
          </select>

          {type === "provider" && (
            <select value={name} onChange={(e) => setName(e.target.value)} required className="p-3 rounded-xl border">
              <option value="">Select Service</option>
              {serviceProviders.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          )}

          {type === "government" && (
            <select value={name} onChange={(e) => setName(e.target.value)} required className="p-3 rounded-xl border">
              <option value="">Select Department</option>
              {governmentDepartments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          )}

          {type === "college" && (
            <select value={name} onChange={(e) => setName(e.target.value)} required className="p-3 rounded-xl border">
              <option value="">Select College Department</option>
              {collegeDepartments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          )}

          <input type="text" placeholder="Your Location" value={location} onChange={(e) => setLocation(e.target.value)} required className="p-3 rounded-xl border"/>
          <textarea placeholder="Complaint Details" value={details} onChange={(e) => setDetails(e.target.value)} required className="p-3 rounded-xl border h-32"/>
          <input type="text" placeholder="Optional Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} className="p-3 rounded-xl border"/>
          <button type="submit" className="py-3 bg-red-400 rounded-xl font-bold hover:bg-red-500 transition">Submit Complaint</button>
        </form>

        {/* List of previous complaints */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-center">Previous Complaints</h3>
          <div className="grid gap-6">
            {JSON.parse(localStorage.getItem("complaints") || "[]").map((c, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
                <p><strong>Type:</strong> {c.type}</p>
                <p><strong>Name:</strong> {c.name}</p>
                <p><strong>Location:</strong> {c.location}</p>
                <p><strong>Details:</strong> {c.details}</p>
                <p><strong>Assigned To:</strong> {c.assignedTo}</p>
                {c.photo && <img src={c.photo} alt="Complaint" className="mt-2 w-full h-48 object-cover rounded-xl"/>}
                <p className="text-gray-500 text-sm mt-1">{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complaint;
