const vendorAPI = async (mac) => {
    const info = await fetch(`https://andruha-host.ru:3001/searchVendor/${mac}`, {
        cache: 'no-store',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    
    const infoMac = await info.json();
    return infoMac;
}

export default vendorAPI;