export default function Demo(
    {
        params
    } : {

        params: {slug: string[]}
    }
) {
    if(params.slug?.length === 2) {
        return (
            <h1>
                Viewing demo for feature {params.slug[0]} and concept {params.slug[1]}
            </h1>
        );
    } else if(params.slug?.length === 1) { 
        return <h1>Viewing demo for feature {params.slug[0]}</h1>;
    }

    return <h1>Demo home page</h1>;
}