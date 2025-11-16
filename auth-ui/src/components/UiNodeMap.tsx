import { translateMessage } from "@/locales";
import { UiNode, UiNodeGroupEnum, UiNodeInputAttributes, UiNodeInputAttributesTypeEnum } from "@ory/client";
import {
    filterNodesByGroups,
    isUiNodeInputAttributes,
} from "@ory/integrations/ui";
import MapButton from "./MapButton";
import MapInput from "./MapInput";
import MapOidcButton from "./MapOidcButton";

export default function UiNodeMap({ node }: { node: UiNode}) {

    if (isUiNodeInputAttributes(node.attributes)) {
        const attributes = node.attributes as UiNodeInputAttributes;
        if (node.group === UiNodeGroupEnum.Oidc) {
            return <MapOidcButton node={node}  />;
        }
        
        switch (attributes.type) {
            case UiNodeInputAttributesTypeEnum.Button:
            case UiNodeInputAttributesTypeEnum.Submit:
                return <MapButton node={node}  />;
            default:
                return <MapInput node={node}  />;
        }
    }

}