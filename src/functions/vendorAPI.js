const vendorAPI = async (mac) => {
    const info = await fetch(`https://v3008618.hosted-by-vdsina.ru:3001/searchVendor/${mac}`);
    const infoMac = await info.json();
    return infoMac;
}

export default vendorAPI;