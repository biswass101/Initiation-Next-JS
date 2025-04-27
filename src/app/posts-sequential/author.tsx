type Author = {
    id: number
    name: string
};

export async function Author({userId}: {userId: number}) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: Author = await response.json();

    return (
        <div className="text-sm text-black">
            Written by:(" ")
            <span className="font-semibold text-black hover:text-red-900 transition-colors duration-200">
                {user.name}
            </span>
        </div>
    )
}