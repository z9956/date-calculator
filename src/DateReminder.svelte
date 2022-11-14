<script>
    import { onMount } from 'svelte';

    import { Lunar } from 'lunar-javascript';

    let reminderDate = [
        {
            month: 3,
            day: 12,
            label: 'z'
        },
        {
            month: 8,
            day: 24,
            label: 'z'
        },
        {
            month: 10,
            day: 8,
            label: 'z'
        },
        {
            month: 10,
            day: 16,
            label: 'z'
        }
    ];

    onMount(() => {
        reminderDate = reminderDate.map(current => {
            const {month, day} = current;
            const year = new Date().getFullYear();
            const lunar = Lunar.fromYmd(year, month, day);
            const solar = lunar.getSolar();

            current.solar = solar.toString();
            current.lunar = lunar;

            return current
        })
    })
</script>

<main>
    <h3>日期提醒</h3>
    <div>
        {#each reminderDate as reminder}
            <p>农历 {reminder.lunar ?? ''} -> 阳历 {reminder.solar ?? ''}</p>
        {/each}
    </div>
</main>

<style>

</style>
