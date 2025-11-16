import { translateMessage } from "@/locales";
import { UiNode, UiNodeInputAttributes } from "@ory/client";

export default function MapInput({ node }: { node: UiNode }) {
    const attributes = node.attributes as UiNodeInputAttributes;
    return (
        <input
            id={attributes.name}
            name={attributes.name}
            type={attributes.type}
            autoComplete={attributes.autocomplete || (attributes.name === "email" ? "email" : "")}
            defaultValue={attributes.value}
            required={attributes.required}
            pattern={attributes.pattern}
            maxLength={attributes.maxlength}
            disabled={attributes.disabled}
            className="w-full h-11 px-3 bg-white border border-gray-300 rounded-xs focus:outline-none focus:border-[#5151F4] focus:ring-1 focus:ring-[#5151F4] transition-colors duration-200 text-gray-900 text-sm placeholder-gray-500"
            placeholder={translateMessage(node.meta.label)}
        />
    );
}

