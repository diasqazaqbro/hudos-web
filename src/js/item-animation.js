document.addEventListener('DOMContentLoaded', function() {
  function onEntry(entry) {
    entry.forEach((change) => {
      console.log(change.isIntersecting);
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
        alert('trigger');
      }
    });
  }

  let options = {
    threshold: [0.75],
  };

  let observer = new IntersectionObserver(onEntry, options);

  let elements = document.querySelectorAll('.element-animation');

  for (let elm of elements) {
    observer.observe(elm);
  }
});
