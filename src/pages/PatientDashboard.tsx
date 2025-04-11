
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  User, 
  File, 
  Activity, 
  Calendar, 
  Pill, 
  Bell,
  ChevronRight,
  Clock,
  Phone,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

// Mock data for demonstration
const mockUpcomingAppointments = [
  {
    id: 1,
    doctorName: "Dr. Sharma",
    specialty: "General Physician",
    date: "2025-04-15",
    time: "10:00 AM",
    type: "Video Consultation",
    status: "Confirmed"
  },
  {
    id: 2,
    doctorName: "Dr. Patel",
    specialty: "Cardiologist",
    date: "2025-04-20",
    time: "11:30 AM",
    type: "In-person",
    status: "Pending"
  }
];

const mockMedications = [
  {
    id: 1,
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice daily",
    startDate: "2025-04-01",
    endDate: "2025-04-15",
    remaining: 10
  },
  {
    id: 2,
    name: "Amoxicillin",
    dosage: "250mg",
    frequency: "Three times daily",
    startDate: "2025-04-05",
    endDate: "2025-04-12",
    remaining: 5
  },
  {
    id: 3,
    name: "Vitamin D",
    dosage: "1000 IU",
    frequency: "Once daily",
    startDate: "2025-03-15",
    endDate: "2025-05-15",
    remaining: 25
  }
];

