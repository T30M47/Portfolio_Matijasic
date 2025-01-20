/*async function fetchAnalyticsData() {
    const response = await gapi.client.analyticsdata.properties.runReport({
        property: "properties/443269906",
        requestBody: {
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "country" }, { name: "deviceCategory" }, {
                name: "pagePath"
            }],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }, {
                name:
                    "averageSessionDuration"
            }]
        }
    });
    console.log(response.result);
}*/
/*async function fetchAnalyticsData() {
    const response = await gapi.client.analyticsdata.properties.runReport({
        property: "properties/443269906",
        requestBody: {
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [{ name: "country" }, { name: "deviceCategory" }, { name: "pagePath" }],
            metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "averageSessionDuration" }]
        }
    });
    
    // Provjeri što dobiješ u response.result
    console.log(response.result);

    // Provjeri kako podaci izgledaju prije nego što ih pošalješ za grafikon
    const data = {
        labels: response.result.rows.map(row => row.dimensionValues[0].value), // Za primjer, koristimo prvu dimenziju kao oznake
        values: response.result.rows.map(row => row.metricValues[0].value), // Pretpostavljamo da su podaci za aktivne korisnike
    };

    renderChart(data); // Poziv funkcije za renderiranje grafikona
}*/
/**
 * Fetch Google Analytics Data
 */
function fetchAnalyticsData() {
    if (!accessToken) {
      console.error('No access token. Please sign in first.');
      return;
    }
  
    gapi.client.analyticsdata.properties.runReport({
      property: 'properties/443269906', // Replace with your property ID
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'country' }],
        metrics: [{ name: 'activeUsers' }],
      },
    })
      .then(response => {
        console.log('Analytics data:', response.result);
        renderChart(response.result);
      })
      .catch(err => console.error('Error fetching data:', err));
  }
  
  function renderChart(data) {
    const ctx = document.getElementById('chart').getContext('2d');
    const countries = data.rows.map(row => row.dimensionValues[0].value);
    const users = data.rows.map(row => parseInt(row.metricValues[0].value, 10));
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: countries,
        datasets: [{
          label: 'Active Users',
          data: users,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true },
        },
      },
    });
  }  