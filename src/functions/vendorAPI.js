const vendorAPI = async (mac) => {
    const info = await fetch(`https://v3789.hosted-by-vdsina.com:3001/searchVendor/${mac}`);
    const infoMac = await info.json();
    return infoMac;
}

export default vendorAPI;