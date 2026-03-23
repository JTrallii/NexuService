"use client";

const Contact = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Let's discuss your project or collaborate on something exciting!
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Connect</h3>
            <ul className="space-y-2">
              <li>Email: john.doe@example.com</li>
              <li>LinkedIn: linkedin.com/in/johndoe</li>
              <li>GitHub: github.com/johndoe</li>
            </ul>
            <div className="mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-700">View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;