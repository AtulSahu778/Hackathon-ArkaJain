
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  HeartPulse, 
  Pill, 
  ThumbsUp,
  Users,
  Stethoscope,
  Ambulance,
  BookOpen,
  Brain,
  Phone
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-healthcare-light to-white py-16">
        <div className="healthcare-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-healthcare-primary mb-4">
                Quality Healthcare for Rural Communities
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connecting rural India with quality healthcare through technology that works for everyone.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/patient-dashboard" className="healthcare-button-primary text-center">
                  Access Health Records
                </Link>
                <Link to="/doctor-consultation" className="healthcare-button-secondary text-center">
                  Consult a Doctor
                </Link>
                <Link to="/emergency-help" className="healthcare-button-emergency text-center">
                  Emergency Help
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg" 
                alt="Rural Healthcare"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="healthcare-container">
          <h2 className="section-heading text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="rounded-full bg-healthcare-light p-3 w-14 h-14 flex items-center justify-center mb-4">
                <HeartPulse className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-healthcare-primary">
                Digital Health Records
              </h3>
              <p className="text-gray-600">
                Securely store and access your health records, prescriptions, and test results anytime, anywhere.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="rounded-full bg-healthcare-light p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Stethoscope className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-healthcare-primary">
                Doctor Consultations
              </h3>
              <p className="text-gray-600">
                Connect with qualified doctors through video, audio, or in-person appointments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="rounded-full bg-healthcare-light p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Ambulance className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-healthcare-primary">
                Emergency Assistance
              </h3>
              <p className="text-gray-600">
                Quick access to emergency services with location sharing and immediate response.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="rounded-full bg-healthcare-light p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Pill className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-healthcare-primary">
                Medicine Tracking
              </h3>
              <p className="text-gray-600">
                Track your medications, set reminders, and receive alerts for refills and dosage.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="rounded-full bg-healthcare-light p-3 w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-healthcare-primary">
                Health Education
              </h3>
              <p className="text-gray-600">
                Access health information in local languages. Learn about preventive care and wellness.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="rounded-full bg-healthcare-light p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Brain className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-healthcare-primary">
                Mental Wellness
              </h3>
              <p className="text-gray-600">
                Tools and resources to support your mental wellbeing, including guided practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="healthcare-container">
          <h2 className="section-heading text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-healthcare-light rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Register</h3>
              <p className="text-gray-600">
                Create your health profile with basic information
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-healthcare-light rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Book</h3>
              <p className="text-gray-600">
                Schedule appointments with healthcare providers
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-healthcare-light rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Consult</h3>
              <p className="text-gray-600">
                Meet with doctors online or in-person
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-healthcare-light rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="text-healthcare-primary h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow-up</h3>
              <p className="text-gray-600">
                Get regular follow-ups and continuous care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-healthcare-light">
        <div className="healthcare-container">
          <h2 className="section-heading text-center">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-lg font-semibold mb-4 text-healthcare-primary">
                <CheckCircle className="h-5 w-5 mr-2" /> 
                Accessible Healthcare
              </h3>
              <p className="text-gray-600">
                Quality healthcare made accessible to remote and rural areas, breaking geographical barriers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-lg font-semibold mb-4 text-healthcare-primary">
                <CheckCircle className="h-5 w-5 mr-2" /> 
                Continuous Care
              </h3>
              <p className="text-gray-600">
                Regular follow-ups, medication reminders, and continuous monitoring of health progress.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-lg font-semibold mb-4 text-healthcare-primary">
                <CheckCircle className="h-5 w-5 mr-2" /> 
                Health Education
              </h3>
              <p className="text-gray-600">
                Access to educational resources in local languages to promote preventive care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-lg font-semibold mb-4 text-healthcare-primary">
                <CheckCircle className="h-5 w-5 mr-2" /> 
                Reduced Waiting Times
              </h3>
              <p className="text-gray-600">
                Schedule appointments and consultations at your convenience, reducing wait times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-healthcare-primary text-white">
        <div className="healthcare-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already benefiting from Gram Seva Health Connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/patient-dashboard" className="bg-white text-healthcare-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Register Now
            </Link>
            <Link to="/emergency-help" className="bg-healthcare-danger hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Emergency Help
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
