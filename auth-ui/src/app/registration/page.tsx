import { registrationAction } from "@/action/registration_action";
import UiNodeMap from "@/components/UiNodeMap";
import UiMessages from "@/components/UiMessages";
import frontend from "@/configuration/kratos_client_config";
import { getCookieString } from "@/utils/cookie_utils";
import { UiNodeGroupEnum, UiNodeInputAttributesTypeEnum } from "@ory/client";
import { filterNodesByGroups } from "@ory/integrations/ui";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function RegistrationPage({ searchParams }: any) {
    const flow = (await searchParams).flow;
    const cookie = getCookieString(await cookies());
    const ui = await registrationAction(flow, cookie);
    const messages = ui.messages;
    
    // Default form elemanlarını alıyoruz (sosyal medya buttonları hariç)
    const passwordNodes = filterNodesByGroups({
        nodes: ui.nodes,
        attributes:[UiNodeInputAttributesTypeEnum.Hidden,UiNodeInputAttributesTypeEnum.Submit,UiNodeInputAttributesTypeEnum.Password],
        groups: [UiNodeGroupEnum.Password],
    });

    const profileNodes = filterNodesByGroups({
        nodes: ui.nodes,
        groups: [UiNodeGroupEnum.Default,UiNodeGroupEnum.Profile],
    });

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding & Info */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#5151F4] to-[#4040E6] relative overflow-hidden items-center justify-center p-16">
                <div className="relative w-full max-w-md">
                    {/* Welcome Journey Animation */}
                    <div className="relative">
                        <div className="w-56 h-56 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 relative mx-auto mb-8 flex items-center justify-center">
                            {/* Central Welcome Icon */}
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </div>
                            
                            {/* Orbiting Elements */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white/20 rounded-lg animate-pulse">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white/20 rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 rounded-lg animate-pulse" style={{animationDelay: '1s'}}>
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 rounded-lg animate-pulse" style={{animationDelay: '1.5s'}}>
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Feature Icons */}
                        <div className="absolute top-12 -right-8 w-16 h-12 bg-white/20 rounded-xl rotate-12 animate-pulse flex items-center justify-center">
                            <svg className="w-8 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-8 -left-8 w-14 h-10 bg-white/20 rounded-xl -rotate-12 animate-pulse" style={{animationDelay: '2s'}}>
                            <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-6 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center text-white">
                        <h1 className="text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                            Bigarson Ailesine Katılın
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Modern cafe yönetiminde yeni bir dönem başlıyor
                        </p>
                        
                        <div className="space-y-3 text-white/60 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>30 gün ücretsiz deneme</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Anında kurulum, teknik bilgi gerekmez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="mb-6">
                        <div className="lg:hidden w-10 h-10 bg-[#5151F4] rounded-lg flex items-center justify-center mb-4">
                            <span className="text-lg font-bold text-white">B</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Hesap Oluşturun</h2>
                        <p className="text-sm text-gray-600">Ücretsiz hesabınızı oluşturun ve hemen başlayın</p>
                    </div>

                    {/* Messages */}
                    <UiMessages messages={messages} />

                    <form action={ui.action} method={ui.method} className="space-y-4 mb-4">
                        {/* Registration Form Fields */}
                        <div className="space-y-3">
                            {passwordNodes.map((node, index) => (
                                <UiNodeMap key={index} node={node} />
                            ))}
                        </div>
                    </form>
                    <form action={ui.action} method={ui.method} className="space-y-4">
                        {/* Registration Form Fields */}
                        <div className="space-y-3">
                            {profileNodes.map((node, index) => (
                                <UiNodeMap key={index} node={node} />
                            ))}
                        </div>
                    </form>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-600">
                            Zaten hesabınız var mı?{" "}
                            <Link href="/login" className="font-medium text-[#5151F4] hover:text-[#4040E6] transition-colors">
                                Giriş yapın
                            </Link>
                        </p>
                    </div>

                    <div className="mt-3 text-center">
                        <p className="text-xs text-gray-500">
                            Kayıt olarak{" "}
                            <Link href="/info/terms" className="text-[#5151F4] hover:underline">Kişisel Verilerin Korunması Kanunu</Link>
                            ,{" "}
                            <Link href="/info/terms" className="text-[#5151F4] hover:underline">Kullanım Şartları</Link>
                            {" "}ve{" "}
                            <Link href="/info/privacy" className="text-[#5151F4] hover:underline">Gizlilik Politikası</Link>
                            'nı kabul etmiş olursunuz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}