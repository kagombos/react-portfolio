"use client";

import GithubCard from '@/components/GithubCard/GithubCard';
import Header from '@/components/Header/Header'
import Overlay from '@/components/Overlay/Overlay';
import { useEffect, useRef, useState } from 'react'

let selectedCard: { item: any, position: DOMRect} | undefined = undefined;
let cards: any[] = [];
let cardRefs: any;

let overlayState = {
  item: undefined,
  position: undefined,
  expanded: false,
  closeCard: closeCard
}

function closeCard() {
  console.log("close")
  overlayState.item = undefined;
  overlayState.expanded = false;
}

function openCard(this: any, item: any, index: number) {
  overlayState.item = item;
  overlayState.position = cardRefs[index].getBoundingClientRect();
  overlayState.expanded = true;
  console.log(selectedCard)
}

export default function Home() {
  const [githubData, setGithubData] = useState([]);

  cardRefs = useRef([]);

  // get repos
  useEffect(() => {
    fetch("https://api.github.com/users/kagombos/repos")
      .then(res => res.json())
      .then(json => setGithubData(json))
      .catch(error => console.error(error));
  })

  cards = githubData?.map((item: any, index: number) => {
    return (
      <div ref={ el => cardRefs[index] = el } onClick={() => openCard(item, index)}>
        <GithubCard item={ item } expanded={false}></GithubCard>
      </div>  
    )
  });

  return (
    <main className="flex flex-col items-center w-full h-full">
      
      <Header></Header>
      <div className='flex gap-2 w-full flex-wrap justify-center pt-4 bg-red-500/10'>
        <Overlay {...overlayState} ></Overlay>
        {
          cards
        }
      </div>
    </main>
  )
}
