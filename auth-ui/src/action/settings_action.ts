import frontend from "@/configuration/kratos_client_config";
import { Session, UiContainer } from "@ory/client";
import { redirect } from "next/navigation";

export async function settingsAction(flow: string, cookie: string): Promise<UiContainer> {
    if (!flow) {
        redirect(process.env.KRATOS_PUBLIC_URL + "/self-service/settings/browser");
    }
    try {
        const response = await frontend.getSettingsFlow({
            id: flow,
            cookie: cookie,
        });
        console.log(response.data);
        console.log(response.data.ui.messages);
        console.log(response.data.ui.nodes);
        
        
        return response.data.ui;
    } catch (error: any) {
        console.log(error?.response);
        console.log(error?.response.data);
        throw new Error(error?.toString()??"");
    }
} 

export async function getMySession(cookie: string): Promise<Session> {
    try {
        const mySession = await frontend.toSession({
            cookie: cookie,
        });
        return mySession.data;
    } catch (error) {
        console.error("Error fırlatılacak ve en yakın error sayfası yakalayacak şekide ayarlanacak.");
        throw new Error("Error fırlatılacak ve en yakın error sayfası yakalayacak şekide ayarlanacak.");
    }
}

export async function listMySessions(cookie: string): Promise<Session[]> {
    try {
        const sessions = await frontend.listMySessions({
            cookie: cookie,
        });
        return sessions.data;
    } catch (error) {
        console.error("Error fırlatılacak ve en yakın error sayfası yakalayacak şekide ayarlanacak.");
        throw new Error("Error fırlatılacak ve en yakın error sayfası yakalayacak şekide ayarlanacak.");
    }
}