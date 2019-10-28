import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { sectionsData } from "./sections";

const Article = ({ inView, setInView }) => {
  const rootRef = useRef();

  //set an object of objects with id, created ref and ratio 0 for every section
  const sectionsRefs = sectionsData.reduce((acc, s) => {
    acc[s.id] = { ref: React.createRef(), id: s.id, ratio: 0 };
    return acc;
  }, {});

  useEffect(() => {
    const options = {
      root: rootRef.current,
      threshold: new Array(11).fill(0).map((_, i) => i / 10)
    };
    const callback = entries => {
      entries.forEach(entry => {
        sectionsRefs[entry.target.id].ratio = entry.intersectionRatio;
      });
      //get section with the highest ratio
      const active = Object.values(sectionsRefs).reduce(
        (acc, value) => (value.ratio > acc.ratio ? value : acc),
        inView
      );
      //if it is not in state - set it as inView
      if (active.id !== inView.id) setInView(active);
    };
    const observer = new IntersectionObserver(callback, options);
    Object.values(sectionsRefs).forEach(o => observer.observe(o.ref.current));
  }, [inView, setInView, sectionsRefs]);

  return (
    <Body ref={rootRef}>
      {sectionsData.map(s => (
        <div key={s.id} id={s.id} ref={sectionsRefs[s.id].ref}>
          <Headline>{s.headline}</Headline>
          <p>{s.text}</p>
        </div>
      ))}
    </Body>
  );
};

const Body = styled.div`
  overflow-y: scroll;
  height: 50vh;
  padding: 1rem;
`;
const Headline = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  text-align: left;
`;

export default Article;
