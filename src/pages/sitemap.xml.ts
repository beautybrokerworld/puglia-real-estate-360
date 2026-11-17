import type {APIRoute} from 'astro';
import {properties,propertyRoute} from '../data/properties';
export const GET:APIRoute=({site})=>{
  const pages=['/','/soluzioni/','/en/','/en/properties/','/privacy/','/en/privacy/',...properties.flatMap((property)=>[propertyRoute('it',property.id),propertyRoute('en',property.id)])];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(path=>`<url><loc>${new URL(path,site)}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
};
