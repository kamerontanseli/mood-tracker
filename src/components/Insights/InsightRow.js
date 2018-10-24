import React from "react";
import Tag from "../general/Tag";
import Accordion from "../general/Accordion";
import AccordionHead from "../general/Accordion/AccordionHead";
import AccordionHeadItem from "../general/Accordion/AccordionHeadItem";
import AccordionToggle from "../general/Accordion/AccordionToggle";
import AccordionBody from "../general/Accordion/AccordionBody";
import { getMonth } from "../../utils/date";
import { pad, getMood } from "../../utils/string";

const InsightRow = ({ insight }) => {
  const date = new Date(insight.date);

  return (
    <Accordion>
      {({ onToggle, toggled }) => (
        <React.Fragment>
          <AccordionHead>
            <AccordionHeadItem>
              {getMonth(date.getMonth())} {date.getDate()}
            </AccordionHeadItem>
            <AccordionHeadItem>
              {pad(date.getHours())}:{pad(date.getMinutes())}
            </AccordionHeadItem>
            <AccordionHeadItem>{getMood(insight.mood)}</AccordionHeadItem>
            <AccordionHeadItem>
              <AccordionToggle onClick={onToggle} toggled={toggled} />
            </AccordionHeadItem>
          </AccordionHead>
          {toggled && (
            <AccordionBody>
              <div>
                {insight.feelings.map((feeling, index) => (
                  <Tag key={index}>{feeling}</Tag>
                ))}
              </div>
              <p>{insight.comment}</p>
            </AccordionBody>
          )}
        </React.Fragment>
      )}
    </Accordion>
  );
};

export default InsightRow;
