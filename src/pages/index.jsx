import Navigation from '../navigation'
import './index.css'
import { useState, useEffect } from 'react'
import Axios from '../hooks/useAxios'
import CaseForm from '../components/caseForm'
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver';
import AOS from 'aos'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const [user, setUser] = useState('')
    const [casos, setCasos] = useState([])
    const [filtrar, setFiltrar] = useState(false)
    const [proceso, setProceso] = useState('')
    const [cliente, setCliente] = useState('')
    const [area, setArea] = useState('')
    const [centroTrabajo, setCentroTrabajo] = useState('')
    const [abogado, setAbogado] = useState('')
    const [claseDeProceso, setClaseDeProceso] = useState('')
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechaFin, setFechaFin] = useState('')
    const [clientes, setClientes] = useState('')
    const [areas, setAreas] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [caso, setCaso] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const casesPerPage = 5
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init();
        Axios('POST', 'login/validacion', null)
            .then((res) => {
                setUser(res.data.user.usuario)
            })
            .catch(err => {
                console.log(err.response.data)
            })
        Axios('GET', 'casos/', null)
            .then((res) => {
                setCasos(res.data)
                setAreas(res.data)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err)
            })
        Axios('GET', 'clientes/', null)
            .then((res) => {
                setClientes(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        Axios('GET', 'usuarios/', null)
            .then((res) => {
                setUsuarios(res.data)
            })
            .catch((err) => {
                console.log(err, 'usuarios Faild')
            })

    }, [])

    const indexOfLastCase = currentPage * casesPerPage
    const indexOfFirstCase = indexOfLastCase - casesPerPage
    const currentCases = casos.slice(indexOfFirstCase, indexOfLastCase)

    const totalPages = Math.ceil(casos.length / casesPerPage)

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleCheckboxChange = (e) => {
        setFiltrar(e.target.checked)
    }
    const handleSearch = () => {
        setLoader(true)
        let data = {}
        if (proceso) data.titulo = proceso

        if (filtrar) {
            if (cliente) data.cliente = cliente;
            if (area) data.area = area;
            if (centroTrabajo) data.centroTrabajo = centroTrabajo;
            if (abogado) data.abogadoACargo = abogado;
            if (claseDeProceso) data.claseDeProceso = claseDeProceso;
            if (fechaInicio) data.fechaInicio = fechaInicio;
            if (fechaFin) data.fechaDeTerminacion = fechaFin;
        }
        console.log(data)
        Axios('POST', 'casos/caso', data)
            .then((res) => {
                setCasos(res.data)
                setLoader(false)
            })
            .catch((err) => {
                console.log('Error al enviar:', err.response.data)
                if(err.response.data.message == 'Acceso Denegado'){
                    navigate('/')
                    Swal.fire({
                        title: "Acceso Restringido (Token Vencido - Invalido), Inicie Sesión",
                        text: err.response.data.message,
                        icon: "warning"
                    })
                }
            })
    }
    const openForm = (casoV) => {
        setCaso(casoV)
        setIsFormOpen(true)
    }
    const closeForm = () => {
        setIsFormOpen(false);
    }

    const exportToExcel = async () => {
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




    return (
        <>
            <div>
                <Navigation />
                {isFormOpen ? (
                    <CaseForm caseData={caso} cerrar={closeForm} />
                ) : (
                    <div className="containerp">

                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Buscar Procesos"
                                className="search-bar"
                                value={proceso}
                                onChange={(e) => setProceso(e.target.value)}
                            />
                            <label>
                                Filtro personalizado
                                <input
                                    type="checkbox"
                                    checked={filtrar}
                                    onChange={handleCheckboxChange}
                                />
                            </label>
                            <button className="search-button" onClick={handleSearch}>Buscar</button>
                            <button onClick={exportToExcel} className="excel-button">Descargar Excel</button>
                        </div>
                        {filtrar && (
                            <div id="custom-filter-container" className="custom-filter-container">
                                <div className="filter-form">
                                    <h2>Filtro personalizado</h2>
                                    <div className="form-row">
                                        <label>Cliente:</label>
                                        <select value={cliente} onChange={(e) => setCliente(e.target.value)}>
                                            <option value="">Seleccione...</option>
                                            {clientes.map(client => (
                                                <option key={client._id} value={client._id}>{client.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <label>Área:</label>
                                        <select value={area} onChange={(e) => setArea(e.target.value)}>
                                            <option value="">Seleccione...</option>
                                            {areas.map(are => (
                                                <option key={are._id} value={are.area}>{are.area}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <label>Centro de trabajo:</label>
                                        <select value={centroTrabajo} onChange={(e) => setCentroTrabajo(e.target.value)}>
                                            <option value="">Seleccione...</option>
                                            {areas.map(are => (
                                                <option key={are._id} value={are.centroDeTrabajo}>{are.centroDeTrabajo}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <label>Abogado a Cargo:</label>
                                        <select value={abogado} onChange={(e) => setAbogado(e.target.value)}>
                                            <option value="">Seleccione...</option>
                                            {usuarios.map(usuario => (
                                                <option key={usuario._id} value={usuario._id}> {usuario.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <label>Clase de Proceso:</label>
                                        <select value={claseDeProceso} onChange={(e) => setClaseDeProceso(e.target.value)}>
                                            <option value="">Seleccione...</option>
                                            {areas.map(are => (
                                                <option key={are._id} value={are.claseDeProceso}>{are.claseDeProceso}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <label>Fecha de Inicio:</label>
                                        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                                    </div>
                                    <div className="form-row">
                                        <label>Fecha de terminacion:</label>
                                        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        )}
                        {loader ? (
                            <div className="loader-container"><div className="loader"></div></div>

                        ) : (
                            <div className="table-wrapper">
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Código</th>
                                                <th>Proceso</th>
                                                <th>Cliente - Asunto</th>
                                                <th>Estado</th>
                                                <th>Juzgado</th>
                                                <th>Opciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentCases.map((caso, index) => (
                                                <tr key={index}>
                                                    <td>{indexOfFirstCase + index + 1}</td>
                                                    <td>{caso.codigo}</td>
                                                    <td>{caso.titulo}</td>
                                                    <td>{caso.cliente.nombre}</td>
                                                    <td>{caso.estado}</td>
                                                    <td>{caso.juzgado.nombre}</td>
                                                    <td>
                                                        <button onClick={() => openForm(caso)}>Ver</button>
                                                        {user === 'admin' && (
                                                            <button>Editar</button>
                                                        )}
                                                        <button>Descargar</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="pagination">
                                    <button
                                        onClick={handlePrevious}
                                        className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        &laquo; Anterior
                                    </button>
                                    <span className="page-item active">
                                        {currentPage}
                                    </span>
                                    <button
                                        onClick={handleNext}
                                        className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        Siguiente &raquo;
                                    </button>
                                </div>
                            </div>
                        )
                        }

                    </div>
                )}

            </div>
        </>
    )
}
