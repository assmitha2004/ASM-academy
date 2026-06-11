import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const ManageCountries = () => {

  const [countries, setCountries] =
    useState([]);

  const [name, setName] =
    useState("");

  const [currency, setCurrency] =
    useState("");

  const [onePrice, setOnePrice] =
    useState("");

  const [duoPrice, setDuoPrice] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  // =====================================
  // FETCH COUNTRIES
  // =====================================

  const fetchCountries =
    async () => {

      try {
        const { data } = await axios.get(
  `${API_BASE_URL}/api/country`
);

        setCountries(data);

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {
    fetchCountries();
  }, []);

  // =====================================
  // ADD / UPDATE COUNTRY
  // =====================================

  const addCountry =
    async () => {

      if (
        !name ||
        !currency ||
        !onePrice ||
        !duoPrice
      ) return;

      try {

        const token =
          localStorage.getItem(
            "adminToken"
          );

        // =====================================
        // UPDATE COUNTRY
        // =====================================

        if (editingId) {

          await axios.put(
            `${API_BASE_URL}/api/country/${editingId}`,
            {
              name,
              currency,
              onePrice,
              duoPrice,
            },
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        } else {

          // =====================================
          // CREATE COUNTRY
          // =====================================

          await axios.post(
            `${API_BASE_URL}/api/country`,
            {
              name,
              currency,
              onePrice,
              duoPrice,
            },
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );
        }

        // RESET FORM

        setName("");
        setCurrency("");
        setOnePrice("");
        setDuoPrice("");
        setEditingId(null);

        fetchCountries();

      } catch (error) {

        console.log(error);
      }
    };

  // =====================================
  // DELETE COUNTRY
  // =====================================

  const deleteCountry =
    async (id) => {

      try {

        const token =
          localStorage.getItem(
            "adminToken"
          );

        await axios.delete(
          `${API_BASE_URL}/api/country/${id}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        fetchCountries();

      } catch (error) {

        console.log(error);
      }
    };

  // =====================================
  // EDIT COUNTRY
  // =====================================

  const editCountry =
    (country) => {

      setEditingId(
        country._id
      );

      setName(
        country.name
      );

      setCurrency(
        country.currency
      );

      setOnePrice(
        country.onePrice
      );

      setDuoPrice(
        country.duoPrice
      );
    };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <h1 className="text-4xl font-bold text-yellow-500">
          Manage Countries
        </h1>

        <button
          onClick={() => {
            window.location.href =
              "/admin";
          }}
          className="bg-gray-700 hover:bg-gray-800 transition px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>

      </div>

      {/* FORM */}

      <div className="grid md:grid-cols-5 gap-4 mb-10">

        <input
          type="text"
          placeholder="Country"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="bg-[#111] border border-white/10 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Currency"
          value={currency}
          onChange={(e) =>
            setCurrency(e.target.value)
          }
          className="bg-[#111] border border-white/10 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="One-on-One Price"
          value={onePrice}
          onChange={(e) =>
            setOnePrice(e.target.value)
          }
          className="bg-[#111] border border-white/10 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Duo Price"
          value={duoPrice}
          onChange={(e) =>
            setDuoPrice(e.target.value)
          }
          className="bg-[#111] border border-white/10 rounded-xl px-4 py-3"
        />

        <button
          onClick={addCountry}
          className="bg-yellow-500 hover:bg-yellow-600 transition text-black rounded-xl font-bold"
        >
          {editingId ? "Update" : "Add"}
        </button>

      </div>

      {/* COUNTRY LIST */}

      <div className="space-y-5">

        {countries.map((country) => (

          <div
            key={country._id}
            className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          >

            {/* COUNTRY INFO */}

            <div>

              <h2 className="text-2xl font-bold text-yellow-500">
                {country.name}
              </h2>

              <p className="text-white/60 mt-2">
                Currency:
                {" "}
                {country.currency}
              </p>

              <p className="text-white/60">
                One-on-One:
                {" "}
                {country.onePrice}
              </p>

              <p className="text-white/60">
                Duo:
                {" "}
                {country.duoPrice}
              </p>

            </div>

            {/* ACTION BUTTONS */}

            <div className="flex gap-3">

              <button
                onClick={() =>
                  editCountry(country)
                }
                className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteCountry(
                    country._id
                  )
                }
                className="bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ManageCountries;