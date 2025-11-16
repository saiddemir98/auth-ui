import { translateMessage } from "@/locales";
import { UiNode, UiNodeInputAttributes } from "@ory/client";

export default function MapButton({ node }: { node: UiNode }) {
    const attributes = node.attributes as UiNodeInputAttributes;
    return (
        <button
            type={attributes.type as "submit" | "reset" | "button" | undefined}
            name={attributes.name}
            value={attributes.value}
            className="w-full h-10 bg-[#5151F4] hover:bg-[#4040E6] text-white font-medium text-sm rounded-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5151F4] focus:ring-offset-2 shadow-sm">
            {translateMessage(node.meta.label)}
        </button>
    );
}