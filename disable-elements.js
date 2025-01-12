const disableElements = () => {
    const elementList = [
        ...document.querySelectorAll('shreddit-comment-action-row faceplate-tracker button'),
        ...document.querySelectorAll('shreddit-async-loader comment-composer-host faceplate-tracker'),
        ...document.querySelectorAll('create-post-entry-point-wrapper')
    ];

    elementList.forEach(curElement => {
        curElement.style.pointerEvents = "none";
        curElement.style.opacity = "0.5";
        curElement.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
        });
    });
};

const observer = new MutationObserver(disableElements);
observer.observe(document.body, { childList: true, subtree: true });

disableElements();
