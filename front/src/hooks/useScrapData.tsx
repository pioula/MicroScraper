function useScrapData() {
    function scrapData() {
        return fetch('http://34.118.125.207:80/data', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json());
    }

    return scrapData;
}

export default useScrapData;