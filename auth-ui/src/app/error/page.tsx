import Link from "next/link";
import { FlowError } from "@ory/client";
import { errorAction } from "@/action/error_action";
import { translateMessage } from "@/locales/index";

export default async function ErrorPage({searchParams}: any) {
    const flow = (await searchParams).id;
    const error: FlowError = await errorAction(flow);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 text-red-500">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L3.178 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        İşlem Başarısız
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Talebiniz işlenirken bir hata oluştu
                    </p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="border-l-4 border-red-400 bg-red-50 p-4">
                        <div className="flex">
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-red-800">
                                    Hata Bilgileri
                                </h3>
                                <div className="mt-2 text-sm text-red-700">
                                    {error?.error ? (
                                        <div className="space-y-1">
                                            {(error.error as any)?.code && (
                                                <p><strong>Kod:</strong> {(error.error as any).code}</p>
                                            )}
                                            {(error.error as any)?.status }
                                            {": "}
                                            {(error.error as any)?.message }
                                            
                                        </div>
                                    ) : (
                                        <p>Hata detayları alınamadı.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href="/login"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5151F4] hover:bg-[#4040E6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5151F4]"
                        >
                            Giriş Sayfasına Dön
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        Sorun devam ederse{" "}
                        <a href="mailto:destek@bigarson.com" className="text-[#5151F4] hover:text-[#4040E6]">
                            destek@bigarson.com
                        </a>{" "}
                        adresine başvurun
                    </p>
                </div>
            </div>
        </div>
    );
}