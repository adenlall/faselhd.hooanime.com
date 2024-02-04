"use client"
import { useEffect } from 'react';


export default function ImageClient({ data }) {

  useEffect(() => { localStorage.setItem(data.name, data.image) }, []);

}