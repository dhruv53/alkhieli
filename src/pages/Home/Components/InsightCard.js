import React from "react";
import "./css/Style.css";
import Card from "./Card";
function InsightCard() {
  return (
    <div className="cardWrapper">
      <Card num={1}/>
      <Card num={2}/>
      <Card num={3}/>
      <Card num={4}/>
      <Card num={5}/>
      <Card num={6}/>
      <Card num={7}/>
      <Card num={8}/>
    </div>
  );
}

export default InsightCard;