const mockHealthMetrics = [
  {
    id: 1,
    name: "Blood Pressure",
    value: "120/80 mmHg",
    date: "2025-04-10",
    status: "normal"
  },
  {
    id: 2,
    name: "Blood Sugar",
    value: "110 mg/dL",
    date: "2025-04-09",
    status: "normal"
  },
  {
    id: 3,
    name: "Heart Rate",
    value: "72 bpm",
    date: "2025-04-10",
    status: "normal"
  },
  {
    id: 4,
    name: "Weight",
    value: "68 kg",
    date: "2025-04-05",
    status: "normal"
  }
];

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Format date for display
  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="healthcare-container flex-grow py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-healthcare-light rounded-full p-3">
                  <User className="h-8 w-8 text-healthcare-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Rahul Kumar</h2>
                  <p className="text-gray-500">Patient ID: 12345</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-600 flex items-center"><span className="font-medium mr-2">Age:</span> 35 years</p>
                <p className="text-gray-600 flex items-center"><span className="font-medium mr-2">Blood Group:</span> B+</p>
                <p className="text-gray-600 flex items-center"><span className="font-medium mr-2">Gender:</span> Male</p>
                <p className="text-gray-600 flex items-center"><span className="font-medium mr-2">Phone:</span> +91 9876543210</p>
                <p className="text-gray-600 flex items-center"><span className="font-medium mr-2">Village:</span> Rampur</p>
              </div>
            </div>

            {/* Dashboard Navigation */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button 
                className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === "overview" ? "bg-healthcare-light text-healthcare-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("overview")}
              >
                <Activity className="h-5 w-5" />
                <span>Overview</span>
              </button>
              <button 
                className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === "records" ? "bg-healthcare-light text-healthcare-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("records")}
              >
                <File className="h-5 w-5" />
                <span>Health Records</span>
              </button>
              <button 
                className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === "appointments" ? "bg-healthcare-light text-healthcare-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("appointments")}
              >
                <Calendar className="h-5 w-5" />
                <span>Appointments</span>
              </button>
              <button 
                className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === "medications" ? "bg-healthcare-light text-healthcare-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("medications")}
              >
                <Pill className="h-5 w-5" />
                <span>Medications</span>
              </button>
              <button 
                className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === "notifications" ? "bg-healthcare-light text-healthcare-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setActiveTab("notifications")}
              >
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
                <span className="bg-healthcare-primary text-white text-xs rounded-full px-2 py-1 ml-auto">3</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            {activeTab === "overview" && (
              <>
                {/* Dashboard Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h1 className="text-2xl font-bold text-healthcare-primary mb-2">
                    Welcome, Rahul
                  </h1>
                  <p className="text-gray-600">
                    Here's a summary of your health information and upcoming appointments.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <button className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:bg-healthcare-light transition-colors">
                    <div className="bg-healthcare-secondary rounded-full p-2 text-white">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <span>Book Appointment</span>
                  </button>
                  <button className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:bg-healthcare-light transition-colors">
                    <div className="bg-healthcare-primary rounded-full p-2 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>Request Consultation</span>
                  </button>
                  <button className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3 hover:bg-healthcare-light transition-colors">
                    <div className="bg-healthcare-danger rounded-full p-2 text-white">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <span>Emergency Help</span>
                  </button>
                </div>

                {/* Upcoming Appointments */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-healthcare-primary">
                      Upcoming Appointments
                    </h2>
                    <button className="text-healthcare-primary hover:text-healthcare-dark text-sm font-medium flex items-center">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {mockUpcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4 hover:border-healthcare-primary transition-colors">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold">{appointment.doctorName}</h3>
                            <p className="text-gray-500 text-sm">{appointment.specialty}</p>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              appointment.status === "Confirmed" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex mt-3 text-sm text-gray-600">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1 text-healthcare-primary" />
                            {formatDate(appointment.date)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-healthcare-primary" />
                            {appointment.time}
                          </div>
                          <div className="ml-auto text-sm">
                            {appointment.type}
                          </div>
                        </div>
                      </div>
                    ))}
                    {mockUpcomingAppointments.length === 0 && (
                      <p className="text-gray-500 text-center py-4">No upcoming appointments</p>
                    )}
                  </div>
                </div>

                {/* Health Metrics */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-healthcare-primary">
                      Health Metrics
                    </h2>
                    <button className="text-healthcare-primary hover:text-healthcare-dark text-sm font-medium flex items-center">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mockHealthMetrics.map((metric) => (
                      <div key={metric.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">{metric.name}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            metric.status === "normal" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className="text-2xl font-semibold">{metric.value}</span>
                          <p className="text-gray-500 text-sm mt-1">
                            Last updated: {formatDate(metric.date)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Medications */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-healthcare-primary">
                      Current Medications
                    </h2>
                    <button className="text-healthcare-primary hover:text-healthcare-dark text-sm font-medium flex items-center">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Medication</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Dosage</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Frequency</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Ends On</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Remaining</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockMedications.map((medication) => (
                          <tr key={medication.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{medication.name}</td>
                            <td className="py-3 px-4 text-gray-600">{medication.dosage}</td>
                            <td className="py-3 px-4 text-gray-600">{medication.frequency}</td>
                            <td className="py-3 px-4 text-gray-600">{formatDate(medication.endDate)}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                medication.remaining <= 5 
                                  ? "bg-red-100 text-red-800" 
                                  : "bg-green-100 text-green-800"
                              }`}>
                                {medication.remaining} doses left
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === "records" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-healthcare-primary mb-4">
                  Health Records
                </h1>
                <p className="text-gray-600 mb-6">
                  This section will display all your health records, test results, and medical history.
                </p>
                <div className="text-center py-12">
                  <p className="text-gray-500">Health records section will be implemented in the next version.</p>
                </div>
              </div>
            )}

            {activeTab === "appointments" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-healthcare-primary mb-4">
                  Appointments
                </h1>
                <p className="text-gray-600 mb-6">
                  This section will display your past and upcoming appointments, and allow you to book new appointments.
                </p>
                <div className="text-center py-12">
                  <p className="text-gray-500">Full appointments section will be implemented in the next version.</p>
                </div>
              </div>
            )}

            {activeTab === "medications" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-healthcare-primary mb-4">
                  Medications
                </h1>
                <p className="text-gray-600 mb-6">
                  This section will display all your current and past medications, and set up reminders.
                </p>
                <div className="text-center py-12">
                  <p className="text-gray-500">Full medications section will be implemented in the next version.</p>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-healthcare-primary mb-4">
                  Notifications
                </h1>
                <p className="text-gray-600 mb-6">
                  This section will display all your alerts and notifications.
                </p>
                <div className="text-center py-12">
                  <p className="text-gray-500">Notifications section will be implemented in the next version.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PatientDashboard;
