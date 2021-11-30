spans = document.querySelectorAll('span.figure-number');

// let addc = (name) => e.addClass() 

spans.forEach(e =>
{e.parentElement.classList.add("caption");
console.log(e.parentElement);})
