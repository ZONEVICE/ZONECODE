// You can use Vue stuff like "ref" here.
// Documentation says code login inside .js files are called "composables".

export async function useFetchDumbJson(url) {

    const req = await fetch(url)
    const res = await req.json()

    return res

}
