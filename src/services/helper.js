export const mapper = images =>
  images.map(image => ({
    id: image.id,
    webformatURL: image.webformatURL,
    largeImageURL: image.largeImageURL,
    likes: image.likes,
    views: image.views,
    comments: image.comments,
    downloads: image.downloads,
  }));

export const fn = () => null;
