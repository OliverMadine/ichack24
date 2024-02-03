import  React, { Component } from  'react';
import  * as am5 from  "@amcharts/amcharts5";
import  * as am5map from  "@amcharts/amcharts5/map";
import  am5geodata_worldLow from  "@amcharts/amcharts5-geodata/worldLow";
import  am5themes_Animated from  "@amcharts/amcharts5/themes/Animated";


const cities = [
{"id": "AD", "latitude": 42.546245, "longitude": 1.601554, "title": "Andorra", "bias": 0.30522590418671547, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AE", "latitude": 23.424076, "longitude": 53.847818, "title": "United Arab Emirates" , "bias": 0.2288049300229651, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AF", "latitude": 33.93911, "longitude": 67.709953, "title": "Afghanistan" , "bias": 0.8756082974606274, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AG", "latitude": 17.060816, "longitude": -61.796428, "title": "Antigua and Barbuda" , "bias": 0.14039167280957177, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AI", "latitude": 18.220554, "longitude": -63.068615, "title": "Anguilla" , "bias": 0.8488021639243379, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AL", "latitude": 41.153332, "longitude": 20.168331, "title": "Albania" , "bias": 0.29440502452312733, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AM", "latitude": 40.069099, "longitude": 45.038189, "title": "Armenia" , "bias": 0.5987393481203913, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AN", "latitude": 12.226079, "longitude": -69.060087, "title": "Netherlands Antilles" , "bias": 0.1435546373585681, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AO", "latitude": -11.202692, "longitude": 17.873887, "title": "Angola" , "bias": 0.8859780536133791, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AQ", "latitude": -75.250973, "longitude": -0.071389, "title": "Antarctica" , "bias": 0.0012561355422764375, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AR", "latitude": -38.416097, "longitude": -63.616672, "title": "Argentina" , "bias": 0.005116952868963631, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AS", "latitude": -14.270972, "longitude": -170.132217, "title": "American Samoa" , "bias": 0.44710808730952223, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AT", "latitude": 47.516231, "longitude": 14.550072, "title": "Austria" , "bias": 0.4339826351108751, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AU", "latitude": -25.274398, "longitude": 133.775136, "title": "Australia" , "bias": 0.6230951087285219, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AW", "latitude": 12.52111, "longitude": -69.968338, "title": "Aruba" , "bias": 0.9388800936962816, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "AZ", "latitude": 40.143105, "longitude": 47.576927, "title": "Azerbaijan" , "bias": 0.29070506735881907, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BA", "latitude": 43.915886, "longitude": 17.679076, "title": "Bosnia and Herzegovina" , "bias": 0.6613459002013593, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BB", "latitude": 13.193887, "longitude": -59.543198, "title": "Barbados" , "bias": 0.991320428337313, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BD", "latitude": 23.684994, "longitude": 90.356331, "title": "Bangladesh" , "bias": 0.43122704196163986, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BE", "latitude": 50.503887, "longitude": 4.469936, "title": "Belgium" , "bias": 0.5441690971771522, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BF", "latitude": 12.238333, "longitude": -1.561593, "title": "Burkina Faso" , "bias": 0.8391354798332814, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BG", "latitude": 42.733883, "longitude": 25.48583, "title": "Bulgaria" , "bias": 0.5920773650074291, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BH", "latitude": 25.930414, "longitude": 50.637772, "title": "Bahrain" , "bias": 0.027603696110826026, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BI", "latitude": -3.373056, "longitude": 29.918886, "title": "Burundi" , "bias": 0.2895694260089636, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BJ", "latitude": 9.30769,  "longitude":2.315834, "title": "Benin" , "bias": 0.5873173526079231, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BM", "latitude": 32.321384, "longitude": -64.75737, "title": "Bermuda" , "bias": 0.1666054884784407, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BN", "latitude": 4.535277, "longitude": 114.727669, "title": "Brunei" , "bias": 0.9196561879390108, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BO", "latitude": -16.290154, "longitude": -63.588653, "title": "Bolivia" , "bias": 0.44822709354528467, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BR", "latitude": -14.235004, "longitude": -51.92528, "title": "Brazil" , "bias": 0.16348175346015592, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BS", "latitude": 25.03428, "longitude": -77.39628, "title": "Bahamas" , "bias": 0.6917941385711311, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BT", "latitude": 27.514162, "longitude": 90.433601, "title": "Bhutan" , "bias": 0.19593295619860152, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BV", "latitude": -54.423199, "longitude": 3.413194, "title": "Bouvet Island" , "bias": 0.9968418298271842, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BW", "latitude": -22.328474, "longitude": 24.684866, "title": "Botswana" , "bias": 0.9733506460680589, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BY", "latitude": 53.709807, "longitude": 27.953389, "title": "Belarus" , "bias": 0.5705060645574568, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "BZ", "latitude": 17.189877, "longitude": -88.49765, "title": "Belize" , "bias": 0.3656559973700917, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CA", "latitude": 56.130366, "longitude": -106.346771, "title": "Canada" , "bias": 0.8656268043015725, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CC", "latitude": -12.164165, "longitude": 96.870956, "title": "Cocos [Keeling] Islands" , "bias": 0.4274452228687666, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CD", "latitude": -4.038333, "longitude": 21.758664, "title": "Congo [DRC]" , "bias": 0.8582160055649996, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CF", "latitude": 6.611111, "longitude": 20.939444, "title": "Central African Republic" , "bias": 0.12758087519300254, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CG", "latitude": -0.228021, "longitude": 15.827659, "title": "Congo [Republic]" , "bias": 0.9288403767966589, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CH", "latitude": 46.818188, "longitude": 8.227512, "title": "Switzerland" , "bias": 0.5491924194610518, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CI", "latitude": 7.539989, "longitude": -5.54708, "title": "Côte d'Ivoire" , "bias": 0.5226967468296712, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CK", "latitude": -21.236736, "longitude": -159.777671, "title": "Cook Islands" , "bias": 0.3082472002355411, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CL", "latitude": -35.675147, "longitude": -71.542969, "title": "Chile" , "bias": 0.31484484426698467, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CM", "latitude": 7.369722, "longitude": 12.354722, "title": "Cameroon" , "bias": 0.6361545168208532, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CN", "latitude": 35.86166, "longitude": 104.195397, "title": "China" , "bias": 0.3353923747023606, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CO", "latitude": 4.570868, "longitude": -74.297333, "title": "Colombia" , "bias": 0.443104345270972, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CR", "latitude": 9.748917, "longitude": -83.753428, "title": "Costa Rica" , "bias": 0.2565819036834396, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CU", "latitude": 21.521757, "longitude": -77.781167, "title": "Cuba" , "bias": 0.7848641736364265, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CV", "latitude": 16.002082, "longitude": -24.013197, "title": "Cape Verde" , "bias": 0.5813297407537454, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CX", "latitude": -10.447525, "longitude": 105.690449, "title": "Christmas Island" , "bias": 0.40731272495640036, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CY", "latitude": 35.126413, "longitude": 33.429859, "title": "Cyprus" , "bias": 0.8207284077497785, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "CZ", "latitude": 49.817492, "longitude": 15.472962, "title": "Czech Republic" , "bias": 0.8291194287721726, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "DE", "latitude": 51.165691, "longitude": 10.451526, "title": "Germany" , "bias": 0.46350924970080165, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "DJ", "latitude": 11.825138, "longitude": 42.590275, "title": "Djibouti" , "bias": 0.8264443434499977, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "DK", "latitude": 56.26392, "longitude": 9.501785, "title": "Denmark" , "bias": 0.9218994019265344, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "DM", "latitude": 15.414999, "longitude": -61.370976, "title": "Dominica" , "bias": 0.19678289640212765, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "DO", "latitude": 18.735693, "longitude": -70.162651, "title": "Dominican Republic" , "bias": 0.7027592090539881, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "DZ", "latitude": 28.033886, "longitude": 1.659626, "title": "Algeria" , "bias": 0.4461501950606208, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "EC", "latitude": -1.831239, "longitude": -78.183406, "title": "Ecuador" , "bias": 0.42280915161677946, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "EE", "latitude": 58.595272, "longitude": 25.013607, "title": "Estonia" , "bias": 0.05027001577763812, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "EG", "latitude": 26.820553, "longitude": 30.802498, "title": "Egypt" , "bias": 0.6656014555114349, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "EH", "latitude": 24.215527, "longitude": -12.885834, "title": "Western Sahara" , "bias": 0.8839686886950106, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "ER", "latitude": 15.179384, "longitude": 39.782334, "title": "Eritrea" , "bias": 0.17629813991003107, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "ES", "latitude": 40.463667, "longitude": -3.74922, "title": "Spain" , "bias": 0.21512285466811687, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "FI", "latitude": 61.92411, "longitude": 25.748151, "title": "Finland" , "bias": 0.9015640619015104, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "FJ", "latitude": -16.578193, "longitude": 179.414413, "title": "Fiji" , "bias": 0.8814010387609008, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "FK", "latitude": -51.796253, "longitude": -59.523613, "title": "Falkland Islands [Islas Malvinas]" , "bias": 0.8221111643236724, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "FM", "latitude": 7.425554, "longitude": 150.550812, "title": "Micronesia" , "bias": 0.30634750223457186, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "FO", "latitude": 61.892635, "longitude": -6.911806, "title": "Faroe Islands" , "bias": 0.06113376488273736, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "FR", "latitude": 46.227638, "longitude": 2.213749, "title": "France" , "bias": 0.3151486034064489, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GA", "latitude": -0.803689, "longitude": 11.609444, "title": "Gabon" , "bias": 0.9275334218632839, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GB", "latitude": 55.378051, "longitude": -3.435973, "title": "United Kingdom" , "bias": 0.8418643941646885, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GD", "latitude": 12.262776, "longitude": -61.604171, "title": "Grenada" , "bias": 0.8092315200450573, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GE", "latitude": 42.315407, "longitude": 43.356892, "title": "Georgia" , "bias": 0.0007975994204908465, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GF", "latitude": 3.933889, "longitude": -53.125782, "title": "French Guiana" , "bias": 0.20570132977860323, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GG", "latitude": 49.465691, "longitude": -2.585278, "title": "Guernsey" , "bias": 0.4307197969447477, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GH", "latitude": 7.946527, "longitude": -1.023194, "title": "Ghana" , "bias": 0.5684564388829805, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GI", "latitude": 36.137741, "longitude": -5.345374, "title": "Gibraltar" , "bias": 0.6694899351411606, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GL", "latitude": 71.706936, "longitude": -42.604303, "title": "Greenland" , "bias": 0.8742303900940767, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GM", "latitude": 13.443182, "longitude": -15.310139, "title": "Gambia" , "bias": 0.971910451474828, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GN", "latitude": 9.945587, "longitude": -9.696645, "title": "Guinea" , "bias": 0.3966598396045362, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GP", "latitude": 16.995971, "longitude": -62.067641, "title": "Guadeloupe" , "bias": 0.474196373745171, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GQ", "latitude": 1.650801, "longitude": 10.267895, "title": "Equatorial Guinea" , "bias": 0.36772392828773404, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GR", "latitude": 39.074208, "longitude": 21.824312, "title": "Greece" , "bias": 0.6423862662439871, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GS", "latitude": -54.429579, "longitude": -36.587909, "title": "South Georgia and the South Sandwich Islands" , "bias": 0.06909916929772164, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GT", "latitude": 15.783471, "longitude": -90.230759, "title": "Guatemala" , "bias": 0.0911521636713083, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GU", "latitude": 13.444304, "longitude": 144.793731, "title": "Guam" , "bias": 0.7442103197008721, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GW", "latitude": 11.803749, "longitude": -15.180413, "title": "Guinea-Bissau" , "bias": 0.345757116737453, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GY", "latitude": 4.860416, "longitude": -58.93018, "title": "Guyana" , "bias": 0.22102612968534374, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "GZ", "latitude": 31.354676, "longitude": 34.308825, "title": "Gaza Strip" , "bias": 0.5721807102995567, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "HK", "latitude": 22.396428, "longitude": 114.109497, "title": "Hong Kong" , "bias": 0.09934615877576813, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "HM", "latitude": -53.08181, "longitude": 73.504158, "title": "Heard Island and McDonald Islands" , "bias": 0.6325715166948849, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "HN", "latitude": 15.199999, "longitude": -86.241905, "title": "Honduras" , "bias": 0.9915970448642524, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "HT", "latitude": 18.971187, "longitude": -72.285215, "title": "Haiti" , "bias": 0.39873335754731754, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "HU", "latitude": 47.162494, "longitude": 19.503304, "title": "Hungary" , "bias": 0.14000117805165968, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IE", "latitude": 53.41291, "longitude": -8.24389, "title": "Ireland" , "bias": 0.9599453978573664, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IL", "latitude": 31.046051, "longitude": 34.851612, "title": "Israel" , "bias": 0.017816429833746872, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IM", "latitude": 54.236107, "longitude": -4.548056, "title": "Isle of Man" , "bias": 0.4897360714470457, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IN", "latitude": 20.593684, "longitude": 78.96288, "title": "India" , "bias": 0.5824784568539385, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IO", "latitude": -6.343194, "longitude": 71.876519, "title": "British Indian Ocean Territory" , "bias": 0.21058176675714646, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IQ", "latitude": 33.223191, "longitude": 43.679291, "title": "Iraq" , "bias": 0.5961339485704299, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IR", "latitude": 32.427908, "longitude": 53.688046, "title": "Iran" , "bias": 0.32919096801384684, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IS", "latitude": 64.963051, "longitude": -19.020835, "title": "Iceland" , "bias": 0.3431999141053472, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "IT", "latitude": 41.87194, "longitude": 12.56738, "title": "Italy" , "bias": 0.30425364492752105, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "JE", "latitude": 49.214439, "longitude": -2.13125, "title": "Jersey" , "bias": 0.2984378765115523, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "JM", "latitude": 18.109581, "longitude": -77.297508, "title": "Jamaica" , "bias": 0.9860768864639538, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "JO", "latitude": 30.585164, "longitude": 36.238414, "title": "Jordan" , "bias": 0.23190179620064744, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"},
{"id": "JP", "latitude": 36.204824, "longitude": 138.252924, "title": "Japan" , "bias": 0.88003692221841, "url": "https://www.nytimes.com/1979/02/26/archives/still-a-hoax-to-flatearth-group.html"}
]

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


  
class  MapComponent extends  Component {
  componentDidMount() {
    let  root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let  chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "translateY",
      projection: new am5map.geoMercator()
    }));

    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    let  polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"]
    }));

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada)
    });

    let  pointSeries = chart.series.push(am5map.ClusteredPointSeries.new(root, {}));

    // Inside componentDidMount after initializing pointSeries

