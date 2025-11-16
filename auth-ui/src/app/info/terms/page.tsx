import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Content */}
            <main className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Kullanım Şartları
                            </h1>
                            <p className="text-xl text-gray-600">
                                Bigarson platformunu kullanım koşulları ve üyelik sözleşmesi
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
                                    İşbu sözleşme <strong>Bigarson Limited Şirketi</strong> ("Bigarson" olarak anılacaktır) ile Bigarson web sitesi ve uygulamalarını kullanan kullanıcı ("Kullanıcı") arasında karşılıklı olarak kabul edilerek yürürlüğe girmiştir.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">2</span>
                                    </span>
                                    Tanımlar
                                </h2>
                                <div className="space-y-3 text-gray-700">
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <div><strong>Bigarson:</strong> Bigarson Limited Şirketi</div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <div><strong>Platform:</strong> Bigarson web sitesi ve mobil uygulaması</div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <div><strong>Hizmetler:</strong> QR menü sistemi, cafe yönetimi ve ilgili tüm hizmetler</div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <div><strong>Kullanıcı:</strong> Bigarson hizmetlerinden yararlanan kişi veya kuruluşlar</div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <div><strong>Üye:</strong> Kayıt olan ve hesap oluşturan kullanıcılar</div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">3</span>
                                    </span>
                                    Konu ve Kapsam
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        İşbu sözleşmenin konusu; Kullanıcıya yönelik olarak platformda mevcut olan ve ileride Bigarson tarafından sunulacak tüm hizmetlerin, bu hizmetlerden yararlanma şartlarının ve tarafların hak ve yükümlülüklerinin tespitidir.
                                    </p>
                                    <p>
                                        Kullanıcı, işbu sözleşme hükümlerini kabul etmekle, platform içinde yer alan kullanıma, üyeliğe ve hizmetlere ilişkin Bigarson tarafından açıklanan her türlü beyanı da kabul etmiş olmaktadır.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">4</span>
                                    </span>
                                    Üyelik ve Hizmet Kullanım Şartları
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                                        <h4 className="font-semibold text-blue-900 mb-2">Yaş Sınırı:</h4>
                                        <p className="text-blue-800">
                                            Platformu kullanabilmek için 18 yaşını doldurmuş olmak gerekmektedir. 18 yaşından küçük kullanıcılar yasal temsilcilerinin onayı ile hizmetlerden yararlanabilir.
                                        </p>
                                    </div>
                                    <p>
                                        Üyelik işlemi, web sitesinde gerekli bilgilerin sağlanması ve e-posta doğrulamasının tamamlanması ile gerçekleşir. Üyelik işlemi tamamlanmadan hizmetlerden tam olarak yararlanılamaz.
                                    </p>
                                    <p>
                                        Kullanıcılar, kayıt sırasında doğru ve güncel bilgiler sağlamakla yükümlüdür. Yanlış bilgi verilmesi durumunda üyelik iptal edilebilir.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">5</span>
                                    </span>
                                    Kullanıcı Yükümlülükleri
                                </h2>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Hesap güvenliğini sağlamak ve giriş bilgilerini korumak
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Platform kurallarına ve yasal mevzuata uygun davranmak
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Doğru ve güncel bilgiler sağlamak
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Platformu kötüye kullanmamak ve zarar vermemek
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Diğer kullanıcıların haklarına saygı göstermek
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#5151F4] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        Ticari olmayan amaçlarla kullanım (yazılı izin olmadığı sürece)
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">6</span>
                                    </span>
                                    Bigarson'un Hak ve Yükümlülükleri
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bigarson, hizmetleri geliştirme ve iyileştirme konusunda sürekli çaba gösterir. Ancak hizmetlerin kesintisiz olacağına dair garanti vermez.
                                    </p>
                                    <p>
                                        Bigarson, uygun gördüğü durumlarda hizmetleri güncelleme, değiştirme veya durdurma hakkını saklı tutar. Bu durumda kullanıcılar önceden bilgilendirilir.
                                    </p>
                                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                                        <p className="text-amber-800">
                                            <strong>Önemli:</strong> Bigarson, kullanıcıların platform kurallarını ihlal etmesi durumunda hesapları askıya alma veya sonlandırma hakkını saklı tutar.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">7</span>
                                    </span>
                                    Fikri Mülkiyet Hakları
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bigarson platformundaki tüm içerik, yazılım, tasarım ve diğer materyaller Bigarson'un mülkiyetindedir ve fikri mülkiyet yasaları ile korunmaktadır.
                                    </p>
                                    <div className="bg-red-50 border border-red-200 rounded-md p-4">
                                        <h4 className="font-semibold text-red-900 mb-2">Yasak Faaliyetler:</h4>
                                        <ul className="space-y-2 text-red-800">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                                                İçerikleri kopyalamak veya çoğaltmak
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                                                Tersine mühendislik yapmak
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                                                Yetkisiz erişim sağlamaya çalışmak
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                                                Ticari amaçlı kullanım (izin olmadan)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">8</span>
                                    </span>
                                    Sorumluluk Sınırlamaları
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bigarson, mücbir sebeplerden (doğal afetler, internet kesintileri, siber saldırılar vb.) kaynaklanan hizmet kesintilerinden sorumlu değildir.
                                    </p>
                                    <p>
                                        Kullanıcıların platform üzerindeki faaliyetlerinden doğan sorumluluk kendilerine aittir. Bigarson, kullanıcılar arası uyuşmazlıklarda taraf olmaz.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">9</span>
                                    </span>
                                    Sözleşme Değişiklikleri
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bigarson, bu sözleşmede değişiklik yapma hakkını saklı tutar. Değişiklikler platform üzerinden duyurulur ve yürürlük tarihi belirtilir.
                                    </p>
                                    <p>
                                        Kullanıcılar, değişikliklerden sonra platformu kullanmaya devam etmeleri halinde yeni şartları kabul etmiş sayılırlar.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">10</span>
                                    </span>
                                    Uygulanacak Hukuk ve Yetki
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Bu sözleşmenin uygulanmasında Türk Hukuku geçerlidir. Uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                                    </p>
                                    <p>
                                        Sözleşmeden doğacak uyuşmazlıklar öncelikle dostane yollarla çözülmeye çalışılır.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-[#5151F4]/10 rounded-md flex items-center justify-center mr-3">
                                        <span className="text-[#5151F4] font-bold">11</span>
                                    </span>
                                    Yürürlük ve İletişim
                                </h2>
                                <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Bu Kullanım Şartları sözleşmesi <strong>01.12.2024</strong> tarihinde güncellenmiştir ve kullanıcıların platformu kullanmaya başladığı andan itibaren geçerlidir.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Kullanıcılar, bu sözleşmeyi okuduklarını, anladıklarını ve kabul ettiklerini beyan ederler.
                                    </p>
                                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                                        <h4 className="font-semibold text-blue-900 mb-2">İletişim:</h4>
                                        <p className="text-blue-800">
                                            Sorularınız için <a href="mailto:info@bigarson.com" className="text-[#5151F4] hover:text-[#4040E6] underline font-medium">info@bigarson.com</a> adresinden bize ulaşabilirsiniz.
                                        </p>
                                    </div>
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
                            <Link href="/info/privacy" className="text-gray-600 hover:text-[#5151F4]">
                                Gizlilik Politikası
                            </Link>
                            <Link href="/info/kvkk" className="text-gray-600 hover:text-[#5151F4]">
                                KVKK
                            </Link>
                            <Link href="/info/terms" className="text-[#5151F4] font-medium">
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