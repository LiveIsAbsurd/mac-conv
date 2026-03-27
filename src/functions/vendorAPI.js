const vendorAPI = async (mac) => {
    const info = await fetch(`https://andruha-host.ru:3001/searchVendor/${mac}`);
    const infoMac = await info.json();
    return infoMac;
}

export default vendorAPI;