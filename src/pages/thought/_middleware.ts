import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import axios from "axios";
import Configuration from 'src/app/Game/Configuration';
import ApiUtils from 'src/app/Game/Utils/ApiUtils';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const config = new Configuration(),
        token = req.cookies.token;

    console.log(token);

    console.log(ApiUtils.url(config.network.routes.auth));

    if (typeof token === "string") {
        try {
            const res = await axios
                .get(ApiUtils.url(config.network.routes.auth), { 
                    headers: { Authorization: `Bearer ${ token }` }
                });

            console.log(res);
        } catch (e) {
            console.log(e);
            return NextResponse.redirect("/");
        }
    } else {
        return NextResponse.redirect("/");
    }
}