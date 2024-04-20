import connectDB from "@/config/database";
import Appartamento from "@/models/Appartamento";

// GET /api/appartamenti
export const GET= async (request) => {
    try {
        await connectDB();

        const appartamenti = await Appartamento.find({});

        return new Response(JSON.stringify(appartamenti), {status: 200,});

    } catch (error) {
        return new Response('Something went wrong...', {status: 500});
    }
};