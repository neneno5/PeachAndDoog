const typeTarget = document.querySelectorAll('.typeing');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > .5 && entry.target.classList.contains('active') == false) {
            let typeContent = entry.target.textContent;
            let typeSprit = typeContent.split('');
            let typeSpeed = entry.target.getAttribute('data-speed');
            entry.target.textContent = '';
            entry.target.classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSprit[typeLength] == undefined) {
                    clearInterval(typeInterval);
                    return false;
                }
                entry.target.textContent += typeSprit[typeLength];
                typeLength++;
            }, typeSpeed);

        }
    });
}

let observer = new IntersectionObserver(callback, options);

typeTarget.forEach(e => {
    observer.observe(e);
});