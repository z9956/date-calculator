<script>
    import DateCalculator from "./DateCalculator.svelte";
    import DateReminder from "./DateReminder.svelte";
</script>

<main class="wrap">
    <DateCalculator/>
    <DateReminder/>
</main>

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
        background-color: rgb(231, 231, 231);
    }

    .wrap {
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }
</style>
