import React from "react";

export function About() {
  return (
    <div className="about">
      <p>
        The data viz on this site was made using Google's &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://support.google.com/business/answer/6263531?hl=en"
        >
          popular times data
        </a>
        &nbsp;via the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/m-wrzr/populartimes"
        >
          populartimes Python library
        </a>
        . Data for this website is scraped once per week, however Google's data
        represents average popularity over the last few months. Make sure to
        check directly with grocery stores about their hours and if they have
        special hours dedicated to seniors shopping or others at risk.
      </p>

      <p>
        Please send any feedback or questions by&nbsp;
        <a href="mailto:when2shop19@gmail.com">email</a>.
      </p>

      <p>
        Want to contribute?&nbsp;
        <a href="https://github.com/carysmills/whentoshop">
          Pull requests are welcome.
        </a>
      </p>
    </div>
  );
}
