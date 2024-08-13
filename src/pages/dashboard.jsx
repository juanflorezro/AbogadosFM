import Navigation from '../navigation'
import ExcelJS from 'exceljs'
import { useState } from 'react';
export const Dashboard = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleImport = async () => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            const buffer = e.target.result;
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(buffer);

            const worksheet = workbook.getWorksheet('Casos'); // Asegúrate que el nombre coincida con la hoja en Excel
            const rows = [];

            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber === 1) return; // Saltar la fila de encabezados

                const rowData = {
                    numero: row.getCell(1).value,
                    codigo: row.getCell(2).value,
                    titulo: row.getCell(3).value,
                    cliente: row.getCell(4).value,
                    asunto: row.getCell(5).value,
                    creacion: row.getCell(6).value,
                    ubicacionDelExpediente: row.getCell(7).value,
                    codigoInterno: row.getCell(8).value,
                    area: row.getCell(9).value,
                    fechaDeAsignacion: row.getCell(10).value,
                    centroDeTrabajo: row.getCell(11).value,
                    directorACargo: row.getCell(12).value,
                    abogadoACargo: row.getCell(13).value,
                    abogadoInternoDeLaCompania: row.getCell(14).value,
                    siniestro: row.getCell(15).value,
                    fechaSiniestro: row.getCell(16).value,
                    poliza: row.getCell(17).value,
                    ramo: row.getCell(18).value,
                    amparo: row.getCell(19).value,
                    numeroAplicativo: row.getCell(20).value,
                    ciudad: row.getCell(21).value,
                    juzgadoInt: row.getCell(22).value,
                    radicado: row.getCell(23).value,
                    parteActiva: row.getCell(24).value,
                    partePasiva: row.getCell(25).value,
                    tipoDeTramite: row.getCell(26).value,
                    claseDeProceso: row.getCell(27).value,
                    tipoDeVinculacionCliente: row.getCell(28).value,
                    pretensionesEnDinero: row.getCell(29).value,
                    calificacionInicialContingencia: row.getCell(30).value,
                    calificacionActualContingencia: row.getCell(31).value,
                    motivoDeLaCalificacion: row.getCell(32).value,
                    fechaAdmisionVinculacion: row.getCell(33).value,
                    fechaDeNotificacion: row.getCell(34).value,
                    instancia: row.getCell(35).value,
                    etapaProcesal: row.getCell(36).value,
                    claseDeMedidaCautelar: row.getCell(37).value,
                    honorariosAsignados: row.getCell(38).value,
                    autoridadDeConocimiento: row.getCell(39).value,
                    delito: row.getCell(40).value,
                    placa: row.getCell(41).value,
                    evento: row.getCell(42).value,
                    probabilidadDeExito: row.getCell(43).value,
                    valorIndemnizadoCliente: row.getCell(44).value,
                    entidadAfectada: row.getCell(45).value,
                    fechaDePagoCliente: row.getCell(46).value,
                    tipoContragarantia: row.getCell(47).value,
                    montoDeProvision: row.getCell(48).value,
                    tipoDeMoneda: row.getCell(49).value,
                    fechaDeTerminacion: row.getCell(50).value,
                    motivoDeTerminacion: row.getCell(51).value,
                    cliente2: row.getCell(52).value,
                    fechaDeAsignacion2: row.getCell(53).value,
                    abogadoInternoDeLaCompania2: row.getCell(54).value,
                    siniestro2: row.getCell(55).value,
                    numeroDeAplicativo2: row.getCell(56).value,
                    fechaDeNotificacion2: row.getCell(57).value,
                    seInicioEjecutivoAContinuacionDeOrdinario: row.getCell(58).value,
                    honorariosAsignados2: row.getCell(59).value,
                    valorPagado: row.getCell(60).value,
                    personaQueRealizoElPago: row.getCell(61).value,
                    fechaDeRadicacionDeLaContestacion: row.getCell(62).value,
                    fechaDeRadicacionDeLaContestacion2: row.getCell(63).value,
                    departamento: row.getCell(64).value,
                    asegurado: row.getCell(65).value,
                    jurisdiccion: row.getCell(66).value,
                    materia: row.getCell(67).value,
                    detalleDeMateria: row.getCell(68).value,
                    estado: row.getCell(69).value,
                    estadoInterno: row.getCell(70).value,
                    juzgado: row.getCell(71).value,
                    moneda: row.getCell(72).value,
                    cuantia: row.getCell(73).value,
                    contingenciaReal: row.getCell(74).value,
                    provision: row.getCell(75).value,
                    condenaArreglo: row.getCell(76).value,
                    totalComisiones: row.getCell(77).value,
                    totalRecaudacion: row.getCell(78).value,
                    totalGastos: row.getCell(79).value,
                    fechaInicio: row.getCell(80).value,
                    fechaTermino: row.getCell(81).value,
                    flujoDeTrabajo: row.getCell(82).value,
                    etapaDeFlujo: row.getCell(83).value,
                    primeraParteActiva: row.getCell(84).value,
                    primeraPartePasiva: row.getCell(85).value,
                    usuariosInvolucrados: row.getCell(86).value,
                    ultimaTareaFinalizada: row.getCell(87).value,
                    fechaUltimaActuacion: row.getCell(88).value,
                    tituloUltimaActuacion: row.getCell(89).value,
                    fechaUltimoCambioDeEstado: row.getCell(90).value,
                    usuarioCreador: row.getCell(91).value,
                    notificado: row.getCell(92).value,
                    cartera: row.getCell(93).value,
                    numeroCredencial: row.getCell(94).value,
                    usuarioCredencial: row.getCell(95).value,
                    rutCredencial: row.getCell(96).value
                };

                rows.push(rowData);
            });

            console.log(rows);
        };

        reader.readAsArrayBuffer(file);
    };
    return (
        <>
            <div>
                <Navigation />
                <div>
                    <input type="file" accept=".xlsx" onChange={handleFileChange} />
                    <button onClick={handleImport}>Importar</button>
                </div>
            </div>
        </>
    )
} 