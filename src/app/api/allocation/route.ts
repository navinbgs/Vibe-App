import { NextResponse } from "next/server";

export async function GET() {
    const allocationData = {
        target: [
            { name: "US Equity", percent: 50 },
            { name: "Intl Equity", percent: 20 },
            { name: "Emerging Mkts", percent: 10 },
            { name: "Fixed Income", percent: 15 },
            { name: "Real Estate", percent: 5 },
        ],
        actual: [
            { name: "US Equity", percent: 52.2 },
            { name: "Intl Equity", percent: 20.1 },
            { name: "Emerging Mkts", percent: 8.0 },
            { name: "Fixed Income", percent: 12.0 },
            { name: "Real Estate", percent: 7.7 },
        ]
    };

    return NextResponse.json(allocationData);
}
