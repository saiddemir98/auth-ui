import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">


            {/* Content */}
            <main className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Gizlilik Politikası
                            </h1>
                            <p className="text-xl text-gray-600">
                                Kişisel bilgilerinizin güvenliği bizim önceliğimiz
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
                                    Taraflar
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    İşbu Gizlilik Politikası, <strong>Bigarson Limited Şirketi</strong> ("Bigarson" olarak anılacaktır) ile Bigarson web sitesi ve uygulamalarını kullanan kullanıcı ("Kullanıcı") arasında karşılıklı olarak kabul edilerek yürürlüğe girmiştir.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">2</span>
                                    </span>
                                    Konu ve Kapsam
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Kullanıcı, Bigarson platformunu kullanarak bu Gizlilik Politikası'nda belirtilen şartları ve Bigarson'un gizlilik uygulamalarını kabul etmiş sayılır.
                                    </p>
                                    <p>
                                        Kullanıcı, Bigarson web sitesini veya uygulamalarını ziyaret ettiğinde ya da üye olduğunda, Bigarson ile bazı kişisel bilgilerini paylaşmayı kabul eder.
                                    </p>
                                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                                        <h4 className="font-semibold text-blue-900 mb-2">Paylaşılan Kişisel Bilgiler:</h4>
                                        <ul className="space-y-2 text-blue-800">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                                Ad, soyad
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                                E-posta adresi
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                                Telefon numarası
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                                Adres bilgileri
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        Eğer bir kimlik doğrulama hizmeti (ör. Google Hesapları, Apple Kimliği vb.) ile kayıt olmayı veya giriş yapmayı seçerseniz, bu üçüncü taraf hizmetlerden adınız ve e-posta adresiniz gibi bazı bilgileri toplayabiliriz.
                                    </p>
                                    <p>
                                        Kullanıcıların Bigarson üzerinden paylaştığı yazılı ve sözlü tüm bilgi, mesaj, belge ve içerikler de gizlilik kapsamındadır.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">3</span>
                                    </span>
                                    Tarafların Yükümlülükleri
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bigarson, kullanıcıdan alınan kişisel bilgileri, üyelik sözleşmesinde belirtilen amaçlar dışında kullanmamayı ve üçüncü kişilerle paylaşmamayı taahhüt eder. Ancak yasal mercilerden talep gelmesi halinde bu bilgiler paylaşılabilir.
                                    </p>
                                    <p>
                                        Bigarson, kullanıcı bilgilerini daha iyi bir deneyim sunmak, bilgilendirme yapmak ve uygulamayı kişiselleştirmek için kullanabilir.
                                    </p>
                                    <p>
                                        Taraflar, gizli bilgileri gizli tutmayı, üçüncü kişilerle paylaşmamayı ve gerekli tüm önlemleri almayı kabul ve taahhüt eder.
                                    </p>
                                    <p>
                                        Kullanıcılar, aksi talep edilmediği sürece, bilgilendirme e-postaları ve SMS'leri alabilir. Bu iletilerin içeriği; satın alınan ürünler, kampanyalar, reklamlar ve bilgilendirmeler olabilir. Kullanıcılar bu iletileri almayı durdurma veya tekrar başlatma hakkına sahiptir.
                                    </p>
                                    <p>
                                        Bigarson'un sunduğu hizmetlerden yararlanan kullanıcılar, uygulamayı yalnızca yasal amaçlarla kullanmayı ve ilgili tüm mevzuata uymayı kabul eder.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">4</span>
                                    </span>
                                    Çeşitli Hükümler
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Taraflar, birbirlerine açıkladıkları bilgilerin doğru olduğunu beyan ve taahhüt eder. Aksi durumda oluşacak zararlardan sorumlu olurlar.
                                    </p>
                                    <p>
                                        Bu politikanın hükümlerine yazılı bir sözleşme olmadan atıfta bulunulamaz veya ekleme yapılamaz.
                                    </p>
                                    <p>
                                        Bigarson, bu Gizlilik Politikası'nı dilediği zaman güncelleme hakkını saklı tutar.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">5</span>
                                    </span>
                                    Yasal Uyuşmazlıklar
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Taraflardan biri, bu politikada belirtilen yükümlülükleri ihlal ederse, diğer tarafın uğradığı zararı tazmin etmeyi kabul eder.
                                    </p>
                                    <p>
                                        Gizliliğin ihlali halinde, taraflar hukuki yollara başvurma ve yargılama masraflarını talep etme hakkına sahiptir.
                                    </p>
                                    <p>
                                        Bu politikanın uygulanmasında ve doğacak uyuşmazlıklarda Türk Hukuku geçerlidir. İstanbul Adliyesi ve İcra Daireleri yetkilidir.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">6</span>
                                    </span>
                                    Çerezler (Cookies)
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bigarson, gerektiğinde kullanıcıların IP adresini tespit edebilir ve kullanabilir. IP adresleri, kullanıcıları genel olarak tanımlamak ve demografik bilgi toplamak için kullanılabilir.
                                    </p>
                                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                                        <h4 className="font-semibold text-green-900 mb-2">Toplanan Teknik Bilgiler:</h4>
                                        <ul className="space-y-2 text-green-800">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                                IP adresi
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                                İşletim sistemi
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                                Tarayıcı versiyonu
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        Bigarson web sitesi, kullanıcıların tekrar girişlerinde hatırlanabilmesi için bilgisayarlarına "çerez" (cookie) yerleştirebilir. Çerezler, kullanıcıların tarayıcı ayarlarından yönetilebilir.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">7</span>
                                    </span>
                                    Yürürlük Tarihi
                                </h2>
                                <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                                    <p className="text-gray-700 leading-relaxed">
                                        Bu Gizlilik Politikası 7 (yedi) maddeden oluşmaktadır ve en son <strong>01.06.2024</strong> tarihinde güncellenmiştir. Kullanıcı, bu politikada yer alan tüm maddeleri okuduğunu, anladığını ve kabul ettiğini beyan eder.
                                    </p>
                                    <p className="text-gray-600 text-sm mt-2">
                                        Bigarson, bu politikayı dilediği zaman güncelleme hakkını saklı tutar.
                                    </p>
                                </div>
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
                            <Link href="/info/privacy" className="text-[#5151F4] font-medium">
                                Gizlilik Politikası
                            </Link>
                            <Link href="/info/kvkk" className="text-gray-600 hover:text-[#5151F4]">
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