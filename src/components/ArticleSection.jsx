import React, { useState } from "react";
import tomato from "../assets/grilled-tomato.png";
import peachSalsa from "../assets/peach-salsa.png";
import meal from "../assets/meal-prep.png";
import corn from "../assets/grilled-corn.png";
import crunchWrapps from "../assets/crunchWrapps.png";
import soup from "../assets/soup.png";
import ArticleCard from "./ArticleCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const articlesSet1 = [
  { id: "1", image: tomato, title: "Grilled Tomatoes at Home", description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: "2", image: peachSalsa, title: "Snacks for Travel", description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: "3", image: meal, title: "Post-Workout Recipes", description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
];

const articlesSet2 = [
  { id: "4", image: corn, title: "How To Grill Corn", description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: "5", image: crunchWrapps, title: "Crunchwrap Supreme", description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: "6", image: soup, title: "Broccoli Cheese Soup", description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
];

const ArticleSection = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const renderArticles = (articles) =>
    articles.map((article) => (
      <ArticleCard
        key={article.id}
        image={article.image}
        title={article.title}
        description={article.description}
      />
    ));

  return (
    <section className="w-10/12 mx-auto">
      <h2 className="font-source text-4xl lg:text-5xl font-semibold tracking-wide">Latest Articles</h2>
      <div
        className={`${
          currentSet === 0 ? "flex" : "hidden"
        } flex-col lg:flex-row flex-wrap justify-between mt-20 gap-16 lg:gap-0`}
      >
        {renderArticles(articlesSet1)}
      </div>
      <div
        className={`${
          currentSet === 1 ? "flex" : "hidden"
        } flex-col lg:flex-row flex-wrap justify-between mt-20`}
      >
        {renderArticles(articlesSet2)}
      </div>
      <div className="flex items-center gap-2 my-20 justify-center">
        <FaChevronLeft
          className={`border ${
            currentSet === 0
              ? "text-gray-400 border-gray-400"
              : "text-blueish border-blueish"
          } h-6 w-6 rounded-md cursor-pointer`}
          onClick={() => setCurrentSet(0)}
        />
        <span>{currentSet === 0 ? "1/2" : "2/2"}</span>
        <FaChevronRight
          className={`border ${
            currentSet === 1
              ? "text-gray-400 border-gray-400"
              : "text-blueish border-blueish"
          } h-6 w-6 rounded-md cursor-pointer`}
          onClick={() => setCurrentSet(1)}
        />
      </div>
    </section>
  );
};

export default ArticleSection;
