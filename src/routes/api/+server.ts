import client from '$lib/server/utils/prisma-client';

export async function GET() {
	const props = await client.productType.findMany();
	return new Response(JSON.stringify(props), { status: 200 });
}
