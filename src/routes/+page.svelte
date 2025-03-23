<script>
    import "../app.css"
    import PlantHolder from "$lib/PlantHolder.svelte";
    let dispButt;
    let targetForm;
    let name = '';
    let wateringPeriod = 24; // Default value
    let birthDate = '';
    let lastWatered = '';
    function displayForm() {
        targetForm.style.display = "block";
        dispButt.style.display = "none";
    }
</script>
<h1>My garden</h1>
<div class="container">
    <PlantHolder name="tomatoes"></PlantHolder>
    <PlantHolder name="tomatoes"></PlantHolder>
    <PlantHolder name="tomatoes"></PlantHolder>
    <PlantHolder name="tomatoes"></PlantHolder>
    <div id="add-plant">
        <button id="display-form" on:click={displayForm} bind:this={dispButt}>Add Plant</button>
        <div id="form-div" style="display: none;" bind:this={targetForm}>
            <form on:submit|preventDefault={addPlant} class="plant-form">
                <label for="name">Plant Name:</label>
            <input id="name" type="text" bind:value={name} required />

            <label for="wateringPeriod">Watering Period (hours):</label>
            <input id="wateringPeriod" type="number" bind:value={wateringPeriod} min="1" required />

            <label for="birthDate">Birth Date:</label>
            <input id="birthDate" type="date" bind:value={birthDate} />

            <label for="lastWatered">Last Watered:</label>
            <input id="lastWatered" type="datetime-local" bind:value={lastWatered} />

            <label for="plantImage">add image</label>
            <input type="file" accept="image/*">

            <button type="submit">Add Plant</button>
            </form>
        </div>
    </div>
</div>
<style>
    h1 {
        color: var(--main-green);
        margin: 0 auto;
        font-family: "kablammo";
        font-size: 50px;
        text-align: center;
    }
    .container {
        margin: 20px;
        display: grid;
        grid-template-columns: repeat(4,auto);
        grid-auto-rows: 250px;
        gap: 20px;

    }
    #add-plant {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #display-form{
        background-color: var(--main-green);
        color: white;
        height: fit-content;
        font-size: 22px;
        border: none;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.345);
    }
    #form-div {
        width: 100%;
        height: 100%;
    }
    #form-div form {
        display: flex;
        flex-direction: column;
        background-color: #f1f7f0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        padding: 15px;
    }
    #form-div form label {
        color: var(--secondary);
        font-family: "tektur";
    }
    #form-div form input[type=text] {
        font-family: "tektur";
        color: var(--main-green);
    }
</style>
