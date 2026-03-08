import { NextResponse } from "next/server";

export async function GET() {
    const portfolioData = {
        totalValue: 124562.80,
        assets: [
            { ticker: "VTI", name: "Vanguard Total Stock Market", value: 65000, shares: 250, changePercent: 1.2, type: "US Equity" },
            { ticker: "VEA", name: "Vanguard Developed Markets", value: 25000, shares: 512, changePercent: 0.8, type: "Intl Equity" },
            { ticker: "VWO", name: "Vanguard Emerging Markets", value: 10000, shares: 215, changePercent: -0.4, type: "Emerging Mkts" },
            { ticker: "BND", name: "Vanguard Total Bond Market", value: 15000, shares: 200, changePercent: 0.1, type: "Fixed Income" },
            { ticker: "VNQ", name: "Vanguard Real Estate", value: 9562.80, shares: 105, changePercent: -0.2, type: "Real Estate" },
        ]
    };

    return NextResponse.json(portfolioData);
}
