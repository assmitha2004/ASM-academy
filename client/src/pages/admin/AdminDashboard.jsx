import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE_URL =
  import.meta.env.VITE_API_URL;
const AdminDashboard = () => {

  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // =====================================
  // FETCH INQUIRIES
  // =====================================

  const fetchInquiries = async () => {

    try {

      const token = localStorage.getItem(
        "adminToken"
      );

      const { data } = await axios.get(
        `${API_BASE_URL}/api/admin`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setInquiries(data);
      setFilteredInquiries(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  // =====================================
  // SEARCH FILTER
  // =====================================

  useEffect(() => {

    const filtered = inquiries.filter((item) => {

      return (

        item.name
          ?.toLowerCase()
          .includes(search.toLowerCase())

        ||

        item.country
          ?.toLowerCase()
          .includes(search.toLowerCase())

        ||

        item.classType
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    setFilteredInquiries(filtered);

  }, [search, inquiries]);

  // =====================================
  // DELETE INQUIRY
  // =====================================

  const deleteInquiry = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem(
        "adminToken"
      );

      await axios.delete(
        `${API_BASE_URL}/api/admin/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchInquiries();

    } catch (error) {

      console.log(error);

      alert("Delete failed");
    }
  };

  // =====================================
  // LOGOUT
  // =====================================

  const handleLogout = () => {

    localStorage.removeItem(
      "adminToken"
    );

    window.location.href =
      "/admin/login";
  };

  // =====================================
  // LOADING
  // =====================================

  if (loading) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">
        Loading inquiries...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-black text-white p-6 md:p-10">

      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <h1 className="text-4xl font-bold text-yellow-500">
          Admin Dashboard
        </h1>

        <div className="flex gap-4 flex-wrap">
          <button
  onClick={() => {
    window.location.href =
      "/admin/countries";
  }}
  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
>
  Manage Countries
</button>

          {/* EXCEL */}

          <button
  onClick={async () => {

    try {

      const token = localStorage.getItem(
        "adminToken"
      );

      const response = await axios.get(
        `${API_BASE_URL}/api/admin/export/excel`,
        {
          responseType: "blob",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // CREATE DOWNLOAD LINK

      const url =
        window.URL.createObjectURL(
          new Blob([response.data])
        );

      const link =
        document.createElement("a");

      link.href = url;

      link.setAttribute(
        "download",
        "inquiries.xlsx"
      );

      document.body.appendChild(link);

      link.click();

      link.remove();

    } catch (error) {

      console.log(error);

      alert("Excel download failed");
    }
  }}
  className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl font-semibold"
>
  Download Excel
</button>

          {/* LOGOUT */}

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>

        </div>

      </div>

      {/* ANALYTICS */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">

          <h2 className="text-gray-400 text-sm mb-2">
            Total Inquiries
          </h2>

          <p className="text-4xl font-bold text-yellow-500">
            {inquiries.length}
          </p>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">

          <h2 className="text-gray-400 text-sm mb-2">
            One-on-One
          </h2>

          <p className="text-4xl font-bold text-green-500">

            {
              inquiries.filter(
                (i) =>
                  i.classType === "One-on-One"
              ).length
            }

          </p>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">

          <h2 className="text-gray-400 text-sm mb-2">
            Duo Classes
          </h2>

          <p className="text-4xl font-bold text-blue-500">

            {
              inquiries.filter(
                (i) =>
                  i.classType ===
                  "Duo / Semi-Private"
              ).length
            }

          </p>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-6">

          <h2 className="text-gray-400 text-sm mb-2">
            Countries
          </h2>

          <p className="text-4xl font-bold text-pink-500">

            {
              [
                ...new Set(
                  inquiries.map(
                    (i) => i.country
                  )
                ),
              ].length
            }

          </p>

        </div>

      </div>

      {/* SEARCH */}

      <div className="mb-8">

        <input
          type="text"
          placeholder="Search by name, country or class type..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
        />

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto rounded-2xl border border-white/10">

        <table className="w-full text-sm md:text-base">

          <thead className="bg-yellow-500 text-black">

            <tr>

              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Class Type</th>
              <th className="p-4">Level</th>
              <th className="p-4">Country</th>
              <th className="p-4">WhatsApp</th>
              <th className="p-4">Email</th>
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredInquiries.map(
              (inquiry, index) => (

                <tr
                  key={inquiry._id}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >

                  <td className="p-4">
                    {index + 1}
                  </td>

                  <td className="p-4">
                    {inquiry.name}
                  </td>

                  <td className="p-4">
                    {inquiry.classType}
                  </td>

                  <td className="p-4">
                    {inquiry.level}
                  </td>

                  <td className="p-4">
                    {inquiry.country}
                  </td>

                  <td className="p-4">
                    {inquiry.whatsapp}
                  </td>

                  <td className="p-4">
                    {inquiry.email}
                  </td>

                  <td className="p-4">

                    {
                      new Date(
                        inquiry.createdAt
                      ).toLocaleString()
                    }

                  </td>

                  <td className="p-4">

                    <div className="flex gap-3 flex-wrap">

                      <a
                        href={`https://wa.me/${inquiry.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg text-sm"
                      >
                        WhatsApp
                      </a>

                      <button
                        onClick={() =>
                          deleteInquiry(
                            inquiry._id
                          )
                        }
                        className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-sm"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AdminDashboard;