// Set clustered bullet
pointSeries.set("clusteredBullet", function(root) {
    let container = am5.Container.new(root, {
      cursorOverStyle: "pointer"
    });

  
    container.events.on("click", function(e) {
      pointSeries.zoomToCluster(e.target.dataItem);
    });
  
    return am5.Bullet.new(root, {
      sprite: container
    });
  });
  
  // Create regular bullets
  let i = 0;
  pointSeries.bullets.push(function() {
    console.log(cities[i] ?? "null");
    const bias = Math.round((cities[i] ?? {bias: 0}).bias * 1000) / 1000;
    let circle = am5.Circle.new(root, {
      radius: ((bias * 5) + 5),
      fill: am5.color(colorGradient(bias)),
      tooltipText: `{title}: ${bias}`
    });
    i++;
  
    return am5.Bullet.new(root, {
      sprite: circle
    });
  });
  
  
  cities.forEach(city => {
    pointSeries.data.push({
      geometry: { type: "Point", coordinates: [city.longitude, city.latitude] },
      title: city.title
    });
  });

  // Inside componentDidMount after initializing pointSeries

// Set clustered bullet
pointSeries.set("clusteredBullet", function(root) {
    let container = am5.Container.new(root, {
      cursorOverStyle: "pointer"
    });
  
  
    container.events.on("click", function(e) {
      pointSeries.zoomToCluster(e.target.dataItem);
    });
  
    return am5.Bullet.new(root, {
      sprite: container
    });
  });
  
  // Create regular bullets for individual cities
  cities.forEach(city => {
    let circle = am5.Circle.new(root, {
        radius: (city.bias * 10) + 1,
        fill: am5.color(0xff8c00),
        tooltipText: city.title
      });
    const b = am5.Bullet.new(root, {
        sprite: circle
      });
    pointSeries.data.push(b);
  })
  
  function adjustCircleSizes() {
    console.log("ojm", chart.zoomLevel);
    pointSeries.bullets.each(function(bullet) {
      let circle = bullet.get("sprite");
      let dataContext = circle.dataItem.dataContext;
      circle.set("radius", (dataContext.bias * 10 + 1) * chart.zoomLevel);
    });
  }

  // Listen for zoom events to adjust circle sizes
  chart.events.on("zoomlevelchanged", adjustCircleSizes);


    this.chart = chart;
    this.root = root;
    
  }

  componentWillUnmount() {
    if  (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return  <div  id="chartdiv" style={{ width: "100%", height: "100%" }}></div>;
  }
}

export  default  MapComponent;
