
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Ambulance, 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Heart, 
  User,
  ThumbsUp,
  MessageCircle,
  Activity
} from "lucide-react";

// Mock data for emergency centers
const emergencyCenters = [
  {
    id: 1,
    name: "District Hospital Emergency",
    phone: "108",
    distance: "8.3 km",
    address: "District Hospital, Main Road, Sample District"
  },
  {
    id: 2,
    name: "Primary Health Center",
    phone: "+91 9876543210",
    distance: "2.5 km",
    address: "Near Village Square, Rampur"
  },
  {
    id: 3,
    name: "Rural Medical Center",
    phone: "+91 9876543211",
    distance: "5.1 km",
    address: "Highway 42, Near Bus Stand, Vikas Nagar"
  }
];

// Mock data for emergency scenarios
const emergencyScenarios = [
  {
    id: 1,
    title: "Chest Pain",
    description: "Severe pain, pressure, or discomfort in the chest area",
    priority: "high",
    actions: ["Call emergency services immediately (108)", "Sit down and rest", "Take aspirin if prescribed for heart conditions"]
  },
  {
    id: 2,
    title: "Stroke Symptoms",
    description: "Face drooping, arm weakness, speech difficulty",
    priority: "high",
    actions: ["Call emergency services immediately (108)", "Note the time symptoms started", "Do not give food or drink"]
  },
  {
    id: 3,
    title: "Severe Bleeding",
    description: "Uncontrollable bleeding from a wound",
    priority: "high",
    actions: ["Apply direct pressure with clean cloth", "Elevate the injured area if possible", "Call emergency services (108)"]
  },
  {
    id: 4,
    title: "Broken Bone",
    description: "Severe pain, swelling, or deformity in a limb",
    priority: "medium",
    actions: ["Immobilize the injured area", "Apply ice wrapped in cloth", "Seek medical help"]
  },
  {
    id: 5,
    title: "Allergic Reaction",
    description: "Swelling, difficulty breathing, hives after exposure to allergen",
    priority: "high",
    actions: ["Use epinephrine auto-injector if available", "Call emergency services (108)", "Remove the allergen if possible"]
  },
  {
    id: 6,
    title: "Burn",
    description: "Skin damage from heat, chemicals, electricity, or radiation",
    priority: "medium",
    actions: ["Cool the burn with clean, cool water for 10-15 minutes", "Do not apply ice", "Cover with clean, dry bandage"]
  }
];

