import Link from "next/link";

export default function KvkkPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Content */}
            <main className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                KVKK Aydınlatma Metni
                            </h1>
                            <p className="text-xl text-gray-600">
                                Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni
                            </p>
                            <div className="w-24 h-1 bg-[#5151F4] mx-auto mt-6"></div>
                        </div>

                        {/* Content Sections */}
                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-8 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">1</span>
                                    </span>
                                    Amaç ve Kapsam
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Bu Aydınlatma Metni, Bigarson Limited Şirketi ("Şirket") tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, müşterilerimizin kişisel verilerinin işlenmesine ilişkin olarak bilgilendirme amacıyla hazırlanmıştır.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">2</span>
                                    </span>
                                    Kişisel Verilerin Toplanma Yöntemleri ve Hukuki Sebepleri
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Kişisel verileriniz, elektronik ve/veya fiziki ortamda, Şirketimiz tarafından sunulan hizmetlerden yararlanmanız sırasında, KVKK'da belirtilen hukuki sebeplerle toplanmakta, Kanun'un 5. ve 6. maddelerinde belirtilen şartlar çerçevesinde işlenmekte ve paylaşılabilmektedir.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">3</span>
                                    </span>
                                    Kişisel Verilerin İşlenme Amaçları
                                </h2>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Şirket tarafından sunulan ürün ve hizmetlerin, kullanıcıların beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek önerilmesi ve tanıtılması,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Ürün ve hizmetlerden faydalanmanız için gerekli çalışmaların iş birimleri tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Şirket'in ticari faaliyetlerinin gerçekleştirilmesi ve iş stratejilerinin planlanması,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Şirket'in ve iş ilişkisi içerisinde olduğu kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">4</span>
                                    </span>
                                    Kişisel Verilerin Aktarılabileceği Taraflar ve Aktarım Amaçları
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Kişisel verileriniz, KVKK'nın 8. ve 9. maddeleri kapsamında, yukarıda belirtilen amaçlarla; iş ortaklarımız, tedarikçilerimiz, hukuken yetkili kamu kurum ve kuruluşları ile özel hukuk tüzel kişilerine aktarılabilir.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">5</span>
                                    </span>
                                    Veri Sahiplerinin Hakları
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    KVKK'nın 11. maddesi uyarınca, kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:
                                </p>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Kişisel verilerinizin işlenip işlenmediğini öğrenme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        İşlenmişse buna ilişkin bilgi talep etme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Eksik veya yanlış işlenmişse düzeltilmesini isteme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        İşlenmesini gerektiren sebeplerin ortadan kalkması halinde silinmesini veya yok edilmesini isteme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Aktarıldığı üçüncü kişilere yapılan işlemlerin bildirilmesini isteme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Otomatik sistemler ile analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Kanuna aykırı işlenme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">6</span>
                                    </span>
                                    Hakların Kullanılması ve Başvuru
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Haklarınıza ilişkin taleplerinizi, <a href="https://bigarson.com/kvkk-basvuru" className="text-[#5151F4] hover:text-[#4040E6] underline font-medium">https://bigarson.com/kvkk-basvuru</a> adresinden veya Şirketimize yazılı olarak iletebilirsiniz. Başvurularınız, en kısa sürede ve en geç 30 gün içinde sonuçlandırılacaktır.
                                </p>
                                <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                                    <p className="text-sm text-amber-800">
                                        <strong>Önemli:</strong> 10.03.2018 tarihli ve 30356 sayılı Resmî Gazete'de yayımlanan "Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ" uyarınca, başvurulara yazılı olarak cevap verilmesi halinde on sayfaya kadar ücret alınmaz; on sayfanın üzerindeki her sayfa için 1 TL işlem ücreti alınabilir.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">7</span>
                                    </span>
                                    İstisnalar
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    KVKK'nın 28. maddesi gereği bazı durumlarda veri sahiplerinin hakları kısıtlanabilir. Detaylı bilgi için Kanun'un ilgili maddelerine başvurabilirsiniz.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-12">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-[#5151F4] rounded-md flex items-center justify-center">
                                <span className="text-sm font-bold text-white">B</span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">Bigarson</span>
                        </div>
                        <p className="text-gray-600 mb-4">Modern cafe yönetim sistemi</p>
                        <div className="flex justify-center space-x-6 text-sm">
                            <Link href="/info/privacy" className="text-gray-600 hover:text-[#5151F4]">
                                Gizlilik Politikası
                            </Link>
                            <Link href="/info/kvkk" className="text-[#5151F4] font-medium">
                                KVKK
                            </Link>
                            <Link href="/info/terms" className="text-gray-600 hover:text-[#5151F4]">
                                Kullanım Şartları
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">&copy; 2024 Bigarson. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}