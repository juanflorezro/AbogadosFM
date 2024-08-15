import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Axios from '../hooks/useAxios'
import Swal from "sweetalert2"

const ProtectedRoute = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        tokenA()
      },[])
    const tokenA = () => {
        Axios('POST', 'login/validacion', null)
            .then((res) => {
                navigate('/home')
                console.log(res)
            })
            .catch(err => {
                navigate('/')
                Swal.fire({
                    title: "Acceso Restringido (Token Vencido - Invalido), Inicie Sesión",
                    text: err.response.data.message,
                    icon: "warning"
                })
            })
    }
    return <Outlet />
}


export default ProtectedRoute