import { saveAs } from 'file-saver'
import ExcelJS from 'exceljs'

const exportToExcel = async (casos) => {
    // Crea un nuevo libro de trabajo y una nueva hoja
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Casos');

    // Define los encabezados de columna
    const headers = [
        'numero', 'codigo', 'titulo', 'cliente', 'asunto', 'creacion', 'ubicacionDelExpediente',
        'codigoInterno', 'area', 'fechaDeAsignacion', 'centroDeTrabajo', 'directorACargo',
        'abogadoACargo', 'abogadoInternoDeLaCompania', 'siniestro', 'fechaSiniestro', 'poliza',
        'ramo', 'amparo', 'numeroAplicativo', 'ciudad', 'juzgadoInt', 'radicado', 'parteActiva',
        'partePasiva', 'tipoDeTramite', 'claseDeProceso', 'tipoDeVinculacionCliente',
        'pretensionesEnDinero', 'calificacionInicialContingencia', 'calificacionActualContingencia',
        'motivoDeLaCalificacion', 'fechaAdmisionVinculacion', 'fechaDeNotificacion', 'instancia',
        'etapaProcesal', 'claseDeMedidaCautelar', 'honorariosAsignados', 'autoridadDeConocimiento',
        'delito', 'placa', 'evento', 'probabilidadDeExito', 'valorIndemnizadoCliente',
        'entidadAfectada', 'fechaDePagoCliente', 'tipoContragarantia', 'montoDeProvision',
        'tipoDeMoneda', 'fechaDeTerminacion', 'motivoDeTerminacion', 'cliente2',
        'fechaDeAsignacion2', 'abogadoInternoDeLaCompania2', 'siniestro2', 'numeroDeAplicativo2',
        'fechaDeNotificacion2', 'seInicioEjecutivoAContinuacionDeOrdinario', 'honorariosAsignados2',
        'valorPagado', 'personaQueRealizoElPago', 'fechaDeRadicacionDeLaContestacion',
        'fechaDeRadicacionDeLaContestacion2', 'departamento', 'asegurado', 'jurisdiccion',
        'materia', 'detalleDeMateria', 'estado', 'estadoInterno', 'juzgado', 'moneda', 'cuantia',
        'contingenciaReal', 'provision', 'condenaArreglo', 'totalComisiones', 'totalRecaudacion',
        'totalGastos', 'fechaInicio', 'fechaTermino', 'flujoDeTrabajo', 'etapaDeFlujo',
        'primeraParteActiva', 'primeraPartePasiva', 'usuariosInvolucrados', 'ultimaTareaFinalizada',
        'fechaUltimaActuacion', 'tituloUltimaActuacion', 'fechaUltimoCambioDeEstado', 'usuarioCreador',
        'notificado', 'cartera', 'numeroCredencial', 'usuarioCredencial', 'rutCredencial'
    ];

    // Agrega encabezados
    worksheet.addRow(headers);

    // Estilo para los encabezados
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, size: 12 };
    headerRow.alignment = { horizontal: 'center' };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFF00' } // Color de fondo amarillo para los encabezados
    };

    // Estilo para todas las celdas
    worksheet.columns.forEach(column => {
        column.eachCell({ includeEmpty: true }, (cell) => {
            cell.alignment = { horizontal: 'center', vertical: 'middle' }; // Centrar el texto en las celdas
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            }; // Aplicar borde delgado
        });
    });

    // Rellenar datos
    casos.forEach(caso => {
        worksheet.addRow([
            caso.numero, caso.codigo, caso.titulo, caso.cliente?.nombre, caso.asunto,
            caso.creacion, caso.ubicacionDelExpediente, caso.codigoInterno, caso.area,
            caso.fechaDeAsignacion, caso.centroDeTrabajo, caso.directorACargo?.nombre,
            caso.abogadoACargo?.nombre, caso.abogadoInternoDeLaCompania?.nombre,
            caso.siniestro?.numero, caso.fechaSiniestro, caso.poliza, caso.ramo,
            caso.amparo, caso.numeroAplicativo, caso.ciudad, caso.juzgadoInt?.nombre,
            caso.radicado, caso.parteActiva, caso.partePasiva, caso.tipoDeTramite,
            caso.claseDeProceso, caso.tipoDeVinculacionCliente, caso.pretensionesEnDinero,
            caso.calificacionInicialContingencia, caso.calificacionActualContingencia,
            caso.motivoDeLaCalificacion, caso.fechaAdmisionVinculacion, caso.fechaDeNotificacion,
            caso.instancia, caso.etapaProcesal, caso.claseDeMedidaCautelar, caso.honorariosAsignados,
            caso.autoridadDeConocimiento, caso.delito, caso.placa, caso.evento,
            caso.probabilidadDeExito, caso.valorIndemnizadoCliente, caso.entidadAfectada,
            caso.fechaDePagoCliente, caso.tipoContragarantia, caso.montoDeProvision,
            caso.tipoDeMoneda, caso.fechaDeTerminacion, caso.motivoDeTerminacion, caso.cliente2,
            caso.fechaDeAsignacion2, caso.abogadoInternoDeLaCompania2, caso.siniestro2,
            caso.numeroDeAplicativo2, caso.fechaDeNotificacion2,
            caso.seInicioEjecutivoAContinuacionDeOrdinario, caso.honorariosAsignados2,
            caso.valorPagado, caso.personaQueRealizoElPago, caso.fechaDeRadicacionDeLaContestacion,
            caso.fechaDeRadicacionDeLaContestacion2, caso.departamento, caso.asegurado,
            caso.jurisdiccion, caso.materia, caso.detalleDeMateria, caso.estado,
            caso.estadoInterno, caso.juzgado?.nombre, caso.moneda, caso.cuantia,
            caso.contingenciaReal, caso.provision, caso.condenaArreglo, caso.totalComisiones,
            caso.totalRecaudacion, caso.totalGastos, caso.fechaInicio, caso.fechaTermino,
            caso.flujoDeTrabajo, caso.etapaDeFlujo, caso.primeraParteActiva,
            caso.primeraPartePasiva, caso.usuariosInvolucrados, caso.ultimaTareaFinalizada,
            caso.fechaUltimaActuacion, caso.tituloUltimaActuacion,
            caso.fechaUltimoCambioDeEstado, caso.usuarioCreador, caso.notificado,
            caso.cartera, caso.numeroCredencial, caso.usuarioCredencial, caso.rutCredencial
        ]);
    });

    // Ajusta el tamaño de las columnas para adaptarse al contenido
    worksheet.columns.forEach(column => {
        const maxLength = column.values.reduce((max, value) => Math.max(max, value ? value.toString().length : 0), 0);
        column.width = maxLength < 10 ? 10 : maxLength + 10;
    });

    // Genera un buffer del archivo
    const buffer = await workbook.xlsx.writeBuffer();

    // Guarda el archivo
    saveAs(new Blob([buffer]), 'casos.xlsx');
};



export default exportToExcel