const EmergencyHelp = () => {
  const [showingSendLocation, setShowingSendLocation] = useState(false);
  const [locationShared, setLocationShared] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  // Function to handle emergency call
  const handleEmergencyCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  // Function to simulate sharing location
  const handleShareLocation = () => {
    setShowingSendLocation(true);
    
    // Simulate location sharing process
    setTimeout(() => {
      setLocationShared(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="healthcare-container flex-grow py-8">
        {/* SOS Header */}
        <div className="bg-healthcare-danger text-white rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 mr-2 animate-pulse" />
            <h1 className="text-3xl font-bold">Emergency Help</h1>
          </div>
          <p className="text-lg mb-6">
            If you or someone around you is facing a medical emergency, please call emergency services immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => handleEmergencyCall("108")}
              className="bg-white text-healthcare-danger hover:bg-gray-100 py-3 px-6 rounded-lg font-bold text-lg flex items-center justify-center animate-pulse"
            >
              <Phone className="h-6 w-6 mr-2" />
              Call 108 (Emergency)
            </button>
            <button 
              onClick={handleShareLocation}
              className={`bg-healthcare-primary text-white hover:bg-healthcare-dark py-3 px-6 rounded-lg font-bold text-lg flex items-center justify-center
                ${showingSendLocation ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={showingSendLocation}
            >
              {locationShared ? (
                <>
                  <ThumbsUp className="h-6 w-6 mr-2" />
                  Location Shared
                </>
              ) : showingSendLocation ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                  Sending Location...
                </>
              ) : (
                <>
                  <MapPin className="h-6 w-6 mr-2" />
                  Share My Location
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Emergency Centers */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-healthcare-primary mb-4">
            Nearby Emergency Centers
          </h2>
          <div className="space-y-4">
            {emergencyCenters.map(center => (
              <div key={center.id} className="border rounded-lg p-4 hover:border-healthcare-primary transition-colors">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-3 md:mb-0">
                    <h3 className="font-semibold text-lg">{center.name}</h3>
                    <p className="text-gray-600 text-sm">{center.address}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{center.distance} away</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2">
                    <button
                      onClick={() => handleEmergencyCall(center.phone.replace(/\s/g, ''))}
                      className="bg-healthcare-primary text-white hover:bg-healthcare-dark px-4 py-2 rounded-md font-medium flex items-center justify-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call {center.phone}
                    </button>
                    <button className="bg-healthcare-secondary text-white hover:bg-green-600 px-4 py-2 rounded-md font-medium flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Emergency First Aid */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-healthcare-primary mb-4">
            Emergency First Aid Guide
          </h2>
          <p className="text-gray-600 mb-6">
            Select a situation to see basic first aid steps. These guidelines are not a substitute for professional medical care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {emergencyScenarios.map(scenario => (
              <button
                key={scenario.id}
                className={`p-4 rounded-lg text-left transition-colors ${
                  selectedScenario === scenario.id 
                    ? 'bg-healthcare-light border-2 border-healthcare-primary' 
                    : 'border hover:bg-gray-50'
                }`}
                onClick={() => setSelectedScenario(scenario.id)}
              >
                <div className="flex items-start">
                  <div className={`rounded-full p-2 mr-3 ${
                    scenario.priority === 'high' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {scenario.priority === 'high' ? (
                      <AlertTriangle className="h-5 w-5" />
                    ) : (
                      <Activity className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{scenario.title}</h3>
                    <p className="text-sm text-gray-600">{scenario.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Selected Scenario Details */}
          {selectedScenario !== null && (
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">
                {emergencyScenarios.find(s => s.id === selectedScenario)?.title}
              </h3>
              <div className="bg-healthcare-light p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  {emergencyScenarios.find(s => s.id === selectedScenario)?.description}
                </p>
              </div>
              <h4 className="font-medium mb-2">What to do:</h4>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                {emergencyScenarios
                  .find(s => s.id === selectedScenario)
                  ?.actions.map((action, index) => (
                    <li key={index} className="text-gray-700">{action}</li>
                  ))
                }
              </ol>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Always seek professional medical help for emergencies. 
                  These guidelines are basic first aid only.
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Emergency Contacts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-healthcare-primary mb-4">
            Important Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <Ambulance className="h-5 w-5 mr-2 text-healthcare-primary" />
                Ambulance Services
              </h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>National Emergency Number:</span>
                  <button 
                    onClick={() => handleEmergencyCall("112")}
                    className="text-healthcare-primary hover:underline font-medium"
                  >
                    112
                  </button>
                </p>
                <p className="flex justify-between">
                  <span>Ambulance:</span>
                  <button 
                    onClick={() => handleEmergencyCall("108")}
                    className="text-healthcare-primary hover:underline font-medium"
                  >
                    108
                  </button>
                </p>
                <p className="flex justify-between">
                  <span>District Hospital:</span>
                  <button 
                    onClick={() => handleEmergencyCall("04478965412")}
                    className="text-healthcare-primary hover:underline font-medium"
                  >
                    04478-965412
                  </button>
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-healthcare-primary" />
                Health Helplines
              </h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>COVID-19 Helpline:</span>
                  <button 
                    onClick={() => handleEmergencyCall("1075")}
                    className="text-healthcare-primary hover:underline font-medium"
                  >
                    1075
                  </button>
                </p>
                <p className="flex justify-between">
                  <span>Women Helpline:</span>
                  <button 
                    onClick={() => handleEmergencyCall("1091")}
                    className="text-healthcare-primary hover:underline font-medium"
                  >
                    1091
                  </button>
                </p>
                <p className="flex justify-between">
                  <span>Mental Health Helpline:</span>
                  <button 
                    onClick={() => handleEmergencyCall("08046110007")}
                    className="text-healthcare-primary hover:underline font-medium"
                  >
                    080-4611-0007
                  </button>
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <User className="h-5 w-5 mr-2 text-healthcare-primary" />
                Personal Emergency Contacts
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Add family members or caregivers who should be notified in case of emergency:
              </p>
              <button className="w-full healthcare-button-primary">
                Add Emergency Contact
              </button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-healthcare-primary" />
                Get Assistance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Need help but not an emergency? Chat with our health assistants:
              </p>
              <button className="w-full healthcare-button-secondary">
                Chat with Health Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EmergencyHelp;
