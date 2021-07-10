const component = () => {
  const result = document.createElement('div');
  result.innerHTML = 'Cachinging';

  return result;
};

document.body.appendChild(component());
