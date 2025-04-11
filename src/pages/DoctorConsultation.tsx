
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Video, 
  User, 
  Phone 
} from "lucide-react";

// Mock data for doctors
const mockDoctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "General Physician",
    experience: "15 years",
    location: "Rampur Health Center",
    distance: "2.5 km",
    availableSlots: 4,
    nextAvailable: "Today, 2:00 PM",
    languages: ["Hindi", "English"],
    rating: 4.8,
    reviews: 56,
    image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
  },
  {
    id: 2,
    name: "Dr. Rajesh Patel",
    specialty: "Cardiologist",
    experience: "20 years",
    location: "District Hospital",
    distance: "8.3 km",
    availableSlots: 2,
    nextAvailable: "Tomorrow, 10:00 AM",
    languages: ["Hindi", "English", "Gujarati"],
    rating: 4.9,
    reviews: 78,
    image: "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg"
  },
  {
    id: 3,
    name: "Dr. Meena Agarwal",
    specialty: "Pediatrician",
    experience: "12 years",
    location: "Child Care Clinic",
    distance: "5.1 km",
    availableSlots: 6,
    nextAvailable: "Today, 4:30 PM",
    languages: ["Hindi", "English", "Bengali"],
    rating: 4.7,
    reviews: 42,
    image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg"
  },
  {
    id: 4,
    name: "Dr. Suresh Kumar",
    specialty: "Dermatologist",
    experience: "10 years",
    location: "Skin & Care Center",
    distance: "12.5 km",
    availableSlots: 3,
    nextAvailable: "Tomorrow, 1:00 PM",
    languages: ["Hindi", "English", "Tamil"],
    rating: 4.6,
    reviews: 35,
    image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"
  }
];

// Mock data for appointment types
const appointmentTypes = [
  { id: 'any', label: 'Any Type' },
  { id: 'video', label: 'Video Consultation' },
  { id: 'phone', label: 'Phone Consultation' },
  { id: 'in-person', label: 'In-Person Visit' }
];

// Mock data for specialties
const specialties = [
  { id: 'any', label: 'All Specialties' },
  { id: 'general', label: 'General Physician' },
  { id: 'pediatrician', label: 'Pediatrician' },
  { id: 'cardiologist', label: 'Cardiologist' },
  { id: 'dermatologist', label: 'Dermatologist' },
  { id: 'gynecologist', label: 'Gynecologist' },
  { id: 'orthopedic', label: 'Orthopedic' },
  { id: 'neurologist', label: 'Neurologist' },
  { id: 'ophthalmologist', label: 'Ophthalmologist' },
  { id: 'dentist', label: 'Dentist' }
];

const DoctorConsultation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("any");
  const [selectedAppointmentType, setSelectedAppointmentType] = useState("any");
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  
  // Filtered doctors based on search and filters
  const filteredDoctors = mockDoctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === "any" || 
                             doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    
    // For appointment type filter (in a real app, this would check the doctor's available appointment types)
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="healthcare-container flex-grow py-8">
        <h1 className="text-3xl font-bold text-healthcare-primary mb-2">
          Consult with a Doctor
        </h1>
        <p className="text-gray-600 mb-8">
          Find and book appointments with healthcare providers near you or via telehealth
        </p>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for doctors or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-healthcare-primary"
              />
            </div>
            
            {/* Specialty Filter Dropdown */}
            <div className="md:w-1/4">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-healthcare-primary appearance-none bg-white"
              >
                {specialties.map(specialty => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Appointment Type Filter */}
            <div className="md:w-1/4">
              <select
                value={selectedAppointmentType}
                onChange={(e) => setSelectedAppointmentType(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-healthcare-primary appearance-none bg-white"
              >
                {appointmentTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* More Filters Button (for Mobile) */}
            <div className="md:hidden">
              <button 
                onClick={() => setFilterMenuOpen(!filterMenuOpen)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 border rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Filter className="h-5 w-5" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
          
          {/* Mobile Filter Menu */}
          {filterMenuOpen && (
            <div className="mt-4 p-4 border-t md:hidden">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Languages
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 rounded-full bg-healthcare-light text-healthcare-primary text-sm">
                      Hindi
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                      English
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                      Bengali
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Distance
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    <option>Any Distance</option>
                    <option>Under 5 km</option>
                    <option>5-10 km</option>
                    <option>10-20 km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg">
                    <option>Any Time</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Doctor Listing */}
        <div className="space-y-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doctor => (
              <div 
                key={doctor.id} 
                className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border-l-4 border-transparent hover:border-healthcare-primary"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Doctor Image */}
                  <div className="md:w-1/6">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full md:w-32 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Doctor Info */}
                  <div className="md:w-3/6">
                    <h2 className="text-xl font-semibold text-healthcare-primary">{doctor.name}</h2>
                    <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{doctor.location} ({doctor.distance})</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <User className="h-4 w-4 mr-1" />
                      <span>Speaks: {doctor.languages.join(", ")}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>{doctor.rating} • {doctor.reviews} patient reviews</span>
                    </div>
                  </div>
                  
                  {/* Appointment Options */}
                  <div className="md:w-2/6 flex flex-col justify-between">
                    <div>
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-500">Next Available</span>
                        <p className="text-healthcare-primary font-medium">{doctor.nextAvailable}</p>
                      </div>
                      <p className="text-sm text-gray-500">{doctor.availableSlots} slots available today</p>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <button className="w-full healthcare-button-primary flex items-center justify-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </button>
                      <div className="flex space-x-2">
                        <button className="flex-1 py-2 px-4 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center">
                          <Video className="h-4 w-4 mr-2" />
                          Video
                        </button>
                        <button className="flex-1 py-2 px-4 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expanded View (when doctor is selected) */}
                {selectedDoctor === doctor.id && (
                  <div className="mt-6 pt-4 border-t">
                    <h3 className="font-semibold mb-2">About {doctor.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {doctor.name} is a {doctor.specialty} with {doctor.experience} of experience. 
                      They are known for their patient-centered approach and clear communication.
                      They specialize in treating both common and complex conditions.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm text-gray-700 mb-1">Education</h4>
                        <p className="text-sm text-gray-600">MBBS, MD - All India Institute of Medical Sciences</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm text-gray-700 mb-1">Registration</h4>
                        <p className="text-sm text-gray-600">Medical Council of India - 123456</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm text-gray-700 mb-1">Consultations</h4>
                        <p className="text-sm text-gray-600">5000+ patients treated</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedDoctor(null)}
                      className="text-healthcare-primary hover:text-healthcare-dark text-sm font-medium"
                    >
                      Show Less
                    </button>
                  </div>
                )}
                
                {/* View More Button */}
                {selectedDoctor !== doctor.id && (
                  <div className="mt-4 text-center md:text-right">
                    <button 
                      onClick={() => setSelectedDoctor(doctor.id)}
                      className="text-healthcare-primary hover:text-healthcare-dark text-sm font-medium"
                    >
                      View More Details
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-xl text-gray-600">No doctors found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DoctorConsultation;
