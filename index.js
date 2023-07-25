
function filtrarTabela(alvo){
    if (alvo.length >=2){
        console.log(Filter(alvo))
        geraTabela(Filter(alvo))
    }
    else {
        geraTabela(hostVms)

    }

}





const Filter = (event) => {


    console.log("event")
    console.log(event)
    const arr = hostVms
    return arr.filter(obj => {

        return Object.values(obj).map(item => {

              return (item === null ? "" : item.toString().toUpperCase().includes(event.toString().toUpperCase()));

        }).includes(true);

    });

}




const geraTabela = (filtrados)=>{


    console.log(filtrados)


    const teste=document.getElementById('jts')
    teste.innerText = "";
    var i=0
    var tabela  = document.createElement("table");

    var headerLinha  = document.createElement("tr");
    var headerHosp  = document.createElement("th");
    var headerVm  = document.createElement("th");
    headerHosp.textContent="lement.hosp"
    headerVm.textContent="VMs"
    headerVm.classList.add("colunaVm");
    headerHosp.classList.add("colunaHosp");


    headerLinha.appendChild(headerHosp)
    headerLinha.appendChild(headerVm)
    headerLinha.classList.add("linha_header");
    tabela.appendChild(headerLinha)



    filtrados.forEach((element) => {

        ''
        i=(++i)%2
        var linha  = document.createElement("tr");
        var colunaHosp  = document.createElement("td");
        var colunaVm  = document.createElement("td");


        linha.classList.add("linha_"+i.toString());

        colunaHosp.textContent=element.hosp
        colunaVm.textContent=element.vm
        colunaVm.classList.add("colunaVm");
        colunaHosp.classList.add("colunaHosp");

        linha.appendChild(colunaHosp)
        linha.appendChild(colunaVm)
        tabela.appendChild(linha)
        teste.appendChild(tabela)
    })
}


const url = "http://127.0.0.1:5000/item_por_key";

// Select the legends UL from our HTML File
const ul = document.getElementById('legends');

// Create a DocumentFragment (explained below)
const list = document.createDocumentFragment();





async function main(){
    const teste=document.getElementById('jts')





    try {
        // We are using fetch to get the response
        const response = await fetch(url);
        const data = await response.json();
        
        // Trigger the listData function and pass the result
        hostVms=data
        geraTabela(data)

      } catch (error) {
        console.log(error);
      }


    


}



var hostVms=[{hosp:"SRVHOSP01", vm:"A3TECH - SRVOTRS"},
{hosp:"SRVHOSP01", vm:"A3TECH - SRVTS"},
{hosp:"SRVHOSP01", vm:"GODOO - SRV PRODUTO"},
{hosp:"SRVHOSP01", vm:"GODOO - SRVAPP"},
{hosp:"SRVHOSP01", vm:"RRV NEPOMUCENO - SRVTS"}]

main()
