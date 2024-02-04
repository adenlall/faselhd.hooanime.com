"use client"
import { useEffect } from 'react';


export default function EpisodeCardTracker({ data }) {

  useEffect(() => { execute() }, []);

  const execute = () => {
    let xdata;
    try {
        xdata = JSON.parse(localStorage.lastwatched);
    } catch (error) {
        xdata = [];
    }
    xdata = xdata.filter(function(item) {
        return item.name !== data.name;
    });
    xdata.push(data);
    localStorage.lastwatched = JSON.stringify(xdata);
  }

  return (
    <>
        <p>Ok</p>
    </>
  );
  

}