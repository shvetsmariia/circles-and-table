const ROOT = document.querySelector('#root');
ROOT.innerHTML = `
    <table>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    <tr>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    <td class="cell"></td>
    </tr>

    </table>
`; 

const cells = document.querySelectorAll('.cell'); 
document.body.addEventListener('click', function(e) {
    if(!e.target.classList.contains('cell')) {
        cells.forEach(cell => {
            cell.classList.toggle('black'); 
        })
    } else {
        const selectedCell = e.target; 
        selectedCell.classList.toggle('black');
    }
})