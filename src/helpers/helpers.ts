export const conterP = (list) => {
    return list.map((element) => element !== false).length;
};

export const conterW = (list) => {
    return list.map((element) => element !== false).length;
};

export const handleStar = (times: number) => {
    let starM = ` <li class="score__star">
    <i
        class="icon-score fas fa-star"
        title="1/5"
    ></i>
</li>`;

    let starP = ` <li class="score__star">
<i
    class="icon-score far fa-star"
    title="1/5"
></i>
</li>`;
    let template: string = "";
    switch (true) {
        case times === 0:
            template = `${starP.repeat(5)}`;
            break;
        case times > 0:
            template = `${starM.repeat(times)}`;
            break;
    }
    return `<ul class="score"> ${template}
    </ul>`;
};
