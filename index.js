import {select, json, geopath, geonaturalearth1 } from 'd3';
import {feature } from 'topojson';
const svg = select('svg');
const projection = geonaturalearth1();
const pathgenerator = geopath().projection(projection);

svg.append('path')
    .attr('class', 'sphere')
    .attr('d', pathgenerator({type: 'sphere'}));
    
json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
    .then(data=> {
          const(countries = feature(data, data.objects.countries);
          svg.selectAll('path').data(countries.features)
              .enter().append('path')
              .attr('class', 'country')
              .attr('d', pathgenerator);
             });
