import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
    try {
        const { name, wateringPeriod, birthDate, lastWatered, imageBase64 } = await request.json();

        const newPlant = await prisma.plant.create({
            data: {
                name,
                wateringPeriod,
                birthDate: birthDate ? new Date(birthDate) : undefined,
                lastWatered: lastWatered ? new Date(lastWatered) : undefined,
                imageBase64
            }
        });

        return new Response(JSON.stringify(newPlant), { 
            status: 201, 
            headers: { 'Content-Type': 'application/json' } 
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to add plant' }), { status: 500 });
    }
}
