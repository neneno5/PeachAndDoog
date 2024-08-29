const typeTarget = document.querySelectorAll('.typeing');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > .5 && !entry.target.classList.contains('active')) {
            let typeContent = entry.target.innerHTML;
            let typeSprit = typeContent.split(/(<br>|<\/?[^>]+(>|$))/g).filter(Boolean); 
            let typeSpeed = entry.target.getAttribute('data-speed');
            entry.target.innerHTML = '';
            entry.target.classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSprit[typeLength] === undefined) {
                    clearInterval(typeInterval);
                    return;
                }

                // タグかテキストかを判別
                if (typeSprit[typeLength].startsWith('<')) {
                    entry.target.innerHTML += typeSprit[typeLength];  // タグをそのまま追加
                } else {
                    entry.target.innerHTML += typeSprit[typeLength].charAt(0); // 文字を1つ追加
                    typeSprit[typeLength] = typeSprit[typeLength].substring(1); // 残りを保存
                    if (typeSprit[typeLength] !== "") {
                        typeLength--; // まだ残っている場合は同じ位置を再度処理
                    }
                }
                typeLength++;
            }, typeSpeed);
        }
    });
}

let observer = new IntersectionObserver(callback, options);

typeTarget.forEach(e => {
    observer.observe(e);
});
