import HelpersMethod from '../lib/HelpersMethod'

const Services = {};

Services.serviceFetch = (url) => {
   return fetch(url).then(response => response.json())
    .then((d) => {
       return d;
    });
};

export default Services;
