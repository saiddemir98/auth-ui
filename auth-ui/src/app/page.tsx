import Link from "next/link";

export default async function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#5151F4] rounded-md flex items-center justify-center">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Bigarson</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Özellikler</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Fiyatlandırma</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">İletişim</a>
              <Link 
                href="/login"
                className="px-4 py-2 bg-[#5151F4] text-white font-medium rounded-md hover:bg-[#4040E6] transition-colors"
              >
                Giriş Yap
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cafe İşletmenizi
              <span className="text-[#5151F4] block">Dijitalleştirin</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              QR kodlu menü sistemi ve gelişmiş yönetim araçları ile cafe işletmenizi 
              modern çağa taşıyın. Operasyonlarınızı optimize edin, müşteri deneyimini artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/registration"
                className="px-8 py-4 bg-[#5151F4] text-white font-semibold rounded-md hover:bg-[#4040E6] transition-colors shadow-lg"
              >
                Ücretsiz Başlayın
              </Link>
              <Link 
                href="/login"
                className="px-8 py-4 bg-white text-[#5151F4] font-semibold rounded-md border-2 border-[#5151F4] hover:bg-[#5151F4] hover:text-white transition-colors"
              >
                Giriş Yap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Neden Bigarson?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern cafe yönetimi için ihtiyacınız olan tüm araçlar tek platformda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#5151F4]/10 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5151F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">QR Menü Sistemi</h3>
              <p className="text-gray-600 leading-relaxed">
                Müşterileriniz masadaki QR kodu okutarak dijital menünüze erişir, 
                temassız sipariş verir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#5151F4]/10 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5151F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analitik Raporlar</h3>
              <p className="text-gray-600 leading-relaxed">
                Satış verilerinizi, popüler ürünlerinizi ve gelir trendlerinizi 
                detaylı raporlarla takip edin.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#5151F4]/10 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5151F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Müşteri Yönetimi</h3>
              <p className="text-gray-600 leading-relaxed">
                Müşteri bilgilerini kaydedin, sipariş geçmişini takip edin, 
                sadakat programları oluşturun.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#5151F4]/10 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5151F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ödeme Entegrasyonu</h3>
              <p className="text-gray-600 leading-relaxed">
                Kredi kartı, mobil ödeme ve diğer ödeme yöntemlerini 
                güvenli bir şekilde kabul edin.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#5151F4]/10 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5151F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stok Yönetimi</h3>
              <p className="text-gray-600 leading-relaxed">
                Ürün stoklarınızı takip edin, düşük stok uyarıları alın, 
                otomatik tedarik planlaması yapın.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#5151F4]/10 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5151F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hızlı Kurulum</h3>
              <p className="text-gray-600 leading-relaxed">
                Dakikalar içinde kurulum tamamlayın, hemen kullanmaya başlayın. 
                Teknik bilgi gerektirmez.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-sm text-gray-500">&copy; 2024 Bigarson. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}