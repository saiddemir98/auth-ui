import { getCookieString } from "@/utils/cookie_utils";
import Link from "next/link";
import { cookies } from "next/headers";
import frontend from "@/configuration/kratos_client_config";
import { getMySession, listMySessions, settingsAction } from "@/action/settings_action";
import { filterNodesByGroups } from "@ory/integrations/ui";
import { Session, UiNodeGroupEnum, UiText } from "@ory/client";
import UiNodeMap from "@/components/UiNodeMap";
import UiMessages from "@/components/UiMessages";

export default async function SettingsPage({ searchParams }: any) {
    const flow = (await searchParams).flow;
    const cookie = getCookieString(await cookies());
    const ui = await settingsAction(flow, cookie);
    const sessions: Session[] = await listMySessions(cookie);
    const mySession: Session = await getMySession(cookie);
    const oidcNodes = filterNodesByGroups({
        nodes: ui.nodes,
        withoutDefaultGroup: true,
        groups: [UiNodeGroupEnum.Oidc],
    });
    const passwordNodes = filterNodesByGroups({
        nodes: ui.nodes,
        groups: [UiNodeGroupEnum.Password],
    });

    const profileNodes = filterNodesByGroups({
        nodes: ui.nodes,
        groups: [UiNodeGroupEnum.Profile],
    });

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return 'Bilinmiyor';
        return new Date(dateString).toLocaleString('tr-TR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getBrowserInfo = (userAgent?: string) => {
        if (!userAgent) return 'Bilinmeyen Tarayıcı';
        if (userAgent.includes('Chrome')) return 'Chrome';
        if (userAgent.includes('Firefox')) return 'Firefox';
        if (userAgent.includes('Safari')) return 'Safari';
        if (userAgent.includes('Edge')) return 'Edge';
        return 'Diğer';
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Content */}
            <main className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Hesap Ayarları
                            </h1>
                            <p className="text-xl text-gray-600">
                                Hesap bilgilerinizi ve güvenlik ayarlarınızı yönetin
                            </p>
                            <div className="w-24 h-1 bg-[#5151F4] mx-auto mt-6"></div>
                        </div>
                        {ui.messages && ui.messages.length > 0 && (
                            <div className="mt-8 space-y-3">
                                <UiMessages messages={ui.messages} />
                            </div>
                        )}

                        {/* Settings Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                            {/* Profile Settings Form */}
                            {profileNodes.length > 0 && (
                                <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <span className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        Profil Bilgileri
                                    </h2>
                                    <form action={ui.action} method={ui.method}>
                                        <div className="space-y-4">
                                            {profileNodes.map((node, index) => (
                                                <UiNodeMap key={index} node={node} />
                                            ))}
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* Password Settings Form */}
                            {passwordNodes.length > 0 && (
                                <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <span className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-3">
                                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                        Şifre Güvenliği
                                    </h2>
                                    <form action={ui.action} method={ui.method}>
                                        <div className="space-y-4">
                                            {passwordNodes.map((node, index) => (
                                                <UiNodeMap key={index} node={node} />
                                            ))}
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* Social Connections Form */}
                            {oidcNodes.length > 0 && (
                                <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <span className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                                            <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
                                        </span>
                                        Hesap Bağlantıları
                                    </h2>
                                    <form action={ui.action} method={ui.method}>
                                        <div className="space-y-3">
                                            {oidcNodes.map((node, index) => (
                                                <UiNodeMap key={index} node={node} />
                                            ))}
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Session Management */}
                        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                Aktif Oturumlar
                            </h2>

                            {/* Current Session */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Mevcut Cihaz</h3>
                                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-green-800">
                                                    {getBrowserInfo((mySession as any)?.devices?.[0]?.user_agent)}
                                                </h4>
                                                <p className="text-sm text-green-600">
                                                    Son aktivite: {formatDate(mySession.authenticated_at)}
                                                </p>
                                                <p className="text-xs text-green-500">
                                                    IP: {(mySession as any)?.devices?.[0]?.ip_address || 'Bilinmiyor'}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                            Aktif
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Other Sessions */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Diğer Cihazlar</h3>
                                {sessions && sessions.length > 0 ? (
                                    <div className="space-y-3">
                                        {sessions.map((session, index) => (
                                            <div key={session.id} className="bg-gray-50 border border-gray-200 rounded-md p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-800">
                                                                {getBrowserInfo((session as any)?.devices?.[0]?.user_agent)}
                                                            </h4>
                                                            <p className="text-sm text-gray-600">
                                                                Son aktivite: {formatDate(session.authenticated_at)}
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                IP: {(session as any)?.devices?.[0]?.ip_address || 'Bilinmiyor'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <form action="/api/logout-session" method="POST" className="inline">
                                                        <input type="hidden" name="session_id" value={session.id} />
                                                        <button
                                                            type="submit"
                                                            className="px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">
                                                            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                            </svg>
                                                            Çıkış Yap
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-500">Başka aktif oturum bulunamadı</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Messages */}
                        {ui.messages && ui.messages.length > 0 && (
                            <div className="mt-8 space-y-3">
                                <UiMessages messages={ui.messages} />
                            </div>
                        )}


                    </div>
                </div>
            </main>


        </div>
    );
}