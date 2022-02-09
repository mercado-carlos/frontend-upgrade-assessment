const API = 'https://restcountries.com/v3.1/all';

$.ajax({
    method: 'GET',
    url: API,
    success: function (response) {
        response.sort(sortBy);
        buildTable(response);
    },
});

function buildTable(data) {
    const TBODY = document.getElementById('countries');
    for (let i = 0; i < data.length; i++) {
        let elementRow = `<tr onclick="">
                        <td>${data[i].name.official}</td>
                        <td>${
                            data[i].capital === undefined
                                ? 'No capital to display'
                                : data[i].capital
                        }</td>
                        <td>${data[i].region}</td>
                        <td>${data[i].languages}</td>
                        <td>${data[i].population}</td>
                        <td class="d-flex justify-content-center"><img src="${
                            data[i].flags.png
                        }"></td>
                    </tr>`;
        TBODY.innerHTML += elementRow;
    }
}

function sortBy(a, b) {
    return a.name.official < b.name.official
        ? -1
        : a.name.official > b.name.official
        ? 1
        : 0;
}
