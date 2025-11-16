import { translateMessage } from "@/locales";
import { UiNode, UiNodeInputAttributes } from "@ory/client";
import Image from "next/image";

export default function MapOidcButton({ node }: { node: UiNode }) {
    const attributes = node.attributes as UiNodeInputAttributes;
    const provider = attributes.value as string;

    // Provider'a göre minimal renk şemaları
    const getProviderStyles = (provider: string) => {
        switch (provider?.toLowerCase()) {
            case 'google':
                return "bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 ";
            case 'facebook':
                return "bg-[#1877F2] hover:bg-[#166FE5] border border-[#1877F2] text-white";
            case 'apple':
                return "bg-black hover:bg-gray-800 border border-black text-white";
            default:
                return "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700";
        }
    };

    return (
        <button
            type={attributes.type as "submit" | "reset" | "button" | undefined}
            name={attributes.name}
            value={attributes.value}
            className={`w-full h-10 font-medium text-sm rounded-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 shadow-sm flex items-center justify-center gap-3 ${getProviderStyles(provider)}`}>
            {provider && (
                <Image
                    src={`${provider}.svg`}
                    alt={`${provider} logo`}
                    width={48}
                    height={48}
                    className="h-4 w-4"
                />
            )}
            <span className="text-sm">{translateMessage(node.meta.label)}</span>
        </button>
    );
}