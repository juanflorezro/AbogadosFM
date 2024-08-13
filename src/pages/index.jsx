import Navigation from '../navigation'
import './index.css'
import { useState, useEffect } from 'react'
import Axios from '../hooks/useAxios'
import CaseForm from '../components/caseForm'
import AOS from 'aos'
import { useNavigate } from 'react-router-dom'
import exportToExcel from '../hooks/useDescargarExcel'
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
                console.log(res.data)
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
                if (err.response.data.message == 'Acceso Denegado') {
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




    const exportToExcelas = (casos) => {
        exportToExcel(casos)
    }
    
    return (
        <>
            <div>
                <Navigation />
                {isFormOpen ? (
                    <CaseForm caseData={caso} cerrar={closeForm} user = {user}/>
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
                            <button onClick={() => exportToExcelas(casos)} className="excel-button">Descargar Excel</button>
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
                                                        <div className='conten-btn'>
                                                        <button className='btn-g' onClick={() => openForm(caso)}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                        </svg></button>
                                                        <button className='btn-g'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                            <path d="M7 11l5 5l5 -5" />
                                                            <path d="M12 4l0 12" />
                                                        </svg></button>
                                                        </div>
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
