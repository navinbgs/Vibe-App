import { NextResponse } from "next/server";

export async function GET() {
    const performanceData = {
        ytdReturn: 12.4,
        timeSeries: [
            { date: "Jan", portfolio: 100000, sp500: 100000 },
            { date: "Feb", portfolio: 102500, sp500: 101200 },
            { date: "Mar", portfolio: 105100, sp500: 103500 },
            { date: "Apr", portfolio: 104200, sp500: 102100 },
            { date: "May", portfolio: 106800, sp500: 104800 },
            { date: "Jun", portfolio: 108900, sp500: 106200 },
            { date: "Jul", portfolio: 111500, sp500: 109000 },
            { date: "Aug", portfolio: 110200, sp500: 108500 },
            { date: "Sep", portfolio: 112400, sp500: 110100 },
            { date: "Oct", portfolio: 115600, sp500: 112500 },
            { date: "Nov", portfolio: 119800, sp500: 115800 },
            { date: "Dec", portfolio: 124562, sp500: 119400 },
        ]
    };

    return NextResponse.json(performanceData);
}
