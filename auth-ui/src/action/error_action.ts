import frontend from "@/configuration/kratos_client_config";
import { FlowError } from "@ory/client";
import { redirect } from "next/navigation";

export async function errorAction(flow: string): Promise<FlowError> {
    // if (!flow) {
    //     redirect(process.env.KRATOS_URL + "/self-service/error/browser");
    // }
    try {

        
        const response = await frontend.getFlowError({
            id: flow,
        });
        return response.data;
    } catch (error: any) {
        console.log(error);
        console.log(error?.response);
        console.log(error?.response.data);
        throw new Error(error?.toString()??"");
    }
    
}