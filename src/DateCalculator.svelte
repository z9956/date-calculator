<script>
    import dayjs from 'dayjs';

    const todayDate = dayjs();
    const preDate = {
        year: todayDate.year(),
        month: todayDate.month() + 1,
        day: todayDate.date(),
        hour: 0
    }
    const lastDate = {
        year: todayDate.year(),
        month: todayDate.month() + 1,
        day: todayDate.date(),
        hour: 0
    }

    let diffResult = null;

    const handleDiff = () => {
        const date = dayjs(`${lastDate.year}-${lastDate.month}-${lastDate.day}`);

        const day = date.diff(`${preDate.year}-${preDate.month}-${preDate.day}`, 'day');
        const week = date.diff(`${preDate.year}-${preDate.month}-${preDate.day}`, 'week');
        const month = date.diff(`${preDate.year}-${preDate.month}-${preDate.day}`, 'month');
        const year = date.diff(`${preDate.year}-${preDate.month}-${preDate.day}`, 'year');

        diffResult = `${year}年 = ${month}月 = ${week}周 = ${day}天 = ${day * 24}小时`;
    }

    let calculationResult = null;
    let status = 'add';
    let unit = 'day';
    let unitLabel = '天';
    let num = 3;
    const calculationDate = dayjs();
    const calculation = {
        year: calculationDate.year(),
        month: calculationDate.month() + 1,
        day: calculationDate.date(),
        hour: 0
    }

    const handleCalculation = () => {
        const date = dayjs(`${calculation.year}-${calculation.month}-${calculation.day} ${calculation.hour}`);

        calculationResult = status === 'add' ? date.add(num, unit) : date.subtract(num, unit);
        calculationResult = calculationResult.format('YYYY-MM-DD HH:mm:ss');
    }

    const handleChange = ({target: {value}}) => {
        status = value;
    }

    const handleChangeUnit = ({target: {value}}) => {
        unit = value;

        if (unit) {
            unitLabel = unitOptions.find(item => item.value === unit).label;
        }
    }

    const options = [
        {
            value: 'subtract',
            label: '往前'
        },
        {
            value: 'add',
            label: '往后',
            selected: true
        },
    ]
    const unitOptions = [
        {
            value: 'hours',
            label: '小时'
        },
        {
            value: 'day',
            label: '天'
        },
        {
            value: 'week',
            label: '周'
        },
        {
            value: 'month',
            label: '月'
        },
        {
            value: 'year',
            label: '年'
        }
    ]
</script>

<main>
    <h3>日期计算器</h3>
    <div class="select-date">
        <h4>计算两个日期之间相差多少天</h4>
        <p>
            <input bind:value={preDate.year} type="number"> 年
            <input bind:value={preDate.month} type="number"> 月
            <input bind:value={preDate.day} type="number"> 日
        </p>
        <p>
            <input bind:value={lastDate.year} type="number"> 年
            <input bind:value={lastDate.month} type="number"> 月
            <input bind:value={lastDate.day} type="number"> 日
        </p>
        <p>
            <button on:click={handleDiff}>相差</button>
            {#if (diffResult)}
                <p>{diffResult}</p>
            {/if}
        </p>


    </div>

    <div class="select-date">
        <h4>推算几{unitLabel}后的日期</h4>
        <p>
            <input bind:value={calculation.year} type="number"> 年
            <input bind:value={calculation.month} type="number"> 月
            <input bind:value={calculation.day} type="number"> 日
            <input bind:value={calculation.hour} max="24" min="0" type="number"> 时
        </p>
        <p>
            <select on:change={handleChange}>
                {#each options as option}
                    <option value={option.value} selected={option?.selected}>{option.label}</option>
                {/each}
            </select>
            <input bind:value={num} type="number">
            <select bind:value={unit} on:change={handleChangeUnit}>
                {#each unitOptions as option}
                    <option value={option.value}>{option.label}</option>
                {/each}
            </select>
        </p>
        <p>
            <button on:click={handleCalculation}>推算</button>
            {#if (calculationResult)}
                <span>{calculationResult}</span>
            {/if}
        </p>
    </div>
</main>

<style>
    main {
        width: 40%;
    }

    .select-date input {
        width: 60px;
        height: 30px;
        font-size: 16px;
    }

    select {
        height: 30px;
    }

    button {
        width: 60px;
        height: 30px;
        cursor: pointer;
    }
</style>
