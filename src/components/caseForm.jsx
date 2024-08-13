import { useState } from 'react';
import './CaseForm.css'; // Estilos CSS externos

const CaseForm = ({ caseData, cerrar }) => {
    const [formData, setFormData] = useState(caseData || {});

    

    return (
        <div className='conte'>
            <div className="form-container">
                <button className='cerrar' onClick={() => cerrar()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg>
                </button>
                <h1 className="form-title">INFORMACION DEL CASO</h1>
                <br />
                <br />
                <br />
                <br />
                <form  className="case-form">
                    <div className="form-group">
                        <label htmlFor="numero">NUMERO</label>
                        <label htmlFor="numero">{formData.numero}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="codigo">CODIGO</label>
                        <label htmlFor="codigo">{formData.codigo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="titulo">TITULO</label>
                        <label htmlFor="titulo">{formData.titulo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cliente">CLIENTE</label>
                        <label htmlFor="cliente">{formData.cliente.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="asunto">ASUNTO</label>
                        <label htmlFor="asunto">{formData.asunto}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="creacion">FECHA DE CREACION</label>
                        <label htmlFor="creacion">{formData.creacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ubicacionDelExpediente">UBICACION DEL EXPEDINETE</label>
                        <label htmlFor="ubicacionDelExpediente">{formData.ubicacionDelExpediente}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="codigoInterno">CODIGO INTERNO</label>
                        <label htmlFor="codigoInterno">{formData.codigoInterno}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="area">AREA</label>
                        <label htmlFor="area">{formData.area}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeAsignacion">FECHA DE ASIGNACION</label>
                        <label htmlFor="fechaDeAsignacion">{formData.fechaDeAsignacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="centroDeTrabajo">CENTRO DE TRABAJO</label>
                        <label htmlFor="centroDeTrabajo">{formData.centroDeTrabajo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="directorACargo">DIRECTOR A CARGO</label>
                        <label htmlFor="directorACargo">{formData.directorACargo.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="abogadoACargo">ABOGADO A CARGO</label>
                        <label htmlFor="abogadoACargo">{formData.abogadoACargo.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="abogadoInternoDeLaCompania">ABOGADO INTERNO DE LA COMPAÑIA</label>
                        <label htmlFor="abogadoInternoDeLaCompania">{formData.abogadoInternoDeLaCompania.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="siniestro">SINIESTRO</label>
                        <label htmlFor="siniestro">{formData.siniestro.numero}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaSiniestro">FECHA DE SINIESTRO</label>
                        <label htmlFor="fechaSiniestro">{formData.fechaSiniestro}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="poliza">POLIZA</label>
                        <label htmlFor="poliza">{formData.poliza}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ramo">RAMO</label>
                        <label htmlFor="ramo">{formData.ramo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="amparo">AMPARO</label>
                        <label htmlFor="amparo">{formData.amparo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numeroAplicativo">NUMERO DE APLICATIVO</label>
                        <label htmlFor="numeroAplicativo">{formData.numeroAplicativo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ciudad">CIUDAD</label>
                        <label htmlFor="ciudad">{formData.ciudad}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="juzgadoInt">JUZGADO INT</label>
                        <label htmlFor="juzgadoInt">{formData.juzgadoInt.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="radicado">RADICADO</label>
                        <label htmlFor="radicado">{formData.radicado}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="parteActiva">PARTE ACTIVA</label>
                        <label htmlFor="parteActiva">{formData.parteActiva}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="partePasiva">PARTE PASIVA</label>
                        <label htmlFor="partePasiva">{formData.partePasiva}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipoDeTramite">TIEMPO DE TRAMITE</label>
                        <label htmlFor="tipoDeTramite">{formData.tipoDeTramite}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="claseDeProceso">CLASE DE PROCESO</label>
                        <label htmlFor="claseDeProceso">{formData.claseDeProceso}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipoDeVinculacionCliente">TIPO DE VINCULACION DE CLIENTE</label>
                        <label htmlFor="tipoDeVinculacionCliente">{formData.tipoDeVinculacionCliente}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pretensionesEnDinero">PRETENCIONES EN DINERO</label>
                        <label htmlFor="pretensionesEnDinero">${formData.pretensionesEnDinero}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="calificacionInicialContingencia">CONFIGURACION INICIAL CONTINGENCIA</label>
                        <label htmlFor="calificacionInicialContingencia">{formData.calificacionInicialContingencia}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="calificacionActualContingencia">CALIFICACION ACTUAL DE CONTINGENCIA</label>
                        <label htmlFor="calificacionActualContingencia">{formData.calificacionActualContingencia}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="motivoDeLaCalificacion">MOTIVO DE LA CLASIFICACION</label>
                        <label htmlFor="motivoDeLaCalificacion">{formData.motivoDeLaCalificacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaAdmisionVinculacion">FECHA DE ADMISION DE VINCULACION</label>
                        <label htmlFor="fechaAdmisionVinculacion">{formData.fechaAdmisionVinculacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeNotificacion">FECHA DE NOTIFICACION</label>
                        <label htmlFor="fechaDeNotificacion">{formData.fechaDeNotificacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="instancia">INSTANCIA</label>
                        <label htmlFor="instancia">{formData.instancia}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="etapaProcesal">ETAPA PROCESAL</label>
                        <label htmlFor="etapaProcesal">{formData.etapaProcesal}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="claseDeMedidaCautelar">CLASE DE MEDIDA CAUTELAR</label>
                        <label htmlFor="claseDeMedidaCautelar">{formData.claseDeMedidaCautelar}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="honorariosAsignados">HONORARIOS ASIGNADOS</label>
                        <label htmlFor="honorariosAsignados">${formData.honorariosAsignados}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="autoridadDeConocimiento">AUTORIDAD DE CONOCIMIENTO</label>
                        <label htmlFor="autoridadDeConocimiento">{formData.autoridadDeConocimiento}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="delito">DELITO</label>
                        <label htmlFor="delito">{formData.delito}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="placa">PLACA</label>
                        <label htmlFor="placa">{formData.placa}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="evento">EVENTO</label>
                        <label htmlFor="evento">{formData.evento}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="probabilidadDeExito">PROBABILIDAD DE EXITO</label>
                        <label htmlFor="probabilidadDeExito">{formData.probabilidadDeExito}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="valorIndemnizadoCliente">VALOR INDEMNISADO DE CLIENTE</label>
                        <label htmlFor="valorIndemnizadoCliente">{formData.valorIndemnizadoCliente}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="entidadAfectada">ENTIDAD AFECTADA</label>
                        <label htmlFor="entidadAfectada">{formData.entidadAfectada}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDePagoCliente">FECHA DE PAGO CLIENTE</label>
                        <label htmlFor="fechaDePagoCliente">{formData.fechaDePagoCliente}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipoContragarantia">TIPO DE CONTRA GARANTIA</label>
                        <label htmlFor="tipoContragarantia">{formData.tipoContragarantia}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="montoDeProvision">MONTO DE PROVISION</label>
                        <label htmlFor="montoDeProvision">${formData.montoDeProvision}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipoDeMoneda">TIPO DE MONEDA</label>
                        <label htmlFor="tipoDeMoneda">{formData.tipoDeMoneda}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeTerminacion">FECHA DE TERMINACION</label>
                        <label htmlFor="fechaDeTerminacion">{formData.fechaDeTerminacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="motivoDeTerminacion">MOTIVO DE TERMINACION</label>
                        <label htmlFor="motivoDeTerminacion">{formData.motivoDeTerminacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cliente2">CLIENTE 2</label>
                        <label htmlFor="cliente2">{formData.cliente2.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeAsignacion2">FECHA DE ASIGNACION</label>
                        <label htmlFor="fechaDeAsignacion2">{formData.fechaDeAsignacion2}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="abogadoInternoDeLaCompania2">ABOGADO INTERNO DE LA COMPAÑIA 2</label>
                        <label htmlFor="abogadoInternoDeLaCompania2">{formData.abogadoInternoDeLaCompania2.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="siniestro2">SINIENTRO 2</label>
                        <label htmlFor="siniestro2">{formData.siniestro2.numero}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numeroDeAplicativo2">A</label>
                        <label htmlFor="numeroDeAplicativo2">{formData.numeroDeAplicativo2}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeNotificacion2">Notification Date 2</label>
                        <label htmlFor="fechaDeNotificacion2">{formData.fechaDeNotificacion2}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="seInicioEjecutivoAContinuacionDeOrdinario">SE INICIO EJECUTIVO A CONTINIACION DE ORDINARIO</label>
                        <label htmlFor="seInicioEjecutivoAContinuacionDeOrdinario">{formData.seInicioEjecutivoAContinuacionDeOrdinario ? 'Yes' : 'No'}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="honorariosAsignados2">HONORARIOS ASIGNADOS 2</label>
                        <label htmlFor="honorariosAsignados2">${formData.honorariosAsignados2}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="valorPagado">VALOR DE PAGO</label>
                        <label htmlFor="valorPagado">{formData.valorPagado}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personaQueRealizoElPago">PERSONA QUE REALIZO EL PAGO</label>
                        <label htmlFor="personaQueRealizoElPago">{formData.personaQueRealizoElPago}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeRadicacionDeLaContestacion">FECHA DE RADICACION DE LAS CONTESTACION</label>
                        <label htmlFor="fechaDeRadicacionDeLaContestacion">{formData.fechaDeRadicacionDeLaContestacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaDeRadicacionDeLaContestacion2">FECHA DE RADICACION DE LA CONTESTACION 2</label>
                        <label htmlFor="fechaDeRadicacionDeLaContestacion2">{formData.fechaDeRadicacionDeLaContestacion2}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="departamento">DEPARTAMENTO</label>
                        <label htmlFor="departamento">{formData.departamento}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="asegurado">ASEGURADO</label>
                        <label htmlFor="asegurado">{formData.asegurado}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="jurisdiccion">JURISDICCION</label>
                        <label htmlFor="jurisdiccion">{formData.jurisdiccion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="materia">MATERIA</label>
                        <label htmlFor="materia">{formData.materia}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="detalleDeMateria">DETALLE DE MATERIA</label>
                        <label htmlFor="detalleDeMateria">{formData.detalleDeMateria}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="estado">ESTADO</label>
                        <label htmlFor="estado">{formData.estado}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="estadoInterno">ESTADO INTERNO</label>
                        <label htmlFor="estadoInterno">{formData.estadoInterno}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="juzgado">JUZGADO</label>
                        <label htmlFor="juzgado">{formData.juzgado.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="moneda">MONEDA</label>
                        <label htmlFor="moneda">{formData.moneda}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cuantia">CUANTIA</label>
                        <label htmlFor="cuantia">${formData.cuantia}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contingenciaReal">CONTINGENCIA REAL</label>
                        <label htmlFor="contingenciaReal">${formData.contingenciaReal}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="provision">PROVISION</label>
                        <label htmlFor="provision">{formData.provision}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="condenaArreglo">CONDENA ARREGLO</label>
                        <label htmlFor="condenaArreglo">{formData.condenaArreglo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="totalComisiones">TOTAL DE COMISIONES</label>
                        <label htmlFor="totalComisiones">${formData.totalComisiones}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="totalRecaudacion">TOTAL DE RECAUDO</label>
                        <label htmlFor="totalRecaudacion">{formData.totalRecaudacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="totalGastos">TOTAL DE GASTOS</label>
                        <label htmlFor="totalGastos">${formData.totalGastos}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaInicio">FECHA DE INICIO</label>
                        <label htmlFor="fechaInicio">{formData.fechaInicio}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaTermino">FECHA DE TERMINO</label>
                        <label htmlFor="fechaTermino">{formData.fechaTermino}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="flujoDeTrabajo">FLUJO DE TRABAJO</label>
                        <label htmlFor="flujoDeTrabajo">{formData.flujoDeTrabajo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="etapaDeFlujo">ESTAPA DE FLUJO</label>
                        <label htmlFor="etapaDeFlujo">{formData.etapaDeFlujo}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="primeraParteActiva">PRIMERA PARTE ACTIVA </label>
                        <label htmlFor="primeraParteActiva">{formData.primeraParteActiva}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="primeraPartePasiva">PRIMERA PARTE PASIVA</label>
                        <label htmlFor="primeraPartePasiva">{formData.primeraPartePasiva}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="usuariosInvolucrados">USUARIOS INVOLUCRADOS</label>
                        <label className='usuariosin' htmlFor="usuariosInvolucrados">{formData.usuariosInvolucrados}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ultimaTareaFinalizada">ULTIMA TAERA FINALIZADA</label>
                        <label htmlFor="ultimaTareaFinalizada">{formData.ultimaTareaFinalizada}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaUltimaActuacion">FECHA ULTIMA ACTUACION</label>
                        <label htmlFor="fechaUltimaActuacion">{formData.fechaUltimaActuacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tituloUltimaActuacion">TITULO ULTIMA ACTUACION</label>
                        <label htmlFor="tituloUltimaActuacion">{formData.tituloUltimaActuacion}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaUltimoCambioDeEstado">FECHA ULTIMO CAMBIO DE ESTADO</label>
                        <label htmlFor="fechaUltimoCambioDeEstado">{formData.fechaUltimoCambioDeEstado}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="usuarioCreador">CREADOR</label>
                        <label htmlFor="usuarioCreador">{formData.usuarioCreador.nombre}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="notificado">NOTIFICADO</label>
                        <label htmlFor="notificado">{formData.notificado}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cartera">CARTERA </label>
                        <label htmlFor="cartera">{formData.cartera}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numeroCredencial">NUMERO DE CREDENCIAL</label>
                        <label htmlFor="numeroCredencial">{formData.numeroCredencial}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="usuarioCredencial">USUARIO CREDENCIAL</label>
                        <label htmlFor="usuarioCredencial">{formData.usuarioCredencial}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="rutCredencial">RUT CREDENCIAL</label>
                        <label htmlFor="rutCredencial">{formData.rutCredencial}</label>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default CaseForm;
