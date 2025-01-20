async function fetchDataAndRenderChart() {
    try {
      const response = await fetchAnalyticsData();
      const data = {
        labels: response.result.rows.map(row => row.dimensions[0].value), // Zemlje
        values: response.result.rows.map(row => parseInt(row.metrics[0].values[0])) // Broj korisnika
      };
      renderChart(data);
    } catch (error) {
      console.error('Greška pri dohvaćanju podataka:', error);
    }
  }
  
// Poziv funkcije za dohvaćanje podataka nakon uspješne prijave
gapi.auth2.getAuthInstance().isSignedIn.listen(isSignedIn => {
if (isSignedIn) {
    fetchDataAndRenderChart();
}
});