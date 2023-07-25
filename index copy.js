
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





function main(){
    const teste=document.getElementById('jts')



    geraTabela(hostVms)



}



hostVms=[{hosp:"SRVHOSP01", vm:"A3TECH - SRVOTRS"},
{hosp:"SRVHOSP01", vm:"A3TECH - SRVTS"},
{hosp:"SRVHOSP01", vm:"GODOO - SRV PRODUTO"},
{hosp:"SRVHOSP01", vm:"GODOO - SRVAPP"},
{hosp:"SRVHOSP01", vm:"RRV NEPOMUCENO - SRVTS"},
{hosp:"SRVHOSP02", vm:"A3TECH - SRVAD"},
{hosp:"SRVHOSP02", vm:"A3TECH - SRVSQL"},
{hosp:"SRVHOSP02", vm:"CONSENSO - SRVAD"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - SRV-ECTS-DB"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - SRV-ECTS-DC02"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - SRV-ECTS-FS"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - SRV-ECTS-PRO"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - SRV-ECTS-TFS"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - SRV-ECTS-WS"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - WS-PRO05"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - WS-PRO06"},
{hosp:"SRVHOSP02", vm:"ENTERPRISE - WS-PRO07"},
{hosp:"SRVHOSP02", vm:"SECCONSULT - SRVTS"},
{hosp:"SRVHOSP03", vm:"AGL - SRVAPP"},
{hosp:"SRVHOSP03", vm:"EDS - SRVAD"},
{hosp:"SRVHOSP03", vm:"PONTEVEDRA - SRVDCTF"},
{hosp:"SRVHOSP03", vm:"SEIVA - SRVAD"},
{hosp:"SRVHOSP03", vm:"SOLSTIC - SRVAD"},
{hosp:"SRVHOSP04", vm:"AMPRO - SRVTS"},
{hosp:"SRVHOSP04", vm:"IBES - SRVAD"},
{hosp:"SRVHOSP04", vm:"MAFE - SRVIMP"},
{hosp:"SRVHOSP04", vm:"SEIVA - SRVTS2"},
{hosp:"SRVHOSP04", vm:"VIANNA NOGUEIRA - SRVTS"},
{hosp:"SRVHOSP05", vm:"ARMATI - SRVAD"},
{hosp:"SRVHOSP05", vm:"ARMATI - SRVTS"},
{hosp:"SRVHOSP05", vm:"GNB - SRVAD"},
{hosp:"SRVHOSP05", vm:"gparted"},
{hosp:"SRVHOSP05", vm:"IDEAL - DSKFINDEAL"},
{hosp:"SRVHOSP05", vm:"IDEAL - DSKFINDEAL01"},
{hosp:"SRVHOSP05", vm:"IDEAL - DSKFINDEAL02"},
{hosp:"SRVHOSP05", vm:"MAFE - SRVTS"},
{hosp:"SRVHOSP05", vm:"PRT - SRVAD"},
{hosp:"SRVHOSP05", vm:"PRT - SRVTS"},
{hosp:"SRVHOSP05", vm:"SECCONSULT - SRVAD"},
{hosp:"SRVHOSP06", vm:"A3TECH - SRVPOWERBI"},
{hosp:"SRVHOSP07", vm:"CRANERJ - SRVAD"},
{hosp:"SRVHOSP07", vm:"CRANESP - SRVAD"},
{hosp:"SRVHOSP07", vm:"ENTERPRISE - SRV"},
{hosp:"SRVHOSP07", vm:"IDEAL - SRVAD"},
{hosp:"SRVHOSP07", vm:"IDEAL - SRVTS"},
{hosp:"SRVHOSP07", vm:"MILENIO  MOVEIS - SRVTS"},
{hosp:"SRVHOSP07", vm:"MILENIO MOVEIS - SRVAD"},
{hosp:"SRVHOSP07", vm:"VERITY - SRVAD"},
{hosp:"SRVHOSP07", vm:"VERITY-SRVBDAPP"},
{hosp:"SRVHOSP08", vm:"A3TECH - ZABBIX - BD-x"},
{hosp:"SRVHOSP08", vm:"AMHS - SRVAD"},
{hosp:"SRVHOSP08", vm:"BRCONSULTING - SRVADDPCOMP"},
{hosp:"SRVHOSP08", vm:"ELEVA GARDEN - SRVTS"},
{hosp:"SRVHOSP08", vm:"ELEVAGARDEN - SRVAD"},
{hosp:"SRVHOSP08", vm:"FACILITY - SRVAD"},
{hosp:"SRVHOSP08", vm:"FACILITY - SRVTS"},
{hosp:"SRVHOSP08", vm:"FORBEXBR - SRVAD"},
{hosp:"SRVHOSP08", vm:"FORBEXBR - SRVTS"},
{hosp:"SRVHOSP08", vm:"LIDER - SRVAD"},
{hosp:"SRVHOSP08", vm:"MAFE - SRVAD"},
{hosp:"SRVHOSP08", vm:"MECANTEC - DSKFIN"},
{hosp:"SRVHOSP08", vm:"MECANTEC - SRVAD"},
{hosp:"SRVHOSP08", vm:"MECANTEC - SRVAD-OLD"},
{hosp:"SRVHOSP08", vm:"MECANTEC - SRVTS"},
{hosp:"SRVHOSP08", vm:"MECANTEC - SRVTS - (08/05/2023 - 16:40:30)"},
{hosp:"SRVHOSP08", vm:"MECANTEC - SRVTS - atual"},
{hosp:"SRVHOSP08", vm:"METALVET - SRVAD"},
{hosp:"SRVHOSP08", vm:"MR3 - SRVTS"},
{hosp:"SRVHOSP08", vm:"nao mexer - VIANNANOGUEIRA - SRVTS2"},
{hosp:"SRVHOSP08", vm:"Nova Máquina Virtual"},
{hosp:"SRVHOSP08", vm:"POLIMEDICAL - SRVAD"},
{hosp:"SRVHOSP08", vm:"POLIMEDICAL - SRVTS"},
{hosp:"SRVHOSP08", vm:"POLIMEDICAL - SRVTS OLD"},
{hosp:"SRVHOSP08", vm:"PONTEVEDRA - DSK10_F1"},
{hosp:"SRVHOSP08", vm:"PONTEVEDRA - SRVAD"},
{hosp:"SRVHOSP08", vm:"PONTEVEDRA - SRVAPP"},
{hosp:"SRVHOSP08", vm:"SONHARE - NOVA SRVTS"},
{hosp:"SRVHOSP08", vm:"SONHARE - SRVAD"},
{hosp:"SRVHOSP08", vm:"SRVOCSA3TECH"},
{hosp:"SRVHOSP08", vm:"VERITY - DSKRH02W10"},
{hosp:"SRVHOSP08", vm:"VERITY - DSKRH03W10"},
{hosp:"SRVHOSP08", vm:"VERITY - DSKRHW10"},
{hosp:"SRVHOSP08", vm:"VIANNANOGUEIRA - SRVAD"},
{hosp:"SRVHOSP08", vm:"VIRTUAL - SRVAD"},
{hosp:"SRVHOSP09", vm:"A3TECH - GRAFANA"},
{hosp:"SRVHOSP09", vm:"A3TECH - ZABBIX - BD"},
{hosp:"SRVHOSP09", vm:"ALEGRETE - POWERBI"},
{hosp:"SRVHOSP09", vm:"ALEGRETE - SRVBDAPP"},
{hosp:"SRVHOSP09", vm:"AMPRO - SRVAD"},
{hosp:"SRVHOSP09", vm:"CJP - SRVAD"},
{hosp:"SRVHOSP09", vm:"CJP - SRVTS"},
{hosp:"SRVHOSP09", vm:"DIPMED - SRVTS"},
{hosp:"SRVHOSP09", vm:"FERMIT - SRVAD"},
{hosp:"SRVHOSP09", vm:"FERMIT - SRVSQLFIL"},
{hosp:"SRVHOSP09", vm:"FERMIT - SRVSQLMTZ"},
{hosp:"SRVHOSP09", vm:"FERMIT - SRVTS"},
{hosp:"SRVHOSP09", vm:"FERMIT - SRVTSFIL"},
{hosp:"SRVHOSP09", vm:"IDEAL - SRVTS01"},
{hosp:"SRVHOSP09", vm:"JLINDUSTRIA - SRVAD"},
{hosp:"SRVHOSP09", vm:"JLINDUSTRIA - SRVTS"},
{hosp:"SRVHOSP09", vm:"LIDER - SRVTS"},
{hosp:"SRVHOSP09", vm:"LINUX DEBIAN"},
{hosp:"SRVHOSP09", vm:"RRV NEPOMUCENO - SRVAD"},
{hosp:"SRVHOSP09", vm:"VIRTUAL - SRVTS"},
{hosp:"SRVHOSP11", vm:"A3TECH - SRVAD 2023"},
{hosp:"SRVHOSP11", vm:"A3TECH - SRVTS 2023"},
{hosp:"SRVHOSP11", vm:"A3TECH - SRVTSIW"},
{hosp:"SRVHOSP11", vm:"ARMATI - SRVAD"},
{hosp:"SRVHOSP11", vm:"ARMATI - SRVTS"},
{hosp:"SRVHOSP11", vm:"GRAFANA 9"},
{hosp:"SRVHOSP11", vm:"RN - SRVTS"},
{hosp:"SRVHOSP11", vm:"SRVSYSLOG"},
{hosp:"SRVHOSP11", vm:"ZABBIX 6.0 - BD"},
{hosp:"SRVHOSP12", vm:"AMHS - SRVSQLAMHS"},
{hosp:"SRVHOSP12", vm:"AMHS - SRVTS"},
{hosp:"SRVHOSP12", vm:"CONDUTORESPOMPEIA - SRVAD"},
{hosp:"SRVHOSP12", vm:"CVF - SRVAD"},
{hosp:"SRVHOSP12", vm:"CVF - SRVTS"},
{hosp:"SRVHOSP12", vm:"ENTERPRISE - SRV-ECTS-ARQ"},
{hosp:"SRVHOSP12", vm:"ENTERPRISE - SRV-ECTS-DDS"},
{hosp:"SRVHOSP12", vm:"MR3-SRVAD-Novo"},
{hosp:"SRVHOSP12", vm:"MR3-SVDTS-Novo"},
{hosp:"SRVHOSP12", vm:"PONTEVEDRA - DSKDCTF"},
{hosp:"SRVHOSP12", vm:"Prologos - Homologação"},
{hosp:"SRVHOSP12", vm:"RNLOGISTICA - SRVRAPP"},
{hosp:"SRVHOSP12", vm:"SG - SRVGRUPOSGAD"},
{hosp:"SRVHOSP12", vm:"SRV2008"},
{hosp:"SRVHOSP12", vm:"UNIDAS - SRVAD"},
{hosp:"SRVHOSP12", vm:"UNIDAS - SRVTS"},
{hosp:"SRVHOSP12", vm:"VM Template"},
{hosp:"SRVHOSP13", vm:"CECM - SRVAD"},
{hosp:"SRVHOSP13", vm:"GPCABOS - SRVAD"},
{hosp:"SRVHOSP13", vm:"GPCABOS - SRVTS"},
{hosp:"SRVHOSP13", vm:"MECANTEC - SRVTS"},
{hosp:"SRVHOSP13", vm:"ODONTO - SRV ZABBIX"},
{hosp:"SRVHOSP13", vm:"RNLOGISTICA - SRVAD"},
{hosp:"SRVHOSP13", vm:"RNLOGISTICA - SRVETQ01"},
{hosp:"SRVHOSP13", vm:"RNLOGISTICA - SRVTS01"},
{hosp:"SRVHOSP13", vm:"RNLOGISTICA - SRVTS02"},
{hosp:"SRVHOSP13", vm:"RNLOGISTICA - TS02"},
{hosp:"SRVHOSP13", vm:"RNLOGITICA - SRVBDAPP"},
{hosp:"SRVHOSP13", vm:"SONHARE - SRVSQL"},
{hosp:"SRVHOSP13", vm:"SRVTS - RN04"},
{hosp:"SRVHOSP13", vm:"ZABBIX 6.4"},
{hosp:"SRVHOSP13", vm:"ZZZ - Pai - ubuntu-18.04.4-live-server-amd64"},
{hosp:"SRVREP01", vm:"A3TECH - ZABBIX FR"},
{hosp:"SRVREP01", vm:"ALEGRETE - SRVAD"},
{hosp:"SRVREP01", vm:"BRCONSULTING - SRVTSDPCOMP"},
{hosp:"SRVREP01", vm:"BW LIDO - SRVAD"},
{hosp:"SRVREP01", vm:"BW LIDO - SRVTS"},
{hosp:"SRVREP01", vm:"CONSENSO - SRVTS"},
{hosp:"SRVREP01", vm:"CRANEW - TESTE A3TECH"},
{hosp:"SRVREP01", vm:"DIPMED - SRVAD"},
{hosp:"SRVREP01", vm:"MR3 - SRVAD"},
{hosp:"SRVREP01", vm:"MR3 - SRVAD - teste"},
{hosp:"SRVREP01", vm:"Nova Máquina Virtual"},
{hosp:"SRVREP01", vm:"POLIMEDICAL - SRVAD OLD"},
{hosp:"SRVREP01", vm:"PONTEVEDRA - SRVTS"},
{hosp:"SRVREP01", vm:"SEAC - SRVAD"},
{hosp:"SRVREP01", vm:"SRVHMIBCCTVM"},
{hosp:"SRVREP01", vm:"VERITY - SRVTS"},
{hosp:"SRVREP01", vm:"WindowsServerCustom"}]





main()
