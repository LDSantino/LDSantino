import connectDB from "@/config/database";

import Appartamento from "@/models/Appartamento";

// GET /api/appartamenti/search
export const GET = async (request) => {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);

        const location = searchParams.get('location').trim();
        console.log(location);

        if (!location) {
            // Gestisci il caso in cui la location non è specificata
            return new Response(JSON.stringify({error: "Location parameter is required"}), {status: 400});
        }

        // regular expression
        const locationPattern = new RegExp(location, 'i');

        // Match location Pattern to db fields
        let query = {
            $or: [
                {name: locationPattern},
                {'location.street': locationPattern},
                {'location.zipcode': locationPattern},
            ],
        };


        // use model for find query
        const appartamenti = await Appartamento.find(query);

        //console.log(appartamenti)

        return new Response(JSON.stringify(appartamenti), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response('Something went wrong...', {status: 500});
    }
}