import {createClient} from 'next-sanity'

export const projectId = 'mzhyqypn';
export const dataset = "production";
export const apiVersion = "2023-02-11";
export const useCdn = false; 

export const client = createClient({projectId, dataset, apiVersion, useCdn: false})
