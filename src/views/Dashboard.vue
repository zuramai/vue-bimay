<template>
<div class="page">

  <div class='page-header text-4xl font-bold text-gray-700'>
    <h1>Dashboard</h1>
  </div>
  <div class="page-content">
    <div class="row mt-5">
      <div class="col-md-6 col-12">
        <bi-card>
          <bi-card-header>
            <template v-slot:title>Your Score Record</template>
            <template v-slot:subtitle>In the last 6 months</template>
          </bi-card-header>
          <bi-card-body>
              <apexchart height="500" type="bar" :options="chart.options" :series="chart.series"></apexchart>
          </bi-card-body>
        </bi-card>
      </div>
      <div class="col-6">
        <bi-card>
          <bi-card-header>
            <template v-slot:title>Today Agenda</template>
            <template v-slot:subtitle>Upcoming Courses & Deadline Today</template>
          </bi-card-header>
          <bi-card-body :no-padding="true">
            <bi-table type="hover" :data="todayAgenda">
              <template v-slot:thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Remaining Time</th>
                </tr>
              </template>
              <template v-slot:tbody>
                <tr v-for="(agenda, index) in todayAgenda" :key="index">
                  <td>{{ agenda.id }}</td>
                  <td>
                    <span v-if="agenda.type == 'deadline'" class='text-red-500 font-bold'>Deadline -</span>
                    <span v-if="agenda.type == 'vc'" class='text-blue-500 font-bold'>VC -</span>
                    <span v-if="agenda.type == 'gslc'" class='text-orange-500 font-bold'>GSLC -</span>
                    {{ agenda.name }}
                    </td>
                  <td>{{ agenda.remaining_time }}</td>
                </tr>
              </template>
            </bi-table>
          </bi-card-body>
        </bi-card>
        <div class="row">
          <div class="col-md-6 col-12">
            <bi-card>
              <bi-card-header>
                <template v-slot:title>Your GPA</template>
                <template v-slot:subtitle>Grade Point Average</template>
              </bi-card-header>
              <bi-card-body :no-padding="true">
                <apexchart type="radialBar" height="250" :options="sat.chartOptions" :series="sat.series"></apexchart>
              </bi-card-body>
            </bi-card>
          </div>
          <div class="col-md-6 col-12">
            <bi-card>
              <bi-card-header>
                <template v-slot:title>Your SAT Points</template>
                <template v-slot:subtitle>Student Activity Transcript</template>
              </bi-card-header>
              <bi-card-body>
                <div class="flex flex-col">
                  <div class="sat-point flex flex-row pb-5">
                    <h1 class='text-5xl font-bold'>98</h1>
                    <div class="flex flex-col px-5">
                      <h6>Student Activity Transcript</h6>
                      <p class='flex flex-row items-center text-green-600'>
                      <bi-icon icon="bar-chart-fill" width="12" height="12"></bi-icon>
                      <span class='ml-1 text-xs'>22 more to go</span>
                      </p>
                    </div>
                  </div>
                  <div class="sat-point flex flex-row border-t border-gray-400 pt-5">
                    <h1 class='text-5xl font-bold'>12</h1>
                    <div class="flex flex-col px-5">
                      <h6>Hours of Community Service</h6>
                      <p class='flex flex-row items-center text-green-600'>
                      <bi-icon icon="bar-chart-fill" width="12" height="12"></bi-icon>
                      <span class='ml-1 text-xs'>18 more to go</span>
                      </p>
                    </div>
                  </div>
                </div>
              </bi-card-body>
            </bi-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>

export default {
  name: 'Dashboard',
  components: {
    
  },
  mounted() {
    console.log('home')
  },
  data: () => ({
    todayAgenda: [
      {
        id: '1',
        type: 'deadline',
        name: 'Algorithm Assignment Week 2',
        remaining_time: '2h 10m 40s'
      },
      {
        id: '2',
        type: 'vc',
        name: 'Character Building Pancasila Week 2',
        remaining_time: '4h 30m 40s'
      },
      {
        id: '3',
        type: 'gslc',
        name: ' Algorithm & Programming Week 2',
        remaining_time: '6h 59m 40s'
      },
    ],
    chart: {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        plotOptions: {
          bar: {
              distributed: true
          }
        },
        legend: {
          show:false
        },
        fill: {
          colors: ["#ef871f","#0278ae","#ef871f","#0278ae","#0278ae","#ef871f","#ef871f","#0278ae"],
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [80, 90, 85, 93, 95, 78, 60, 78]
      }]
    },
    sat: {
      series: [75],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radialBar',
              toolbar: {
                show: true
              }
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 225,
                 hollow: {
                  margin: 0,
                  size: '70%',
                  background: '#fff',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                  }
                },
                track: {
                  background: '#fff',
                  strokeWidth: '67%',
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                  }
                },
            
                dataLabels: {
                  show: true,
                  name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                  },
                  value: {
                    formatter: function(val) {
                      return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            stroke: {
              lineCap: 'round'
            },
            labels: ['Points'],
          },
    }
  })
}
</script>
