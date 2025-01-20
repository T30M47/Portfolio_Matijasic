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
async function fetchAnalyticsData() {
    // Provjeri je li korisnik prijavljen
    const authInstance = gapi.auth2.getAuthInstance();
    if (!authInstance.isSignedIn.get()) {
        alert("Molimo prijavite se kako biste pristupili podacima.");
        return;
    }

    const response = await gapi.client.analyticsdata.properties.runReport({
        property: "properties/443269906", // Zamijenite s vašim ID-om
        requestBody: {
            dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
            dimensions: [
                { name: "country" },
                { name: "deviceCategory" },
                { name: "pagePath" }
            ],
            metrics: [
                { name: "activeUsers" },
                { name: "sessions" },
                { name: "averageSessionDuration" }
            ]
        }
    });

    const data = formatData(response.result);
    renderChart(data);
}

function formatData(result) {
    const labels = [];
    const values = [];

    result.rows.forEach(row => {
        labels.push(row.dimensionValues[0].value); // Zemlja
        values.push(row.metricValues[0].value); // Broj korisnika
    });

    return { labels, values };
}