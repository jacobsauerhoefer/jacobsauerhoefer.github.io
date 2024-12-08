posts.forEach((post) => {
  function createElement(tag, className, innerHTML, attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  }
  
  const postWrapper = createElement('a', 'post', '', { href: post.link });
  const thumbnail = createElement('img', 'post-thumbnail', '', { src: post.thumbnail, alt: post.description });
  const postText = createElement('div', 'post-text');
  const title = createElement('div', 'post-title', post.title);
  const date = createElement('div', 'post-date', post.date);
  const description = createElement('div', 'post-description', post.description);
  
  postText.appendChild(title);
  postText.appendChild(date);
  postText.appendChild(description);
  postWrapper.appendChild(thumbnail);
  postWrapper.appendChild(postText);
  document.getElementById('posts').appendChild(postWrapper);
})
