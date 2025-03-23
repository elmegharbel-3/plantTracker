<script>
    export let image = "images/neutral-plant.png";
    export let name = "plant";
    export let birth = "24/12/4";
    export let last = "3/21";
    export let period = "2";
</script>
<div class="holder">
    <div class="img">
        <img src={image} alt="plant">
    </div>
    <div class="bottom">
        <h3>{name}</h3>
        <div class="data">
            <ul>
                <li>born: {birth}</li>
                <li>{last}</li>
                <li>every {period} days</li>
            </ul>
        </div>
        <div class="actions">
            <button id="reset">reset</button>
            <button id="water">water</button>
            <button id="remove">remove</button>
        </div>
    </div>
</div>
<style>
    .holder {
        padding: 0;
    }
    .img {
        width: 100%;
        height: 50%;
        text-align: center;
    }
    .img img {
        height: 100%;
    }
    .bottom {
        background-color: rgba(255, 255, 255, 0.651);
        height: 50%;
        border-radius: 0 0 20px 20px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: start;
    }
    .bottom h3 {
        color: var(--secondary);
        text-transform: capitalize;
        font-family: "kablammo";
        text-align: center;
        margin: 10px 0;
    }
    .data ul {
        display: flex;
        flex-wrap: wrap;
        text-decoration: none;
        margin: 0;
        padding: 0;
        gap: 10px;
        justify-content: center;
    }
    .data ul li {
        text-decoration: none;
        list-style: none;
        justify-content: center;
        background-color: var(--secondary);
        background-color: var(--secondary);
        padding: 3px 6px;
        border-radius: 5px;
        color: #0d5128;
        font-weight: bold;
        font-size: 14px;
        font-family: 'tektur';
    }
    .actions {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 0 20px;
        font-size: 12px;
    }
    .actions button {
        font-size: 12px;    
        border: none;
        padding: 5px;
        font-family: "kablammo";
        border-radius: 5px;
    }
    #reset {
        background-color: var(--main-back);
    }
    #water {
        background-color: rgb(0, 140, 255);
        color: white;
    }
    #remove {
        justify-self: end;
        background-color: rgb(216, 46, 34);
        color: white;
    }

</style>