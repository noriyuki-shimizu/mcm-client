<template>
    <div class='total-price'>
        <breadcrumb :hierarchyList="hierarchyList"></breadcrumb>

        <div class="uk-section uk-section-muted">
            <div class="uk-container">
                <pie-chart :chartData='chartData' :chartOptions="chartOptions" />
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue} from 'vue-property-decorator';
import PieChart from '@/components/chart/pie/PieChart';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';

@Component({
    components: {
        Breadcrumb,
        PieChart,
    },
})
export default class TotalPrice extends Vue {
     private hierarchyList: string[] = [
        'My Clothes',
        'Total price',
    ];

    private chartData: any = {
        labels: ['Tops', 'Tee', 'Outer', 'Bottoms', 'Hat', 'Bag', 'Accessories', 'Shoes & Boots'],
        datasets: [{
        backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c',
            '#34495e',
            '#e4495e',
        ],
        data: [12, 19, 3, 17, 28, 24, 7, 10],
        }],
    };

    private chartOptions: any = {
        legend: {
            labels: {
                boxWidth: 30,
                fontSize: 50,
            },
        },
        tooltips: {
            bodyFontSize: 30,
        },
    };
}
</script>

<style>
#pie-chart {
    height: 70vh !important;
    width: 40vw !important;
    margin-left: auto;
    margin-right: auto;
}
</style>

