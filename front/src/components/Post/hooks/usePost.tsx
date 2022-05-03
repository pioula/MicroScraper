function usePost() { 
    function convertUps(ups: number): string {
        if (ups < 1000)
            return `${ups}`;
        else if (ups < 1_00_000) 
            return `${(ups / 1000).toFixed(1)}k`;
        else if (ups  < 1_000_000)
            return `${(ups / 1000).toFixed()}k`;
        else
            return `${(ups / 1_000_000).toFixed()}m`
    }

    return { convertUps: convertUps };
}

export default usePost;