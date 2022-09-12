/** @type {import('./$types').Actions} */
export const actions = {
    default:async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');

        console.log(email);

        return { success: true };
    }
};