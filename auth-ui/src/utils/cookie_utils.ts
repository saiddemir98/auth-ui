import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";


export function getCookieString(cookieStore: ReadonlyRequestCookies) {
    const cookieString = cookieStore.getAll().map(c => `${c.name}=${c.value}`).join("; ");
    return cookieString;
}