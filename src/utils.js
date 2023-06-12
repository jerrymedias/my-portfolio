
export function viewTransitionAPI(callback, data, event, transitionName) {
    // Check to see if API is supported
    if (document.startViewTransition) {
        event.preventDefault();
        // start transition
        if (transitionName) {
            (event.target.style.viewTransitionName = transitionName);
        }
        const transition = document.startViewTransition(() => {
            callback(data)
            if (transitionName) {
                (event.target.style.viewTransitionName = "");
            }
        });
        // when transition start run animation
        transition.ready.then(() => {
            /// Animate the root's new view
            scrollToTop()
        });
    } else {
        // fallback for old browser
        callback(data);
    }
}

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};