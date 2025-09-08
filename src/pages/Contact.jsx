const Contact = () => {
  return (
    <section id="contact" className="pt-24 bg-gray-100 min-h-screen px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-10">Have a question or feedback? Reach out to us using the form below.</p>

        <form className="bg-white p-8 rounded-3xl shadow-lg flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-xl border" required/>
          <input type="email" placeholder="Your Email" className="p-3 rounded-xl border" required/>
          <textarea placeholder="Your Message" className="p-3 rounded-xl border h-32" required/>
          <button type="submit" className="py-3 bg-blue-500 rounded-xl font-bold text-white hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
