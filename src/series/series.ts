import { Component } from "../Component/Component";

export class series extends Component {
    HandleStar = (selector: string) => {
        const ranker = document.querySelectorAll(selector);
        ranker.forEach((item) =>
            item.addEventListener(click, () => {
                let rank = ranker.innerHTML.split("/");
            })
        );
    };
}

/*const template = `

<li class="serie">
<img
class="serie-poster"
src = ${}
alt = ${} poster 
/>
<h4 class = 'serie__title'> ${} 
</li></ul>`;*/
