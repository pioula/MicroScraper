function useScrapData() {
    function scrapData() {
        return fetch('http://scraper-api-service.scraper/data', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .catch((err) => { console.log("error, ", err); return { foo: 'bar' } });
    }

    return scrapData;
}

export default useScrapData;