import frontend from "@/configuration/kratos_client_config";
import { UiContainer } from "@ory/client";
import { redirect } from "next/navigation";

export async function verificationAction(flow: string, cookie: string): Promise<UiContainer> {
    if (!flow) {
        redirect(process.env.KRATOS_PUBLIC_URL + "/self-service/verification/browser");
    }
    try {
        const response = await frontend.getVerificationFlow({
            id: flow,
            cookie: cookie,
        });
        return response.data.ui;
    } catch (error: any) {
        console.log(error?.response);
        console.log(error?.response.data);
        throw new Error(error?.toString()??"");
    }
}