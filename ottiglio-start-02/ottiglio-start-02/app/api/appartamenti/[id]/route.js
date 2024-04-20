import connectDB from "@/config/database";
import Appartamento from "@/models/Appartamento";


// GET /api/appartamenti/:id
export const GET = async (request, {params}) => {
    try {
        await connectDB();

        const appartamento = await Appartamento.findById(params.id);

        if (!appartamento) return new Response('Appartamento not found', {status: 404});

        return new Response(JSON.stringify(appartamento), {status: 200});
    } catch (error) {
        return new Response('Something went wrong...', {status: 500});
    }
};