export const conterP = (list) => {
    return list.map((element) => element !== false).length;
};

export const conterW = (list) => {
    return list.map((element) => element !== false).length;
};

export const HandleStar = (selector: string) => {
    const ranker = document.querySelectorAll(selector);
    ranker.forEach((item) =>
        item.addEventListener(click, () => {
            let rank = ranker.innerHTML.split("/");
        })
    );
};
