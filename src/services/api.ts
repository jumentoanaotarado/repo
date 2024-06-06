import axios from "axios";
import fetch from 'node-fetch';


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export default async function handler(request, response) {
    const res = await fetch('https://...', {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    const data = await res.json();
    return response.status(200).json({ data });

    
  }