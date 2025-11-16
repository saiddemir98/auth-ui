import { loginAction } from "@/action/login_action";
import UiNodeMap from "@/components/UiNodeMap";
import UiMessages from "@/components/UiMessages";
import frontend from "@/configuration/kratos_client_config";
import { getCookieString } from "@/utils/cookie_utils";
import { UiNodeGroupEnum } from "@ory/client";
import { filterNodesByGroups } from "@ory/integrations/ui";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function LoginPage({ searchParams }: any) {
    const searchParamsStore = (await searchParams);
    const flow = searchParamsStore.flow;
    const returnTo = searchParamsStore.return_to;
    
    const cookie = getCookieString(await cookies());
    const ui = await loginAction(flow,returnTo, cookie);
    const messages = ui.messages;
    
    // OIDC providers ve diğer form elemanlarını ayırıyoruz
    const oidcNodes = filterNodesByGroups({
        nodes: ui.nodes,
        withoutDefaultGroup: true,
        groups: [UiNodeGroupEnum.Oidc],
    });
    
    const passwordNodes = filterNodesByGroups({
        nodes: ui.nodes,
        groups: [UiNodeGroupEnum.Password],
    });

    return (
        <div className="min-h-screen flex">
            
            {/* Left Side - Branding & Info */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#5151F4] to-[#4040E6] relative overflow-hidden items-center justify-center p-16">
                <div className="relative w-full max-w-md">
                    {/* Dashboard Preview Animation */}
                    <div className="relative">
                        <div className="w-64 h-40 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 relative mx-auto mb-8">
                            {/* Dashboard Elements */}
                            <div className="absolute inset-4">
                                {/* Header Bar */}
                                <div className="h-6 bg-white/20 rounded mb-3 flex items-center px-2">
                                    <div className="w-4 h-4 bg-white/40 rounded mr-2"></div>
                                    <div className="h-1 bg-white/30 rounded flex-1"></div>
                                </div>
                                
                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    <div className="h-8 bg-white/15 rounded flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white/60 rounded"></div>
                                    </div>
                                    <div className="h-8 bg-white/15 rounded flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white/60 rounded"></div>
                                    </div>
                                </div>
                                
                                {/* Chart Area */}
                                <div className="h-12 bg-white/15 rounded flex items-end px-2 py-1">
                                    <div className="w-1 h-6 bg-white/60 rounded mr-1"></div>
                                    <div className="w-1 h-8 bg-white/60 rounded mr-1"></div>
                                    <div className="w-1 h-4 bg-white/60 rounded mr-1"></div>
                                    <div className="w-1 h-10 bg-white/60 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating UI Elements */}
                        <div className="absolute top-8 -right-4 w-12 h-8 bg-white/20 rounded-lg rotate-12 animate-pulse flex items-center justify-center">
                            <svg className="w-6 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-12 -left-4 w-10 h-6 bg-white/20 rounded-lg -rotate-12 animate-pulse" style={{animationDelay: '1s'}}>
                            <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-4 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center text-white">
                        <h1 className="text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                            Bigarson'a Dönün
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Dashboard'unuza erişin, işletmenizi yönetin
                        </p>
                        
                        <div className="space-y-3 text-white/60 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Anlık satış takibi</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Detaylı raporlar ve analitik</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="mb-6">

                        <h2 className="text-2xl font-bold text-gray-600 mb-2 text-center md:text-left">Giriş Yapın</h2>

                    </div>

                    {/* Messages */}
                    <UiMessages messages={messages} />

                    <form action={ui.action} method="POST" className="space-y-4">   
                        {/* OIDC Providers */}
                        {oidcNodes.length > 0 && (
                            <div className="space-y-3">
                                {oidcNodes.map((node, index) => (
                                    <UiNodeMap key={index} node={node} />
                                ))}
                                
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-3 bg-gray-50 text-gray-500">veya</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>

                    <form action={ui.action} method="POST" className="space-y-4">
                        {/* Default Form Fields */}
                        <div className="space-y-3">
                            {passwordNodes.map((node, index) => (
                                <UiNodeMap key={index} node={node} />
                            ))}
                        </div>
                    </form>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-600">
                            Hesabınız yok mu?{" "}
                            <Link href="/registration" className="font-medium text-[#5151F4] hover:text-[#4040E6] transition-colors">
                                Ücretsiz hesap oluşturun
                            </Link>
                        </p>
                        <p className="text-center text-sm text-gray-500 mt-2">
                            <Link href="/recovery" className="hover:text-[#5151F4] transition-colors">
                                Şifrenizi mi unuttunuz?
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}