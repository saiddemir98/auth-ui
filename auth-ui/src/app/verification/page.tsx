import { verificationAction } from "@/action/verification_action";
import UiNodeMap from "@/components/UiNodeMap";
import UiMessages from "@/components/UiMessages";
import { getCookieString } from "@/utils/cookie_utils";
import { UiNodeGroupEnum, UiNodeInputAttributesTypeEnum } from "@ory/client";
import { filterNodesByGroups, getNodeLabel } from "@ory/integrations/ui";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function VerificationPage({ searchParams }: any) {
    const flow = (await searchParams).flow;
    const cookie = getCookieString(await cookies());
    const ui = await verificationAction(flow, cookie);
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
            {/* Left Side - Email Visualization */}
            <div className="hidden lg:flex relative bg-gradient-to-br from-[#5151F4] to-[#4040E6] items-center justify-center p-16">
                {/* Email Animation Area */}
                <div className="relative w-full max-w-md">
                    {/* Email Icon Large */}
                    <div className="relative">
                        <div className="w-36 h-24 lg:w-48 lg:h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 relative mx-auto mb-6 lg:mb-8">
                            {/* Email Body */}
                            <div className="absolute inset-3 lg:inset-4">
                                <div className="h-0.5 lg:h-1 bg-white/30 rounded mb-1 lg:mb-2"></div>
                                <div className="h-0.5 lg:h-1 bg-white/30 rounded w-3/4 mb-1 lg:mb-2"></div>
                                <div className="h-0.5 lg:h-1 bg-white/30 rounded w-1/2 mb-2 lg:mb-4"></div>

                                {/* Code Box */}
                                <div className="bg-white/20 rounded p-2 lg:p-3 text-center">
                                    <div className="text-white text-sm lg:text-xl font-mono font-bold tracking-wider">
                                        ● ● ● ● ● ●
                                    </div>
                                </div>
                            </div>

                            {/* Email Tab */}
                            <div className="absolute -top-1 lg:-top-2 left-1/2 transform -translate-x-1/2 w-6 lg:w-8 h-3 lg:h-4 bg-white/20 rounded-t"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-4 lg:top-8 -right-2 lg:-right-4 w-4 lg:w-6 h-4 lg:h-6 bg-white/20 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 lg:bottom-8 -left-2 lg:-left-4 w-3 lg:w-4 h-3 lg:h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    {/* Content */}
                    <div className="text-center text-white">
                        <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
                            Email Kutunuzu Kontrol Edin
                        </h1>
                        <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                            Size 6 haneli bir doğrulama kodu gönderdik.
                            Bu kodu <span className="hidden lg:inline">yanındaki</span><span className="lg:hidden">aşağıdaki</span> alana girerek hesabınızı aktifleştirin.
                        </p>

                        <div className="space-y-2 lg:space-y-3 text-white/60 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs lg:text-sm">Gelen kutusu kontrol edildi</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs lg:text-sm">Kod güvenli şekilde gönderildi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Verification Form */}
            <div className="flex items-center justify-center p-6 lg:p-16 bg-white min-h-screen">
                <div className="w-full max-w-sm">
                    

                    {/* Form Header */}
                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                            Doğrulama Kodu
                        </h2>
                        <p className="text-sm lg:text-base text-gray-600">
                            Email'inize gönderilen 6 haneli kodu girin
                        </p>
                    </div>

                    {/* Messages */}
                    <UiMessages messages={messages} />

                    {/* Form */}
                    <form action={ui.action} method={ui.method} className="space-y-4 lg:space-y-4">
                        {defaultNodes.map((node, index) => (
                            <UiNodeMap key={index} node={node} />
                        ))}
                    </form>
                    <form action={ui.action} method={ui.method} className="space-y-4 lg:space-y-6 mb-4">
                        {resendCode.map((node, index) => (
                            <UiNodeMap key={index} node={node} />
                        ))}
                    </form>
   
                    {/* Help Actions */}
                    <div className="mt-6 lg:mt-8 space-y-3 lg:space-y-4">

                        <div className="text-center text-xs lg:text-sm text-gray-500">
                            Spam klasörünüzü de kontrol etmeyi unutmayın
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                        <div className="flex justify-between text-xs lg:text-sm">
                            <Link href="/login" className="text-gray-600 hover:text-[#5151F4] transition-colors">
                                ← Geri dön
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
