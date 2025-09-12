function macConvert(mac) {
    const cleanMac = mac.replace(/[:\-.]/g, '');
  
    return [
      cleanMac.substring(0, 4),
      cleanMac.substring(4, 8),
      cleanMac.substring(8, 12)
    ].join('.').toLocaleLowerCase();
  }

export default macConvert;