import { Schema, model, models } from 'mongoose';

const AppartamentoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    descrizione: {
        type: String,
    },
    location: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        }
    },
    beds: {
        type: Number,
    },
    baths: {
        type: Number,
    },
    square_feet: {
        type: Number,
        required: true,
    },
    amenities: [
        {
            type: String
        }
    ],
    price: {
        type: Number
    },
    images: [
        {
            type: String
        }
    ],
    is_featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const Appartamento = models.Appartamento || model('Appartamento', AppartamentoSchema, 'appartamenti');

export default Appartamento;