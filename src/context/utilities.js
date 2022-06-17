export function MergeNews(currentNews, payload) {
  const current_news = currentNews;

  const included = current_news[payload.category].some(
    (obj) => obj.title === payload.title
  );
  if (!included) {
    current_news[payload.category]?.push({
      ...payload,
    });
  }
  return current_news;
}
