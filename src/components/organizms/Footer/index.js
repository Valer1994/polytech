import React from 'react';

import { Paper } from 'components';

import './style.scss';

const Footer = () => (
  <Paper className="Footer flexible aCneter jBetween wrap">
    <Paper flexName="flexible vertical aCenter">
      <span>Հայաստան, ք.Երևան, Տերյան 105, 0009</span>
      <span>+374 10 56 79 68</span>
      <span>info@polytechnic.am</span>
      <span>Հեռախոսագիրք</span>
    </Paper>
    <Paper flexName="flexible vertical aCenter">
      <span>
        <a
          href="https://polytech.am/կենտրոններ/կարիերիայի-կենտրոն/"
          target="_blank"
          rel="noopener noreferrer"
        >Կարիերա </a>
          /
        <a
          href="https://polytech.am/մամուլ/"
          target="_blank"
          rel="noopener noreferrer"
        > Մամուլ</a>
      </span>
      <span>
        <a
          href="https://polytech.am/կապ/"
          target="_blank"
          rel="noopener noreferrer"
        >Կապ </a>
          /
        <a
          href="https://polytech.am/քարտեզ-և-ուղղություն/"
          target="_blank"
          rel="noopener noreferrer"
        > Քարտեզ և ուղղություն</a>
      </span>
      <span>
        <a
          href="https://polytech.am/օգտակար-հղումներ/"
          target="_blank"
          rel="noopener noreferrer"
        > Օգտակար հղումներ</a>
      </span>
      <span>
        <a
          href="https://polytech.am/polytechteame-hy/"
          target="_blank"
          rel="noopener noreferrer"
        > PolytechTeam</a>
      </span>
    </Paper>
  </Paper>
);


export default Footer;
