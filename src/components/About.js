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
        . Data is collected once per day. Make sure to check directly with
        grocery stores about their hours and if they have special hours
        dedicated to seniors shopping or others at risk.
      </p>

      <p>
        Don't see your community on here?&nbsp; To make requests,{" "}
        <a href="mailto:when2shop19@gmail.com">send a note</a> with your
        neighbourhood name and either a postal code or the specific stores you'd
        like to see listed there.
      </p>
    </div>
  );
}
