import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 pb-7">
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="mt-[7vh] max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-lg">
              We'd love to hear from you
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white ml-4">Visit Us</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tele Systems,<br />
                Vazhoor Road,<br />
                Aramanappady, <br/>
                Changanacherry, Kerala - 686101
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white ml-4">Hours</h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white ml-4">Call Us</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Main: (+91) 9847469484<br />
                Support: (+91) 9020562422 <br/>
                Land Line : 0481-2424622,2425136
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white ml-4">Email Us</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                General: telesystems.chry@gmail.com<br />
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.6727001559952!2d76.5421687758295!3d9.450071882254111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0626089943dd67%3A0x634a3d19c6d2e4a8!2sTele%20Systems%20Telephone%20Shop!5e0!3m2!1sen!2sin!4v1731172475624!5m2!1sen!2sin"
              className="w-full h-96 rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactComponent;