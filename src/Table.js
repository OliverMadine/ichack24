import React from 'react';

const cities = [
    {"id": "AD", "latitude": 42.546245, "longitude": 1.601554, "title": "Andorra", "bias": 0.30522590418671547, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
    {"id": "AE", "latitude": 23.424076, "longitude": 53.847818, "title": "United Arab Emirates", "bias": 0.2288049300229651, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
    {"id": "AF", "latitude": 33.93911, "longitude": 67.709953, "title": "Afghanistan", "bias": 0.8756082974606274, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
    {"id": "AG", "latitude": 17.060816, "longitude": -61.796428, "title": "Antigua and Barbuda", "bias": 0.14039167280957177, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
    {"id": "AI", "latitude": 18.220554, "longitude": -63.068615, "title": "Anguilla", "bias": 0.8488021639243379, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
    {"id": "AL", "latitude": 41.153332, "longitude": 20.168331, "title": "Albania", "bias": 0.29440502452312733, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
    {"id": "AM", "latitude": 40.069099, "longitude": 45.038189, "title": "Armenia", "bias": 0.5987393481203913, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
];

function colorGradient(v) {
    // Ensure the input is within the 0 to 1 range
    v = Math.max(0, Math.min(v, 1));
  
    let red = 0, green = 0;
  
    if (v <= 0.5) {
      // From green to orange: Increase red, decrease green
      red = Math.round(2 * v * 255); // Red goes from 0 to 255 as v goes from 0 to 0.5
      green = 255; // Green is constant at 255
    } else {
      // From orange to red: Keep red at 255, decrease green
      red = 255; // Red is constant at 255
      green = Math.round(255 * (2 - 2 * v)); // Green goes from 255 to 0 as v goes from 0.5 to 1
    }
  
    // Convert the color components to hex strings, ensuring they are 2 characters long
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
  
    // Return the hex color code, with blue component as 00
    return `#${redHex}${greenHex}00`;
  }


const AlternativeSources = () => {
    return (
        <div style={{ padding: "30px", height: "100vh", backgroundColor: "#202129", textAlign: 'left' }}>
            <h2>ALTERNATIVE SOURCES</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {cities.map(city => (
                    <li key={city.id} style={{ display: "flex", width: "400px", marginBottom: '10px' }}>
                        <span>🔗</span>
                        <span style={{width: "30px"}}/>
                        <a href={city.url} target="_blank" rel="noopener noreferrer" style={{ width: "300px", color: "#bdefff", textDecoration: 'none' }}>{city.title}</a>
                        <span style={{marginLeft: "auto", color: `${colorGradient(city.bias)}`}}> {Math.round(city.bias * 100)}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlternativeSources;
