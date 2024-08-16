import { useState } from 'react';
import './caseForm.css'; // Estilos CSS externos

const CaseForm = ({ caseData, cerrar, user }) => {
    const [formData, setFormData] = useState(caseData || {});
    const [userd, setUserd] = useState(user);
    console.log(user);

    // Función para obtener el valor del campo o un mensaje predeterminado
    const getFieldValue = (field) => {
        return formData[field] ? formData[field] : 'No disponible';
    };

    // Función para manejar la validación de campos anidados
    const getNestedFieldValue = (field, nestedField) => {
        return formData[field] && formData[field][nestedField] ? formData[field][nestedField] : 'No disponible';
    };

    return (
        <div className='conte'>
            <div className="form-container">
                <div>
                    <button className='cerrar' onClick={() => cerrar()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l6 6" />
                            <path d="M5 12l6 -6" />
                        </svg>
                    </button>
                    {userd === 'admin' && (
                        <>
                            <button className='cerrar'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 7l16 0" />
                                    <path d="M10 11l0 6" />
                                    <path d="M14 11l0 6" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </button>
                            <button className='cerrar'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                    <path d="M16 5l3 3" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                <h1 className="form-title">INFORMACION DEL CASO</h1>
                <br />
                <br />
                <br />
                <br />
                <form className="case-form">
                    <div className="form-group">
                        <label htmlFor="numero">NUMERO</label>
                        <label htmlFor="numero">{getFieldValue('numero')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="codigo">CODIGO</label>
                        <label htmlFor="codigo">{getFieldValue('codigo')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="titulo">TITULO</label>
                        <label htmlFor="titulo">{getFieldValue('titulo')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cliente">CLIENTE</label>
                        <label htmlFor="cliente">{getNestedFieldValue('cliente', 'nombre')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="asunto">ASUNTO</label>
                        <label htmlFor="asunto">{getFieldValue('asunto')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="area">AREA</label>
                        <label htmlFor="area">{getFieldValue('area')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeAsignacion">FECHA DE ASIGNACION</label>
                        <label htmlFor="fechaDeAsignacion">{getFieldValue('fechaDeAsignacion')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="centroDeTrabajo">CENTRO DE TRABAJO</label>
                        <label htmlFor="centroDeTrabajo">{getFieldValue('centroDeTrabajo')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="directorACargo">DIRECTOR A CARGO</label>
                        <label htmlFor="directorACargo">{getNestedFieldValue('directorACargo', 'nombre')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="abogadoACargo">ABOGADO A CARGO</label>
                        <label htmlFor="abogadoACargo">{getNestedFieldValue('abogadoACargo', 'nombre')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="abogadoInternoDeLaCompania">ABOGADO INTERNO DE LA COMPAÑIA</label>
                        <label htmlFor="abogadoInternoDeLaCompania">{getNestedFieldValue('abogadoInternoDeLaCompania', 'nombre')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="siniestro">SINIESTRO</label>
                        <label htmlFor="siniestro">{getNestedFieldValue('siniestro', 'numero')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaSiniestro">FECHA DE SINIESTRO</label>
                        <label htmlFor="fechaSiniestro">{getFieldValue('fechaSiniestro')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="poliza">POLIZA</label>
                        <label htmlFor="poliza">{getFieldValue('poliza')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ramo">RAMO</label>
                        <label htmlFor="ramo">{getFieldValue('ramo')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="amparo">AMPARO</label>
                        <label htmlFor="amparo">{getFieldValue('amparo')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numeroAplicativo">NUMERO DE APLICATIVO</label>
                        <label htmlFor="numeroAplicativo">{getFieldValue('numeroAplicativo')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ciudad">CIUDAD</label>
                        <label htmlFor="ciudad">{getFieldValue('ciudad')}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="juzgadoInt">JUZGADO INT</label>
                        <label htmlFor="juzgadoInt">{getNestedFieldValue('juzgadoInt', 'nombre')}</label>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CaseForm;
