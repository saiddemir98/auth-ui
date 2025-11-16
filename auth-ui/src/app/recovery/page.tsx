import { recoveryAction } from "@/action/recovery_action";
import UiNodeMap from "@/components/UiNodeMap";
import UiMessages from "@/components/UiMessages";
import { getCookieString } from "@/utils/cookie_utils";
import { UiNodeGroupEnum, UiNodeInputAttributesTypeEnum } from "@ory/client";
import { filterNodesByGroups, getNodeId, getNodeInputType, getNodeLabel } from "@ory/integrations/ui";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function RecoveryPage({ searchParams }: any) {
    const flow = (await searchParams).flow;
    const cookie = getCookieString(await cookies());
    const ui = await recoveryAction(flow, cookie);
    const messages = ui.messages;

    const defaultNodes = filterNodesByGroups({
        nodes: ui.nodes,
        groups: [UiNodeGroupEnum.Code],
    }).filter((node) => getNodeLabel(node) != "Resend code");
    const resendCode = filterNodesByGroups({
        nodes: ui.nodes,
        attributes: [UiNodeInputAttributesTypeEnum.Hidden, UiNodeInputAttributesTypeEnum.Submit],
        groups: [UiNodeGroupEnum.Code],
    }).filter((node) => getNodeLabel(node) != "Continue");


    return (

        <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">
            {/* Left Side - Security Visualization */}
            <div className="hidden lg:flex relative bg-gradient-to-br from-[#5151F4] to-[#4040E6] items-center justify-center p-16">
                {/* Security Animation Area */}
                <div className="relative w-full max-w-md">
                    {/* Lock Icon Large */}
                    <div className="relative">
                        <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 relative mx-auto mb-8 flex items-center justify-center">
                            {/* Lock Body */}
                            <div className="relative">
                                {/* Lock Shackle */}
                                <div className="w-16 h-16 border-4 border-white/60 rounded-t-full mx-auto mb-2"></div>

                                {/* Lock Body */}
                                <div className="w-20 h-14 bg-white/20 backdrop-blur-sm rounded-lg relative">
                                    {/* Keyhole */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                                        <div className="w-1 h-4 bg-white/60 mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Security Elements */}
                        <div className="absolute top-12 -right-4 w-8 h-8 bg-white/20 rounded-lg rotate-12 animate-pulse flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="absolute bottom-12 -left-4 w-6 h-6 bg-white/20 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}>
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center text-white">
                        <h1 className="text-3xl font-bold mb-4">
                            Şifrenizi Sıfırlayın
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            Endişelenmeyin, hepimizin başına gelir!
                            Email adresinizi girin, size şifre sıfırlama linki gönderelim.
                        </p>

                        <div className="space-y-3 text-white/60 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Güvenli şifre sıfırlama</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 1l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H3v-4l-3-3 3-3V3h4l3-3z" clipRule="evenodd" />
                                </svg>
                                <span>Hızlı ve kolay işlem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Recovery Form */}
            <div className="flex items-center justify-center p-6 lg:p-16 bg-white min-h-screen">
                <div className="w-full max-w-sm">
                    

                    {/* Form Header */}
                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                            Şifre Sıfırlama
                        </h2>
                        <p className="text-sm lg:text-base text-gray-600">
                            Email adresinizi girin, size sıfırlama linki gönderelim
                        </p>
                    </div>

                    {/* Messages */}
                    <UiMessages messages={messages} />

                    {/* Form */}
                    <form action={ui.action} method={ui.method} className="space-y-4 lg:space-y-6">
                        {defaultNodes.map((node, index) => (
                            <UiNodeMap key={index} node={node} />
                        ))}
                    </form>
                    <form action={ui.action} method={ui.method} className="space-y-4 lg:space-y-6 my-4">
                        {resendCode.map((node, index) => (
                            <UiNodeMap key={index} node={node} />
                        ))}
                    </form>


                    {/* Navigation */}
                    <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                        <div className="flex justify-between text-xs lg:text-sm">
                            <Link href="/login" className="text-gray-600 hover:text-[#5151F4] transition-colors">
                                ← Giriş sayfası
                            </Link>
                            <Link href="/registration" className="text-[#5151F4] hover:text-[#4040E6] font-medium transition-colors">
                                Yeni hesap →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
