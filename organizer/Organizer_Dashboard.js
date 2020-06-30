const selectElement = (element) => document.querySelector(element);
const header = selectElement('header');
const mainContent = selectElement('main');
selectElement('.hamburger').addEventListener('click', () => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
    if(mainContent.classList.contains('active')){
        nav_icon.classList.remove('fa-bars');
        nav_icon.classList.add('fa-times');
    }
    else{
        nav_icon.classList.remove('fa-times');
        nav_icon.classList.add('fa-bars');
    }
});

window.onclick = (event) => {
    if(event.target.matches('.active')){
        if(header.classList.contains('active')){
            header.classList.remove('active');
            mainContent.classList.remove('active');
        }
    }
};


// CHART SCRIPT
// var config = {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'Unfilled',
//             fill: false,
//             backgroundColor: window.chartColors.red,
//             borderColor: window.chartColors.red,
//             data: [
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor()
//             ],
//         }, {
//             label: 'Dashed',
//             fill: false,
//             backgroundColor: window.chartColors.grey,
//             borderColor: window.chartColors.grey,
//             borderDash: [5, 5],
//             data: [
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor()
//             ],
//         }, {
//             label: 'Filled',
//             backgroundColor: window.chartColors.orange,
//             borderColor: window.chartColors.orange,
//             data: [
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor()
//             ],
//             fill: true,
//         }]
//     },
//     options: {
//         responsive: true,
//         // title: {
//         //     display: true,
//         //     text: 'Total Profit'
//         // },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Month'
//                 }
//             }],
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Value'
//                 }
//             }]
//         }
//     }
// };

// window.onload = function() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//     window.myLine = new Chart(ctx, config);
// };



// function NotificationIcon() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }
// function sendMail(){
//     var popup = document.getElementById("myPopup2");
//     popup.classList.toggle("show2");
//   }

// function WhatsNew() {
//     var popup = document.getElementById("myPopup3");
//     popup.classList.toggle("show3");
//   }