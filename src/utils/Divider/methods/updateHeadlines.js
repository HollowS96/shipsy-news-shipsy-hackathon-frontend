function updateHeadlines(news) {
  const headlines = news.slice(0, 3);
  return headlines.map(article => {
    let { description } = article;
    if (description.length > 100) {
      description = description
        .substring(0, 100)
        .trim()
        .split(" ");
      description.pop();
      description = description.join(" ");
    }
    description += "...";
    article.description = description;
    return article;
  });
}

export default updateHeadlines;
