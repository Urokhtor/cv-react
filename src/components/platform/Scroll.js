export default class Scroll {

    /**
     * Attempts to scroll viewport smoothly to the start of given element.
     *
     * @param selector The query selector of the element to which we are to scroll.
     */
    static toElement(selector) {
        const element = document.querySelector(selector);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    /**
     *  Attempts to scroll viewport instantly to start of given element.
     *
     * @param selector The query selector of the element to which we are to scroll.
     */
    static toElementFast(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({
                block: 'start'
            });
        }
    }
}