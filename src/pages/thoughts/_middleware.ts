import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import Configuration from 'src/app/Game/Configuration';
import ApiUtils from 'src/app/Game/Utils/ApiUtils';


export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const config = new Configuration(),
        token = req.cookies.token;

    if (typeof token === "string") {
        try {
            await fetch(ApiUtils.url(config.network.routes.auth), {  headers: { Authorization: `Bearer ${ token }` } });
        } catch (e) {
            console.log(e);
            return NextResponse.redirect("/");
        }
    } else {
        return NextResponse.redirect("/");
    }
}