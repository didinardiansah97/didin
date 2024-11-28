"use client";

import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState<{
    nama: string;
    usia: string;
    beratBadan: string;
    riwayatPenyakit: string;
  }>({
    nama: "",
    usia: "",
    beratBadan: "",
    riwayatPenyakit: "",
  });

  const [deskripsiPenyakit, setDeskripsiPenyakit] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<{
    nama: string;
    usia: string;
    beratBadan: string;
    riwayatPenyakit: string;
  } | null>(null); // Menghindari penggunaan 'any'

  const deskripsi: Record<string, string> = {
    Diabetes: "Diabetes adalah kondisi di mana tubuh tidak dapat mengatur kadar gula darah dengan baik.",
    Hipertensi: "Hipertensi adalah tekanan darah tinggi yang dapat meningkatkan risiko penyakit jantung.",
    "Asam Urat": "Asam urat adalah kondisi yang menyebabkan nyeri pada persendian akibat penumpukan kristal asam urat.",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "riwayatPenyakit") {
      setDeskripsiPenyakit(deskripsi[value] || "");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData); // Simpan data saat submit
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Rekomendasi Diet Sehat</h1>

        <form onSubmit={handleSubmit}>
          {/* Form Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Nama:</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Usia:</label>
            <input
              type="number"
              name="usia"
              value={formData.usia}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Berat Badan (kg):</label>
            <input
              type="number"
              name="beratBadan"
              value={formData.beratBadan}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Riwayat Penyakit:</label>
            <select
              name="riwayatPenyakit"
              value={formData.riwayatPenyakit}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
            >
              <option value="">Pilih Riwayat Penyakit</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Hipertensi">Hipertensi</option>
              <option value="Asam Urat">Asam Urat</option>
            </select>
          </div>

          {/* Tombol Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Hasil Inputan Setelah Submit */}
        {submittedData && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
            <h2 className="text-green-700 font-semibold">Hasil Input:</h2>
            <p className="text-green-600">Nama: {submittedData.nama}</p>
            <p className="text-green-600">Usia: {submittedData.usia}</p>
            <p className="text-green-600">Berat Badan: {submittedData.beratBadan} kg</p>
            <p className="text-green-600">Riwayat Penyakit: {submittedData.riwayatPenyakit}</p>
          </div>
        )}

        {/* Deskripsi Penyakit setelah memilih */}
        {submittedData && deskripsiPenyakit && formData.riwayatPenyakit && (
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
            <h3 className="text-blue-700 font-semibold">Deskripsi Penyakit:</h3>
            <p className="text-blue-600">{deskripsiPenyakit}</p>
          </div>
        )}
      </div>
    </div>
  );
}
