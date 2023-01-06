import { Card, Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { Chrono } from "react-chrono";
import { FaBook, FaCertificate, FaMale, FaMoneyBillWave, FaWallet, FaWhatsapp } from "react-icons/all";
import { Link } from "react-router-dom";
import 'react-vertical-timeline-component/style.min.css';
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const WDC: FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const tahapEliminasi = [
        {
            title: "30 Januari - 16 Maret 2023",
            cardTitle: "Pendaftaran Online dan Pengumpulan Karya",
            cardDetailedText: "Dashboard IFest"
        },
        {
            title: "17 Maret - 22 Maret 2023",
            cardTitle: "Seleksi/Penilaian",
            cardDetailedText: "Online"
        },
        {
            title: "23 Maret 2023",
            cardTitle: "Pengumuman 5 Karya Terbaik",
            cardDetailedText: "Instagram IFest #11"
        },
    ];
    const tahapFinal = [
        {
            title: "24 Maret 2023",
            cardTitle: "Technical Meeting",
            cardDetailedText: "Zoom"
        },
        {
            title: "31 Maret 2023",
            cardTitle: "Final WDC",
            cardDetailedText: "Auditorium Lt. 4 Kampus 3 Gedung Bonaventura Universitas Atma Jaya Yogyakarta"
        },
    ];
    return (
      <Layout>
        <div className="bg-gradient-to-t from-[#2C2E56] via-[#311D38] to-[#311D38] -z-10 absolute top-0 h-screen w-screen">
          <motion.div className="flex flex-col justify-center items-center h-screen">
            <div className="hidden lg:flex flex-col justify-center items-center h-screen w-screen">
              <div className="flex flex-col justify-center items-center">
                <div className="flex gap-8 justify-center items-center">
                  <img
                    className="w-[600px]"
                    src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
                    alt="wdc"
                  />
                  <div className="flex flex-col">
                    <div className="font-retroica text-6xl pl-[1rem] pb-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#CDF9FF] to-[#F1D2FF]">
                      Web
                    </div>
                    <div className="font-retroica text-6xl pl-[1rem] pb-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#F1D2FF] to-[#FFE5C6]">
                      Design
                    </div>
                    <div className="font-retroica text-6xl pl-[1rem] pb-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#CDF9FF] to-[#FFE5C6]">
                      Competition
                    </div>
                    <div className="flex gap-4 mt-8 font-retroica text-sm text-white pl-[1rem]">
                      <div className="bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1 rounded-full">
                        <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                          <FaWallet />
                          Rp. 50.000
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#BED8FF] to-[#BAA2FF] p-1 rounded-full">
                        <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                          <FaBook />
                          SMA/Sederajat
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#FFECBC] to-[#FDCCA8] p-1 rounded-full">
                        <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                          <FaMale />
                          Max. 3 orang
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <motion.button
                    onClick={() =>
                      contentRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                    transition={{ delay: 0.0, duration: 0.25 }}
                    className="mt-12 transition-transform hover:scale-125"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="stroke-white w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex flex-col justify-center items-center h-screen w-screen px-4">
              <img
                className="w-72"
                src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
                alt="wdc"
              />
              <div className="text-center">
                <div className="font-retroica text-4xl text-white tracking-wide">
                  WDC
                </div>
                <div className="font-retroica text-2xl text-white pb-[1rem] px-4">
                  Web Design Competition
                </div>
              </div>
              <div className="flex gap-4 font-retroica text-sm text-white">
                <div className="bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1 rounded-full">
                  <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                    <FaWallet />
                    Rp. 50.000
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1 rounded-full">
                  <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                    <FaBook />
                    SMA/Sederajat
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1 rounded-full">
                  <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                    <FaMale />
                    Max. 3 orang
                  </div>
                </div>
              </div>
              <div>
                <motion.button
                  onClick={() =>
                    contentRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="mt-12 transition-transform hover:scale-125"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="stroke-white w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div
            ref={contentRef}
            className="bg-gradient-to-b from-[#2C2E56] via-[#311D38] to-[#2C2E56]"
          >
            <div className="flex flex-col items-center gap-2 pt-4 pl-4 pr-4">
              <div className="font-retroica text-3xl text-white font-thin tracking-wider">
                MORE ABOUT WDC
              </div>
              <div className="font-louisgeorgecafe text-md text-white font-thin lg:text-center my-4 w-screen px-8 text-justify lg:px-[10rem]">
                <strong>Web Design Competition</strong> (WDC) 2022 adalah sebuah
                lomba dimana para mahasiswa/i dalam sebuah tim yang terdiri dari
                dua orang berlomba untuk membuat desain web sebaik mungkin agar
                dapat mempermudah setiap pengguna web atau pencari informasi
                mendapatkan informasi yang jelas dan tepat. Dengan adanya Web
                Design Competition (WDC) 2022 diharapkan dapat menjadi wadah
                untuk para mahasiswa/i yang ada di Indonesia dalam menuangkan
                ide-ide kreatif mereka.
              </div>
              <div className="flex flex-row gap-4 font-louisgeorgecafe">
                <div className="bg-[#6c6486] p-1 rounded-full">
                  <button className="bg-[#2A2F59] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                    <div className="opacity-70 text-white">Lihat Poster</div>
                  </button>
                </div>
                <div className="bg-gradient-to-br from-[#6EA5B1] to-[#9B68CE] p-1 rounded-full">
                  <button className="bg-[#2A2F59] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                    <Link to="/dashboard">
                      <div className="opacity-100 text-white">DAFTAR</div>
                    </Link>
                  </button>
                </div>
                <div className="bg-[#6c6486] p-1 rounded-full">
                  <button className="bg-[#2A2F59] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                    <div className="opacity-70 text-white">Lihat Aturan</div>
                  </button>
                </div>
              </div>

              {/* Ketentuan */}
              <div className="py-12 flex flex-col lg:flex-row justify-center gap-8">
                <div className="w-screen lg:w-[40%] px-4">
                  <Card className="!bg-[#2C2E56] !border-gray-700">
                    <h3 className="font-retroica text-[#E99CCE] text-2xl pl-6">
                      Ketentuan Umum
                    </h3>
                    <div className="text-white leading-loose font-louisgeorgecafe p-6">
                      <ol className="list-outside list-decimal">
                        <li>
                          Peserta adalah mahasiswa/i aktif perguruan tinggi
                          seluruh Indonesia.
                        </li>
                        <li>
                          Melakukan pendaftaran online melalui
                          https://ifest.uajy.ac.id/dash/daftar, pendaftaraan
                          akan dibuka dari 15 Februari 2022 sampai dengan 15
                          Maret 2022.
                        </li>
                        <li>
                          Melampirkan scan atau foto Kartu Tanda Mahasiswa dan
                          Bukti Pembayaran pada formulir pendaftaran online.
                        </li>
                        <li>
                          Peserta lomba adalah satu tim (maksimal 2 orang).
                        </li>
                        <li>Biaya pendaftaran adalah Rp50.000,00 per tim.</li>
                        <li>
                          Tidak diperkenan ada peserta yang terdaftar dalam dua
                          tim atau lebih yang berbeda.
                        </li>
                        <li>
                          Setiap perguruan tinggi yang berpartisipasi hanya
                          dapat mengirimkan maksimal 3 tim.
                        </li>
                        <li>
                          Peserta yang telah mendaftar harus mengumpulkan hasil
                          karya desain situs web berupa file web dan screenshot
                          desain melalui https://ifest.uajy.ac.id/dash/masuk
                          dengan format penamaan IFest#10_WDC_Nama
                          Kelompok_NamaUniversitas.zip (Screenshot desain format
                          jpg/png/dll)
                        </li>
                        <li>
                          Peserta yang sudah mendaftar tetapi tidak mengumpulkan
                          hasil karya desain situs web setelah batas waktu yang
                          ditentukan dianggap mengundurkan diri dari perlombaan.
                        </li>
                        <li>
                          Panitia berhak untuk mengeleminasi peserta yang tidak
                          mematuhi ketentuan di atas.
                        </li>
                      </ol>
                    </div>
                  </Card>
                </div>

                <div className="w-screen lg:w-[40%] px-4">
                  <Card className="!bg-[#2C2E56] !border-gray-700">
                    <h3 className="font-retroica text-[#E99CCE] text-2xl pl-6">
                      Ketentuan Karya
                    </h3>
                    <div className="text-white leading-loose font-louisgeorgecafe p-6">
                      <ol className="list-outside list-decimal">
                        <li>Bentuk desain merupakan situs web desktop.</li>
                        <li>
                          Teknik pembuatan desain bebas menggunakan software
                          apapun.
                        </li>
                        <li>
                          Peserta wajib menyertakan code desain situs web.
                        </li>
                        <li>Hasil karya sesuai dengan tema.</li>
                        <li>
                          Desain situs web dilarang mengandung unsur SARA,
                          kekerasan, pornografi, dan melanggar UU yang berlaku.
                        </li>
                        <li>
                          Desain situs web yang diperlombakan menjadi hak
                          panitia.
                        </li>
                        <li>
                          Panitia WDC 2022 berhak mendiskualifikasi peserta jika
                          diketahui Hak Atas Kekayaan Intelektualnya diragukan,
                          sedang dalam sengketa, mengambil karya orang lain,
                          atau mendapat klaim dari pihak lain.
                        </li>
                        <li>
                          Keputusan panitia bersifat mutlak dan tidak dapat
                          diganggu gugat.
                        </li>
                        <li>
                          Untuk menjaga independensi, maka dalam penjurian tidak
                          akan ditampilkan identitas peserta.
                        </li>
                        <li>
                          Kriteria penilaian:
                          <ul className="list-inside list-disc pl-6">
                            <li>
                              Tampilan Layout/Antarmuka (30%) Menampilkan
                              antarmuka situs web dengan struktur yang tepat.
                            </li>
                            <li>
                              Kesesuaian Tema (30%) Situs web yang didesain
                              berkaitan dengan tema yang telah diberikan.
                            </li>
                            <li>
                              Daya Tarik dan Informatif (25%) Dapat menciptakan
                              daya tarik dan memberikan pesan yang informatif.
                            </li>
                            <li>
                              Responsif (15%) Browser dapat diakses dengan
                              menyesuaikan ukuran pada mobile.
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex flex-col justify-center lg:items-center w-full lg:w-[70%]">
                <div className="font-retroica text-[#E99CCE] text-4xl mb-8 mx-auto text-center">
                  Timeline
                </div>
                <div className="rounded-xl bg-[#241f3d] pb-1 w-fit">
                  <div className="rounded-xl font-retroica bg-[#7e608c] p-4 text-white shadow-inner">
                    Tahap Eliminasi
                  </div>
                </div>

                <span className="hidden lg:flex lg:w-full">
                  <Chrono
                    items={tahapEliminasi}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={50}
                    hideControls
                    disableClickOnCircle
                    theme={{
                      primary: "#716B90",
                      secondary: "transparent",
                      cardBgColor: "#473350",
                      cardForeColor: "white",
                      titleColor: "white",
                      titleColorActive: "white",
                    }}
                  />
                </span>
                <span className="lg:hidden flex">
                  <Chrono
                    items={tahapEliminasi}
                    mode="VERTICAL"
                    cardHeight={50}
                    hideControls
                    disableClickOnCircle
                    fontSizes={{
                      title: "0.8rem",
                    }}
                    theme={{
                      primary: "#716B90",
                      secondary: "transparent",
                      cardBgColor: "#473350",
                      cardForeColor: "white",
                      titleColor: "white",
                      titleColorActive: "white",
                    }}
                  />
                </span>

                <div className="rounded-xl bg-[#241f3d] pb-1 w-fit">
                  <div className="rounded-xl font-retroica bg-[#7E608C] p-4 text-white shadow-inner">
                    Tahap Final
                  </div>
                </div>

                <span className="hidden lg:flex lg:w-full">
                  <Chrono
                    items={tahapFinal}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={50}
                    hideControls
                    disableClickOnCircle
                    theme={{
                      primary: "#716B90",
                      secondary: "transparent",
                      cardBgColor: "#473350",
                      cardForeColor: "white",
                      titleColor: "white",
                      titleColorActive: "white",
                    }}
                  />
                </span>
                <span className="lg:hidden flex">
                  <Chrono
                    items={tahapFinal}
                    mode="VERTICAL"
                    cardHeight={50}
                    hideControls
                    disableClickOnCircle
                    fontSizes={{
                      title: "0.8rem",
                    }}
                    theme={{
                      primary: "#716B90",
                      secondary: "transparent",
                      cardBgColor: "#473350",
                      cardForeColor: "white",
                      titleColor: "white",
                      titleColorActive: "white",
                    }}
                  />
                </span>
              </div>

              {/* Prize Pool */}
              <div className="pt-8 flex flex-col gap-4 justify-center items-center w-screen">
                <div className="font-retroica text-4xl text-[#E99CCE]">
                  Prize Pool
                </div>
                <div className="font-retroica text-[#ffba57] text-center">
                  {" "}
                  <span className="font-louisgeorgecafe text-white">
                    Total hadiah
                  </span>{" "}
                  Rp6.000.000
                </div>
                <div>
                  <div className="hidden lg:flex flex-row gap-8 pt-10">
                    <Card className="bg-[rgb(60,42,78)] !border-gray-700 text-white hover:scale-110 hover:bg-[#ffe279] hover:text-[#311D38] transition ease-in duration-300 w-[30%]">
                      <div className="">
                        <img
                          className="w-52 block m-auto"
                          src="https://ifest.uajy.ac.id/assets/images/medal-1.png"
                          alt="/"
                        />
                      </div>
                      <div className="font-retroica text-center text-2xl">
                        Juara I
                      </div>
                      <div className="font-retroica flex gap-3">
                        <FaMoneyBillWave /> Rp3.000.000
                      </div>
                      <div className="font-retroica flex gap-3">
                        <FaCertificate /> Sertifikat Nasional
                      </div>
                    </Card>
                    <Card className="bg-[rgb(60,42,78)] !border-gray-700 text-white hover:scale-110 hover:bg-[#cacaca] hover:text-[#311D38] transition ease-in duration-300 w-[30%]">
                      <div className="">
                        <img
                          className="w-52 block m-auto"
                          src="https://ifest.uajy.ac.id/assets/images/medal-2.png"
                          alt="/"
                        />
                      </div>
                      <div className="font-retroica text-center text-2xl">
                        Juara II
                      </div>
                      <div className="font-retroica flex gap-3">
                        <FaMoneyBillWave /> Rp2.000.000
                      </div>
                      <div className="font-retroica flex gap-3">
                        <FaCertificate /> Sertifikat Nasional
                      </div>
                    </Card>
                    <Card className="bg-[rgb(60,42,78)] !border-gray-700 text-white hover:scale-110 hover:bg-[#ffb050] hover:text-[#311D38] transition ease-in duration-300 w-[30%]">
                      <div className="">
                        <img
                          className="w-52 block m-auto"
                          src="https://ifest.uajy.ac.id/assets/images/medal-3.png"
                          alt="/"
                        />
                      </div>
                      <div className="font-retroica text-center text-2xl">
                        Juara II
                      </div>
                      <div className="font-retroica flex gap-3">
                        <FaMoneyBillWave /> Rp1.000.000
                      </div>
                      <div className="font-retroica flex gap-3">
                        <FaCertificate /> Sertifikat Nasional
                      </div>
                    </Card>
                  </div>
                  <div className="flex lg:hidden flex-col gap-8">
                    <Card
                      horizontal
                      className="bg-[#311D38] !border-gray-700 text-white hover:scale-110 hover:bg-[#ffba57] hover:text-[#311D38] transition ease-in duration-300"
                    >
                      <div className="flex gap-4">
                        <div>
                          <img
                            className="w-20 block m-auto drop-shadow-lg"
                            src="https://ifest.uajy.ac.id/assets/images/medal-1.png"
                            alt="/"
                          />
                        </div>
                        <div>
                          <div className="font-retroica text-2xl">Juara I</div>
                          <div className="font-retroica flex gap-3">
                            <FaMoneyBillWave /> Rp3.000.000
                          </div>
                          <div className="font-retroica flex gap-3">
                            <FaCertificate /> Sertifikat Nasional
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      horizontal
                      className="bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:bg-[#9e9e9e] hover:text-[#241f3d] transition ease-in duration-300"
                    >
                      <div className="flex gap-4">
                        <div>
                          <div className="font-retroica text-right text-2xl">
                            Juara II
                          </div>
                          <div className="font-retroica flex gap-3">
                            <FaMoneyBillWave /> Rp2.000.000
                          </div>
                          <div className="font-retroica flex gap-3">
                            <FaCertificate /> Sertifikat Nasional
                          </div>
                        </div>
                        <div>
                          <img
                            className="w-20 block m-auto"
                            src="https://ifest.uajy.ac.id/assets/images/medal-2.png"
                            alt="/"
                          />
                        </div>
                      </div>
                    </Card>
                    <Card
                      horizontal
                      className="bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:bg-[#00B8B0] hover:text-[#241f3d] transition ease-in duration-300"
                    >
                      <div className="flex gap-4">
                        <div>
                          <div className="font-retroica text-right text-2xl">
                            Juara III
                          </div>
                          <div className="font-retroica flex gap-3">
                            <FaMoneyBillWave /> Rp1.000.000
                          </div>
                          <div className="font-retroica flex gap-3">
                            <FaCertificate /> Sertifikat Nasional
                          </div>
                        </div>
                        <div>
                          <img
                            className="w-20 block m-auto"
                            src="https://ifest.uajy.ac.id/assets/images/medal-3.png"
                            alt="/"
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Call To Action */}
              <div className="flex flex-col justify-center items-center w-screen my-12">
                <div className="bg-gradient-to-l from-[#2D2A4E] to-[#37345d]  border-gray-200 max-w-[100%] w-[21rem] lg:w-[60%] rounded-xl p-8">
                  <div className="flex flex-col lg:flex-row text-center justify-center items-center lg:justify-start">
                    <img
                      className="lg:w-[30%] w-32"
                      src="https://ifest.uajy.ac.id/assets/images/ill4-icon.png"
                      alt=""
                    />
                    <div className="flex flex-col gap-4  items-center lg:items-start">
                      <div className="font-retroica text-2xl lg:text-3xl text-[#7084bc]">
                        Tertarik? Ayo mendaftar!
                      </div>
                      <div className="font-louisgeorgecafe text-white text-center lg:text-left">
                        Ayo buktikan bakat dan kreativitasmu! Jangan cepat
                        berpuas diri!
                      </div>
                      <div className="bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1 rounded-full w-fit">
                        <button className="bg-[#332550] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                          <Link to="/dashboard">
                            <div className="opacity-100 text-white font-retroica">
                              DAFTAR
                            </div>
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center w-screen">
                <div className="font-retroica text-4xl text-white">
                  Contact Us
                </div>
                <div className="font-retroica text-base text-white">
                  Masih ada yang bingung? Yuk kontak kami.
                </div>
                <div className="h-64 w-64">
                  <Carousel leftControl=" " rightControl=" " indicators={false}>
                    <div className="text-white text-center flex justify-center">
                      <table className="table-cell border-separate border-[6px] border-[#9DCE6D] rounded-xl p-2">
                        <thead>
                          <tr>
                            <th className="border-b-[6px] border-[#9DCE6D]">
                              WDC
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div>0812 3470 303</div>
                              <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                <FaWhatsapp />
                                Andreas
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div>0821 7237 5366</div>
                              <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                <FaWhatsapp />
                                Wahyu
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Carousel>
                </div>
              </div>

              <Footer className={"bg-none p-4"} />
            </div>
          </div>
        </div>
      </Layout>
    );
};

export default WDC;
