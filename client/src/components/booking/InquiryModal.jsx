import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const InquiryModal = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    level: "",
    classType: "",
    country: "",
  });

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/api/country`
        );

        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${API_URL}/api/inquiry`,
        formData
      );

      setFormData({
        name: "",
        whatsapp: "",
        email: "",
        level: "",
        classType: "",
        country: "",
      });

      setSuccessOpen(true);
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Unable to submit inquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* MAIN MODAL */}

      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 py-6 overflow-y-auto">
        <div className="bg-[#111] border border-gold-500/20 rounded-3xl p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto">

          <h2 className="text-3xl text-gold-400 mb-8 font-display">
            Check Availability & Tuition
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* NAME */}

            <div>
              <label className="block mb-2 text-white/70">
                Full Name
              </label>

              <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  pattern="^[A-Za-z\s]{3,50}$"
  title="Enter a valid name (letters only)"
  placeholder="Enter Full Name"
  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
/>
            </div>

            {/* LEVEL */}

            <div>
              <label className="block mb-2 text-white/70">
                Current Musical Level
              </label>

              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
              >
                <option value="">
                  Select Level
                </option>

                <option value="Beginner">
                  Beginner
                </option>

                <option value="Intermediate">
                  Intermediate
                </option>
              </select>
            </div>

            {/* CLASS TYPE */}

            <div>
              <label className="block mb-2 text-white/70">
                Choose Class Type
              </label>

              <select
                name="classType"
                value={formData.classType}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
              >
                <option value="">
                  Select Class Type
                </option>

                <option value="One-on-One">
                  One-on-One
                </option>

                <option value="Duo / Semi-Private">
                  Duo / Semi-Private
                </option>
              </select>
            </div>

            {/* COUNTRY */}

            <div>
              <label className="block mb-2 text-white/70">
                Country / Timezone
              </label>

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
              >
                <option value="">
                  Select Country
                </option>

                {countries.map((country) => (
                  <option
                    key={country._id}
                    value={country.name}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* WHATSAPP */}

            <div>
              <label className="block mb-2 text-white/70">
                WhatsApp Number
              </label>

             <input
  type="tel"
  name="whatsapp"
  value={formData.whatsapp}
  onChange={handleChange}
  required
  pattern="^\+[1-9]{1}[0-9]{7,14}$"
  title="Enter valid WhatsApp number with country code (Example: +919876543210)"
  placeholder="+919876543210"
  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
/>
            </div>

            {/* EMAIL */}

            <div>
              <label className="block mb-2 text-white/70">
                Email Address
              </label>

              <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
  title="Enter a valid email address"
  placeholder="Enter Email Address"
  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
/>
            </div>

            {/* BUTTONS */}

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-gold-500 text-black px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : "Submit Inquiry"}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="border border-white/20 px-6 py-3 rounded-xl text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}

      {successOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center px-4">

          <div className="w-full max-w-md rounded-3xl border border-gold-500/20 bg-[#111] p-8 text-center shadow-2xl">

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full border border-gold-500/30 bg-gold-500/10 flex items-center justify-center">

                <svg
                  className="w-10 h-10 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

              </div>
            </div>

            <h3 className="text-3xl font-display text-gold-400 mb-3">
              Thank You
            </h3>

            <p className="text-white/70 mb-8 leading-relaxed">
              Your inquiry has been submitted
              successfully.

              <br />
              <br />

              We will contact you shortly with
              availability and tuition details.
            </p>

            <button
              onClick={() => {
                setSuccessOpen(false);
                onClose();
              }}
              className="w-full bg-gold-500 text-black py-3 rounded-xl font-semibold transition hover:opacity-90"
            >
              Continue
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default InquiryModal;
