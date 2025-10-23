var wms_layers = [];

var format_GCCSA_2016_AUST_0 = new ol.format.GeoJSON();
var features_GCCSA_2016_AUST_0 = format_GCCSA_2016_AUST_0.readFeatures(json_GCCSA_2016_AUST_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCCSA_2016_AUST_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCCSA_2016_AUST_0.addFeatures(features_GCCSA_2016_AUST_0);
var lyr_GCCSA_2016_AUST_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCCSA_2016_AUST_0, 
                style: style_GCCSA_2016_AUST_0,
                popuplayertitle: 'GCCSA_2016_AUST',
                interactive: false,
                title: '<img src="styles/legend/GCCSA_2016_AUST_0.png" /> GCCSA_2016_AUST'
            });
var format_COVID_Cases_2021_VIC_NSW_1 = new ol.format.GeoJSON();
var features_COVID_Cases_2021_VIC_NSW_1 = format_COVID_Cases_2021_VIC_NSW_1.readFeatures(json_COVID_Cases_2021_VIC_NSW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COVID_Cases_2021_VIC_NSW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COVID_Cases_2021_VIC_NSW_1.addFeatures(features_COVID_Cases_2021_VIC_NSW_1);
var lyr_COVID_Cases_2021_VIC_NSW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COVID_Cases_2021_VIC_NSW_1, 
                style: style_COVID_Cases_2021_VIC_NSW_1,
                popuplayertitle: 'COVID_Cases_2021_VIC_NSW',
                interactive: true,
    title: 'COVID_Cases_2021_VIC_NSW<br />\
    <img src="styles/legend/COVID_Cases_2021_VIC_NSW_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/COVID_Cases_2021_VIC_NSW_1_1.png" /> 0 - 3<br />\
    <img src="styles/legend/COVID_Cases_2021_VIC_NSW_1_2.png" /> 3 - 24<br />\
    <img src="styles/legend/COVID_Cases_2021_VIC_NSW_1_3.png" /> 24 - 114.2<br />\
    <img src="styles/legend/COVID_Cases_2021_VIC_NSW_1_4.png" /> 114.2 - 5577<br />' });

lyr_GCCSA_2016_AUST_0.setVisible(true);lyr_COVID_Cases_2021_VIC_NSW_1.setVisible(true);
var layersList = [lyr_GCCSA_2016_AUST_0,lyr_COVID_Cases_2021_VIC_NSW_1];
lyr_GCCSA_2016_AUST_0.set('fieldAliases', {'GCC_CODE16': 'GCC_CODE16', 'GCC_NAME16': 'GCC_NAME16', 'STE_CODE16': 'STE_CODE16', 'STE_NAME16': 'STE_NAME16', 'AREASQKM16': 'AREASQKM16', });
lyr_COVID_Cases_2021_VIC_NSW_1.set('fieldAliases', {'POA_CODE': 'POA_CODE', 'POA_CODE16': 'POA_CODE16', 'POA_NAME': 'POA_NAME', 'AREA_SQKM': 'AREA_SQKM', 'COVID_21': 'COVID_21', 'POA_ID': 'POA_ID', 'Tot_popu': 'Tot_popu', 'Edu_occup': 'Edu_occup', 'Economic': 'Economic', 'CCC': 'CCC', });
lyr_GCCSA_2016_AUST_0.set('fieldImages', {'GCC_CODE16': '', 'GCC_NAME16': '', 'STE_CODE16': '', 'STE_NAME16': '', 'AREASQKM16': '', });
lyr_COVID_Cases_2021_VIC_NSW_1.set('fieldImages', {'POA_CODE': '', 'POA_CODE16': '', 'POA_NAME': '', 'AREA_SQKM': '', 'COVID_21': '', 'POA_ID': '', 'Tot_popu': '', 'Edu_occup': '', 'Economic': '', 'CCC': '', });
lyr_GCCSA_2016_AUST_0.set('fieldLabels', {'GCC_CODE16': 'no label', 'GCC_NAME16': 'no label', 'STE_CODE16': 'no label', 'STE_NAME16': 'no label', 'AREASQKM16': 'no label', });
lyr_COVID_Cases_2021_VIC_NSW_1.set('fieldLabels', {'POA_CODE': 'no label', 'POA_CODE16': 'header label - always visible', 'POA_NAME': 'no label', 'AREA_SQKM': 'inline label - visible with data', 'COVID_21': 'inline label - visible with data', 'POA_ID': 'no label', 'Tot_popu': 'inline label - visible with data', 'Edu_occup': 'inline label - visible with data', 'Economic': 'inline label - visible with data', 'CCC': 'no label', });
lyr_COVID_Cases_2021_VIC_NSW_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});