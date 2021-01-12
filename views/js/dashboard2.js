function getArea(data) {
  Morris.Area({
    element: 'morris-area-chart',
    data: data[0],
    xkey: 'period',
    ykeys: ['count', 'amount'],
    labels: ['Referrals', 'Performance'],
    pointSize: 3,
    parseTime: false,
    fillOpacity: 0,
    pointStrokeColors: ['#fdc006', '#9675ce'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 1,
    hideHover: 'auto',
    lineColors: ['#fdc006', '#9675ce'],
    resize: true
  });
  Morris.Area({
    element: 'total-income-chart',
    data: data[1],
    xkey: 'period',
    ykeys: ['count', 'amount'],
    labels: ['DEP', 'WITH'],
    pointSize: 3,
    parseTime: false,
    fillOpacity: 0,
    pointStrokeColors: ['#fdc006', '#9675ce'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 1,
    hideHover: 'auto',
    lineColors: ['#fdc006', '#9675ce'],
    resize: true
  });
  // Morris.Area({
  //   element: 'total-income-chart',
  //   data: data[1],
  //   xkey: 'period',
  //   ykeys: ['count', 'amount'],
  //   labels: ['DEP', 'WITH'],
  //   pointSize: 3,
  //   parseTime: false,
  //   fillOpacity: 0,
  //   pointStrokeColors: ['#e43d3d', '#0c3974'],
  //   behaveLikeLine: true,
  //   gridLineColor: '#e0e0e0',
  //   lineWidth: 1,
  //   hideHover: 'auto',
  //   lineColors: ['#e43d3d', '#0c3974'],
  //   resize: true
  // });
  Morris.Area({
    element: 'commission-wallet-chart',
    data: data[2],
    xkey: 'period',
    parseTime: false,
    ykeys: ['BS1', 'BS2', 'BS3'],
    labels: ['USD', 'SALE', 'FEES'],
    pointSize: 3,
    fillOpacity: 0,
    pointStrokeColors: ['#e43d3d', '#0c3974', '#14a505'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 1,
    hideHover: 'auto',
    lineColors: ['#e43d3d', '#0c3974', '#14a505'],
    resize: true
  });
  // function getArea(data) {
  //   Morris.Area({
  //     element: 'morris-area-chart',
  //     data: data[0],
  //     xkey: 'period',
  //     ykeys: ['data1', 'data2','data3','data4'],
  //     labels: ['Daily', 'Recommend','Matching','Position'],
  //     pointSize: 3,
  //     fillOpacity: 0,
  //     pointStrokeColors: ['#fdc006', '#9675ce'],
  //     behaveLikeLine: true,
  //     gridLineColor: '#e0e0e0',
  //     lineWidth: 1,
  //     hideHover: 'auto',
  //     lineColors: ['#fdc006', '#9675ce'],
  //     resize: true
  //   });

}
