export const handleStar = (times) => {
    let starM = ` <li class="score__star">
    <i
        class="icon-score fas fa-star"
        title="1/5"
    ></i>
</li>`;
    let template = "";
    switch (true) {
        case times === 0:
            template = `${` <li class="score__star">
            <i
                class="icon-score far fa-star"
                title="1/5"
            ></i>
            </li><li class="score__star">
            <i
                class="icon-score far fa-star"
                title="2/5"
            ></i>
            </li><li class="score__star">
            <i
                class="icon-score far fa-star"
                title="3/5"
            ></i>
            </li><li class="score__star">
            <i
                class="icon-score far fa-star"
                title="4/5"
            ></i>
            </li><li class="score__star">
            <i
                class="icon-score far fa-star"
                title="5/5"
            ></i>
            </li>`}`;
            break;
        case times > 0:
            template = `${starM.repeat(times)}`;
            break;
    }
    return `<ul class="score"> ${template}
    </ul>`;
};
export const counterW = (list) => {
    let counter = 0;
    list.forEach((show) => {
        if (show.watched === true) {
            counter += 1;
        }
    });
    return counter;
};
export const counterP = (list) => {
    let counter = 0;
    list.forEach((show) => {
        if (show.watched === false) {
            counter += 1;
        }
    });
    return counter;
};
